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
          placeholder: 'Search this table'
        }"
        :pagination-options="{
          enabled: true,
          mode: 'records'
        }"
        styleClass="tableOne vgt-table"
        :rows="rows"
      >
        <div slot="table-actions" class="mb-3">
          <b-button variant="primary" class="btn-rounded d-none d-sm-block"  to="/app/values/create"
            ><i class="i-Add-User text-white mr-2"> </i>Add Value
          </b-button>
        </div>

        <template slot="table-row" slot-scope="props">
          <span v-if="props.column.field == 'button'">
            <a href="/app/values/id">
              <i class="i-Eraser-2 text-25 text-success mr-2"></i>
              {{ props.row.button }}</a
            >
          </span>
        </template>
      </vue-good-table>
    </b-card>
  </div>
</template>

<script>
export default {
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: "Value | Lists"
  },
  data() {
    return {
      foods: ["apple", "orrange"],
      columns: [
        {
          label: "Name",
          field: "name"
        },
        {
          label: "Action",
          field: "button",
        }
      ],
      rows: [
        {
          id: 1,
          name: "CIty",
        },
        {
          id: 2,
          name: "State",
         
        },
        {
          id: 3,
          name: "Category",
         
        },
        {
          id: 4,
          name: "Department",
        },
        {
          id: 5,
          name: "Country",
        },
      ]
    };
  },
  methods: {
    addFile() {
      console.log("hello");
    }
  }
};
</script>
<style >
</style>
