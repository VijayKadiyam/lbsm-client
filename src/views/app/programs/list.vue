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
        :pagination-options="{
          enabled: true,
          mode: 'records',
        }"
        styleClass="tableOne vgt-table"
        :rows="rows"
      >
        <div slot="table-actions" class="mb-3">
        </div>

        <template slot="table-row" slot-scope="props">
          <span v-if="props.column.field == 'button'">
            <a href="/app/programs/id">
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
    title: "Permission Manage",
  },
  data() {
    return {
      // foods: ["apple", "orrange"],
      columns: [
        {
          label: "Sr No",
          field: "sr_no",
        },
        {
          label: "Program Name",
          field: "program_name",
        },
        {
          label: "Program Description",
          field: "program_description",
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
          label: "Action",
          field: "button",
        },
      ],
      rows: [
        {
          program_name: "Program Name - 1",
          program_description: "Program Description 1",
          instructor: "Instructor 1",
          hours: "1",
        },
        {
          program_name: "Program Name - 2",
          program_description: "Program Description 2",
          instructor: "Instructor 2",
          hours: "2",
        },
        {
          program_name: "Program Name - 3",
          program_description: "Program Description 3",
          instructor: "Instructor 3",
          hours: "3",
        },
        {
          program_name: "Program Name - 4",
          program_description: "Program Description 4",
          instructor: "Instructor 4",
          hours: "4",
        },
        {
          program_name: "Program Name - 5",
          program_description: "Program Description 5",
          instructor: "Instructor 5",
          hours: "5",
        },
        {
          program_name: "Program Name - 6",
          program_description: "Program Description 6",
          instructor: "Instructor 6",
          hours: "6",
        },
        {
          program_name: "Program Name - 7",
          program_description: "Program Description 7",
          instructor: "Instructor 7",
          hours: "7",
        },
        {
          program_name: "Program Name - 8",
          program_description: "Program Description 8",
          instructor: "Instructor 8",
          hours: "8",
        },
        {
          program_name: "Program Name - 9",
          program_description: "Program Description 9",
          instructor: "Instructor 9",
          hours: "9",
        },
        {
          program_name: "Program Name - 10",
          program_description: "Program Description 10",
          instructor: "Instructor 10",
          hours: "10",
        },
        
      ],
    };
  },
  methods: {
    addFile() {
      console.log("hello");
    },
  },
};
</script>
<style >
</style>