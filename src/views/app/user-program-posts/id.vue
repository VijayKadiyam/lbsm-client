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
                  {{ user_program_post[0].user.user_name }}
                </p>
              </b-col>
            </b-row>
            <b-row>
              <b-col md="3">
                <p class="text-muted mt-2 mb-0">First Name</p>
              </b-col>
              <b-col md="9">
                <p class="text-primary text-24 line-height-1 mb-2">
                  {{ user_program_post[0].user.first_name }}
                </p>
              </b-col>
            </b-row>
            <b-row>
              <b-col md="3">
                <p class="text-muted mt-2 mb-0">Email</p>
              </b-col>
              <b-col md="9">
                <p class="text-primary text-24 line-height-1 mb-2">
                  {{ user_program_post[0].user.email }}
                </p>
              </b-col>
            </b-row>
            <b-row>
              <b-col md="3">
                <p class="text-muted mt-2 mb-0">Phone</p>
              </b-col>
              <b-col md="9">
                <p class="text-primary text-24 line-height-1 mb-2">
                  {{ user_program_post[0].user.phone }}
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
                  {{ user_program_post[0].program.program_name }}
                </p>
              </b-col>
            </b-row>
            <b-row>
              <b-col md="3">
                <p class="text-muted mt-2 mb-0">Program Description</p>
              </b-col>
              <b-col md="9">
                <p class="text-primary text-20 line-height-1 mb-0">
                  {{ user_program_post[0].program.program_description }}
                </p>
              </b-col>
            </b-row>
            <b-row>
              <b-col md="3">
                <p class="text-muted mt-2 mb-0">Instructor</p>
              </b-col>
              <b-col md="9">
                <p class="text-primary text-20 line-height-1 mb-0">
                  {{ user_program_post[0].program.instructor }}
                </p>
              </b-col>
            </b-row>
            <b-row>
              <b-col md="3">
                <p class="text-muted mt-2 mb-0">Hours</p>
              </b-col>
              <b-col md="9">
                <p class="text-primary text-20 line-height-1 mb-0">
                  {{ user_program_post[0].program.hours }}
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
                    v-model="user"
                    :tags="users"
                    class="tag-custom text-15 mb-2"
                    :autocomplete-items="filteredUserItems"
                    :add-only-from-autocomplete="true"
                    @tags-changed="(newTags) => (users = newTags)"
                    placeholder="Type User Name"
                  />
                </b-form-group>
              </b-col>
              <b-col md="6">
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
              </b-col>
            </b-row>
            <b-row>
              <b-col md="6">
                <b-form-group label="Program Post">
                  <vue-tags-input
                    v-model="program_post"
                    :tags="program_posts"
                    class="tag-custom text-15 mb-2"
                    :autocomplete-items="filteredProgramPostItems"
                    :add-only-from-autocomplete="true"
                    @tags-changed="(newTags) => (program_posts = newTags)"
                    placeholder="Type Program Post Name"
                  />
                </b-form-group>
              </b-col>
              <b-col md="6">
                <b-form-group label="Promotion Date">
                  <b-form-datepicker
                    id="promotion_date"
                    v-model="promotion_date"
                    class="mb-2"
                  ></b-form-datepicker>
                  <b-alert
                    show
                    variant="danger"
                    class="error mt-1"
                    v-if="!$v.promotion_date.required"
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
                    v-model="remarks"
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
import { required, minLength } from "vuelidate/lib/validators";
export default {
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: "Form Component",
  },
  data() {
    return {
      promotion_date: "",
      submitStatus: null,
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

      program_post: "",
      program_posts: [],
      program_postItems: [
        {
          text: "Program Post Name 1",
        },
        {
          text: "Program Post Name 2",
        },
        {
          text: "Program Post Name 3",
        },
        {
          text: "Program Post Name 4",
        },
        {
          text: "Program Post Name 5",
        },
      ],

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
      user_program_post: [
        {
          id: 1,
          site_id: 1,
          user_id: 1,
          user: {
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
          program_id: 1,
          program: {
            program_name: "Program Name - 1",
            program_description: "Program Description 1",
            instructor: "Instructor 1",
            hours: "1",
          },
          program_post_id: 2,
          program_post: {
            id: 2,
            serial_no: 12345,
            post_id: 5,
            post: {
              id: 5,
              site_id: 1,
              value_id: 2,
              description: "Engineer",
              code: "Engineer",
              is_active: true,
            },
          },
          promotion_date: "2021-03-16",
          remarks: "Remarks",
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
        return p.text.toLowerCase().indexOf(this.program.toLowerCase()) !== -1;
      });
    },
    filteredProgramPostItems() {
      return this.program_postItems.filter((pp) => {
        return (
          pp.text.toLowerCase().indexOf(this.program_post.toLowerCase()) !== -1
        );
      });
    },
  },
  validations: {
    promotion_date: {
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
