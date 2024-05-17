<template>
  <div class="main-content">
    <breadcumb :page="'Programs | List'" :folder="'Programs'" />
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
        :rows="programs"
      >
        <div slot="table-actions" class="mb-3">
          <b-row>
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
              to="/app/programs/create"
              ><i class="i-Add text-white mr-2"> </i>Add Program
            </b-button>
          </b-row>
        </div>
        <div slot="table-actions" class="mb-3"></div>

        <template slot="table-row" slot-scope="props">
          <span v-if="props.column.field == 'button'">
            <router-link
              :to="'/app/programs/' + props.row.id"
              v-if="user.roles[0].name != 'Acting Admin'"
            >
              <i class="i-Eraser-2 text-25 text-success mr-2"></i>
              {{ props.row.button }}</router-link
            >
            <router-link
              :to="'/app/programs/' + props.row.id + '/program-tasks'"
              v-if="user.roles[0].name != 'Acting Admin'"
            >
              <i class="i-Add text-25 text-success mr-2"></i>
            </router-link>
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
    title: "Program List",
  },
  data() {
    return {
      isLoading: false,
      columns: [
        {
          label: "Program Name",
          field: "program_name",
        },
        {
          label: "Program Description",
          field: "program_description",
        },
        {
          label: "Short Name",
          field: "short_name",
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
          label: "Active",
          field: "active",
        },
        {
          label: "Action",
          field: "button",
        },
      ],
      programs: [],
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    async getData(page = 1) {
      this.isLoading = true;
      let programs = await axios.get(`/programs`);
      this.programs = programs.data.data;
      this.count = programs.data.count;
      this.serialNoStarting = (page - 1) * this.rowsPerPage;
      this.isLoading = false;
    },
  },
};
</script>
<style></style>
