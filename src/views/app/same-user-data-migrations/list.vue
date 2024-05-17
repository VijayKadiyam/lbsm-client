<template>
  <div class="main-content">
    <breadcumb
      :page="'Same User Data Migration'"
      :folder="'Same User Data Migrations'"
    />
    <!-- <div class="wrapper"> -->
    <b-row>
      <b-col md="12" class="mt-4 mb-4">
        <b-card
          title="Users"
          v-if="user.roles[0].id != 6 && user.roles[0].id != 4"
        >
          <b-form-group>
            <b-form-input
              class="mb-2"
              label="Search user name here..."
              placeholder="Enter user name here.."
              @keyup.enter="getData()"
              v-model.trim="user_name"
            >
            </b-form-input>
          </b-form-group>
          <!-- {{ searchingStatus }} -->
          <!-- <div v-if="searchingStatus" class="spinner spinner-primary mr-3"></div> -->
          <!-- <b-progress
            v-if="user_name"
            :value="changeValue"
            :max="max"
            animated
          ></b-progress> -->
        </b-card>
      </b-col>
    </b-row>
    <b-card>
      <vue-good-table
        v-if="user.roles[0].id != 6"
        :columns="columns"
        :line-numbers="true"
        :search-options="{
          enabled: false,
          placeholder: 'Search this table',
        }"
        :isLoading.sync="isLoading"
        :pagination-options="{
          enabled: true,
          mode: 'records',
        }"
        styleClass="tableOne vgt-table"
        :rows="users"
        foot-clone
      >
        <template slot="table-row" slot-scope="props">
          <span v-if="props.column.field == 'id'">
            <input
              type="checkbox"
              name="user_checkbox"
              id=""
              ref="user_checkbox"
              @click="selectedUserMigrationFrom(props.row.id)"
            />
          </span>
        </template>
      </vue-good-table>
      <template>
        <b-row
          v-if="
            Selected_Users.length > 0 &&
            users.length != Selected_Users.length &&
            this.allUsers.length == 1
          "
        >
          <b-col align="right">
            <b-button
              @click="proceed()"
              variant="primary"
              class="btn-rounded d-none d-sm-block mt-4"
              ><i class="text-white mr-2"> </i>Proceed
            </b-button>
          </b-col>
        </b-row>
        <b-row v-if="initial == true">
          <b-col align="center">
            <p
              class="m-0 text-lg w-20 mt-8 pt-3"
              style="color: red; font-size: 20px"
            >
              Note: The chosen candidate will be removed, and all relevant data
              will be transferred to the left candidate.
            </p>
          </b-col>
        </b-row>
        <b-row v-else>
          <b-col
            align="center"
            v-if="initial == false && users.length == Selected_Users.length"
          >
            <p
              class="m-0 text-lg w-20 mt-8 pt-3"
              style="color: red; font-size: 20px"
            >
              Please leave one candidate unselected to proceed further.
            </p>
          </b-col>
        </b-row>
        <b-row v-if="msg != ''">
          <b-col align="center">
            <p
              class="m-0 text-lg w-20 mt-8 pt-3"
              style="color: red; font-size: 20px"
            >
              {{ msg }}
            </p>
          </b-col>
        </b-row>
      </template>
    </b-card>
  </div>
</template>

<script>
import axios from "axios";
export default {
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: "Same User Migrations",
  },
  data() {
    return {
      isLoading: false,
      loading: false,
      initial: true,
      Selected_Users: [],
      user_id: "",
      columns: [
        {
          label: "Select",
          field: "id",
        },
        {
          label: "Name",
          field: "first_name",
        },
        {
          label: "Email",
          field: "email",
        },
        {
          label: "DanosId",
          field: "unique_id",
        },
        {
          label: "Post Rank",
          field: "rank.code",
        },
      ],

      user_name: "",
      msg: "",
      users: [],
      // Progress Bar
      changeValue: 0,
      changeMax: 100,
    };
  },

  methods: {
    async getData() {
      // if (this.user.roles[0].id == 4) {
      this.isLoading = true;
      if (this.user_name != "") {
        let users = await axios.get(`/users?search=${this.user_name}`);
        this.users = users.data.data;
        this.allUsers = this.users;
      }
      console.log(this.users);
      this.isLoading = false;
      // }
    },
    selectedUserMigrationFrom(user_id) {
      const userExists = this.Selected_Users.find((user) => user === user_id);

      if (!userExists) {
        /** If not Selected
         * then Add in Selected Users Array
         * And remove from All Unselected user array  */
        this.Selected_Users.push(user_id); //Push
        this.allUsers = this.allUsers.filter((user) => user.id !== user_id); //remove
      } else {
        /** If already Selected
         * then remove from  Selected Users Array
         * And add in All Unselected user array  */
        this.Selected_Users = this.Selected_Users.filter(
          (user) => user !== user_id
        ); //Remove
        let current_user = this.users.find((u) => u.id === userExists);
        this.allUsers.push(current_user); //push
      }
      console.log(this.Selected_Users);
      // console.log(this.allUsers);
      this.initial = false;
    },
    async proceed() {
      this.isLoading = true;
      console.log(this.allUsers);
      let msg = "";
      if (this.allUsers.length > 1) {
        msg = "More than two users are unselected.";
        this.msg = msg;
      } else {
        this.selectedUserMigrationTo = this.allUsers[0].id;
      }
      await axios.get(
        `/same_user_data_migrations?selectedUserMigrationFrom=${this.Selected_Users}&selectedUserMigrationTo=${this.selectedUserMigrationTo}`
      );
      this.isLoading = false;
    },
  },
};
</script>
