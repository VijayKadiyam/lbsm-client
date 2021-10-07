<template>
  <div class="main-content">
    <breadcumb :page="'Update User'" :folder="'Users'" />

    <b-row>
      <b-col md="12">
        <b-card>
          <b-form @submit.prevent="submit">
            <b-row>
              <b-col md="6">
                <b-form-group label="First Name">
                  <b-form-input
                    class="mb-2"
                    label="First Name"
                    placeholder="Enter First Name"
                    v-model.trim="$v.first_name.$model"
                  >
                  </b-form-input>

                  <b-alert
                    show
                    variant="danger"
                    class="error mt-1"
                    v-if="!$v.first_name.required"
                    >Field is required</b-alert
                  >
                </b-form-group>
              </b-col>
              <b-col md="6">
                <b-form-group label="User Name">
                  <b-form-input
                    class="mb-2"
                    label="User Name"
                    placeholder="Enter User Name"
                    v-model.trim="$v.user_name.$model"
                  >
                  </b-form-input>
                  <b-alert
                    show
                    variant="danger"
                    class="error mt-1"
                    v-if="!$v.user_name.required"
                    >Field is required</b-alert
                  >
                </b-form-group>
              </b-col>
            </b-row>
            <b-row>
              <b-col md="6">
                <b-form-group label="Middle Name">
                  <b-form-input
                    class="mb-2"
                    label="Middle Name"
                    placeholder="Enter Middle Name"
                    v-model="$v.middle_name"
                  >
                  </b-form-input>
                </b-form-group>
              </b-col>
              <b-col md="6">
                <b-form-group label="Last Name">
                  <b-form-input
                    class="mb-2"
                    label="Last Name"
                    placeholder="Enter Last Name"
                    v-model="$v.last_name"
                  >
                  </b-form-input>
                </b-form-group>
              </b-col>
            </b-row>
            <b-row>
              <b-col md="6">
                <b-form-group label="Gender">
                  <b-row>
                    <b-col md="4">
                      <label class="radio radio-success mb-2">
                        <input type="radio" name="radio" />
                        <span>Male</span>
                        <span class="checkmark"></span>
                      </label>
                    </b-col>
                    <b-col md="4">
                      <label class="radio radio-danger mb-2">
                        <input type="radio" name="radio" />
                        <span>Female</span>
                        <span class="checkmark"></span>
                      </label>
                    </b-col>
                  </b-row>
                </b-form-group>
              </b-col>
              <b-col md="6">
                <b-form-group label="Date Of Birth">
                  <b-form-datepicker
                    id="dob"
                    v-model="dob"
                    class="mb-2"
                    placeholder="Date Of Birth"
                  ></b-form-datepicker>
                </b-form-group>
              </b-col>
            </b-row>
            <b-row>
              <b-col md="6">
                <b-form-group label="Password">
                  <b-form-input
                    class="mb-2"
                    label="Name"
                    type="password"
                    v-model.trim="$v.password.$model"
                  >
                  </b-form-input>

                  <b-alert
                    show
                    variant="danger"
                    class="error mt-1"
                    v-if="!$v.password.minLength"
                    >Minimum
                    {{ $v.password.$params.minLength.min }} charaters.</b-alert
                  >
                </b-form-group>
              </b-col>
              <b-col md="6">
                <b-form-group label="Image">
                  <b-form-file id="file-default" accept="image/*" ></b-form-file>
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
      first_name: "",
      middle_name: "",
      last_name: "",
      user_name: "",
      password: "",
      // email: "",
      submitStatus: null,
    };
  },
  validations: {
    first_name: {
      required,
    },
    user_name: {
      required,
    },
    password: {
      required,
      minLength: minLength(6),
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
