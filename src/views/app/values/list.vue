<template>
  <div class="main-content">
    <breadcumb :page="'Value'" :folder="'Values'" />
    <!-- <div class="wrapper"> -->
    <b-card>
      <vue-good-table
        :columns="columns"
        :line-numbers="true"
        :search-options="{
          enabled: true,
          placeholder: 'Search this table',
        }"
        :pagination-options="{
          enabled: true,
          mode: 'records',
        }"
        styleClass="tableOne vgt-table"
        :rows="values"
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
            variant="primary"
            class="btn-rounded d-none d-sm-block"
            to="/app/values/create"
            ><i class="i-Add text-white mr-2"> </i>Add Value
          </b-button>
          </b-row>
        </div>

        <template slot="table-row" slot-scope="props">
          <span v-if="props.column.field == 'button'">
            <router-link :to="'/app/values/' + props.row.id">
              <i class="i-Eraser-2 text-25 text-success mr-2"></i>
              {{ props.row.button }}</router-link
            >
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
    title: "Value | Lists",
  },
  data() {
    return {
      columns: [
        {
          label: "Name",
          field: "name",
        },
        {
          label: "Action",
          field: "button",
        },
      ],
      values:[],
    };
  },
   mounted() {
    this.getData();
  },
  methods: {
    async getData() {
      this.isLoading = true;
      let values = await axios.get(`values`);
      this.values = values.data.data;
      // this.count = users.data.count;
      // this.serialNoStarting = (page - 1) * this.rowsPerPage;
      this.isLoading = false;
    },
  },
};
</script>
<style >
</style>
