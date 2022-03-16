<template>
  <div class="main-content">
    <breadcumb :page="'Upload Videotel Tasks'" :folder="'Videotel Tasks'" />
    <!-- Controller card -->
    <b-row class="justify-content-md-center">
      <b-col md="12">
        <b-card class="mb-4">
          <b-row>
            <b-col md="12">
              <a
                :href="`${mediaUrl}samples/VideotelTask-sample-data.xlsx`"
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
                v-if="crudeVideotelTasks.length == 0"
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
            :rows="crudeVideotelTasks"
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
    title: "Upload Videotel Tasks Excel",
  },
  data() {
    return {
      form: {},
      crudeVideotelTasks: [],
      isLoading: false,
      columns: [
        {
          label: "Location",
          field: "location",
        },
        {
          label: "First Name",
          field: "first_name",
        },
        {
          label: "Last Name",
          field: "last_name",
        },
        {
          label: "Crew ID",
          field: "crew_id",
        },
        {
          label: "Rank",
          field: "rank",
        },
        {
          label: "Training Title",
          field: "training_title",
        },
        {
          label: "Module",
          field: "module",
        },
        {
          label: "Type",
          field: "type",
        },
        {
          label: "Date",
          field: "date",
        },
        {
          label: "Duration",
          field: "duration",
        },
        {
          label: "Score",
          field: "score",
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
      let crudeVideotelTasks = await axios.get(`/crude_videotel_tasks`);
      this.crudeVideotelTasks = crudeVideotelTasks.data.data;
      this.count = crudeVideotelTasks.data.count;
      this.serialNoStarting = (page - 1) * this.rowsPerPage;
      this.isLoading = false;
      this.searchingStatus = "";
    },
    async handleFileUpload() {
      this.isLoading = true;
      this.VideotelTasks = this.$refs.file.files[0];
      let formData = new FormData();
      formData.append("videoteltasksData", this.VideotelTasks);
      this.changeValue = 100;

      await axios
        .post("upload_videotel_task", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => {
          if (response.data.data) this.crudeVideotelTasks = response.data.data;
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
          `process_videotel_task?is_existing_batch=${
            this.form.is_existing_batch ? 1 : 0
          }`
        );
        this.$swal("Done", "Processed Successfully.", "success");
        // alert("Processed Successfully");
        await axios.get("truncate_videotel_tasks");
        this.crudeVideotelTasks = [];
        this.isLoading = false;
      } catch (e) {
        console.log(e);
      }
    },
    async truncatePendingDocuments() {
      await axios.get("truncate_videotel_tasks");
      this.$swal("Done", "Truncated Successfully.", "success");
      // alert("Truncated Successfully");
      this.crudeVideotelTasks = [];
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
