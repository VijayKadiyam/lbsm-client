<template>
  <div class="main-content">
    <breadcumb :page="'Create User'" :folder="'Users'" />

    <b-row>
      <b-col md="12">
        <b-card title="User">
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
            <b-row>
              <b-col md="6">
                <b-form-group label="First Name">
                  <b-form-input
                    class="mb-2"
                    label="First Name"
                    placeholder="Enter First Name"
                    v-model.trim="$v.form.first_name.$model"
                  >
                  </b-form-input>

                  <b-alert
                    show
                    variant="danger"
                    class="error mt-1"
                    v-if="!$v.form.first_name.required"
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
                    v-model.trim="$v.form.user_name.$model"
                  >
                  </b-form-input>
                  <b-alert
                    show
                    variant="danger"
                    class="error mt-1"
                    v-if="!$v.form.user_name.required"
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
                    v-model="form.middle_name"
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
                    v-model="form.last_name"
                  >
                  </b-form-input>
                </b-form-group>
              </b-col>
            </b-row>
            <b-row>
              <b-col md="6">
                <b-form-group label="Gender">
                  <b-row>
                    <b-col md="8">
                      <span>Male</span>
                      <label class="switch switch-success mr-3 ml-3">
                        <input
                          type="checkbox"
                          checked="checkbox"
                          v-model="form.gender"
                        /><span class="slider"></span>
                      </label>
                      <span>Female</span>
                    </b-col>
                  </b-row>
                </b-form-group>
              </b-col>
              <b-col md="6">
                <b-form-group label="Date Of Birth">
                  <b-form-datepicker
                    id="dob"
                    v-model="form.dob"
                    class="mb-2"
                    placeholder="Date Of Birth"
                  ></b-form-datepicker>
                </b-form-group>
              </b-col>
            </b-row>
            <b-row>
              <b-col md="6">
                <b-form-group label="Email">
                  <b-form-input
                    class="mb-2"
                    label="Email"
                    placeholder="email address"
                    v-model.trim="$v.form.email.$model"
                  >
                  </b-form-input>

                  <b-alert
                    show
                    variant="danger"
                    class="error mt-1"
                    v-if="!$v.form.email.email"
                  >
                    {{ $v.form.email.$model }} is invalid.</b-alert
                  >
                  <!-- <b-alert
                    show
                    variant="danger"
                    class="error mt-1"
                    v-if="!$v.form.email.required"
                    >Field is required</b-alert
                  > -->
                </b-form-group>
              </b-col>
              <b-col md="6">
                <b-form-group label="Attachment">
                  <b-form-file
                    id="file-default"
                    name="imagepath"
                    ref="file"
                    accept="image/*"
                  ></b-form-file>
                </b-form-group>
              </b-col>
            </b-row>
            <b-row>
              <b-col md="6">
                <b-form-group label="Rank">
                  <vue-tags-input
                    v-model="searchRank"
                    :tags="selectedRank"
                    :max-tags="1"
                    class="tag-custom text-15 mb-2"
                    :autocomplete-items="filteredRankItems"
                    :add-only-from-autocomplete="true"
                    @tags-changed="(newTags) => (selectedRank = newTags)"
                    placeholder="Type Rank Name"
                  />
                </b-form-group>
              </b-col>
              <b-col md="6">
                <b-form-group label="Danos Id">
                  <b-form-input
                    class="mb-2"
                    label="Danos"
                    placeholder="Danos Id"
                    v-model="form.unique_id"
                  >
                  </b-form-input>
                </b-form-group>
              </b-col>
            </b-row>
            <b-row>
              <b-col md="6">
                <b-form-group label="Nationality">
                  <vue-tags-input
                    v-model="searchNationality"
                    :tags="selectedNationality"
                    :max-tags="1"
                    class="tag-custom text-15 mb-2"
                    :autocomplete-items="filteredNationalityItems"
                    :add-only-from-autocomplete="true"
                    @tags-changed="(newTags) => (selectedNationality = newTags)"
                    placeholder="Type Nationality Name"
                  />
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
import axios from "axios";
import {
  email,
  // numeric,
  // between,
  required,
  // sameAs,
  // minLength,
  // maxLength,
} from "vuelidate/lib/validators";
export default {
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: "User Create",
  },
  data() {
    return {
      form: {
        first_name: "",
        middle_name: "",
        last_name: "",
        user_name: "",
        dob: "",
        email: "",
        gender: 0,
        active: 1,
        role_id: 4,
      },
      searchRank: "",
      selectedRank: [],
      RankItems: [],

      searchNationality: "",
      selectedNationality: [],
      nationalityItems: [],
      submitStatus: null,
    };
  },
  validations: {
    form: {
      first_name: {
        required,
      },
      user_name: {
        required,
      },
      email: {
        // required,
        email,
      },
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
  mounted() {
    this.getMasters();
    this.form.site_id = this.site.id;
  },
  computed: {
    filteredRankItems() {
      return this.RankItems.filter((u) => {
        return (
          u.text.toLowerCase().indexOf(this.searchRank.toLowerCase()) !== -1
        );
      });
    },
    filteredNationalityItems() {
      return this.nationalityItems.filter((u) => {
        return (
          u.text.toLowerCase().indexOf(this.searchNationality.toLowerCase()) !==
          -1
        );
      });
    },
  },
  methods: {
    async getMasters() {
      let masters = await axios.get("users/masters");
      masters = masters.data;
      masters.ranks.forEach((rank) => {
        this.RankItems.push({
          id: rank.id,
          text: rank.description,
        });
      });
      masters.nationalities.forEach((nationality) => {
        this.nationalityItems.push({
          id: nationality.id,
          text: nationality.description,
        });
      });
    },
    //   validate form
    async submit() {
      console.log("submit!");
      if (this.selectedRank[0]) {
        this.form.rank_id = this.selectedRank[0].id;
      }
      if (this.selectedNationality[0]) {
        this.form.nationality = this.selectedNationality[0].text;
      }

      this.$v.$touch();
      if (this.$v.$invalid) {
        this.submitStatus = "ERROR";
      } else {
        try {
          this.isLoading = true;
          this.current_user = await axios.post("/users", this.form);
          await this.handleFileUpload();
          this.isLoading = false;
        } catch (e) {
          this.isLoading = false;
        }
        this.submitStatus = "PENDING";
        // setTimeout(() => {
        this.submitStatus = "OK";
        this.$router.push("/app/users");
        // }, 1000);
      }
    },
    async handleFileUpload() {
      let attachment = this.$refs.file?.files[0];
      const userid = this.current_user.data.data.id;
      let formData = new FormData();
      formData.append("userid", userid);
      formData.append("imagepath", attachment);
      await axios
        .post("upload_user_image", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .catch(function() {
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
      // this.save();
      this.$bvToast.toast("Successfully Submitted", {
        title: `Variant ${variant || "default"}`,
        variant: variant,
        solid: true,
      });
    },

    inputSubmit() {
      // this.save();
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
