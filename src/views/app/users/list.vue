<template>
  <div class="main-content">
    <breadcumb :page="'User List'" :folder="'Users'" />
    <!-- <div class="wrapper"> -->
    <b-card>
      <vue-good-table
        :columns="columns"
        :line-numbers="true"
        :search-options="{
          enabled: true,
          placeholder: 'Search this table',
        }"
        :isLoading.sync="isLoading"
        :pagination-options="{
          enabled: true,
          mode: 'records',
        }"
        styleClass="tableOne vgt-table"
        :rows="users"
      >
        <div slot="table-actions" class="mb-3">
          <b-row>
            <router-link
              tag="a"
              class
              to="/app/users/upload"
              v-if="user.roles[0].name != 'Acting Admin'"
            >
              <i class="i-Upload text-25 text-success mr-2"></i
            ></router-link>
            <b-button
              @click="$router.back()"
              variant="primary"
              class="btn-rounded d-none d-sm-block mr-2"
              ><i class="i-Arrow-Back-3"></i> BACK</b-button
            >

            <b-button
              v-if="user.roles[0].name != 'Acting Admin'"
              variant="primary"
              class="btn-rounded d-none d-sm-block"
              to="/app/users/create"
              ><i class="i-Add text-white mr-2"> </i>Add User
            </b-button>
          </b-row>
        </div>

        <template slot="table-row" slot-scope="props">
          <span v-if="props.column.field == 'button'">
            <router-link
              :to="'/app/users/' + props.row.id"
              v-if="user.roles[0].name != 'Acting Admin'"
            >
              <i class="i-Eraser-2 text-25 text-success mr-2"></i>
              {{ props.row.button }}</router-link
            >
          </span>
          <span v-else-if="props.column.field == 'gender'">
            {{ props.row.gender == 0 ? "MALE" : "FEMALE" }}
          </span>
          <span v-else-if="props.column.field == 'rank' && props.row.rank">
            {{ props.row.rank.description.toUpperCase() }}
          </span>
          <span v-else-if="props.column.field == 'first_name'">
            {{ props.row.first_name.toUpperCase() }}
          </span>
          <span v-else-if="props.column.field == 'last_name'">
            {{ props.row.last_name ? props.row.last_name.toUpperCase() : "" }}
          </span>
          <span v-else-if="props.column.field == 'nationality'">
            {{
              props.row.nationality ? props.row.nationality.toUpperCase() : ""
            }}
          </span>
          <span v-else-if="props.column.field == 'email'">
            {{ props.row.email ? props.row.email.toUpperCase() : "" }}
          </span>
          <span v-else-if="props.column.field == 'active'">
            {{ props.row.active == 1 ? "YES" : "NO" }}
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
    title: "User Lits",
  },
  data() {
    return {
      isLoading: false,
      columns: [
        {
          label: "First Name",
          field: "first_name",
        },
        {
          label: "Last Name",
          field: "last_name",
        },
        {
          label: "Rank",
          field: "rank",
        },
        {
          label: "Nationality",
          field: "nationality",
        },
        {
          label: "Danos ID",
          field: "unique_id",
        },
        {
          label: "Gender",
          field: "gender",
        },
        {
          label: "Email",
          field: "email",
        },
        {
          label: "Active",
          field: "active",
        },
        {
          label: "Action",
          field: "button",
          html: true,
          tdClass: "text-right",
          thClass: "text-right",
        },
      ],
      users: [],
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    async getData() {
      this.isLoading = true;
      let users = await axios.get(`users`);
      this.users = users.data.data;
      // this.count = users.data.count;
      // this.serialNoStarting = (page - 1) * this.rowsPerPage;
      this.isLoading = false;
    },
  },
};
</script>
<style></style>
