<template>
  <div class="main-content">
    <breadcumb :page="'Upload KARCO Tasks'" :folder="'KARCO Tasks'" />
    <!-- Controller card -->
    <b-row class="justify-content-md-center">
      <b-col md="12">
        <b-card class="mb-4">
          <b-row>
            <b-col md="12">
              <a
                :href="`${mediaUrl}samples/KarcoTask-sample-data.xlsx`"
                target="_blank"
              >
                [ Download Sample Excel ]
              </a>
              <br />
              <input
                type="file"
                id="file"
                name="file"
                ref="file"
                accept="application/ms-excel"
                class="mb-2"
              />
              <br />
              <b-button
                variant="primary"
                class="btn d-none d-sm-block"
                @click="truncatePendingDocuments"
                ><i class="i-Delete-File text-white mr-2"> </i>Truncate List
              </b-button>
            </b-col>
          </b-row>
          <b-row>
            <b-col md="12">
              <br /><br />
              <span style="color: red"> {{ message }} </span>
              <b-progress
                v-if="isLoading"
                :value="changeValue"
                :max="max"
                animated
                class="mb-2"
              ></b-progress>

              <b-button
                v-if="crudeKarcoTasks.length == 0"
                block
                variant="primary"
                @click="handleFileUpload"
                >Upload file</b-button
              >
              <b-button v-else block variant="primary" @click="processFile"
                >Process file</b-button
              >
            </b-col>
          </b-row>
        </b-card>
      </b-col>
    </b-row>
    <!-- /Controller card -->
    <b-row class="justify-content-md-center">
      <b-col md="12">
        <b-card>
          <vue-good-table
            :columns="columns"
            :line-numbers="true"
            :search-options="{
              enabled: true,
              placeholder: 'Search this table',
            }"
            :pagination-options="{
              enabled: true,
              mode: 'records',
            }"
            styleClass="tableOne vgt-table"
            :rows="crudeKarcoTasks"
          >
          </vue-good-table>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import axios from "axios";
export default {
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: "Upload Karco Tasks Excel",
  },
  data() {
    return {
      form: {},
      crudeKarcoTasks: [],
      isLoading: false,
      columns: [
        {
          label: "Vessel Name",
          field: "vessel_name",
        },
        {
          label: "Crew Name",
          field: "crew_name",
        },
        {
          label: "Employee ID",
          field: "employee_id",
        },
        {
          label: "Rank",
          field: "rank",
        },
        {
          label: "Deparrtment",
          field: "department",
        },
        {
          label: "Status",
          field: "status",
        },
        {
          label: "Signed On",
          field: "signed_on",
        },
        {
          label: "Nationality",
          field: "nationality",
        },
        {
          label: "Video Title",
          field: "video_title",
        },
        {
          label: "No. Of Preview Watched",
          field: "no_of_video_watched",
        },
        {
          label: "Obtained Marks",
          field: "obtained_marks",
        },
        {
          label: "Total Marks",
          field: "total_marks",
        },
        {
          label: "Percentage",
          field: "percentage",
        },
        {
          label: "Done On",
          field: "done_on",
        },
        {
          label: "Due Days",
          field: "due_days",
        },
        {
          label: "Assessment Status",
          field: "assessment_status",
        },
      ],
      // Progress Bar
      searchingStatus: "",
      changeValue: 0,
      changeMax: 100,
      submitStatus: null,
    };
  },

  mounted() {
    this.form.site_id = this.site.id;
    this.getData();
  },
  methods: {
    async getData(page = 1) {
      this.isLoading = true;
      this.searchingStatus = "Searching...";
      this.changeValue = 100;
      let crudeKarcoTasks = await axios.get(`/crude_karco_tasks`);
      this.crudeKarcoTasks = crudeKarcoTasks.data.data;
      this.count = crudeKarcoTasks.data.count;
      this.serialNoStarting = (page - 1) * this.rowsPerPage;
      this.isLoading = false;
      this.searchingStatus = "";
    },
    async handleFileUpload() {
      this.isLoading = true;
      this.KarcoTasks = this.$refs.file.files[0];
      let formData = new FormData();
      formData.append("karcotasksData", this.KarcoTasks);
      this.changeValue = 100;

      await axios
        .post("upload_karco_task", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => {
          if (response.data.data) this.crudeKarcoTasks = response.data.data;
          this.isLoading = false;
          this.$swal("Done", "Uploaded Successfully.", "success");
          // alert("Uploaded Successfully");
        })
        .catch(function() {
          console.log("FAILURE!!");
        });
      this.isLoading = false;
    },
    async processFile() {
      try {
        this.isLoading = true;
        this.changeValue = 100;

        await axios.get(
          `process_karco_task?is_existing_batch=${
            this.form.is_existing_batch ? 1 : 0
          }`
        );
        this.$swal("Done", "Processed Successfully.", "success");

        // alert("Processed Successfully");
        await axios.get("truncate_karco_tasks");
        this.crudeKarcoTasks = [];
        this.isLoading = false;
      } catch (e) {
        console.log(e);
      }
    },
    async truncatePendingDocuments() {
      await axios.get("truncate_karco_tasks");
        this.$swal("Done", "Truncated Successfully.", "success");

      // alert("Truncated Successfully");
      this.crudeKarcoTasks = [];
    },
    makeToast(variant = null) {
      this.$bvToast.toast("Please fill the form correctly.", {
        title: `Variant ${variant || "default"}`,
        variant: variant,
        solid: true,
      });
    },
    makeToastTwo(variant = null) {
      this.$bvToast.toast("Successfully Submitted", {
        title: `Variant ${variant || "default"}`,
        variant: variant,
        solid: true,
      });
    },

    inputSubmit() {
      console.log("submitted");
    },
  },
};
</script>
<style>
.spinner.sm {
  height: 2em;
  width: 2em;
}
</style>
