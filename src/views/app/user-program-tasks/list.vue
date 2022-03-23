<template>
  <div class="main-content">
    <breadcumb :page="'User Program Task'" :folder="'User Program Tasks'" />
    <!-- User & Program Details Card -->
    <b-row>
      <b-col>
        <b-button
          variant="primary"
          class="btn-rounded d-none d-sm-block"
          style="float: right"
          v-if="(is_generating = true)"
          @click="generatePDF(user.id)"
        >
          <span v-if="user_reports == 0"> Generate Report </span>
          <span v-else> Download Report </span>
        </b-button>
      </b-col>
    </b-row>
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
              <i class="i-File-Pictures text-25"></i>
            </a>
          </span>
          <span v-if="props.column.field == 'imagepath2'">
            <a
              :href="mediaUrl + props.row.imagepath2"
              v-if="props.row.imagepath2 != null"
              target="_blank"
            >
              <i class="i-File-Pictures text-25"></i>
            </a>
          </span>
          <span v-if="props.column.field == 'imagepath3'">
            <a
              :href="mediaUrl + props.row.imagepath3"
              v-if="props.row.imagepath3 != null"
              target="_blank"
            >
              <i class="i-File-Pictures text-25"></i>
            </a>
          </span>
          <span v-if="props.column.field == 'imagepath4'">
            <a
              :href="mediaUrl + props.row.imagepath4"
              v-if="props.row.imagepath4 != null"
              target="_blank"
            >
              <i class="i-File-Pictures text-25"></i>
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
        <!-- <b-col md="12">
            <b-row>
              <b-col md="1">
                <img src="@/assets/images/aaibuzz-logo1.png" alt />
              </b-col>
              <b-col md="11">
                <h4>Landbridge Ship Management (HK) Limited</h4>
              </b-col>
            </b-row>
          </b-col>

          <b-col md="12">
            <center>
              <h4>CPP Performance Report</h4>
               <h4 style="margin-top: 50px">CPP Performance Report</h4> 
             </center>
          </b-col> -->
        <!-- </b-row> -->
        <hr />
        <b-col md="12">
          <h4>User Details</h4>

          <table class="table table-response">
            <tr>
              <th>Sr No</th>
              <th>Name</th>
              <th>Rank</th>
              <th>Danos</th>
              <th>Email</th>
            </tr>
            <tr
              v-for="(userDetail, at) in user_reports"
              :key="`userDetail${at}`"
            >
              <td>{{ at + 1 }}</td>
              <td>{{ userDetail.first_name + " " + userDetail.last_name }}</td>
              <td>{{ userDetail.rank.description }}</td>
              <td>{{ userDetail.unique_id }}</td>
              <td>{{ userDetail ? userDetail.email : "" }}</td>
            </tr>
          </table>
        </b-col>
        <b-col md="12">
          <h4>User Program Details</h4>

          <table class="table table-response">
            <tr>
              <th>Sr No</th>
              <th>Program Name</th>
              <th>Program Description</th>
            </tr>
            <tr
              v-for="(userProgramDetail, at) in user_reports[0].user_programs"
              :key="`userProgramDetail${at}`"
            >
              <td>{{ at + 1 }}</td>
              <td>{{ userProgramDetail ? userProgramDetail.program.program_name : ''}}</td>
              <td>{{ userProgramDetail ? userProgramDetail.program.program_description : ''}}</td>
            </tr>
          </table>
        </b-col>

        <b-col md="12">
          <h4>User Program Tasks</h4>
          <table class="table table-response">
            <tr>
              <th>Sr No</th>
              <th>Vessel Name</th>
              <th>Task Name</th>
              <th>Marks Obtained</th>
              <th>Is Completed</th>
              <th>Completed Date</th>
              <th>Remark</th>
            </tr>
            <tr
              v-for="(userProgramTaskDetail, at) in user_reports[0]
                .user_program_tasks"
              :key="`userProgramTaskDetail${at}`"
            >
              <td>{{ at + 1 }}</td>
              <td>
                {{ userProgramTaskDetail ? userProgramTaskDetail.ship.code : '' }}
              </td>
              <td>
                {{
                  userProgramTaskDetail ? userProgramTaskDetail.program_task.serial_no : '' +
                  " - " +
                  userProgramTaskDetail ? userProgramTaskDetail.program_task.task : ''
                }}
              </td>
              <td>
                {{ userProgramTaskDetail ? userProgramTaskDetail.marks_obtained : ''}} 
                <b-badge
                  v-if="userProgramTaskDetail.marks_obtained < 5"
                  variant="danger  m-2"
                  >FAILED</b-badge
                >
              </td>
              <td>{{ userProgramTaskDetail.is_completed ? "YES" : "NO" }}</td>
              <td>{{ userProgramTaskDetail ? userProgramTaskDetail.completion_date : '' }}</td>
              <td>{{ userProgramTaskDetail ? userProgramTaskDetail.remark : '' }}</td>
            </tr>
          </table>
        </b-col>

        <b-col md="12">
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
        </b-col>

        <b-col md="12">
          <h4>KARCO Task Details</h4>
          <table class="table table-response">
            <tr>
              <th>Sr No</th>
              <th>Vessel Name</th>
              <th>Video Title</th>
              <!-- <th>Obtained Marks</th>
              <th>Total Marks</th> -->
              <th>Percentage</th>
              <th>Done On</th>
              <th>Assessment Status</th>
            </tr>
            <tr
              v-for="(userKARCODetail, at) in user_reports[0].karco_tasks_report"
              :key="`userKARCODetail${at}`"
            >
              <td>{{ at + 1 }}</td>
              <td>{{ userKARCODetail ? userKARCODetail.ship.code : '' }}</td>
              <td>{{ userKARCODetail ? userKARCODetail.video_title : '' }}</td>
              <!-- <td>{{ userKARCODetail ? userKARCODetail.obtained_marks : '' }}</td>
              <td>{{ userKARCODetail ? userKARCODetail.total_marks : '' }}</td> -->
              <td>{{ userKARCODetail ? userKARCODetail.percentage : '' }}</td>
              <td>{{ userKARCODetail ? userKARCODetail.done_on : '' }}</td>
              <td>{{ userKARCODetail ? userKARCODetail.assessment_status : '' }}</td>
            </tr>
          </table>
        </b-col>
        
        <b-col md="12">
          <h4>Videotel Task Details</h4>
          <table class="table table-response">
            <tr>
              <th>Sr No</th>
              <th>Vessel Name</th>
              <th>Training Title</th>
              <th>Type</th>
              <th>Date</th>
              <th>Score</th>
            </tr>
            <tr
              v-for="(userVideotelDetail, at) in user_reports[0].videotel_tasks_report"
              :key="`userVideotelDetail${at}`"
            >
              <td>{{ at + 1 }}</td>
              <td>{{ userVideotelDetail ? userVideotelDetail.ship.code : '' }}</td>
              <td>{{ userVideotelDetail ? userVideotelDetail.training_title : '' }}</td>
              <td>{{ userVideotelDetail ? userVideotelDetail.type : '' }}</td>
              <td>{{ userVideotelDetail ? userVideotelDetail.date : '' }}</td>
              <td>{{ userVideotelDetail ? userVideotelDetail.score : '' }}</td>
            </tr>
          </table>
        </b-col>
        
        
        <div class="parent">
          <div class="child">End Of Report</div>
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
      program: {},
      user_program: {},
      user_ships: {},
      user_program_tasks: [],
      user_reports: [],
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
      // console.log(this.user.id);
      let user_reports = await axios.get(`/user_reports?user_id=${user_id}`);
      this.user_reports = user_reports.data.data;
      if (this.user_reports != 0) {
        var element = document.getElementById("mydiv");
        var opt = {
          margin: [0.25, 0, 0.25, 0],
          filename: "User-report.pdf",
          image: { type: "jpeg", quality: 0.98 },
          html2canvas: { scale: 2 },
          jsPDF: { unit: "in", format: "A4", orientation: "portrait" },
          pagebreak: [{avoid: 'table'},{avoid: 'h2'}, {avoid: 'tr'}, {avoid: 'td'}]
        };
        html2pdf().set(opt).from(element).save();
        this.is_generating = false;
      }
      // this.user_reports = [];
    },
  },
};
</script>
<style>
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
}</style>
