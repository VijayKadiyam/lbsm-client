<template>
  <div class="main-content">
    <breadcumb :page="'List'" :folder="'User Program Posts'" />
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
        :rows="user_program_posts"
      >
        <div slot="table-actions" class="mb-3">
          <b-row>
            <b-button
              class="btn-rounded d-none d-sm-block"
              @click="$router.back()"
              variant="primary"
              ><i class="i-Arrow-Back-3"></i> Back</b-button
            >
            <b-button
              variant="primary"
              class="btn-rounded d-none d-sm-block"
              to="/app/user-program-posts/create"
              ><i class="i-Add text-white mr-2"> </i>Add User Program Post
            </b-button>
          </b-row>
        </div>
        <div slot="table-actions" class="mb-3"></div>

        <template slot="table-row" slot-scope="props">
          <span v-if="props.column.field == 'button'">
            <router-link :to="'/app/user-program-posts/' + props.row.id">
              <i class="i-Eraser-2 text-25 text-success mr-2"></i>
              {{ props.row.button }}</router-link
            >
          </span>
          <span v-if="props.column.field == 'user.first_name'">
            {{ props.row.user.first_name + " " + props.row.user.last_name }}
          </span>
          <span v-if="props.column.field == 'program.program_name'">
            {{ props.row.program.program_name }}
          </span>
          <span v-if="props.column.field == 'program_post.post.description'">
            {{ props.row.program_post.post.description }}
          </span>
          <span v-else-if="props.column.field == 'promotion_date'">
            {{ props.row.promotion_date }}
          </span>
          <span v-else-if="props.column.field == 'remarks'">
            {{ props.row.remarks }}
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
    title: "User Program  Post Listing",
  },
  data() {
    return {
      isLoading: false,
      columns: [
        {
          label: "User",
          field: "user.first_name",
        },
        {
          label: "Program",
          field: "program.program_name",
        },
        {
          label: "Program Post",
          field: "program_post.post.description",
        },
        {
          label: "Promotion Date",
          field: "promotion_date",
          type: "date",
          dateInputFormat: "yyyy-MM-dd",
          dateOutputFormat: "yyyy/MM/dd",
        },
        {
          label: "Remarks",
          field: "remarks",
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
      user_program_posts: [],
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    async getData(page = 1) {
      this.isLoading = true;
      let user_program_posts = await axios.get(`/user_program_posts`);
      this.user_program_posts = user_program_posts.data.data;
      this.count = user_program_posts.data.count;
      this.serialNoStarting = (page - 1) * this.rowsPerPage;
      this.isLoading = false;
    },
  },
};
</script>
<style></style>
