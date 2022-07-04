<template>
  <div class="main-content">
    <breadcumb
      :page="'Assign User Program Task'"
      :folder="'User Program Tasks'"
    />

    <b-row class="justify-content-md-center">
      <b-col md="9">
        <b-card>
          <b-form @submit.prevent="submit">
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
            <b-form-group label="User Program">
              <vue-tags-input
                v-model="searchUserProgram"
                :tags="selectedUserProgram"
                class="tag-custom text-15 mb-2"
                :autocomplete-items="filteredUserProgramItems"
                :add-only-from-autocomplete="true"
                @tags-changed="(newTags) => (selectedUserProgram = newTags)"
                placeholder="Type User Program"
              />
            </b-form-group>
            <!-- <b-form-group label="User Program Post">
              <vue-tags-input
                v-model="searchUserProgramPost"
                :tags="selectedUserProgramPost"
                class="tag-custom text-15 mb-2"
                :autocomplete-items="filteredUserProgramPostItems"
                :add-only-from-autocomplete="true"
                @tags-changed="(newTags) => (selectedUserProgramPost = newTags)"
                placeholder="Type User Program Post"
              />
            </b-form-group> -->

            <b-button
              type="submit"
              variant="primary"
              :disabled="submitStatus === 'PENDING'"
              >Assign</b-button
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
// import { required } from "vuelidate/lib/validators";
export default {
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: "Program Task | Assign",
  },
  data() {
    return {
      form: {
        user_id: "",
        // user_program_post_id: "",
        user_program_id: "",
      },
      submitStatus: null,

      searchUser: "",
      selectedUser: [],
      userItems: [],

      searchUserProgram: "",
      selectedUserProgram: [],
      userProgramItems: [],

      // searchUserProgramPost: "",
      // selectedUserProgramPost: [],
      // userProgramPostItems: [],
    };
  },
  watch: {
    selectedUser: "getUserProgram",
    // selectedUserProgram: "getUserProgramPost",
  },
  computed: {
    // User
    filteredUserItems() {
      return this.userItems.filter((u) => {
        return (
          u.text.toLowerCase().indexOf(this.searchUser.toLowerCase()) !== -1
        );
      });
    },
    // User Program
    filteredUserProgramItems() {
      return this.userProgramItems.filter((pt) => {
        return (
          pt.text
            .toLowerCase()
            .indexOf(this.searchUserProgram.toLowerCase()) !== -1
        );
      });
    },
    // // User Program Post
    // filteredUserProgramPostItems() {
    //   return this.userProgramPostItems.filter((pt) => {
    //     return (
    //       pt.text
    //         .toLowerCase()
    //         .indexOf(this.searchUserProgramPost.toLowerCase()) !== -1
    //     );
    //   });
    // },
  },
  // validations: {
  //   form: {
  //     from_date: {
  //       required,
  //     },
  //     to_date: {
  //       required,
  //     },
  //   },
  // },
  mounted() {
    this.form.site_id = this.site.id;
    this.getMasters();
    // this.getUserProgramPost();
  },
  methods: {
    async getMasters() {
      console.log(this.$route.param);
      let masters = await axios.get(`user_ships/masters`);
      masters = masters.data;
      masters.users.forEach((user) => {
        let rank_desc = user.rank ? user.rank.description : "";
        this.userItems.push({
          id: user.id,
          text:
            user.user_name +
            " " +
            user.last_name +
            " (Rank - " +
            rank_desc +
            ") (Danos - " +
            user.unique_id +
            ")",
        });
      });
    },
    // Search User Programs
    async getUserProgram() {
      let userPrograms = await axios.get(
        `user_programs?user_id=${this.selectedUser[0].id}`
      );
      userPrograms = userPrograms.data.data;
      userPrograms.forEach((userProgram) => {
        this.userProgramItems.push({
          id: userProgram.id,
          text: userProgram.program.program_name,
        });
      });
    },
    // // Search User Program Post
    // async getUserProgramPost() {
    //   let userProgramPosts = await axios.get(`user_program_posts?user_id${this.selectedUser[0].id}&user_program_id=${this.selectedUserProgram[0].id}`);
    //   userProgramPosts = userProgramPosts.data.data;
    //   userProgramPosts.forEach((userProgramPost) => {
    //     if (
    //       userProgramPost.user_id == this.selectedUser[0].id &&
    //       userProgramPost.program_id == this.selectedUserProgram[0].id
    //     ) {
    //       this.userProgramPostItems.push({
    //         id: userProgramPost.id,
    //         text: userProgramPost.program_post.post.code,
    //       });
    //       console.log(this.userProgramPostItems);
    //     }
    //   });
    // },
    //   validate form
    async submit() {
      console.log("submit!");
      if (this.selectedUser[0]) {
        this.form.user_id = this.selectedUser[0].id;
      }
      if (this.selectedUserProgram[0]) {
        this.form.user_program_id = this.selectedUserProgram[0].id;
      }
      let dump_program_tasks = await axios.get(
        `/dump_program_tasks?attachment_id=${this.$route.param.dump_program_tasks_id}`
      );
      this.dump_program_tasks = dump_program_tasks.data.data;
      console.log(this.$route.param);
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.submitStatus = "ERROR";
      } else {
        try {
          this.isLoading = true;
          // console.log(this.form);
          // let user_program_task = await axios.post(
          //   `user_programs/${this.user_program.id}/user_program_tasks`,
          //   this.form
          // );
          // this.user_program_task = user_program_task.data.data;
          this.isLoading = false;
          this.submitStatus = "OK";

          // setTimeout(() => {
          // this.$router.push(
          //   `/app/user-program/${this.user_program_task.id}/user-program-tasks/`
          // );
          // this.$router.push(`/app/user-ships/`);
          // }, 1000);
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
