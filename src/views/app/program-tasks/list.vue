<template>
  <div class="main-content">
    <breadcumb :page="'Program Task List'" :folder="'Program Tasks'" />
    <!-- <div class="wrapper"> -->
    <!-- Program Details card -->
    <b-card class="mb-4">
      <div class="content">
        <b-row>
          <b-col md="3">
            <p class="text-muted mt-2 mb-0">Program Name</p>
            <p class="text-primary text-24 line-height-1 mb-2">
              {{ program_tasks[0].program.program_name }}
            </p>
          </b-col>
          <b-col md="3">
            <p class="text-muted mt-2 mb-0">Program Description</p>
            <p class="text-primary text-24 line-height-1 mb-2">
              {{ program_tasks[0].program.program_description }}
            </p>
          </b-col>
          <b-col md="3">
            <p class="text-muted mt-2 mb-0">Instructor</p>
            <p class="text-primary text-24 line-height-1 mb-2">
              {{ program_tasks[0].program.instructor }}
            </p>
          </b-col>
          <b-col md="3">
            <p class="text-muted mt-2 mb-0">Hours</p>
            <p class="text-primary text-24 line-height-1 mb-2">
              {{ program_tasks[0].program.hours }}
            </p>
          </b-col>
        </b-row>
      </div>
    </b-card>
    <!-- /Program Details card -->
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
        :rows="program_tasks"
      >
        <div slot="table-actions" class="mb-3">
          <b-button
            variant="primary"
            class="btn-rounded d-none d-sm-block"
            to="/app/programs/id/program-tasks/create"
            ><i class="i-Add-User text-white mr-2"> </i>Add Program Task
          </b-button>
        </div>

        <template slot="table-row" slot-scope="props">
          <span v-if="props.column.field == 'button'">
            <a href="/app/programs/id/program-tasks/id">
              <i class="i-Eraser-2 text-25 text-success mr-2"></i>
              {{ props.row.button }}</a
            >
            <!-- <a href="">
              <i class="i-Close-Window text-25 text-danger"></i>
              {{ props.row.button }}</a
            > -->
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
    title: "Task Manager",
  },
  data() {
    return {
      foods: ["apple", "orrange"],
      columns: [
        {
          label: "Serial No",
          field: "serial_no",
        },
        {
          label: "Task",
          field: "task",
        },
        {
          label: "Objective",
          field: "objective",
        },
        {
          label: "Material",
          field: "material",
        },
        {
          label: "Process",
          field: "process",
        },
        {
          label: "No Of Contracts",
          field: "no_of_contracts",
        },
        {
          label: "Time Required",
          field: "time_required",
        },
        {
          label: "Total Marks",
          field: "total_marks",
        },
        {
          label: "Passing Marks",
          field: "passing_marks",
        },
        {
          label: "Action",
          field: "button",
          html: true,
          tdClass: "text-right",
          thClass: "text-right",
        },
      ],
      program_tasks: [
        {
          id: 1,
          site_id: 1,
          program_id: 1,
          program: {
            id: 1,
            program_name: "Program 1",
            program_description: "Desc",
            instructor: "inst",
            hours: "3 hrs",
          },
          program_post_id: 2,
          program_post: {
            id: 2,
            serial_no: 12345,
            post_id: 5,
          },
          serial_no: 12345,
          tast: "John",
          objective: "John",
          material: "John",
          process: "process 1",
          no_of_contracts: 5,
          time_required: 30,
          total_marks: 30,
          passing_marks: 30,
        },
        {
          id: 2,
          site_id: 1,
          program_id: 1,
          program: {
            id: 1,
            program_name: "Program 1",
            program_description: "Desc",
            instructor: "inst",
            hours: "3 hrs",
          },
          program_post_id: 2,
          program_post: {
            id: 2,
            serial_no: 12345,
            post_id: 5,
          },
          serial_no: 12345,

          task: "Jane",
          objective: "Jane",
          material: "Jane",
          process: "process 1",
          no_of_contracts: 5,
          time_required: 30,
          total_marks: 30,
          passing_marks: 30,
        },
        {
          id: 3,
          site_id: 1,
          program_id: 1,
          program: {
            id: 1,
            program_name: "Program 1",
            program_description: "Desc",
            instructor: "inst",
            hours: "3 hrs",
          },
          program_post_id: 2,
          program_post: {
            id: 2,
            serial_no: 12345,
            post_id: 5,
          },
          serial_no: 12345,

          task: "Susan",
          objective: "Susan",
          material: "Susan",
          process: "process 1",
          no_of_contracts: 5,
          time_required: 30,
          total_marks: 30,
          passing_marks: 30,
        },
        {
          id: 4,
          site_id: 1,
          program_id: 1,
          program: {
            id: 1,
            program_name: "Program 1",
            program_description: "Desc",
            instructor: "inst",
            hours: "3 hrs",
          },
          program_post_id: 2,
          program_post: {
            id: 2,
            serial_no: 12345,
            post_id: 5,
          },
          serial_no: 12345,

          task: "Chris",
          objective: "Chris",
          material: "Chris",
          process: "process 1",
          no_of_contracts: 5,
          time_required: 30,
          total_marks: 30,
          passing_marks: 30,
        },
        {
          id: 5,
          site_id: 1,
          program_id: 1,
          program: {
            id: 1,
            program_name: "Program 1",
            program_description: "Desc",
            instructor: "inst",
            hours: "3 hrs",
          },
          program_post_id: 2,
          program_post: {
            id: 2,
            serial_no: 12345,
            post_id: 5,
          },
          serial_no: 12345,

          task: "Dan",
          objective: "Dan",
          material: "Dan",
          process: "process 1",
          no_of_contracts: 5,
          time_required: 30,
          total_marks: 30,
          passing_marks: 30,
        },
        {
          id: 6,
          site_id: 1,
          program_id: 1,
          program: {
            id: 1,
            program_name: "Program 1",
            program_description: "Desc",
            instructor: "inst",
            hours: "3 hrs",
          },
          program_post_id: 2,
          program_post: {
            id: 2,
            serial_no: 12345,
            post_id: 5,
          },
          serial_no: 12345,

          task: "John",
          objective: "John",
          material: "John",
          process: "process 1",
          no_of_contracts: 5,
          time_required: 30,
          total_marks: 30,
          passing_marks: 30,
        },
        {
          id: 1,
          site_id: 1,
          program_id: 1,
          program: {
            id: 1,
            program_name: "Program 1",
            program_description: "Desc",
            instructor: "inst",
            hours: "3 hrs",
          },
          program_post_id: 2,
          program_post: {
            id: 2,
            serial_no: 12345,
            post_id: 5,
          },
          serial_no: 12345,

          task: "John",
          objective: "John",
          material: "John",
          process: "process 1",
          no_of_contracts: 5,
          time_required: 30,
          total_marks: 30,
          passing_marks: 30,
        },
        {
          id: 2,
          site_id: 1,
          program_id: 1,
          program: {
            id: 1,
            program_name: "Program 1",
            program_description: "Desc",
            instructor: "inst",
            hours: "3 hrs",
          },
          program_post_id: 2,
          program_post: {
            id: 2,
            serial_no: 12345,
            post_id: 5,
          },
          serial_no: 12345,

          task: "Jane",
          objective: "Jane",
          material: "Jane",
          process: "process 1",
          no_of_contracts: 5,
          time_required: 30,
          total_marks: 30,
          passing_marks: 30,
        },
        {
          id: 3,
          site_id: 1,
          program_id: 1,
          program: {
            id: 1,
            program_name: "Program 1",
            program_description: "Desc",
            instructor: "inst",
            hours: "3 hrs",
          },
          program_post_id: 2,
          program_post: {
            id: 2,
            serial_no: 12345,
            post_id: 5,
          },
          serial_no: 12345,

          task: "Susan",
          objective: "Susan",
          material: "Susan",
          process: "process 1",
          no_of_contracts: 5,
          time_required: 30,
          total_marks: 30,
          passing_marks: 30,
        },
        {
          id: 4,
          site_id: 1,
          program_id: 1,
          program: {
            id: 1,
            program_name: "Program 1",
            program_description: "Desc",
            instructor: "inst",
            hours: "3 hrs",
          },
          program_post_id: 2,
          program_post: {
            id: 2,
            serial_no: 12345,
            post_id: 5,
          },
          serial_no: 12345,

          task: "Chris",
          objective: "Chris",
          material: "Chris",
          process: "process 1",
          no_of_contracts: 5,
          time_required: 30,
          total_marks: 30,
          passing_marks: 30,
        },
        {
          id: 5,
          site_id: 1,
          program_id: 1,
          program: {
            id: 1,
            program_name: "Program 1",
            program_description: "Desc",
            instructor: "inst",
            hours: "3 hrs",
          },
          program_post_id: 2,
          program_post: {
            id: 2,
            serial_no: 12345,
            post_id: 5,
          },
          serial_no: 12345,

          task: "Dan",
          objective: "Dan",
          material: "Dan",
          process: "process 1",
          no_of_contracts: 5,
          time_required: 30,
          total_marks: 30,
          passing_marks: 30,
        },
        {
          id: 6,
          site_id: 1,
          program_id: 1,
          program: {
            id: 1,
            program_name: "Program 1",
            program_description: "Desc",
            instructor: "inst",
            hours: "3 hrs",
          },
          program_post_id: 2,
          program_post: {
            id: 2,
            serial_no: 12345,
            post_id: 5,
          },
          serial_no: 12345,

          task: "John",
          objective: "John",
          material: "John",
          process: "process 1",
          no_of_contracts: 5,
          time_required: 30,
          total_marks: 30,
          passing_marks: 30,
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
<style></style>
