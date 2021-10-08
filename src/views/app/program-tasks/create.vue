<template>
  <div class="main-content">
    <breadcumb :page="'Create Program Task'" :folder="'Program Tasks'" />
    <!-- Program Details card -->
    <b-card class="mb-4">
      <div class="content">
        <b-row>
          <b-col md="3">
            <p class="text-muted mt-2 mb-0">Program Name</p>
            <p class="text-primary text-24 line-height-1 mb-2">
              {{ program[0].program_name }}
            </p>
          </b-col>
          <b-col md="3">
            <p class="text-muted mt-2 mb-0">Program Description</p>
            <p class="text-primary text-24 line-height-1 mb-2">
              {{ program[0].program_description }}
            </p>
          </b-col>
          <b-col md="3">
            <p class="text-muted mt-2 mb-0">Instructor</p>
            <p class="text-primary text-24 line-height-1 mb-2">
              {{ program[0].instructor }}
            </p>
          </b-col>
          <b-col md="3">
            <p class="text-muted mt-2 mb-0">Hours</p>
            <p class="text-primary text-24 line-height-1 mb-2">
              {{ program[0].hours }}
            </p>
          </b-col>
        </b-row>
      </div>
    </b-card>
    <!-- /Program Details card -->
    <b-row>
      <b-col md="12">
        <b-card>
          <b-form @submit.prevent="submit">
            <b-row>
              <b-col md="6">
                <b-form-group label="Serial Number">
                  <b-form-input
                    class="mb-2"
                    label="Serial Number"
                    placeholder="Enter Serial Number"
                    v-model.trim="$v.serial_no.$model"
                  >
                  </b-form-input>
                  <b-alert
                    show
                    variant="danger"
                    class="error mt-1"
                    v-if="!$v.serial_no.required"
                    >Field is required</b-alert
                  >
                  <b-alert
                    show
                    variant="danger"
                    class="error mt-1"
                    v-if="!$v.serial_no.numeric"
                    >Numeric Values Only</b-alert
                  >
                </b-form-group>
              </b-col>
              <b-col md="6">
                <b-form-group label="Task">
                  <b-form-input
                    class="mb-2"
                    label="Task"
                    placeholder="Enter Task"
                    v-model.trim="$v.task.$model"
                  >
                  </b-form-input>
                  <b-alert
                    show
                    variant="danger"
                    class="error mt-1"
                    v-if="!$v.task.required"
                    >Field is required</b-alert
                  >
                </b-form-group>
              </b-col>
            </b-row>
            <b-row>
              <b-col md="6">
                <b-form-group label="Objective">
                  <b-form-input
                    class="mb-2"
                    label="Objective"
                    placeholder="Enter Objective"
                    v-model.trim="$v.objective.$model"
                  >
                  </b-form-input>
                  <b-alert
                    show
                    variant="danger"
                    class="error mt-1"
                    v-if="!$v.objective.required"
                    >Field is required</b-alert
                  >
                </b-form-group>
              </b-col>
              <b-col md="6">
                <b-form-group label="Material">
                  <b-form-input
                    class="mb-2"
                    label="Material"
                    placeholder="Enter Material"
                    v-model.trim="$v.material.$model"
                  >
                  </b-form-input>
                  <b-alert
                    show
                    variant="danger"
                    class="error mt-1"
                    v-if="!$v.material.required"
                    >Field is required</b-alert
                  >
                </b-form-group>
              </b-col>
            </b-row>
            <b-row>
              <b-col md="6">
                <b-form-group label="Process">
                  <b-form-input
                    class="mb-2"
                    label="Process"
                    placeholder="Enter Process"
                    v-model.trim="$v.process.$model"
                  >
                  </b-form-input>
                  <b-alert
                    show
                    variant="danger"
                    class="error mt-1"
                    v-if="!$v.process.required"
                    >Field is required</b-alert
                  >
                </b-form-group>
              </b-col>
              <b-col md="6">
                <b-form-group label="No Of Contracts">
                  <b-form-input
                    class="mb-2"
                    label="No Of Contracts"
                    placeholder="Enter No Of Contracts"
                    v-model.trim="$v.no_of_contracts.$model"
                  >
                  </b-form-input>
                  <b-alert
                    show
                    variant="danger"
                    class="error mt-1"
                    v-if="!$v.no_of_contracts.required"
                    >Field is required</b-alert
                  >
                  <b-alert
                    show
                    variant="danger"
                    class="error mt-1"
                    v-if="!$v.no_of_contracts.numeric"
                    >Numeric Values Only</b-alert
                  >
                </b-form-group>
              </b-col>
            </b-row>
            <b-row>
              <b-col md="6">
                <b-form-group label="Time Required">
                  <b-form-input
                    class="mb-2"
                    label="Time Required"
                    placeholder="Enter Time Required"
                    v-model.trim="$v.time_required.$model"
                  >
                  </b-form-input>
                  <b-alert
                    show
                    variant="danger"
                    class="error mt-1"
                    v-if="!$v.time_required.required"
                    >Field is required</b-alert
                  >
                  <b-alert
                    show
                    variant="danger"
                    class="error mt-1"
                    v-if="!$v.time_required.numeric"
                    >Numeric Values Only</b-alert
                  >
                </b-form-group>
              </b-col>
              <b-col md="6">
                <b-form-group label="Total Marks">
                  <b-form-input
                    class="mb-2"
                    label="Total Marks"
                    placeholder="Enter Total Marks"
                    v-model.trim="$v.total_marks.$model"
                  >
                  </b-form-input>
                  <b-alert
                    show
                    variant="danger"
                    class="error mt-1"
                    v-if="!$v.total_marks.required"
                    >Field is required</b-alert
                  >
                  <b-alert
                    show
                    variant="danger"
                    class="error mt-1"
                    v-if="!$v.total_marks.numeric"
                    >Numeric Values Only</b-alert
                  >
                </b-form-group>
              </b-col>
            </b-row>
            <b-row>
              <b-col md="6">
                <b-form-group label="Passing Marks">
                  <b-form-input
                    class="mb-2"
                    label="Passing Marks"
                    v-model.trim="$v.passing_marks.$model"
                  >
                  </b-form-input>
                  <b-alert
                    show
                    variant="danger"
                    class="error mt-1"
                    v-if="!$v.passing_marks.required"
                    >Field is required</b-alert
                  >
                  <b-alert
                    show
                    variant="danger"
                    class="error mt-1"
                    v-if="!$v.passing_marks.numeric"
                    >Numeric Values Only</b-alert
                  >
                </b-form-group>
              </b-col>
            </b-row>

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
import {
  email,
  numeric,
  between,
  required,
  sameAs,
  minLength,
  maxLength,
} from "vuelidate/lib/validators";
export default {
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: "Form Component",
  },
  data() {
    return {
      serial_no: "",
      task: "",
      objective: "",
      material: "",
      process: "",
      no_of_contracts: "",
      time_required: "",
      total_marks: "",
      passing_marks: "",
      submitStatus: null,
      program: [
        {
          id: 1,
          program_name: "Program 1",
          program_description: "Desc",
          instructor: "inst",
          hours: "3 hrs",
        },
      ],
    };
  },
  validations: {
    program: {
      required,
    },
    program_post: {
      required,
    },
    serial_no: {
      required,
      numeric,
    },
    task: {
      required,
    },
    objective: {
      required,
    },
    material: {
      required,
    },
    process: {
      required,
    },
    no_of_contracts: {
      required,
      numeric,
    },
    time_required: {
      required,
      numeric,
    },
    total_marks: {
      required,
      numeric,
    },
    passing_marks: {
      required,
      numeric,
    },
    // add input
    // peopleAdd: {
    //   required,
    //   minLength: minLength(3),
    //   $each: {
    //     multipleFirst Name: {
    //       required,
    //       minLength: minLength(5)
    //     }
    //   }
    // },
    // validationsGroup:['peopleAdd.multipleFirst Name']
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
