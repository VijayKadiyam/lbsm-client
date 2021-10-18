<template>
  <div class="main-content">
    <breadcumb
      :page="'Update User Program Task'"
      :folder="'User Program Tasks'"
    />

    <b-row class="justify-content-md-center">
      <b-col md="6">
        <b-card>
          <b-form @submit.prevent="submit">
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
            <b-form-group label="Marks Obtained">
              <b-form-input
                class="mb-2"
                label="Marks Obtained"
                placeholder="Enter Marks Obtained"
                v-model.trim="$v.form.marks_obtained.$model"
              >
              </b-form-input>
              <b-alert
                show
                variant="danger"
                class="error mt-1"
                v-if="!$v.form.marks_obtained.required"
                >Field is required</b-alert
              >
              <b-alert
                show
                variant="danger"
                class="error mt-1"
                v-if="!$v.form.marks_obtained.numeric"
                >Numeric Values Only</b-alert
              >
            </b-form-group>
            <b-form-group label="Completion Date">
              <b-form-datepicker
                id="dob"
                v-model.trim="$v.form.completion_date.$model"
                class="mb-2"
                placeholder="Completion Date"
              ></b-form-datepicker>
              <b-alert
                show
                variant="danger"
                class="error mt-1"
                v-if="!$v.form.completion_date.required"
                >Field is required</b-alert
              >
            </b-form-group>
            <b-form-group label="Is Completed">
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
import { numeric, required } from "vuelidate/lib/validators";
export default {
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: "Form Component",
  },
  data() {
    return {
      form: {
        user_id: 1,
        program_id: 1,
        program_task_id: 1,
        marks_obtained: "",
        is_completed: "",
        completion_date: "",
      },
      submitStatus: null,
      searchProgramTask: "",
      selectedProgramTask: [],
      program_taskItems: [],
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
  },
  validations: {
    form: {
      marks_obtained: {
        required,
        numeric,
      },
      completion_date: {
        required,
      },
    },
  },
  mounted() {
    this.form.user_program_id = this.$route.params.user_program_id;
    this.form.site_id = this.site.id;
    this.getData();
  },
  methods: {
    async getData() {
      this.isLoading = true;
      let form = await axios.get(
        `user_programs/${this.$route.params.user_program_id}/user_program_tasks/${this.$route.params.id}`
      );
      // let form = await axios.get(`/user_program_tasks/${this.$route.params.id}`);
      this.form = form.data.data;
      this.user = this.form.user;
      this.program = this.form.program;
      this.program_task = this.form.program_task;
      this.selectedProgramTask.push({
        id: this.program_task.id,
        text: this.program_task.task,
      });
      this.isLoading = false;
    },
    //   validate form
    async submit() {
      console.log("submit!");

      this.$v.$touch();
      if (this.$v.$invalid) {
        this.submitStatus = "ERROR";
      } else {
        try {
          this.submitStatus = "PENDING";
          this.isLoading = true;
          await axios.patch(
            `user_programs/${this.form.id}/user_program_tasks/${this.$route.params.id}`,
            this.form
          );
          this.submitStatus = "OK";
          setTimeout(() => {
            this.$router.push("/app/sites/");
          }, 1000);
          this.isLoading = false;
        } catch (e) {
          this.isLoading = false;
          this.submitStatus = "ERROR";
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
