<template>
  <div class="main-content">
    <breadcumb :page="'User Program Task'" :folder="'User Program Tasks'" />
    <!-- User & Program Details Card -->

    <b-card>
      <b-row>
        <b-col md="5">
          <b-form-group label="From Date">
            <b-form-datepicker
              id="from_date"
              v-model="report.from_date"
              class="mb-2"
              placeholder="From Date"
            ></b-form-datepicker>
          </b-form-group>
        </b-col>
        <b-col md="5">
          <b-form-group label="To Date">
            <b-form-datepicker
              id="to_date"
              v-model="report.to_date"
              class="mb-2"
              placeholder="To Date"
            ></b-form-datepicker>
          </b-form-group>
        </b-col>

        <b-col md="2">
          <br />
          <b-button
            variant="primary"
            class="btn-rounded d-none d-sm-block"
            v-if="(is_generating = true)"
            @click="generatePDF(user.id)"
          >
            <span v-if="user_reports == 0"> Generate Report </span>
            <span v-else> Download Report </span>
          </b-button>
          <div
            v-if="generateStatus"
            class="spinner spinner-primary"
            style="float: right; margin-top: -40px"
          ></div>
        </b-col>
      </b-row>
    </b-card>
    <br />
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
                <p class="text-muted mt-2 mb-0">Last Name</p>
              </b-col>
              <b-col md="9">
                <p class="text-primary text-24 line-height-1 mb-2">
                  {{ user.last_name }}
                </p>
              </b-col>
            </b-row>
            <b-row>
              <b-col md="3">
                <p class="text-muted mt-2 mb-0">Rank</p>
              </b-col>
              <b-col md="9">
                <p class="text-primary text-24 line-height-1 mb-2">
                  {{ user.rank ? user.rank.description : "" }}
                </p>
              </b-col>
            </b-row>
            <b-row>
              <b-col md="3">
                <p class="text-muted mt-2 mb-0">Danos</p>
              </b-col>
              <b-col md="9">
                <p class="text-primary text-24 line-height-1 mb-2">
                  {{ user.unique_id }}
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
    <b-row>
      <b-col md="12">
        <b-card class="mb-4">
          <div
            class="content"
            v-for="(user_ship, at) in user_ships"
            :key="`userShip${at}`"
          >
            <b-row>
              <b-col md="4"
                ><b-col md="4">
                  <p class="text-muted mt-2 mb-0">Vessel Name</p>
                </b-col>
                <b-col md="8">
                  <p class="text-primary text-18 line-height-1 mb-2">
                    {{
                      user_ship.ship.description
                        ? user_ship.ship.description
                        : 0
                    }}
                  </p>
                </b-col></b-col
              >
              <b-col md="4"
                ><b-col md="4">
                  <p class="text-muted mt-2 mb-0">From Date</p>
                </b-col>
                <b-col md="8">
                  <p class="text-primary text-18 line-height-1 mb-2">
                    {{ user_ship.from_date ? user_ship.from_date : "" }}
                  </p>
                </b-col>
              </b-col>
              <b-col md="4"
                ><b-col md="4">
                  <p class="text-muted mt-2 mb-0">To date</p>
                </b-col>
                <b-col md="8">
                  <p class="text-primary text-18 line-height-1 mb-2">
                    {{ user_ship.to_date ? user_ship.to_date : "" }}
                  </p>
                </b-col>
              </b-col>
            </b-row>
          </div>
        </b-card>
      </b-col>
    </b-row>
    <b-row>
      <b-col md="12">
        <b-card class="mb-4">
          <div class="content">
            <b-row>
              <b-col md="4"
                ><b-col md="8">
                  <p class="text-muted mt-2 mb-0">Task Completed</p>
                </b-col>
                <b-col md="4">
                  <p class="text-primary text-24 line-height-1 mb-2">
                    {{ total_completed_task ? total_completed_task : 0 }}
                  </p>
                </b-col></b-col
              >
              <b-col md="4"
                ><b-col md="8">
                  <p class="text-muted mt-2 mb-0">Pending Task</p>
                </b-col>
                <b-col md="4">
                  <p class="text-primary text-24 line-height-1 mb-2">
                    {{
                      total_pending_program_tasks
                        ? total_pending_program_tasks
                        : 0
                    }}
                  </p>
                </b-col>
              </b-col>
              <b-col md="4"
                ><b-col md="8">
                  <p class="text-muted mt-2 mb-0">Average Score</p>
                </b-col>
                <b-col md="4">
                  <p class="text-primary text-24 line-height-1 mb-2">
                    {{ average_score ? average_score.toFixed(1) : 0 }}
                  </p>
                </b-col>
              </b-col>
            </b-row>
          </div>
        </b-card>
      </b-col>
    </b-row>
    <!-- /User & Program Details card -->
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
        :rows="user_program_tasks"
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
              :to="
                '/app/user-program/' +
                user_program.id +
                '/user-program-tasks/create'
              "
              ><i class="i-Add text-white mr-2"> </i>Add User Program Task
            </b-button>
          </b-row>
        </div>
        <div slot="table-actions" class="mb-3"></div>

        <template slot="table-row" slot-scope="props">
          <span v-if="props.column.field == 'button'">
            <router-link
              :to="
                '/app/user-program/' +
                user_program.id +
                '/user-program-tasks/' +
                props.row.id
              "
            >
              <i class="i-Eraser-2 text-25 text-success mr-2"></i>
              {{ props.row.button }}</router-link
            >
          </span>
          <span v-if="props.column.field == 'ship' && props.row.ship">
            {{ props.row.ship.description }}
          </span>
          <span v-if="props.column.field == 'program_task'">
            {{
              props.row.program_task.serial_no +
              " - " +
              props.row.program_task.task
            }}
          </span>
          <span v-if="props.column.field == 'marks_obtained'">
            {{ props.row.marks_obtained }}
            <b-badge v-if="props.row.marks_obtained < 5" variant="danger  m-2"
              >FAILED</b-badge
            >
          </span>
          <span v-if="props.column.field == 'remark'">
            {{ props.row.remark }}
          </span>
          <span v-if="props.column.field == 'is_completed'">
            {{ props.row.is_completed == 0 ? "NO" : "YES" }}
          </span>
          <span v-if="props.column.field == 'completion_date'">
            {{ props.row.completion_date }}
          </span>
          <span v-if="props.column.field == 'imagepath1'">
            <a
              :href="mediaUrl + props.row.imagepath1"
              v-if="props.row.imagepath1 != null"
              target="_blank"
            >
              <img
                v-if="props.row.imagepath1.split('.').pop() == 'pdf' || props.row.imagepath1.split('.').pop() == 'PDF'"
                src="/img/pdf.png"
                style="width: 40px; height: 40px"
              />
              <img
                v-else-if="
                  props.row.imagepath1.split('.').pop() == 'xls' ||
                  props.row.imagepath1.split('.').pop() == 'xlsx' ||
                  props.row.imagepath1.split('.').pop() == 'csv'
                "
                src="/public/img/excel.png"
                style="width: 40px; height: 40px"
              />
              <img
                v-else
                src="/img/file.png"
                style="width: 40px; height: 40px"
              />
            </a>
          </span>
          <span v-if="props.column.field == 'imagepath2'">
            <a
              :href="mediaUrl + props.row.imagepath2"
              v-if="props.row.imagepath2 != null"
              target="_blank"
            >
              <img
                v-if="props.row.imagepath2.split('.').pop() == 'pdf' || props.row.imagepath2.split('.').pop() == 'PDF'"
                src="/img/pdf.png"
                style="width: 40px; height: 40px"
              />
              <img
                v-else-if="
                  props.row.imagepath2.split('.').pop() == 'xls' ||
                  props.row.imagepath2.split('.').pop() == 'xlsx' ||
                  props.row.imagepath2.split('.').pop() == 'csv'
                "
                src="/public/img/excel.png"
                style="width: 40px; height: 40px"
              />
              <img
                v-else
                src="/img/file.png"
                style="width: 40px; height: 40px"
              />
            </a>
          </span>
          <span v-if="props.column.field == 'imagepath3'">
            <a
              :href="mediaUrl + props.row.imagepath3"
              v-if="props.row.imagepath3 != null"
              target="_blank"
            >
              <img
                v-if="props.row.imagepath3.split('.').pop() == 'pdf' || props.row.imagepath3.split('.').pop() == 'PDF'"
                src="/img/pdf.png"
                style="width: 40px; height: 40px"
              />
              <img
                v-else-if="
                  props.row.imagepath3.split('.').pop() == 'xls' ||
                  props.row.imagepath3.split('.').pop() == 'xlsx' ||
                  props.row.imagepath3.split('.').pop() == 'csv'
                "
                src="/public/img/excel.png"
                style="width: 40px; height: 40px"
              />
              <img
                v-else
                src="/img/file.png"
                style="width: 40px; height: 40px"
              />
            </a>
          </span>
          <span v-if="props.column.field == 'imagepath4'">
            <a
              :href="mediaUrl + props.row.imagepath4"
              v-if="props.row.imagepath4 != null"
              target="_blank"
            >
              <img
                v-if="props.row.imagepath4.split('.').pop() == 'pdf' || props.row.imagepath4.split('.').pop() == 'PDF'"
                src="/img/pdf.png"
                style="width: 40px; height: 40px"
              />
              <img
                v-else-if="
                  props.row.imagepath4.split('.').pop() == 'xls' ||
                  props.row.imagepath4.split('.').pop() == 'xlsx' ||
                  props.row.imagepath4.split('.').pop() == 'csv'
                "
                src="/public/img/excel.png"
                style="width: 40px; height: 40px"
              />
              <img
                v-else
                src="/img/file.png"
                style="width: 40px; height: 40px"
              />
            </a>
          </span>
          <span v-else-if="props.column.field == 'active'">
            {{ props.row.active == 1 ? "YES" : "NO" }}
          </span>
        </template>
      </vue-good-table>
    </b-card>
    <br />
    <section id="mydiv" v-if="user_reports != 0">
      <b-card>
        <!-- <b-row> -->
        <img src="@/assets/images/aaibuzz-logo1.png" alt />
        <p style="float: right">Date Of Report: {{ reportDate }}</p>
        <center>
          <h4>Landbridge Ship Management (HK) Limited</h4>
          <h4>CPP Performance Report</h4>
        </center>
        <hr />
        <b-col md="12">
          <h4>User Details</h4>

          <table class="my-table">
            <tr>
              <th>Sr No</th>
              <th colspan="4">Name</th>
              <th colspan="3">Rank</th>
              <th colspan="3">Danos</th>
              <th colspan="3">Email</th>
            </tr>
            <tr
              v-for="(userDetail, at) in user_reports"
              :key="`userDetail${at}`"
            >
              <td>{{ at + 1 }}</td>
              <td colspan="4">
                <span>{{ userDetail ? userDetail.first_name : "" }} </span>
                &nbsp;
                <span>{{ userDetail ? userDetail.last_name : "" }}</span>
              </td>
              <td colspan="3">{{ userDetail.rank.description }}</td>
              <td colspan="3">{{ userDetail.unique_id }}</td>
              <td colspan="3">{{ userDetail ? userDetail.email : "" }}</td>
            </tr>
          </table>
        </b-col>
        <br />
        <b-col md="12">
          <h4>Program Details</h4>

          <table class="my-table">
            <tr>
              <th>Sr No</th>
              <th colspan="13">Program Name</th>
              <!-- <th>Program Description</th> -->
            </tr>
            <tr
              v-for="(userProgramDetail, at) in user_reports[0].user_programs"
              :key="`userProgramDetail${at}`"
            >
              <td>{{ at + 1 }}</td>
              <td colspan="13">
                {{
                  userProgramDetail
                    ? userProgramDetail.program.program_name
                    : ""
                }}
              </td>
              <!-- <td>{{ userProgramDetail ? userProgramDetail.program.program_description : ''}}</td> -->
            </tr>
          </table>
        </b-col>
        <br />
        <b-col md="12" class="no-break">
          <h4>CPP Tasks</h4>
          <table class="my-table">
            <tr>
              <th>Sr No</th>
              <th colspan="5">Vessel Name</th>
              <th colspan="2">Task Name</th>
              <th colspan="2">Marks Obtained</th>
              <th colspan="2">Is Completed</th>
              <th colspan="3">Completed Date</th>
              <!-- <th colspan="2">Remark</th> -->
            </tr>
            <template
              v-for="(userProgramTaskDetail, at) in user_reports[0].cpp_tasks"
            >
              <tr>
                <td rowspan="2">{{ at + 1 }}</td>
                <td colspan="5" rowspan="2">
                  {{
                    userProgramTaskDetail ? userProgramTaskDetail.ship.code : ""
                  }}
                </td>
                <td colspan="2">
                  {{
                    userProgramTaskDetail
                      ? userProgramTaskDetail.program_task.serial_no
                      : "" + " - " + userProgramTaskDetail
                      ? userProgramTaskDetail.program_task.task
                      : ""
                  }}
                </td>
                <td colspan="2">
                  {{
                    userProgramTaskDetail
                      ? userProgramTaskDetail.marks_obtained
                      : ""
                  }}
                  <b-badge
                    v-if="userProgramTaskDetail.marks_obtained < 5"
                    variant="danger  m-2"
                    >FAILED</b-badge
                  >
                </td>
                <td colspan="2">
                  {{ userProgramTaskDetail.is_completed ? "YES" : "NO" }}
                </td>
                <td colspan="3">
                  {{
                    userProgramTaskDetail
                      ? userProgramTaskDetail.completion_date
                      : "" | ddmmyyyy
                  }}
                </td>
              </tr>
              <tr>
                <td colspan="9" v-if="userProgramTaskDetail.remark">
                  {{
                    userProgramTaskDetail ? userProgramTaskDetail.remark : ""
                  }}
                </td>
              </tr>
            </template>
          </table>
        </b-col>
        <br />
        <b-col md="12" class="no-break">
          <b-row>
            <b-col md="4"
              ><b-col md="8">
                <p class="text-muted mt-2 mb-0">Task Completed</p>
              </b-col>
              <b-col md="4">
                <p class="text-24 line-height-1 mb-2" style="font-size: 14px;">
                  {{ total_completed_task ? total_completed_task : 0 }}
                </p>
              </b-col></b-col
            >
            <b-col md="4"
              ><b-col md="8">
                <p class="text-muted mt-2 mb-0">Pending Task</p>
              </b-col>
              <b-col md="4">
                <p class="text-24 line-height-1 mb-2" style="font-size: 14px;">
                  {{
                    total_pending_program_tasks
                      ? total_pending_program_tasks
                      : 0
                  }}
                </p>
              </b-col>
            </b-col>
            <b-col md="4"
              ><b-col md="8">
                <p class="text-muted mt-2 mb-0">Average Score</p>
              </b-col>
              <b-col md="4">
                <p class="text-24 line-height-1 mb-2" style="font-size: 14px;">
                  {{ average_score ? average_score.toFixed(1) : 0 }}
                </p>
              </b-col>
            </b-col>
          </b-row>
        </b-col>
        <br />
        <b-col md="12" class="no-break">
          <h4>KARCO Task Details</h4>
          <table class="my-table">
            <tr>
              <th>Sr No</th>
              <th colspan="4">Vessel Name</th>
              <th colspan="5">Video Title</th>
              <th colspan="2">Percentage</th>
              <th colspan="2">Done On</th>
              <th colspan="2">Assessment Status</th>
            </tr>
            <tr
              v-for="(userKARCODetail, at) in user_reports[0].karco_tasks"
              :key="`userKARCODetail${at}`"
            >
              <td>{{ at + 1 }}</td>
              <td colspan="4">
                {{ userKARCODetail ? userKARCODetail.ship.code : "" }}
              </td>
              <td colspan="5">
                {{ userKARCODetail ? userKARCODetail.video_title : "" }}
              </td>
              <td colspan="2">
                {{ userKARCODetail ? userKARCODetail.percentage : "" }}
              </td>
              <td colspan="2">
                {{ userKARCODetail ? userKARCODetail.done_on : "" }}
              </td>
              <td colspan="2">
                {{ userKARCODetail ? userKARCODetail.assessment_status : "" }}
              </td>
            </tr>
          </table>
        </b-col>
        <br />
        <b-col md="12" class="no-break">
          <h4>Videotel Task Details</h4>
          <table class="my-table">
            <tr>
              <th>Sr No</th>
              <th colspan="2">Vessel Name</th>
              <th colspan="4">Training Title</th>
              <th colspan="2">Type</th>
              <th colspan="2">Date</th>
              <th colspan="2">Score</th>
            </tr>
            <tr
              v-for="(userVideotelDetail, at) in user_reports[0].videotel_tasks"
              :key="`userVideotelDetail${at}`"
            >
              <td>{{ at + 1 }}</td>
              <td colspan="2">
                {{ userVideotelDetail ? userVideotelDetail.ship.code : "" }}
              </td>
              <td colspan="4">
                {{
                  userVideotelDetail ? userVideotelDetail.training_title : ""
                }}
              </td>
              <td colspan="2">
                {{ userVideotelDetail ? userVideotelDetail.type : "" }}
              </td>
              <td colspan="2">
                {{ userVideotelDetail ? userVideotelDetail.date : "" }}
              </td>
              <td colspan="2">
                {{ userVideotelDetail ? userVideotelDetail.score : "" }}
              </td>
            </tr>
          </table>
        </b-col>

        <div class="parent">
          <div class="child">
            <b><i>End Of Report</i></b>
          </div>
        </div>
      </b-card>
    </section>
  </div>
