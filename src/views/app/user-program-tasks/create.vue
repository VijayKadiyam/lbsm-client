<template>
  <div class="main-content">
    <breadcumb
      :page="'Create User Program Task'"
      :folder="'User Program Tasks'"
    />

    <b-row class="justify-content-md-center">
      <b-col md="9">
        <b-card title="User Program Task Create">
          <b-row>
            <b-col md="12">
              <b-button
                style="float: right; margin-top: -45px"
                @click="$router.back()"
                variant="primary"
                ><i class="i-Arrow-Back-3"></i> Back</b-button
              >
            </b-col>
          </b-row>
          <b-form @submit.prevent="submit">
            <b-form-group label="Ship">
              <vue-tags-input
                v-model="searchShip"
                :tags="selectedShip"
                class="tag-custom text-15 mb-2"
                :autocomplete-items="filteredShipItems"
                :add-only-from-autocomplete="true"
                @tags-changed="(newTags) => (selectedShip = newTags)"
                placeholder="Type Ship Name"
              />
            </b-form-group>
            <b-form-group label="Program Task">
              <vue-tags-input
                v-model="searchProgramTask"
                :tags="selectedProgramTask"
                class="tag-custom text-15 mb-2"
                :autocomplete-items="filteredProgramTaskItems"
                :add-only-from-autocomplete="true"
                @tags-changed="(newTags) => (selectedProgramTask = newTags)"
                placeholder="Type Program Task Name"
              />
            </b-form-group>
            <b-form-group label="Marks Obtained" v-if="user.roles[0].id != 4">
              <b-form-input
                class="mb-2"
                label="Marks Obtained"
                placeholder="Enter Marks Obtained"
                v-model="form.marks_obtained"
              >
              </b-form-input>
            </b-form-group>
            <b-form-group label="Remark" v-if="user.roles[0].id != 4">
              <b-form-input
                class="mb-2"
                label="Remark"
                placeholder="Enter Remark"
                v-model="form.remark"
              >
              </b-form-input>
            </b-form-group>
            <b-form-group label="Completion Date" v-if="user.roles[0].id != 4">
              <b-form-datepicker
                id="dob"
                v-model="form.completion_date"
                class="mb-2"
                placeholder="Completion Date"
              ></b-form-datepicker>
            </b-form-group>
            <b-row>
              <b-col md="6">
                <b-form-group label="Attachment 1">
                  <b-form-file name="imagepath1" ref="file1"></b-form-file>
                </b-form-group>
              </b-col>

              <b-col md="6">
                <b-form-group label="Attachment 2">
                  <b-form-file name="imagepath2" ref="file2"></b-form-file>
                </b-form-group>
              </b-col>
            </b-row>
            <b-row>
              <b-col md="6">
                <b-form-group label="Attachment 3">
                  <b-form-file name="imagepath3" ref="file3"></b-form-file>
                </b-form-group>
              </b-col>

              <b-col md="6">
                <b-form-group label="Attachment 4">
                  <b-form-file name="imagepath4" ref="file4"></b-form-file>
                </b-form-group>
              </b-col>
            </b-row>

            <b-form-group label="Is Completed" v-if="user.roles[0].id != 4">
              <label class="switch switch-success mr-3">
                <input
                  type="checkbox"
                  checked="checkbox"
                  v-model="form.is_completed"
                /><span class="slider"></span>
              </label>
            </b-form-group>

            <b-button
              type="submit"
              variant="primary"
              :disabled="submitStatus === 'PENDING'"
              >Submit</b-button
            >

            <p v-once class="typo__p" v-if="submitStatus === 'OK'">
              {{ makeToastTwo("success") }}
            </p>
            <p v-once class="typo__p" v-if="submitStatus === 'ERROR'">
              {{ makeToast("danger") }}
            </p>
            <div v-once class="typo__p" v-if="submitStatus === 'PENDING'">
              <div class="spinner sm spinner-primary mt-3"></div>
            </div>
          </b-form>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import axios from "axios";
