<template>
  <div class="main-content">
    <breadcumb :page="'User Program Task'" :folder="'User Program Tasks'" />
    <!-- User & Program Details Card -->
    <b-row>
      <b-col md="6">
        <b-card class="mb-4">
          <div class="content">
            <b-row>
              <b-col md="3">
                <p class="text-muted mt-2 mb-0">User Name</p>
              </b-col>
              <b-col md="9">
                <p class="text-primary text-24 line-height-1 mb-2">
                  {{ user_program_tasks[0].user.user_name }}
                </p>
              </b-col>
            </b-row>
            <b-row>
              <b-col md="3">
                <p class="text-muted mt-2 mb-0">First Name</p>
              </b-col>
              <b-col md="9">
                <p class="text-primary text-24 line-height-1 mb-2">
                  {{ user_program_tasks[0].user.first_name }}
                </p>
              </b-col>
            </b-row>
            <b-row>
              <b-col md="3">
                <p class="text-muted mt-2 mb-0">Email</p>
              </b-col>
              <b-col md="9">
                <p class="text-primary text-24 line-height-1 mb-2">
                  {{ user_program_tasks[0].user.email }}
                </p>
              </b-col>
            </b-row>
            <b-row>
              <b-col md="3">
                <p class="text-muted mt-2 mb-0">Phone</p>
              </b-col>
              <b-col md="9">
                <p class="text-primary text-24 line-height-1 mb-2">
                  {{ user_program_tasks[0].user.phone }}
                </p>
              </b-col>
            </b-row>
          </div>
        </b-card>
      </b-col>
      <b-col md="6">
        <b-card class="mb-4">
          <div class="content">
            <b-row>
              <b-col md="3">
                <p class="text-muted mt-2 mb-0">Program Name</p>
              </b-col>
              <b-col md="9">
                <p class="text-primary text-20 line-height-1 mb-0">
                  {{ user_program_tasks[0].program.program_name }}
                </p>
              </b-col>
            </b-row>
            <b-row>
              <b-col md="3">
                <p class="text-muted mt-2 mb-0">Program Description</p>
              </b-col>
              <b-col md="9">
                <p class="text-primary text-20 line-height-1 mb-0">
                  {{ user_program_tasks[0].program.program_description }}
                </p>
              </b-col>
            </b-row>
            <b-row>
              <b-col md="3">
                <p class="text-muted mt-2 mb-0">Instructor</p>
              </b-col>
              <b-col md="9">
                <p class="text-primary text-20 line-height-1 mb-0">
                  {{ user_program_tasks[0].program.instructor }}
                </p>
              </b-col>
            </b-row>
            <b-row>
              <b-col md="3">
                <p class="text-muted mt-2 mb-0">Hours</p>
              </b-col>
              <b-col md="9">
                <p class="text-primary text-20 line-height-1 mb-0">
                  {{ user_program_tasks[0].program.hours }}
                </p>
              </b-col>
            </b-row>
          </div>
        </b-card>
      </b-col>
    </b-row>
    <!-- /User & Program Details card -->
    <!-- <div class="wrapper"> -->
    <b-card>
      <vue-good-table
        :columns="columns"
        :line-numbers="true"
        :search-options="{
          enabled: false,
          placeholder: 'Search this table',
        }"
        :pagination-options="{
          enabled: true,
          mode: 'records',
        }"
        styleClass="tableOne vgt-table"
        :rows="user_program_tasks"
      >
        <div slot="table-actions" class="mb-3">
          <b-button
            variant="primary"
            class="btn-rounded d-none d-sm-block"
            to="/app/user-program/id/user-program-tasks/create"
            ><i class="i-Add text-white mr-2"> </i>Add User Program Task
          </b-button>
        </div>
        <div slot="table-actions" class="mb-3"></div>

        <template slot="table-row" slot-scope="props">
          <span v-if="props.column.field == 'button'">
            <b-button
              variant="primary"
              class="btn-rounded d-none d-sm-block"
              href="/app/user-program/id/user-program-tasks/id"
              ><i class="i-Add text-white mr-2"></i>
            </b-button>
          </span>
          <span v-if="props.column.field == 'program_task'">
            {{ props.row.program_task.task }}
          </span>
          <span v-if="props.column.field == 'marks_obtained'">
            {{ props.row.marks_obtained }}
          </span>
          <span v-if="props.column.field == 'is_completed'">
            {{ props.row.is_completed==0?"NO":"YES" }}
          </span>
          <span v-if="props.column.field == 'completion_date'">
            {{ props.row.completion_date }}
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
    title: "User Program Tasks",
  },
  data() {
    return {
      // foods: ["apple", "orrange"],
      columns: [
        {
          label: "Program Task",
          field: "program_task",
        },
        {
          label: "Marks Obtained",
          field: "marks_obtained",
        },
        {
          label: "is Completed",
          field: "is_completed",
        },
        {
          label: "Completion Date",
          field: "completion_date",
          type:"date",
          dateInputFormat: "yyyy/MM/dd",
          dateOutputFormat: "yyyy-MM-dd",
        },
        {
          label: "Action",
          field: "button",
        },
      ],

      user_program_tasks: [
        {
          id: 1,
          site_id: 1,
          user_id: 1,
          user: {
            id: 1,
            avatar: require("@/assets/images/faces/1.jpg"),
            first_name: "John",
            middle_name: "John",
            last_name: "John",
            user_name: "John",
            gender: 0,
            dob: "1997-03-30",
            email: "jhonwick_23@gmail.com",
            phone: "+88012378478",
          },
          program_id: 1,
          program: {
            program_name: "Program Name - 10",
            program_description: "Program Description 10",
            instructor: "Instructor 10",
            hours: "10",
          },
          program_task_id: 1,
          program_task: {
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
          marks_obtained: 100,
          is_completed: 0,
          completion_date: "2021/01/02",
        },
        {
          id: 1,
          site_id: 1,
          user_id: 1,
          user: {
            id: 1,
            avatar: require("@/assets/images/faces/1.jpg"),
            first_name: "John",
            middle_name: "John",
            last_name: "John",
            user_name: "John",
            gender: 0,
            dob: "1997-03-30",
            email: "jhonwick_23@gmail.com",
            phone: "+88012378478",
          },
          program_id: 1,
          program: {
            program_name: "Program Name - 10",
            program_description: "Program Description 10",
            instructor: "Instructor 10",
            hours: "10",
          },
          program_task_id: 1,
          program_task: {
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
          marks_obtained: 100,
          is_completed: 0,
          completion_date: "2021/01/02",
        },
        {
          id: 1,
          site_id: 1,
          user_id: 1,
          user: {
            id: 1,
            avatar: require("@/assets/images/faces/1.jpg"),
            first_name: "John",
            middle_name: "John",
            last_name: "John",
            user_name: "John",
            gender: 0,
            dob: "1997-03-30",
            email: "jhonwick_23@gmail.com",
            phone: "+88012378478",
          },
          program_id: 1,
          program: {
            program_name: "Program Name - 10",
            program_description: "Program Description 10",
            instructor: "Instructor 10",
            hours: "10",
          },
          program_task_id: 1,
          program_task: {
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
          marks_obtained: 100,
          is_completed: 0,
          completion_date: "2021/01/02",
        },
        {
          id: 1,
          site_id: 1,
          user_id: 1,
          user: {
            id: 1,
            avatar: require("@/assets/images/faces/1.jpg"),
            first_name: "John",
            middle_name: "John",
            last_name: "John",
            user_name: "John",
            gender: 0,
            dob: "1997-03-30",
            email: "jhonwick_23@gmail.com",
            phone: "+88012378478",
          },
          program_id: 1,
          program: {
            program_name: "Program Name - 10",
            program_description: "Program Description 10",
            instructor: "Instructor 10",
            hours: "10",
          },
          program_task_id: 1,
          program_task: {
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
          marks_obtained: 100,
          is_completed: 0,
          completion_date: "2021/01/02",
        },
        {
          id: 1,
          site_id: 1,
          user_id: 1,
          user: {
            id: 1,
            avatar: require("@/assets/images/faces/1.jpg"),
            first_name: "John",
            middle_name: "John",
            last_name: "John",
            user_name: "John",
            gender: 0,
            dob: "1997-03-30",
            email: "jhonwick_23@gmail.com",
            phone: "+88012378478",
          },
          program_id: 1,
          program: {
            program_name: "Program Name - 10",
            program_description: "Program Description 10",
            instructor: "Instructor 10",
            hours: "10",
          },
          program_task_id: 1,
          program_task: {
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
          marks_obtained: 100,
          is_completed: 0,
          completion_date: "2021/01/02",
        },
        {
          id: 1,
          site_id: 1,
          user_id: 1,
          user: {
            id: 1,
            avatar: require("@/assets/images/faces/1.jpg"),
            first_name: "John",
            middle_name: "John",
            last_name: "John",
            user_name: "John",
            gender: 0,
            dob: "1997-03-30",
            email: "jhonwick_23@gmail.com",
            phone: "+88012378478",
          },
          program_id: 1,
          program: {
            program_name: "Program Name - 10",
            program_description: "Program Description 10",
            instructor: "Instructor 10",
            hours: "10",
          },
          program_task_id: 1,
          program_task: {
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
          marks_obtained: 100,
          is_completed: 0,
          completion_date: "2021/01/02",
        },
        {
          id: 1,
          site_id: 1,
          user_id: 1,
          user: {
            id: 1,
            avatar: require("@/assets/images/faces/1.jpg"),
            first_name: "John",
            middle_name: "John",
            last_name: "John",
            user_name: "John",
            gender: 0,
            dob: "1997-03-30",
            email: "jhonwick_23@gmail.com",
            phone: "+88012378478",
          },
          program_id: 1,
          program: {
            program_name: "Program Name - 10",
            program_description: "Program Description 10",
            instructor: "Instructor 10",
            hours: "10",
          },
          program_task_id: 1,
          program_task: {
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
          marks_obtained: 100,
          is_completed: 0,
          completion_date: "2021/01/02",
        },
        {
          id: 1,
          site_id: 1,
          user_id: 1,
          user: {
            id: 1,
            avatar: require("@/assets/images/faces/1.jpg"),
            first_name: "John",
            middle_name: "John",
            last_name: "John",
            user_name: "John",
            gender: 0,
            dob: "1997-03-30",
            email: "jhonwick_23@gmail.com",
            phone: "+88012378478",
          },
          program_id: 1,
          program: {
            program_name: "Program Name - 10",
            program_description: "Program Description 10",
            instructor: "Instructor 10",
            hours: "10",
          },
          program_task_id: 1,
          program_task: {
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
          marks_obtained: 100,
          is_completed: 0,
          completion_date: "2021/01/02",
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
