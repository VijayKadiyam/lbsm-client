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
                v-if="
                  props.row.imagepath1.split('.').pop() == 'pdf' ||
                  props.row.imagepath1.split('.').pop() == 'PDF'
                "
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
                v-if="
                  props.row.imagepath2.split('.').pop() == 'pdf' ||
                  props.row.imagepath2.split('.').pop() == 'PDF'
                "
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
                v-if="
                  props.row.imagepath3.split('.').pop() == 'pdf' ||
                  props.row.imagepath3.split('.').pop() == 'PDF'
                "
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
                v-if="
                  props.row.imagepath4.split('.').pop() == 'pdf' ||
                  props.row.imagepath4.split('.').pop() == 'PDF'
                "
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
          <h4>Training Report</h4>
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
              <tr class="no-break">
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
                <p class="text-24 line-height-1 mb-2" style="font-size: 14px">
                  {{ total_completed_task ? total_completed_task : 0 }}
                </p>
              </b-col></b-col
            >
            <b-col md="4"
              ><b-col md="8">
                <p class="text-muted mt-2 mb-0">Pending Task</p>
              </b-col>
              <b-col md="4">
                <p class="text-24 line-height-1 mb-2" style="font-size: 14px">
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
                <p class="text-24 line-height-1 mb-2" style="font-size: 14px">
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
              class="no-break"
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
              class="no-break"
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
// import html2pdf from "html2pdf.js";
import moment from "moment";
import jsPDF from "jspdf";
import "jspdf-autotable";

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
        const doc = new jsPDF();
        var pageHeight =
          doc.internal.pageSize.height || doc.internal.pageSize.getHeight();
        var pageWidth =
          doc.internal.pageSize.width || doc.internal.pageSize.getWidth();

        doc.autoTable({ html: "#my-table" });

        // User Details
        let columns = [
          { title: "Sr No.", dataKey: "sr_no" },
          { title: "Name", dataKey: "name" },
          { title: "Rank", dataKey: "rank" },
          { title: "Danos", dataKey: "danos" },
          { title: "Email", dataKey: "email" },
        ];
        let rows = [];
        let count = 1;
        for (const userDetail of this.user_reports) {
          rows.push({
            sr_no: count,
            name:
              (userDetail ? userDetail.first_name : "") +
              " " +
              (userDetail ? userDetail.last_name : ""),
            rank: userDetail.rank.description,
            danos: userDetail.unique_id,
            email: userDetail ? userDetail.email : "",
          });
          count++;
        }
        doc.text("User Details", 10, 40);
        doc.autoTable(columns, rows, {
          startY: 45,
          margin: [35, 10, 15, 10],
          styles: { overflow: "linebreak" },
          bodyStyles: { valign: "top" },
          columnStyles: { email: { columnWidth: "wrap" } },
          theme: "striped",
          showHead: "everyPage",
          didDrawPage: function (data) {
            // Header
            doc.setFontSize(20);
            doc.setTextColor(40);
            var imgData =
              "data:image/png;base64,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";
            doc.addImage(
              imgData,
              "JPEG",
              data.settings.margin.left,
              15,
              15,
              15
            );
            doc.setFontSize(10);
            doc.text(
              "Date Of Report: " + moment(new Date()).format("DD/MM/YYYY"),
              pageWidth - 55,
              5
            );
            doc.setFontSize(20);
            doc.text(
              "Landbridge Ship Management (HK) Limited",
              (pageWidth -
                doc.getTextWidth("Landbridge Ship Management (HK) Limited")) /
                2,
              22
            );
            doc.text(
              "Training Report",
              (pageWidth - doc.getTextWidth("Training Report")) / 2,
              32
            );
            // Footer
            var str = "Page " + doc.internal.getNumberOfPages();
            doc.setFontSize(10);
            // jsPDF 1.4+ uses getWidth, <1.4 uses .width
            var pageSize = doc.internal.pageSize;
            var pageHeight = pageSize.height
              ? pageSize.height
              : pageSize.getHeight();
            doc.text(str, data.settings.margin.left, pageHeight - 10);
          },
        });

        // Program Details
        columns = [
          { title: "Sr No.", dataKey: "sr_no" },
          { title: "Program Name", dataKey: "program_name" },
        ];
        rows = [];
        count = 1;
        for (const userProgramDetail of this.user_reports[0].user_programs) {
          rows.push({
            sr_no: count,
            program_name: userProgramDetail
              ? userProgramDetail.program.program_name
              : "",
          });
          count++;
        }
        doc.text("Program Details", 10, doc.lastAutoTable.finalY + 10);
        doc.autoTable(columns, rows, {
          startY: doc.lastAutoTable.finalY + 15,
          margin: [35, 10, 15, 10],
          styles: { overflow: "linebreak" },
          bodyStyles: { valign: "top" },
          columnStyles: { email: { columnWidth: "wrap" } },
          theme: "striped",
          showHead: "everyPage",
          didDrawPage: function (data) {
            // Header
            doc.setFontSize(20);
            doc.setTextColor(40);
            var imgData =
              "data:image/png;base64,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";
            doc.addImage(
              imgData,
              "JPEG",
              data.settings.margin.left,
              15,
              15,
              15
            );
            doc.text(
              "Landbridge Ship Management (HK) Limited",
              (pageWidth -
                doc.getTextWidth("Landbridge Ship Management (HK) Limited")) /
                2,
              22
            );
            doc.text(
              "Training Report",
              (pageWidth - doc.getTextWidth("Training Report")) / 2,
              32
            );
            // Footer
            var str = "Page " + doc.internal.getNumberOfPages();
            doc.setFontSize(10);
            // jsPDF 1.4+ uses getWidth, <1.4 uses .width
            var pageSize = doc.internal.pageSize;
            var pageHeight = pageSize.height
              ? pageSize.height
              : pageSize.getHeight();
            doc.text(str, data.settings.margin.left, pageHeight - 10);
          },
        });

        // CPP Tasks
        columns = [
          { title: "Sr No.", dataKey: "sr_no" },
          { title: "Vessel Name", dataKey: "vessel_name" },
          { title: "Task Name", dataKey: "task_name" },
          { title: "Marks Obtained", dataKey: "marks_obtained" },
          { title: "Is Completed", dataKey: "is_completed" },
          { title: "Completed Date", dataKey: "completed_date" },
        ];
        rows = [];
        count = 1;
        for (const userProgramTaskDetail of this.user_reports[0].cpp_tasks) {
          rows.push({
            sr_no: count,
            vessel_name: userProgramTaskDetail
              ? userProgramTaskDetail.ship.code
              : "",
            task_name: userProgramTaskDetail
              ? userProgramTaskDetail.program_task.serial_no
              : "" + " - " + userProgramTaskDetail
              ? userProgramTaskDetail.program_task.task
              : "",
            marks_obtained: userProgramTaskDetail
              ? userProgramTaskDetail.marks_obtained
              : "",
            is_completed: userProgramTaskDetail.is_completed ? "YES" : "NO",
            completed_date: userProgramTaskDetail
              ? userProgramTaskDetail.completion_date
              : "" | ddmmyyyy,
          });
          count++;
        }
        doc.text("CPP Tasks", 10, doc.lastAutoTable.finalY + 10);
        doc.autoTable(columns, rows, {
          startY: doc.lastAutoTable.finalY + 15,
          margin: [35, 10, 15, 10],
          styles: { overflow: "linebreak" },
          bodyStyles: { valign: "top" },
          columnStyles: { email: { columnWidth: "wrap" } },
          theme: "striped",
          showHead: "everyPage",
          didDrawPage: function (data) {
            // Header
            doc.setFontSize(20);
            doc.setTextColor(40);
            var imgData =
              "data:image/png;base64,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";
            doc.addImage(
              imgData,
              "JPEG",
              data.settings.margin.left,
              15,
              15,
              15
            );
            doc.text(
              "Landbridge Ship Management (HK) Limited",
              (pageWidth -
                doc.getTextWidth("Landbridge Ship Management (HK) Limited")) /
                2,
              22
            );
            doc.text(
              "Training Report",
              (pageWidth - doc.getTextWidth("Training Report")) / 2,
              32
            );
            // Footer
            var str = "Page " + doc.internal.getNumberOfPages();
            doc.setFontSize(10);
            // jsPDF 1.4+ uses getWidth, <1.4 uses .width
            var pageSize = doc.internal.pageSize;
            var pageHeight = pageSize.height
              ? pageSize.height
              : pageSize.getHeight();
            doc.text(str, data.settings.margin.left, pageHeight - 10);
          },
        });
        doc.setFontSize(10);
        doc.text(
          "Task Completed: " +
            (this.total_completed_task ? this.total_completed_task : 0),
          10,
          doc.lastAutoTable.finalY + 10
        );
        doc.text(
          "Pending Task: " +
            (this.total_pending_program_tasks
              ? this.total_pending_program_tasks
              : 0),
          10,
          doc.lastAutoTable.finalY + 15
        );
        doc.text(
          "Average Score: " +
            (this.average_score ? this.average_score.toFixed(1) : 0),
          10,
          doc.lastAutoTable.finalY + 20
        );

        // Karco Tasks
        doc.setFontSize(20);
        columns = [
          { title: "Sr No.", dataKey: "sr_no" },
          { title: "Vessel Name", dataKey: "vessel_name" },
          { title: "Video Title", dataKey: "video_title" },
          { title: "Percentage", dataKey: "percentage" },
          { title: "Done On", dataKey: "done_on" },
          { title: "Assessment Status", dataKey: "assessment_status" },
        ];
        rows = [];
        count = 1;
        for (const userKARCODetail of this.user_reports[0].karco_tasks) {
          rows.push({
            sr_no: count,
            vessel_name: userKARCODetail ? userKARCODetail.ship.code : "",
            video_title: userKARCODetail ? userKARCODetail.video_title : "",
            percentage: userKARCODetail ? userKARCODetail.percentage : "",
            done_on: userKARCODetail ? userKARCODetail.done_on : "",
            assessment_status: userKARCODetail
              ? userKARCODetail.assessment_status
              : "",
          });
          count++;
        }
        doc.text("Karco Tasks", 10, doc.lastAutoTable.finalY + 30);
        doc.autoTable(columns, rows, {
          startY: doc.lastAutoTable.finalY + 35,
          margin: [35, 10, 15, 10],
          styles: { overflow: "linebreak" },
          bodyStyles: { valign: "top" },
          columnStyles: { email: { columnWidth: "wrap" } },
          theme: "striped",
          showHead: "everyPage",
          didDrawPage: function (data) {
            // Header
            doc.setFontSize(20);
            doc.setTextColor(40);
            var imgData =
              "data:image/png;base64,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";
            doc.addImage(
              imgData,
              "JPEG",
              data.settings.margin.left,
              15,
              15,
              15
            );
            doc.text(
              "Landbridge Ship Management (HK) Limited",
              (pageWidth -
                doc.getTextWidth("Landbridge Ship Management (HK) Limited")) /
                2,
              22
            );
            doc.text(
              "Training Report",
              (pageWidth - doc.getTextWidth("Training Report")) / 2,
              32
            );
            // Footer
            var str = "Page " + doc.internal.getNumberOfPages();
            doc.setFontSize(10);
            // jsPDF 1.4+ uses getWidth, <1.4 uses .width
            var pageSize = doc.internal.pageSize;
            var pageHeight = pageSize.height
              ? pageSize.height
              : pageSize.getHeight();
            doc.text(str, data.settings.margin.left, pageHeight - 10);
          },
        });

        // Videotel Tasks
        columns = [
          { title: "Sr No.", dataKey: "sr_no" },
          { title: "Vessel Name", dataKey: "vessel_name" },
          { title: "Training Title", dataKey: "training_title" },
          { title: "Type", dataKey: "type" },
          { title: "Date", dataKey: "date" },
          { title: "Score", dataKey: "score" },
        ];
        rows = [];
        count = 1;
        for (const userVideotelDetail of this.user_reports[0].videotel_tasks) {
          rows.push({
            sr_no: count,
            vessel_name: userVideotelDetail ? userVideotelDetail.ship.code : "",
            training_title: userVideotelDetail
              ? userVideotelDetail.training_title
              : "",
            type: userVideotelDetail ? userVideotelDetail.type : "",
            date: userVideotelDetail ? userVideotelDetail.date : "",
            score: userVideotelDetail ? userVideotelDetail.score : "",
          });
          count++;
        }
        doc.text("Videotel Tasks", 10, doc.lastAutoTable.finalY + 10);
        doc.autoTable(columns, rows, {
          startY: doc.lastAutoTable.finalY + 15,
          margin: [35, 10, 15, 10],
          styles: { overflow: "linebreak" },
          bodyStyles: { valign: "top" },
          columnStyles: { email: { columnWidth: "wrap" } },
          theme: "striped",
          showHead: "everyPage",
          didDrawPage: function (data) {
            // Header
            doc.setFontSize(20);
            doc.setTextColor(40);
            var imgData =
              "data:image/png;base64,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";
            doc.addImage(
              imgData,
              "JPEG",
              data.settings.margin.left,
              15,
              15,
              15
            );
            doc.text(
              "Landbridge Ship Management (HK) Limited",
              (pageWidth -
                doc.getTextWidth("Landbridge Ship Management (HK) Limited")) /
                2,
              22
            );
            doc.text(
              "Training Report",
              (pageWidth - doc.getTextWidth("Training Report")) / 2,
              32
            );
            // Footer
            var str = "Page " + doc.internal.getNumberOfPages();
            doc.setFontSize(10);
            // jsPDF 1.4+ uses getWidth, <1.4 uses .width
            var pageSize = doc.internal.pageSize;
            var pageHeight = pageSize.height
              ? pageSize.height
              : pageSize.getHeight();
            doc.text(str, data.settings.margin.left, pageHeight - 10);
          },
        });

        doc.text(
          "END OF REPORT",
          (pageWidth - doc.getTextWidth("END OF REPORT")) / 2,
          doc.lastAutoTable.finalY + 10
        );

        doc.save("User Details.pdf");
        this.is_generating = false;
        this.generateStatus = false;
      }

      // this.is_generating = true;
      // this.generateStatus = true;
      // // console.log(this.user.id);
      // let user_reports = await axios.get(
      //   `/user_reports?user_id=${user_id}&from_date=${this.report.from_date}&to_date=${this.report.to_date}`
      // );
      // this.user_reports = user_reports.data.data;
      // if (this.user_reports != 0) {
      //   var element = document.getElementById("mydiv");
      //   var opt = {
      //     margin: [0.25, 0, 0.2, 0],
      //     filename: "User-report.pdf",
      //     image: { type: "jpeg", quality: 0.98 },
      //     html2canvas: { scale: 2 },
      //     jsPDF: { unit: "in", format: "A4", orientation: "portrait" },
      //     pagebreak: { avoid: ".no-break" },
      //   };
      //   html2pdf().set(opt).from(element).save();
      //   this.is_generating = false;
      //   this.generateStatus = false;
      // }
      // // this.user_reports = [];
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