// import { decimal, required } from "vuelidate/lib/validators";
export default {
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: "Program Task | Create",
  },
  data() {
    return {
      form: {
        user_id: "",
        program_id: "",
        program_task_id: "",
        marks_obtained: "",
        is_completed: "",
        completion_date: "",
        ship_id: "",
      },
      submitStatus: null,
      searchProgramTask: "",
      selectedProgramTask: [],
      program_taskItems: [],

      searchShip: "",
      selectedShip: [],
      shipItems: [],

      user_program_task: [],
    };
  },
  computed: {
    filteredProgramTaskItems() {
      return this.program_taskItems.filter((pt) => {
        return (
          pt.text
            .toLowerCase()
            .indexOf(this.searchProgramTask.toLowerCase()) !== -1
        );
      });
    },
    filteredShipItems() {
      return this.shipItems.filter((pt) => {
        return (
          pt.text.toLowerCase().indexOf(this.searchShip.toLowerCase()) !== -1
        );
      });
    },
  },
  validations: {
    form: {
      // marks_obtained: {
      //   required,
      //   decimal,
      // },
      // completion_date: {
      //   required,
      // },
    },
  },
  mounted() {
    this.form.site_id = this.site.id;
    this.getMasters();
  },
  methods: {
    async getMasters() {
      let masters = await axios.get(`user_program_tasks/masters`);
      masters = masters.data;
      masters.ships.forEach((ship) => {
        this.shipItems.push({
          id: ship.id,
          text: ship.description,
        });
      });

      let user_program = await axios.get(
        `/user_programs/${this.$route.params.user_program_id}`
      );
      this.user_program = user_program.data.data;

      let user = await axios.get(`/users/${this.user_program.user_id}`);
      this.user = user.data.data;

      let program = await axios.get(
        `/programs/${this.user_program.program_id}`
      );
      this.program = program.data.data;

      // let program_tasks = await axios.get(
      //   `programs/${this.user_program.program_id}/program_tasks`
      // );
      // let program_tasks = await axios.post(
      //   `program_tasks/filter?user_id=${this.user_program.user_id}`
      // );
      this.user_program_posts = user.data.data.user_program_posts;
      this.user_program_posts.forEach((userProgramPost) => {
        userProgramPost.program_post.program_tasks.forEach((ProgramTask) => {
          this.program_taskItems.push({
            id: ProgramTask.id,
            text: ProgramTask.serial_no + "-" + ProgramTask.task,
          });
        });
      });
    },
    //   validate form
    async submit() {
      console.log("submit!");
      this.form.user_id = this.user_program.user_id;
      this.form.program_id = this.user_program.program_id;
      this.form.program_task_id = this.selectedProgramTask[0].id;
      if (this.selectedShip[0]) {
        this.form.ship_id = this.selectedShip[0].id;
      }
      if (this.user.roles[0].id == 4) {
        this.form.marks_obtained = 0;
        this.form.is_completed = false;
      }
      this.form.added_by_id = this.user.id;
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.submitStatus = "ERROR";
      } else {
        try {
          this.isLoading = true;
          // console.log(this.form);
          let user_program_task = await axios.post(
            `user_programs/${this.user_program.id}/user_program_tasks`,
            this.form
          );
          this.user_program_task = user_program_task.data.data;
          await this.handleFileUpload();
          this.isLoading = false;
          this.submitStatus = "OK";

          // setTimeout(() => {
          this.$router.push(
            `/app/user-program/${this.$route.params.user_program_id}/user-program-tasks/`
          );
          // }, 1000);
        } catch (e) {
          this.isLoading = false;
        }
      }
    },
    async handleFileUpload() {
      let attachment1 = this.$refs.file1?.files[0];
      let attachment2 = this.$refs.file2?.files[0];
      let attachment3 = this.$refs.file3?.files[0];
      let attachment4 = this.$refs.file4?.files[0];
      const user_program_task_id = this.user_program_task.id;
      let formData = new FormData();
      formData.append("user_program_task_id", user_program_task_id);
      formData.append("imagepath1", attachment1);
      formData.append("imagepath2", attachment2);
      formData.append("imagepath3", attachment3);
      formData.append("imagepath4", attachment4);
      await axios
        .post("upload_user_program_task_images", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .catch(function () {
          console.log("FAILURE!!");
        });
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
