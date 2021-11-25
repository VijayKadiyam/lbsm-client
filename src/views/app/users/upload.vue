<template>
  <div class="main-content">
    <breadcumb :page="'Upload User'" :folder="'User'" />
    <!-- Controller card -->
    <b-row class="justify-content-md-center">
      <b-col md="12">
        <b-card class="mb-4">
          <b-row>
            <b-col md="12">
              <a
                :href="`${mediaUrl}samples/user-sample-data.xlsx`"
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
                v-if="crudeUsers.length == 0"
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
            :rows="crudeUsers"
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
    title: "Upload User Excel",
  },
  data() {
    return {
      form: {
        promotion_date: "",
      },
      crudeUsers: [],
      columns: [
        {
          label: "Nationality",
          field: "nationality",
        },
        {
          label: "Rank",
          field: "rank",
        },
        {
          label: "First Name",
          field: "first_name",
        },
        {
          label: "Middle Name",
          field: "middle_name",
        },
        {
          label: "Last Name",
          field: "last_name",
        },
        {
          label: "DANAOS ID",
          field: "danaos_id",
        },
        {
          label: "B-Date",
          field: "dob",
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
      let crudeUsers = await axios.get(`/crude_users`);
      this.crudeUsers = crudeUsers.data.data;
      this.count = crudeUsers.data.count;
      this.serialNoStarting = (page - 1) * this.rowsPerPage;
      this.isLoading = false;
      this.searchingStatus = "";
    },
    async handleFileUpload() {
      this.isLoading = true;
      this.users = this.$refs.file.files[0];
      let formData = new FormData();
      formData.append("usersData", this.users);
      this.changeValue = 100;

      await axios
        .post("upload_user", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => {
          if (response.data.data) this.crudeUsers = response.data.data;
          this.isLoading = false;

          alert("Uploaded Successfully");
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
          `process_user?is_existing_batch=${
            this.form.is_existing_batch ? 1 : 0
          }`
        );
        alert("Processed Successfully");
        await axios.get("truncate_users");
        this.crudeUsers = [];
        this.isLoading = false;
      } catch (e) {
        console.log(e);
      }
    },
    async truncatePendingDocuments() {
      await axios.get("truncate_users");
      alert("Truncated Successfully");
      this.crudeUsers = [];
    },
    //   validate form
    async submit() {
      console.log("submit!");
      this.form.user_id = this.selectedUser[0].id;
      this.form.program_id = this.selectedProgram[0].id;
      this.form.program_post_id = this.selectedProgramPost[0].id;
      // this.form.program_post_id = 1;

      this.$v.$touch();
      if (this.$v.$invalid) {
        this.submitStatus = "ERROR";
      } else {
        // do your submit logic here
        try {
          this.isLoading = true;
          this.submitStatus = "PENDING";
          // console.log(this.form);
          await axios.post("/user_program_posts", this.form);
          this.isLoading = false;
          this.submitStatus = "OK";

          // setTimeout(() => {
          this.$router.push("/app/user-program-posts/");
          // }, 1000);
        } catch (e) {
          this.isLoading = false;
        }
      }
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
