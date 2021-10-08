<template>
  <div class="main-content">
    <breadcumb :page="'Create User Program'" :folder="'User Programs'" />

    <b-row class="justify-content-md-center">
      <b-col md="6">
        <b-card>
          <b-form @submit.prevent="submit">
            <b-form-group label="User">
              <vue-tags-input
                v-model="user"
                :tags="users"
                class="tag-custom text-15 mb-2"
                :autocomplete-items="filteredUserItems"
                :add-only-from-autocomplete="true"
                @tags-changed="(newTags) => (users = newTags)"
                placeholder="Type User Name"
              />
            </b-form-group>
            <b-form-group label="Program">
              <vue-tags-input
                v-model="program"
                :tags="programs"
                class="tag-custom text-15 mb-2"
                :autocomplete-items="filteredProgramItems"
                :add-only-from-autocomplete="true"
                @tags-changed="(newTags) => (programs = newTags)"
                placeholder="Type Program Name"
              />
            </b-form-group>

            <b-form-group label="Enrollment Date">
              <b-form-datepicker
                id="enrollment_date"
                v-model="enrollment_date"
                class="mb-2"
              ></b-form-datepicker>
              <b-alert
                show
                variant="danger"
                class="error mt-1"
                v-if="!$v.enrollment_date.required"
                >Field is required</b-alert
              >
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
import { required, minLength } from "vuelidate/lib/validators";
export default {
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: "Form Component",
  },
  data() {
    return {
      enrollment_date: "",
      submitStatus: null,
      peopleAdd: [
        {
          multipleName: "Johnn",
        },
        {
          multipleName: "",
        },
      ],
      //   auto complete
      user: "",
      users: [],

      userItems: [
        {
          id: 1,
          text: "John",
        },
        {
          id: 2,
          text: "Jane",
        },
        {
          id: 3,
          text: "Susan",
        },
        {
          id: 4,
          text: "Chris",
        },
        {
          id: 5,
          text: "Dan",
        },
        {
          id: 6,
          text: "John",
        },
        {
          id: 1,
          text: "John",
        },
        {
          id: 2,
          text: "Jane",
        },
        {
          id: 3,
          text: "Susan",
        },
        {
          id: 4,
          text: "Chris",
        },
        {
          id: 5,
          text: "Dan",
        },
        {
          id: 6,
          text: "John",
        },
      ],
      program: "",
      programs: [],
      programItems: [
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
    filteredUserItems() {
      return this.userItems.filter((u) => {
        return u.text.toLowerCase().indexOf(this.user.toLowerCase()) !== -1;
      });
    },
    filteredProgramItems() {
      return this.programItems.filter((p) => {
        return (
          p.text.toLowerCase().indexOf(this.program.toLowerCase()) !== -1
        );
      });
    },
  },
  validations: {
    enrollment_date: {
      required,
    },

    // add input
    // peopleAdd: {
    //   required,
    //   minLength: minLength(3),
    //   $each: {
    //     multipleName: {
    //       required,
    //       minLength: minLength(5)
    //     }
    //   }
    // },
    // validationsGroup:['peopleAdd.multipleName']
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