</template>

<script>
import axios from "axios";
import html2pdf from "html2pdf.js";
import moment from "moment";
export default {
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: "User Program Tasks",
  },
  data() {
    return {
      isLoading: false,
      columns: [
        {
          label: "Ship",
          field: "ship",
        },
        {
          label: "Program Tasks",
          field: "program_task",
        },
        {
          label: "Marks Obtained",
          field: "marks_obtained",
        },
        {
          label: "Remark",
          field: "remark",
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
          label: "Attachment 1",
          field: "imagepath1",
        },
        {
          label: "Attachment 2",
          field: "imagepath2",
        },
        {
          label: "Attachment 3",
          field: "imagepath3",
        },
        {
          label: "Attachment 4",
          field: "imagepath4",
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
      user: {},
      report: {
        from_date: "",
        to_date: "",
      },
      program: {},
      user_program: {},
      user_ships: {},
      user_program_tasks: [],
      user_reports: [],
      generateStatus: false,
      total_completed_task: "",
      total_pending_task: "",
      total_pending_program_tasks: "",
      average_score: "",
      is_generating: false,
    };
  },
  mounted() {
    this.getData();
    this.reportDate = moment(new Date()).format("DD/MM/YYYY");
    // this.generatePDF();
  },
  methods: {
    async getData(page = 1) {
      this.isLoading = true;

      let user_program = await axios.get(
        `/user_programs/${this.$route.params.user_program_id}`
      );
      this.user_program = user_program.data.data;
      this.user = this.user_program.user;
      // console.log(this.user.id);
      this.program = this.user_program.program;
      // User Program Task log
      let user_program_tasks = await axios.get(
        `/user_programs/${this.$route.params.user_program_id}/user_program_tasks?user_id=${this.user.id}`
      );
      this.user_program_tasks = user_program_tasks.data.data;
      this.total_completed_task = user_program_tasks.data.total_completed_task;
      this.total_pending_task = user_program_tasks.data.total_pending_task;
      this.total_pending_program_tasks =
        user_program_tasks.data.total_pending_program_tasks;
      this.average_score = user_program_tasks.data.average_score;
      this.user_ships = user_program_tasks.data.user_ships;

      this.serialNoStarting = (page - 1) * this.rowsPerPage;
      this.isLoading = false;
      // this.generatePDF()
    },
    async generatePDF(user_id) {
      this.is_generating = true;
      this.generateStatus = true;
      // console.log(this.user.id);
      let user_reports = await axios.get(
        `/user_reports?user_id=${user_id}&from_date=${this.report.from_date}&to_date=${this.report.to_date}`
      );
      this.user_reports = user_reports.data.data;
      if (this.user_reports != 0) {
        var element = document.getElementById("mydiv");
        var opt = {
          margin: [0.25, 0, 0.20, 0],
          filename: "User-report.pdf",
          image: { type: "jpeg", quality: 0.98 },
          html2canvas: { scale: 2 },
          jsPDF: { unit: "in", format: "A4", orientation: "portrait" },
          pagebreak: { avoid: ".no-break" },
        };
        html2pdf().set(opt).from(element).save();
        this.is_generating = false;
        this.generateStatus = false;
      }
      // this.user_reports = [];
    },
  },
};
</script>
<style scoped>
.parent {
  height: 100px;
  /* border: 5px solid #000; */
  display: flex;
}
.child {
  height: 40px;
  width: 100%;
  /* background: #f00; */
  align-self: flex-end;
  text-align: center;
}

.my-table {
  width: 100%;
  table-layout: fixed;
  border: 1px solid black;
  border-collapse: collapse;
  text-align: center;
  font-size: 11px;
}

.my-table td {
  border: 1px solid black;
  padding: 5px;
  word-wrap: break-word;
}
</style>
