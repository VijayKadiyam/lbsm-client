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
                  {{ user.user_name }}
                </p>
              </b-col>
            </b-row>
            <b-row>
              <b-col md="3">
                <p class="text-muted mt-2 mb-0">First Name</p>
              </b-col>
              <b-col md="9">
                <p class="text-primary text-24 line-height-1 mb-2">
                  {{ user.first_name }}
                </p>
              </b-col>
            </b-row>
            <b-row>
              <b-col md="3">
                <p class="text-muted mt-2 mb-0">Email</p>
              </b-col>
              <b-col md="9">
                <p class="text-primary text-24 line-height-1 mb-2">
                  {{ user.email }}
                </p>
              </b-col>
            </b-row>
            <b-row>
              <b-col md="3">
                <p class="text-muted mt-2 mb-0">Phone</p>
              </b-col>
              <b-col md="9">
                <p class="text-primary text-24 line-height-1 mb-2">
                  {{ user.phone }}
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
                  {{ program.program_name }}
                </p>
              </b-col>
            </b-row>
            <b-row>
              <b-col md="3">
                <p class="text-muted mt-2 mb-0">Program Description</p>
              </b-col>
              <b-col md="9">
                <p class="text-primary text-20 line-height-1 mb-0">
                  {{ program.program_description }}
                </p>
              </b-col>
            </b-row>
            <b-row>
              <b-col md="3">
                <p class="text-muted mt-2 mb-0">Instructor</p>
              </b-col>
              <b-col md="9">
                <p class="text-primary text-20 line-height-1 mb-0">
                  {{ program.instructor }}
                </p>
              </b-col>
            </b-row>
            <b-row>
              <b-col md="3">
                <p class="text-muted mt-2 mb-0">Hours</p>
              </b-col>
              <b-col md="9">
                <p class="text-primary text-20 line-height-1 mb-0">
                  {{ program.hours }}
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
      {{ user_program_tasks }}
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
        :rows="user_program_tasks"
      >
        <div slot="table-actions" class="mb-3">
          <b-button
            variant="primary"
            class="btn-rounded d-none d-sm-block"
            :to="
              '/app/user-program/' +
                user_program.id +
                '/user-program-tasks/create'
            "
            ><i class="i-Add text-white mr-2"> </i>Add User Program Task
          </b-button>
        </div>
        <div slot="table-actions" class="mb-3"></div>

        <template slot="table-row" slot-scope="props">
          <span v-if="props.column.field == 'button'">
            <a
              :href="
                '/app/user-program/' +
                  prop.row.user_program_id +
                  '/user-program-tasks/' +
                  prop.row.id
              "
            >
              <i class="i-Eraser-2 text-25 text-success mr-2"></i>
              {{ props.row.button }}</a
            >
          </span>
          <!-- <span v-if="props.column.field == 'program_task_id'">
            {{ props.row.program_task.task }}
          </span> -->
          <span v-if="props.column.field == 'marks_obtained'">
            {{ props.row.marks_obtained }}
          </span>
          <span v-if="props.column.field == 'is_completed'">
            {{ props.row.is_completed == 0 ? "NO" : "YES" }}
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
import axios from "axios";
export default {
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: "User Program Tasks",
  },
  data() {
    return {
      columns: [
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
        },
        {
          label: "Action",
          field: "button",
        },
      ],
      user: {},
      program: {},
      user_program_tasks: [],
      dummy_data: [
        {
          id: 1,
          site_id: 1,
          user_id: 4,
          program_id: 2,
          program_task_id: 2,
          marks_obtained: 15,
          is_completed: 1,
          completion_date: "2021-10-18",
          created_at: "2021-10-18 18:38:36",
          updated_at: "2021-10-18 18:38:36",
          user_program_id: "1",
          user: {
            id: 4,
            first_name: "aaa",
            middle_name: "mmmm",
            last_name: "llll",
            user_name: "aaaa",
            gender: 0,
            dob: "2021-10-14",
            email: "bb@aaa.ccc",
            api_token: null,
            active: 1,
            image_path: null,
            created_at: "2021-10-16 12:42:30",
            updated_at: "2021-10-16 12:42:30",
          },
          program: {
            id: 2,
            site_id: 1,
            program_name: "ABCA",
            program_description: "ESC",
            instructor: "NMNMN",
            hours: 12,
            created_at: "2021-10-16 12:47:00",
            updated_at: "2021-10-16 12:47:00",
          },
          program_task: {
            id: 2,
            site_id: 1,
            program_id: 2,
            program_post_id: null,
            serial_no: 345678,
            task: "PROGRAMS 2 TASK",
            objective: "ADA",
            material: "GYH",
            process: "DFGDFG",
            no_of_contracts: 0,
            time_required: 0,
            created_at: null,
            updated_at: null,
            total_marks: null,
            passing_marks: null,
          },
        },
        {
          id: 1,
          site_id: 1,
          user_id: 4,
          program_id: 2,
          program_task_id: 2,
          marks_obtained: 15,
          is_completed: 1,
          completion_date: "2021-10-18",
          created_at: "2021-10-18 18:38:36",
          updated_at: "2021-10-18 18:38:36",
          user_program_id: "1",
          user: {
            id: 4,
            first_name: "aaa",
            middle_name: "mmmm",
            last_name: "llll",
            user_name: "aaaa",
            gender: 0,
            dob: "2021-10-14",
            email: "bb@aaa.ccc",
            api_token: null,
            active: 1,
            image_path: null,
            created_at: "2021-10-16 12:42:30",
            updated_at: "2021-10-16 12:42:30",
          },
          program: {
            id: 2,
            site_id: 1,
            program_name: "ABCA",
            program_description: "ESC",
            instructor: "NMNMN",
            hours: 12,
            created_at: "2021-10-16 12:47:00",
            updated_at: "2021-10-16 12:47:00",
          },
          program_task: {
            id: 2,
            site_id: 1,
            program_id: 2,
            program_post_id: null,
            serial_no: 345678,
            task: "PROGRAMS 2 TASK",
            objective: "ADA",
            material: "GYH",
            process: "DFGDFG",
            no_of_contracts: 0,
            time_required: 0,
            created_at: null,
            updated_at: null,
            total_marks: null,
            passing_marks: null,
          },
        },
      ],
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    async getData(page = 1) {
      this.isLoading = true;

      let user_program = await axios.get(
        `/user_programs/${this.$route.params.user_program_id}`
      );
      this.user_program = user_program.data.data;

      let user = await axios.get(`/users/${this.user_program.user_id}`);
      this.user = user.data.data;

      let program = await axios.get(
        `/programs/${this.user_program.program_id}`
      );
      this.program = program.data.data;

      let user_program_tasks = await axios.get(
        `/user_programs/${this.user_program.id}/user_program_tasks`
      );
      this.count = user_program_tasks.data.count;
      this.user_program_tasks = user_program_tasks.data.data;
      this.serialNoStarting = (page - 1) * this.rowsPerPage;
      this.isLoading = false;
    },
  },
};
</script>
<style></style>
