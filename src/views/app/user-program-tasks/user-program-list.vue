<template>
  <div class="main-content">
    <breadcumb :page="'User Program Task'" :folder="'User Program Tasks'" />
    <!-- <div class="wrapper"> -->
    <b-row>
      <b-col md="12" class="mt-4 mb-4">
        <b-card title="Ship" v-if="user.roles[0].id == 6">
          <vue-tags-input
            v-model="searchShip"
            :tags="selectedShip"
            class="tag-custom text-15 mb-2"
            :autocomplete-items="filteredShipItems"
            :add-only-from-autocomplete="true"
            @tags-changed="(newTags) => (selectedShip = newTags)"
            placeholder="Type Ship Name"
          />
          <!-- {{ searchingStatus }} -->
          <!-- <div v-if="searchingStatus" class="spinner spinner-primary mr-3"></div> -->
          <b-progress
            v-if="searchingStatus"
            :value="changeValue"
            :max="max"
            animated
          ></b-progress>
        </b-card>
        <b-card
          title="Users"
          v-if="user.roles[0].id != 6 && user.roles[0].id != 4"
        >
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
          <!-- {{ searchingStatus }} -->
          <!-- <div v-if="searchingStatus" class="spinner spinner-primary mr-3"></div> -->
          <b-progress
            v-if="searchingStatus"
            :value="changeValue"
            :max="max"
            animated
          ></b-progress>
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
        :rows="user_programs"
        foot-clone
      >
        <template slot="table-row" slot-scope="props">
          <span v-if="props.column.field == 'button'">
            <b-button
              variant="primary"
              class="btn-rounded d-none d-sm-block"
              :to="'/app/user-program/' + props.row.id + '/user-program-tasks'"
              ><i class="i-Eye text-white mr-2"> View Tasks</i>
            </b-button>
          </span>
          <span v-if="props.column.field == 'program'">
            {{ props.row.program.program_name || "" }}
          </span>
          <span v-if="props.column.field == 'description'">
            {{ props.row.program.program_description || "" }}
          </span>
          <span v-if="props.column.field == 'instructor'">
            {{ props.row.program.instructor || "" }}
          </span>
          <span v-if="props.column.field == 'hours'">
            {{ props.row.program.hours || "" }}
          </span>
        </template>
      </vue-good-table>
      <vue-good-table
        v-if="user.roles[0].id == 6"
        :columns="usercolumns"
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
        :rows="user_program_tasks"
        foot-clone
      >
        <template slot="table-row" slot-scope="props">
          <span v-if="props.column.field == 'button'">
            <b-button
              variant="primary"
              class="btn-rounded d-none d-sm-block"
              :to="'/app/user-program/' + props.row.id + '/user-program-tasks'"
              ><i class="i-Eye text-white mr-2"> View Tasks</i>
            </b-button>
          </span>
          <span v-if="props.column.field == 'user'">
            {{
              props.row.user.first_name + " " + props.row.user.last_name || ""
            }}
          </span>
          <span v-if="props.column.field == 'rank'">
            {{ props.row.user.rank.description || "" }}
          </span>
          <span v-if="props.column.field == 'sign_on'">
            {{ props.row.from_date || "" }}
          </span>
          <span v-if="props.column.field == 'sign_off'">
            {{ props.row.to_date || "" }}
          </span>
          <span v-if="props.column.field == 'program'">
            {{ props.row.user.user_programs[0].program.program_name || "" }}
          </span>
        </template>
      </vue-good-table>
    </b-card>
  </div>
</template>

<script>
import axios from "axios";
export default {
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: "User Program Tasks",
  },
  data() {
    return {
      isLoading: false,
      loading: false,
      columns: [
        {
          label: "Program Name",
          field: "program",
        },
        {
          label: "Description",
          field: "description",
        },
        {
          label: "Instructor",
          field: "instructor",
        },
        {
          label: "Hours",
          field: "hours",
        },
        {
          label: "Task Detail",
          field: "button",
        },
      ],
      usercolumns: [
        {
          label: "Candidate Name",
          field: "user",
        },
        {
          label: "Rank",
          field: "rank",
        },
        {
          label: "Sign on",
          field: "sign_on",
        },
        {
          label: "Sign Off",
          field: "sign_off",
        },
        {
          label: "Program Name",
          field: "program",
        },
        {
          label: "Task Detail",
          field: "button",
        },
      ],
      searchingStatus: "",
      user_programs: [],
      user_program_tasks: [],
      //   auto complete
      searchUser: "",
      selectedUser: [],
      userItems: [],

      searchShip: "",
      selectedShip: [],
      shipItems: [],

      // Progress Bar
      changeValue: 0,
      changeMax: 100,
    };
  },
  watch: {
    selectedUser: "searchUserProgram",
    selectedShip: "searchShipUserProgram",
  },
  computed: {
    filteredUserItems() {
      return this.userItems.filter((u) => {
        return (
          u.text.toLowerCase().indexOf(this.searchUser.toLowerCase()) !== -1
        );
      });
    },
    filteredShipItems() {
      return this.shipItems.filter((pt) => {
        return (
          pt.text.toLowerCase().indexOf(this.searchShip.toLowerCase()) !== -1
        );
      });
    },
  },
  mounted() {
    // this.form.site_id = this.site.id;
    if (this.user.roles[0].id == 4) {
      this.getData();
    }
    this.getMasters();
  },
  methods: {
    async getMasters() {
      this.isLoading = true;
      let users = await axios.get(`users`);
      this.users = users.data.data;

      // User
      this.users.forEach((user) => {
        let rank_desc = user.rank ? user.rank.description : "";
        if (user.last_name != null) {
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
        } else {
          this.userItems.push({
            id: user.id,
            text:
              user.user_name +
              " " +
              " (Rank - " +
              rank_desc +
              ") (Danos - " +
              user.unique_id +
              ")",
          });
        }
      });

      let masters = await axios.get(`user_program_tasks/masters`);
      masters = masters.data;
      masters.ships.forEach((ship) => {
        this.shipItems.push({
          id: ship.id,
          text: ship.description,
        });
      });

      this.isLoading = false;
    },
    async searchUserProgram() {
      this.isLoading = true;
      this.savingStatus = "";
      this.searchingStatus = "Searching...";
      this.changeValue = 50;

      if (this.selectedUser.length > 0) {
        this.changeValue = 100;

        this.user_Id = this.selectedUser[0].id;
        let user_programs = await axios.get(
          `/user_programs?search=${this.user_Id}`
        );
        this.user_programs = user_programs.data.data;
      } else {
        this.user_programs = [];
      }
      this.searchingStatus = "";
      this.isLoading = false;
    },
    async getData() {
      if (this.user.roles[0].id == 4) {
        this.isLoading = true;
        this.user_Id = this.user.id;
        let user_programs = await axios.get(
          `/user_programs?search=${this.user_Id}`
        );
        this.user_programs = user_programs.data.data;
        console.log(this.user_programs);
        this.isLoading = false;
      }
    },
    async searchShipUserProgram() {
      this.isLoading = true;
      this.savingStatus = "";
      this.searchingStatus = "Searching...";
      this.changeValue = 50;

      if (this.selectedShip.length > 0) {
        this.changeValue = 100;

        this.ship_Id = this.selectedShip[0].id;
        let user_program_tasks = await axios.get(
          `/user_program_task_users?search=${this.ship_Id}`
        );
        this.user_program_tasks = user_program_tasks.data.data;

        console.log(this.user_program_tasks);
      } else {
        this.user_program_tasks = [];
      }
      this.searchingStatus = "";
      this.isLoading = false;
    },
  },
};
</script>
<style></style>
