<template>
  <div class="main-content">
    <breadcumb :page="'User Ship'" :folder="'User Ships'" />
    <!-- User & Program Details Card -->

    <!-- /User & Program Details card -->
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
        :rows="user_ships"
      >
        <div slot="table-actions" class="mb-3">
          <b-button
            variant="primary"
            class="btn-rounded d-none d-sm-block"
            :to="'/app/user-ships/create'"
            ><i class="i-Add text-white mr-2"> </i>Add User Ship
          </b-button>
        </div>
        <div slot="table-actions" class="mb-3"></div>

        <template slot="table-row" slot-scope="props">
          <span v-if="props.column.field == 'button'">
            <a :href="'/app/user-ships/' + props.row.id">
              <i class="i-Eraser-2 text-25 text-success mr-2"></i>
              {{ props.row.button }}</a
            >
          </span>
          <!-- <span v-if="props.column.field == 'first_name' && props.row.first_name">
            {{ props.row.first_name }}
          </span>
          <span v-if="props.column.field == 'ship' && props.row.ship">
            {{ props.row.ship.description }}
          </span>
          <span v-if="props.column.field == 'ship' && props.row.ship">
            {{ props.row.ship.description }}
          </span>
          <span v-if="props.column.field == 'ship' && props.row.ship">
            {{ props.row.ship.description }}
          </span>
          <span v-if="props.column.field == 'ship' && props.row.ship">
            {{ props.row.ship.description }}
          </span>
          <span v-if="props.column.field == 'ship' && props.row.ship">
            {{ props.row.ship.description }}
          </span> -->
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
    title: "User Ship",
  },
  data() {
    return {
      columns: [
        {
          label: "Fisrt Name",
          field: "user.first_name",
        },
        {
          label: "Last Name",
          field: "user.last_name",
        },
        {
          label: "Danos ID",
          field: "user.unique_id",
        },
        {
          label: "Rank",
          field: "user.rank.description",
        },
        {
          label: "Ship",
          field: "ship.description",
        },
        {
          label: "From Date",
          field: "from_date",
        },
        {
          label: "To Date",
          field: "to_date",
        },
        {
          label: "Action",
          field: "button",
        },
      ],
      user_ships: [],
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    async getData() {
      this.isLoading = true;

      // User Program Task log
      let user_ships = await axios.get(`/user_ships`);
      this.user_ships = user_ships.data.data;
      // this.serialNoStarting = (page - 1) * this.rowsPerPage;
      this.isLoading = false;
    },
  },
};
</script>
<style></style>
