<template>
  <div class="main-content">
    <breadcumb :page="'Create User Program'" :folder="'User Programs'" />

    <b-row class="justify-content-md-center">
      <b-col md="6">
        <b-card>
          <b-form @submit.prevent="submit">
            <b-form-group label="User">
              <vue-tags-input
                v-model="autocompleteTag"
                :tags="autocompleteTags"
                class="tag-custom text-15 mb-2"
                :autocomplete-items="filteredItems"
                @tags-changed="(newTags) => (autocompleteTags = newTags)"
                placeholder="Type Country Name"
              />
            </b-form-group>

            <b-form-group label="Program Description">
              <b-form-textarea
                id="textarea"
                v-model="program_description"
                placeholder="Program Description"
                rows="3"
                max-rows="6"
              ></b-form-textarea>

              <!-- <b-alert
                show
                variant="danger"
                class="error col-md-6 mt-1"
                v-if="!$v.program_description.minLength"
                >Name must have at least
                {{ $v.name.$params.minLength.min }} letters.</b-alert
              > -->
            </b-form-group>

            <b-form-group label="Instructor">
              <b-form-input
                class="mb-2"
                label="Instructor"
                placeholder="Enter Instructor"
                v-model="instrutor"
              >
              </b-form-input>

              <!-- <b-alert
                show
                variant="danger"
                class="error col-md-6 mt-1"
                v-if="!instrutor.minLength"
                >Name must have at least
                {{ instrutor.$params.minLength.min }} letters.</b-alert
              > -->
            </b-form-group>

            <b-form-group label="Hours">
              <b-form-input
                class="mb-2"
                label="Hours"
                placeholder="Enter Hours"
                v-model="hours"
              >
              </b-form-input>

              <!-- <b-alert
                show
                variant="danger"
                class="error col-md-6 mt-1"
                v-if="!hours.minLength"
                >Name must have at least
                {{ hours.$params.minLength.min }} letters.</b-alert
              > -->
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
      program_name: "",
      program_description: "",
      intructor: "",
      hours: "",
      submitStatus: null,
      peopleAdd: [
        {
          multipleName: "Johnn",
        },
        {
          multipleName: "",
        },
      ],
      tag: "",
      tags: [
        {
          text: "Javascript",
        },
        {
          text: "Typescript",
        },
        {
          text: "add",
        },
      ],
      //   auto complete
      autocompleteTag: "",
      autocompleteTags: [
        {
          text: "Bangladesh",
        },
      ],

      autocompleteItems: [
        {
          text: "Spain",
        },
        {
          text: "France",
        },
        {
          text: "USA",
        },
        {
          text: "Germany",
        },
        {
          text: "China",
        },
      ],
    };
  },
  computed: {
    filteredItems() {
      return this.autocompleteItems.filter((i) => {
        return i.text.toLowerCase().indexOf(this.tag.toLowerCase()) !== -1;
      });
    },
  },
  validations: {
    program_name: {
      required,
      minLength: minLength(4),
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
