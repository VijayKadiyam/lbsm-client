<template>
  <div class="main-content">
    <breadcumb
      :page="'Update User Program Post'"
      :folder="'User Program Posts'"
    />
    <!-- User & Program Details card -->
    <b-row>
      <b-col md="6">
        <b-card class="mb-4">
          <div class="content">
            <b-row>
              <b-col md="3">
                <p class="text-muted mt-2 mb-0">User Name</p>
              </b-col>
              <b-col md="9">
                <p class="text-primary text-24 line-height-1 mb-2">
                  {{ user.user_name }}
                </p>
              </b-col>
            </b-row>
            <b-row>
              <b-col md="3">
                <p class="text-muted mt-2 mb-0">First Name</p>
              </b-col>
              <b-col md="9">
                <p class="text-primary text-24 line-height-1 mb-2">
                  {{ user.first_name }}
                </p>
              </b-col>
            </b-row>
            <b-row>
              <b-col md="3">
                <p class="text-muted mt-2 mb-0">Email</p>
              </b-col>
              <b-col md="9">
                <p class="text-primary text-24 line-height-1 mb-2">
                  {{ user.email }}
                </p>
              </b-col>
            </b-row>
            <b-row>
              <b-col md="3">
                <p class="text-muted mt-2 mb-0">Phone</p>
              </b-col>
              <b-col md="9">
                <p class="text-primary text-24 line-height-1 mb-2">
                  {{ user.phone }}
                </p>
              </b-col>
            </b-row>
          </div>
        </b-card>
      </b-col>
      <b-col md="6">
        <b-card class="mb-4">
          <div class="content">
            <b-row>
              <b-col md="3">
                <p class="text-muted mt-2 mb-0">Program Name</p>
              </b-col>
              <b-col md="9">
                <p class="text-primary text-20 line-height-1 mb-0">
                  {{ program.program_name }}
                </p>
              </b-col>
            </b-row>
            <b-row>
              <b-col md="3">
                <p class="text-muted mt-2 mb-0">Program Description</p>
              </b-col>
              <b-col md="9">
                <p class="text-primary text-20 line-height-1 mb-0">
                  {{ program.program_description }}
                </p>
              </b-col>
            </b-row>
            <b-row>
              <b-col md="3">
                <p class="text-muted mt-2 mb-0">Instructor</p>
              </b-col>
              <b-col md="9">
                <p class="text-primary text-20 line-height-1 mb-0">
                  {{ program.instructor }}
                </p>
              </b-col>
            </b-row>
            <b-row>
              <b-col md="3">
                <p class="text-muted mt-2 mb-0">Hours</p>
              </b-col>
              <b-col md="9">
                <p class="text-primary text-20 line-height-1 mb-0">
                  {{ program.hours }}
                </p>
              </b-col>
            </b-row>
          </div>
        </b-card>
      </b-col>
    </b-row>
    <!-- /User & Program Details card -->
    <b-row class="justify-content-md-center">
      <b-col md="12">
        <b-card>
          <b-form @submit.prevent="submit">
            <b-row>
              <b-col md="6">
                <b-form-group label="User">
                  <vue-tags-input
                    v-model="searchUser"
                    :tags="selectedUser"
                    :max-tags="1"
                    class="tag-custom text-15 mb-2"
                    :autocomplete-items="filteredUserItems"
                    :add-only-from-autocomplete="true"
                    @tags-changed="(newTags) => (selectedUser = newTags)"
                    placeholder="Type User Name"
                  />
                </b-form-group>
              </b-col>
              <b-col md="6">
                <b-form-group label="Program">
                  <vue-tags-input
                    v-model="searchProgram"
                    :tags="selectedProgram"
                    :max-tags="1"
                    class="tag-custom text-15 mb-2"
                    :autocomplete-items="filteredProgramItems"
                    :add-only-from-autocomplete="true"
                    @tags-changed="(newTags) => (selectedProgram = newTags)"
                    placeholder="Type Program Name"
                  />
                </b-form-group>
              </b-col>
            </b-row>
            <b-row>
              <b-col md="6">
                <b-form-group label="Program Post">
                  <vue-tags-input
                    v-model="searchProgramPost"
                    :tags="selectedProgramPost"
                    :max-tags="1"
                    class="tag-custom text-15 mb-2"
                    :autocomplete-items="filteredProgramPostItems"
                    :add-only-from-autocomplete="true"
                    @tags-changed="(newTags) => (selectedProgramPost = newTags)"
                    placeholder="Type Program Post Name"
                  />
                </b-form-group>
              </b-col>
              <b-col md="6">
                <b-form-group label="Promotion Date">
                  <b-form-datepicker
                    id="promotion_date"
                    v-model="$v.form.promotion_date.$model"
                    class="mb-2"
                  ></b-form-datepicker>
                  <b-alert
                    show
                    variant="danger"
                    class="error mt-1"
                    v-if="!$v.form.promotion_date.required"
                    >Field is required</b-alert
                  >
                </b-form-group>
              </b-col>
            </b-row>
            <b-row>
              <b-col md="6">
                <b-form-group label="Remarks">
                  <b-form-textarea
                    id="textarea"
                    v-model="form.remarks"
                    placeholder="Remarks"
                    rows="3"
                    max-rows="6"
                  ></b-form-textarea>
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
import { required, minLength } from "vuelidate/lib/validators";
export default {
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: "Update User Program Post",
  },
  data() {
    return {
      form: {
        promotion_date: "",
      },
      user: {},
      program: {},
      program_post: {},
      submitStatus: null,
      //   auto complete
      searchUser: "",
      selectedUser: [],
      userItems: [],

      searchProgram: "",
      selectedProgram: [],
      programItems: [],

      searchProgramPost: "",
      selectedProgramPost: [],
      program_postItems: [],

      userdata: [
        {
          id: 1,
          avatar: require("@/assets/images/faces/1.jpg"),
          first_name: "John",
          middle_name: "John",
          last_name: "John",
          user_name: "John",
          gender: 0,
          dob: "1997-03-30",
          email: "jhonwick_23@gmail.com",
          phone: "+88012378478",
        },
        {
          id: 2,
          avatar: require("@/assets/images/faces/3.jpg"),
          first_name: "Jane",
          middle_name: "Jane",
          last_name: "Jane",
          user_name: "Jane",
          gender: 0,
          dob: "1997-03-30",
          email: "jameswann@gmail.com",
          phone: "+88012378478",
        },
        {
          id: 3,
          avatar: require("@/assets/images/faces/2.jpg"),
          first_name: "Susan",
          middle_name: "Susan",
          last_name: "Susan",
          user_name: "Susan",
          gender: 0,
          dob: "1997-03-30",
          email: "jameswann@gmail.com",
          phone: "+88012378478",
        },
        {
          id: 4,
          avatar: require("@/assets/images/faces/1.jpg"),
          first_name: "Chris",
          middle_name: "Chris",
          last_name: "Chris",
          user_name: "Chris",
          gender: 0,
          dob: "1997-03-30",
          email: "jhonwick_23@gmail.com",
          phone: "+88012378478",
        },
        {
          id: 5,
          avatar: require("@/assets/images/faces/4.jpg"),
          first_name: "Dan",
          middle_name: "Dan",
          last_name: "Dan",
          user_name: "Dan",
          gender: 0,
          dob: "1997-03-30",
          email: "jhonwick_23@gmail.com",
          phone: "+88012378478",
        },
        {
          id: 6,
          avatar: require("@/assets/images/faces/5.jpg"),
          first_name: "John",
          middle_name: "John",
          last_name: "John",
          user_name: "John",
          gender: 0,
          dob: "1997-03-30",
          email: "jameswann@gmail.com",
          phone: "+88012378478",
        },
        {
          id: 1,
          avatar: require("@/assets/images/faces/4.jpg"),
          first_name: "John",
          middle_name: "John",
          last_name: "John",
          user_name: "John",
          gender: 0,
          dob: "1997-03-30",
          email: "dan_brown@gmail.com",
          phone: "+88012378478",
        },
        {
          id: 2,
          avatar: require("@/assets/images/faces/3.jpg"),
          first_name: "Jane",
          middle_name: "Jane",
          last_name: "Jane",
          user_name: "Jane",
          gender: 0,
          dob: "1997-03-30",
          email: "jameswann@gmail.com",
          phone: "+88012378478",
        },
        {
          id: 3,
          avatar: require("@/assets/images/faces/2.jpg"),
          first_name: "Susan",
          middle_name: "Susan",
          last_name: "Susan",
          user_name: "Susan",
          gender: 0,
          dob: "1997-03-30",
          email: "janeswann@gmail.com",
          phone: "+88012378478",
        },
        {
          id: 4,
          avatar: require("@/assets/images/faces/1.jpg"),
          first_name: "Chris",
          middle_name: "Chris",
          last_name: "Chris",
          user_name: "Chris",
          gender: 0,
          dob: "1997-03-30",
          email: "jaasdameswann@gmail.com",
          phone: "+88012378478",
        },
        {
          id: 5,
          avatar: require("@/assets/images/faces/5.jpg"),
          first_name: "Dan",
          middle_name: "Dan",
          last_name: "Dan",
          user_name: "Dan",
          gender: 0,
          dob: "1997-03-30",
          email: "doomwaytne@gmail.com",
          phone: "+88012378478",
        },
        {
          id: 6,
          avatar: require("@/assets/images/faces/3.jpg"),
          first_name: "John",
          middle_name: "John",
          last_name: "John",
          user_name: "John",
          gender: 0,
          dob: "1997-03-30",
          email: "sidsacc@gmail.com",
          phone: "+88012378478",
        },
      ],
      programdata: [
        {
          program_name: "Program Name - 1",
          program_description: "Program Description 1",
          instructor: "Instructor 1",
          hours: "1",
        },
        {
          program_name: "Program Name - 2",
          program_description: "Program Description 2",
          instructor: "Instructor 2",
          hours: "2",
        },
        {
          program_name: "Program Name - 3",
          program_description: "Program Description 3",
          instructor: "Instructor 3",
          hours: "3",
        },
        {
          program_name: "Program Name - 4",
          program_description: "Program Description 4",
          instructor: "Instructor 4",
          hours: "4",
        },
        {
          program_name: "Program Name - 5",
          program_description: "Program Description 5",
          instructor: "Instructor 5",
          hours: "5",
        },
        {
          program_name: "Program Name - 6",
          program_description: "Program Description 6",
          instructor: "Instructor 6",
          hours: "6",
        },
        {
          program_name: "Program Name - 7",
          program_description: "Program Description 7",
          instructor: "Instructor 7",
          hours: "7",
        },
        {
          program_name: "Program Name - 8",
          program_description: "Program Description 8",
          instructor: "Instructor 8",
          hours: "8",
        },
        {
          program_name: "Program Name - 9",
          program_description: "Program Description 9",
          instructor: "Instructor 9",
          hours: "9",
        },
        {
          program_name: "Program Name - 10",
          program_description: "Program Description 10",
          instructor: "Instructor 10",
          hours: "10",
        },
      ],
      // user_program_post:[]
    };
  },
  watch: {
    selectedUser: "searchSelectedUser",
    selectedProgram: "searchSelectedProgram",
  },
  computed: {
    filteredUserItems() {
      return this.userItems.filter((u) => {
        return (
          u.text.toLowerCase().indexOf(this.searchUser.toLowerCase()) !== -1
        );
      });
    },
    filteredProgramItems() {
      return this.programItems.filter((p) => {
        return (
          p.text.toLowerCase().indexOf(this.searchProgram.toLowerCase()) !== -1
        );
      });
    },
    filteredProgramPostItems() {
      // For the Time Being
      return this.programItems.filter((pp) => {
        return (
          pp.text
            .toLowerCase()
            .indexOf(this.searchProgramPost.toLowerCase()) !== -1
        );
      });
    },
  },
  validations: {
    form: {
      promotion_date: {
        required,
      },
    },
  },
  mounted() {
    this.form.site_id = this.site.id;
    this.getMasters();
    this.getData();
  },

  methods: {
    async getMasters() {
      this.isLoading = true;
      let masters = await axios.get("user_program_posts/masters");
      masters = masters.data;
      // Programs
      masters.programs.forEach((program) => {
        this.programItems.push({
          id: program.id,
          text: program.program_name,
        });
      });
      // Program Post
      masters.program_posts.forEach((programpost) => {
        this.program_postItems.push({
          id: programpost.id,
          text: programpost.serial_no,
        });
      });
      // User
      masters.users.forEach((user) => {
        this.userItems.push({
          id: user.id,
          text: user.user_name,
        });
      });
      this.isLoading = false;
    },
    async getData() {
      this.isLoading = true;
      let form = await axios.get(
        `/user_program_posts/${this.$route.params.id}`
      );
      this.form = form.data.data;

      this.user = form.data.data.user;
      this.selectedUser.push({
        id: this.user.id,
        text: this.user.user_name,
      });

      this.program = form.data.data.program;
      this.selectedProgram.push({
        id: this.program.id,
        text: this.program.program_name,
      });

      this.program_post = form.data.data.program_post;
      this.selectedProgramPost.push({
        id: this.program.id,
        text: this.program.program_name,
      });
      this.isLoading = false;
    },
    //   validate form
    async submit() {
      console.log("submit!");
      this.form.user_id = this.selectedUser[0].id;
      this.form.program_id = this.selectedProgram[0].id;
      this.form.program_post_id = this.selectedProgramPost[0].id;
      
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.submitStatus = "ERROR";
      } else {
        // do your submit logic here
        try {
          this.isLoading = true;
          this.submitStatus = "PENDING";
          await axios.patch(
            `/user_program_posts/${this.$route.params.id}`,
            this.form
          );
          this.isLoading = false;
          this.submitStatus = "OK";

          setTimeout(() => {
            this.$router.push("/app/user-program-posts/");
          }, 1000);
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
