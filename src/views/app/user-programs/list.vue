<template>
  <div class="main-content">
    <breadcumb :page="'List'" :folder="'User Programs'" />
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
        :rows="user_programs"
      >
        <div slot="table-actions" class="mb-3">
          <b-row>
            <b-button
              @click="$router.back()"
              class="btn-rounded d-none d-sm-block"
              variant="primary"
              ><i class="i-Arrow-Back-3"></i> Back</b-button
            >
            <b-button
              v-if="user.roles[0].name != 'Acting Admin'"
              variant="primary"
              class="btn-rounded d-none d-sm-block"
              to="/app/user-programs/create"
              ><i class="i-Add text-white mr-2"> </i>Add User Program
            </b-button>
          </b-row>
        </div>
        <div slot="table-actions" class="mb-3"></div>

        <template slot="table-row" slot-scope="props">
          <span v-if="props.column.field == 'button'">
            <router-link
              :to="'/app/user-programs/' + props.row.id"
              v-if="user.roles[0].name != 'Acting Admin'"
            >
              <i class="i-Eraser-2 text-25 text-success mr-2"></i>
              {{ props.row.button }}</router-link
            >
          </span>
          <span v-if="props.column.field == 'user_name' && props.row.user">
            {{
              props.row.user.first_name + " " + props.row.user.last_name || ""
            }}
          </span>
          <!-- <span v-if="props.column.field == 'rank' && props.row.user">
            {{ props.row.user.rank|| "" }}
          </span> -->
          <span
            v-if="props.column.field == 'program_name' && props.row.program"
          >
            {{ props.row.program.program_name || "" }}
          </span>
          <span v-else-if="props.column.field == 'enrollment_date'">
            {{ props.row.enrollment_date }}
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
    title: "User Program List",
  },
  data() {
    return {
      isLoading: false,
      columns: [
        {
          label: "User Name",
          field: "user_name",
        },
        // {
        //   label: "Rank",
        //   field: "rank",
        // },
        {
          label: "Program Name",
          field: "program_name",
        },
        {
          label: "Enrollment Date",
          field: "enrollment_date",
          type: "date",
          dateInputFormat: "yyyy-MM-dd",
          dateOutputFormat: "yyyy/MM/dd",
        },
        {
          label: "Active",
          field: "active",
        },
        {
          label: "Action",
          field: "button",
        },
      ],
      user_programs: [],
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    async getData(page = 1) {
      this.isLoading = true;
      let user_programs = await axios.get(`/user_programs`);
      this.user_programs = user_programs.data.data;
      this.count = user_programs.data.count;
      this.serialNoStarting = (page - 1) * this.rowsPerPage;
      this.isLoading = false;
    },
  },
};
</script>
<style></style>
