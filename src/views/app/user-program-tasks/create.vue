<template>
  <div class="main-content">
    <breadcumb :page="'Create User Program Task'" :folder="'User Program Tasks'" />

    <b-row class="justify-content-md-center">
      <b-col md="6">
        <b-card>
          <b-form @submit.prevent="submit">
            <b-form-group label="Program Task">
              <vue-tags-input
                v-model="program_task"
                :tags="program_tasks"
                class="tag-custom text-15 mb-2"
                :autocomplete-items="filteredProgramTaskItems"
                :add-only-from-autocomplete="true"
                @tags-changed="(newTags) => (program_tasks = newTags)"
                placeholder="Type Program Task Name"
              />
            </b-form-group>
            <b-form-group label="Marks Obtained">
              <b-form-input
                class="mb-2"
                label="Marks Obtained"
                placeholder="Enter Marks Obtained"
                v-model.trim="$v.marks_obtained.$model"
              >
              </b-form-input>
              <b-alert
                show
                variant="danger"
                class="error mt-1"
                v-if="!$v.marks_obtained.required"
                >Field is required</b-alert
              >
              <b-alert
                show
                variant="danger"
                class="error mt-1"
                v-if="!$v.marks_obtained.numeric"
                >Numeric Values Only</b-alert
              >
            </b-form-group>
            <b-form-group label="Completion Date">
              <b-form-datepicker
                id="dob"
                v-model.trim="completion_date"
                class="mb-2"
                placeholder="Completion Date"
              ></b-form-datepicker>
              <b-alert
                show
                variant="danger"
                class="error mt-1"
                v-if="!$v.completion_date.required"
                >Field is required</b-alert
              >
            </b-form-group>
            <b-form-group label="Is Completed">
              <label class="switch switch-success mr-3">
                <input type="checkbox" checked="checkbox" /><span
                  class="slider"
                ></span>
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
import { numeric, required } from "vuelidate/lib/validators";
export default {
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: "Form Component",
  },
  data() {
    return {
      marks_obtained: "",
      is_completed: "",
      completion_date: "",
      submitStatus: null,
      program_task: "",
      program_tasks: [],
      program_taskItems: [
        {
          text: "Program Name 1",
        },
        {
          text: "Program Name 2",
        },
        {
          text: "Program Name 3",
        },
        {
          text: "Program Name 4",
        },
        {
          text: "Program Name 5",
        },
      ],
    };
  },
  computed: {
    filteredProgramTaskItems() {
      return this.program_taskItems.filter((pt) => {
        return (
          pt.text.toLowerCase().indexOf(this.program_task.toLowerCase()) !== -1
        );
      });
    },
  },
  validations: {
    marks_obtained: {
      required,
      numeric,
    },
    completion_date: {
      required,
    },
  },

  methods: {
    //   validate form
    submit() {
      console.log("submit!");

      this.$v.$touch();
      if (this.$v.$invalid) {
        this.submitStatus = "ERROR";
      } else {
        // do your submit logic here
        this.submitStatus = "PENDING";
        setTimeout(() => {
          this.submitStatus = "OK";
        }, 1000);
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
