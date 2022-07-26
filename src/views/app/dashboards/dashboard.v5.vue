<template>
  <div class="main-content">
    <!-- <breadcumb :page="'Dashboard'" /> -->
    <b-row>
      <b-col md="12" class="mb-30">
        <b-card class="h-100">
          <div
            class="p-4 rounded text-white"
            style="background-color: lightgray"
          >
            <h2 class="text-40 mb-1 text-black text-center">
              Competency Management System
            </h2>
          </div>
        </b-card>
      </b-col>
    </b-row>
    <b-card>
      <b-row>
        <b-col md="4">
          <b-form-group label="Period">
            <vue-tags-input
              v-model="searchPeriod"
              :tags="selectedPeriod"
              class="tag-custom text-15 mb-2"
              :autocomplete-items="filteredPeriodItems"
              :add-only-from-autocomplete="true"
              @tags-changed="(newTags) => (selectedPeriod = newTags)"
              placeholder="Type Period"
            />
          </b-form-group>
        </b-col>
        <b-col md="3">
          <b-form-group label="From Date">
            <b-form-datepicker
              id="from_date"
              v-model="from_date"
              class="mb-2"
              placeholder="From Date"
              @change="clearFilter()"
            ></b-form-datepicker>
          </b-form-group>
        </b-col>
        <b-col md="3">
          <b-form-group label="To Date">
            <b-form-datepicker
              id="to_date"
              v-model="to_date"
              class="mb-2"
              placeholder="To Date"
            ></b-form-datepicker>
          </b-form-group>
        </b-col>

        <b-col md="2">
          <br />
          <b-button @click="kpiData" variant="primary"> Search </b-button>
          <br />
          <div
            v-if="searchingStatus"
            class="spinner spinner-primary mr-3"
            style="float: right; margin-top: -40px"
          ></div>
        </b-col>
      </b-row>
      <!-- <br> -->
      <b-row>
        <b-col md="4" lg="4" sm="4">
          <b-card title="CPP TASKS KPI" class="mb-30" style="height: 310px">
            <h3>
              {{ total_kpi_CPP + "/" + cpp_out_of }}
              <i
                v-if="kpi_CPP > 20"
                class="text-25 i-Up"
                style="color: Green"
              ></i
              ><i v-else class="text-25 i-Down" style="color: orange"></i>
            </h3>
            <h4>{{ kpi_CPP }}%</h4>

            <center>
              <div>
                <vue-gauge
                  :id="'cpp-graph'"
                  :options="CPPtest.options"
                ></vue-gauge>
              </div>
            </center>
          </b-card>
        </b-col>
        <b-col md="4" lg="4" sm="4">
          <b-card title="KARCO CBT KPI" class="mb-30" style="height: 310px">
            <h3>
              {{ total_kpi_karco_tasks + "/" + karco_videotel_out_of }}
              <i
                v-if="kpi_karco_tasks > 100"
                class="text-25 i-Up"
                style="color: Green"
              ></i
              ><i v-else class="text-25 i-Down" style="color: orange"></i>
            </h3>
            <h4>{{ kpi_karco_tasks }}%</h4>
            <center>
              <div>
                <vue-gauge
                  :id="'karco-graph'"
                  :options="KARCOtest.options"
                ></vue-gauge>
              </div>
            </center>
          </b-card>
        </b-col>
        <b-col md="4" lg="4" sm="4">
          <b-card title="Videotel CBT KPI" class="mb-30" style="height: 310px">
            <h3>
              {{ total_kpi_videotel_tasks + "/" + karco_videotel_out_of }}
              <i
                v-if="kpi_videotel_tasks > 100"
                class="text-25 i-Up"
                style="color: Green"
              ></i
              ><i v-else class="text-25 i-Down" style="color: orange"></i>
            </h3>
            <h4>{{ kpi_videotel_tasks }}%</h4>
            <center>
              <div>
                <vue-gauge
                  :id="'videotel-graph'"
                  :options="VIDEOTELtest.options"
                ></vue-gauge>
              </div>
            </center>
          </b-card>
        </b-col>
      </b-row>
    </b-card>
    <br />
    <b-row>
      <b-col lg="12" md="12" sm="12">
        <b-card title="Users management" class="mb-30">
          <b-row>
            <b-col lg="4" md="6" sm="6">
              <b-card class="card-icon text-center mb-30">
                <i class="i-Data-Upload"></i>
                <p class="text-muted mt-2 mb-2">
                  Total Programs Running <br />
                </p>
                <p class="text-primary text-24 line-height-1 m-0">
                  {{ program_count || 0 }}
                </p>
              </b-card>
            </b-col>
            <b-col lg="4" md="6" sm="6">
              <b-card class="card-icon text-center mb-30">
                <i class="i-Gear"></i>
                <p class="text-muted mt-2 mb-2">Total Tasks Completed</p>
                <p class="text-primary text-24 line-height-1 m-0">
                  {{ total_task_completed || 0 }}
                </p>
              </b-card>
            </b-col>
            <b-col lg="4" md="6" sm="6">
              <b-card class="card-icon text-center mb-30">
                <i class="i-Bell"></i>
                <p class="text-muted mt-2 mb-2">Inactive Users</p>
                <p class="text-primary text-24 line-height-1 m-0">
                  {{ inActive_user || 0 }}
                </p>
              </b-card>
            </b-col>
          </b-row>
          <b-row>
            <b-col md="1"></b-col>
            <b-col
              md="6"
              sm="6"
              lg="2"
              v-for="(user, r) in userRankCount"
              :key="`user${r}`"
            >
              <b-card
                class="card-icon-big text-center mb-30"
                v-if="r <= 5 && user.rank != 'Chief Engineer'"
              >
                <i class="i-Add-User"></i>
                <p
                  class="text-muted mt-2 mb-2"
                  v-if="user.rank == 'Forth Engineer'"
                >
                  {{ "Fourth Engineers" }}
                </p>
                <p class="text-muted mt-2 mb-2" v-else>
                  {{ user.rank + "s" }}
                </p>
                <p class="line-height-1 text-title text-18 mt-2 mb-0">
                  {{ user.userCount || 0 }}
                </p>
              </b-card>
            </b-col>
            <b-col md="1"></b-col>
          </b-row>
          <b-row>
            <b-col
              md="6"
              sm="6"
              lg="4"
              v-for="(user, r) in userRankCount"
              :key="`user${r}`"
            >
              <b-card class="card-icon-big text-center mb-30" v-if="r > 5">
                <i class="i-Add-User"></i>
                <p class="text-muted mt-2 mb-2">
                  {{ user.rank + "s" }}
                </p>
                <p class="line-height-1 text-title text-18 mt-2 mb-0">
                  {{ user.userCount || 0 }}
                </p>
              </b-card>
            </b-col>
          </b-row>
        </b-card>
      </b-col>
    </b-row>
    <b-row>
      <b-col md="12" lg="12">
        <b-card title="Total Tasks Performed (2022)" class="mb-30">
          <!-- <b-dropdown
            variant="primary"
            id="dropdown-1"
            text="Ship"
            class="mb-2 mr-2"
          >
            <b-dropdown-item
              v-for="ship in ships"
              :key="ship.value"
              :value="ship.text"
              @click="getTotalTaskPerformed(ship.value, rank)"
              >{{ ship.text }}</b-dropdown-item
            >
          </b-dropdown> -->
          <b-row>
            <b-col md="12" lg="6" sm="6">
              <vue-tags-input
                v-model="searchShip"
                :tags="selectedShip"
                class="tag-custom text-15 mb-2"
                :autocomplete-items="filteredShipItems"
                :add-only-from-autocomplete="true"
                @tags-changed="(newTags) => (selectedShip = newTags)"
                placeholder="Type Ship Name"
              />
            </b-col>
            <b-col md="12" lg="6" sm="6">
              <vue-tags-input
                v-model="searchRank"
                :tags="selectedRank"
                class="tag-custom text-15 mb-2"
                :autocomplete-items="filteredRankItems"
                :add-only-from-autocomplete="true"
                :max-tags="1"
                @tags-changed="(newTags) => (selectedRank = newTags)"
                placeholder="Type Rank Name"
              />
            </b-col>
          </b-row>
          <!-- <b-card title="Multiple Bar chart 2" class=" mb-30"> -->
          <div class="chart-wrapper" style="height: 300px">
            <v-chart :options="multipleBar2" :autoresize="true"></v-chart>
          </div>
        </b-card>
      </b-col>
    </b-row>

    <b-row>
      <b-col md="12" lg="12">
        <b-card>
          <h5 class="card-title border-bottom p-3 mb-2">
            Top Performers Based on {{ filter_type }}
          </h5>

          <vue-good-table
            :columns="TopPerformercolumns"
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
            :rows="top_performers"
          >
            <div slot="table-actions" class="mb-3">
              <b-row id="act" class="mr-6">
                <b-col md="6">
                  <span>Mark</span>
                  <label class="switch switch-success mr-1 ml-1">
                    <input
                      type="checkbox"
                      checked="checkbox"
                      v-model="type"
                    /><span class="slider"></span>
                  </label>
                  <span>Task</span>
                </b-col>
                <b-col md="6">
                  <vue-tags-input
                    v-model="searchRank"
                    :tags="selectedTopPerformerRank"
                    class="tag-custom text-15 mb-2"
                    :autocomplete-items="filteredRankItems"
                    :add-only-from-autocomplete="true"
                    :max-tags="1"
                    @tags-changed="
                      (newTags) => (selectedTopPerformerRank = newTags)
                    "
                    placeholder="Type Rank Name"
                  />
                </b-col>
              </b-row>
            </div>

            <template slot="table-row" slot-scope="props">
              <span v-if="props.column.field == 'gender'">
                {{ props.row.gender == 0 ? "Male" : "Female" }}
              </span>
              <span
                v-if="
                  props.column.field == 'first_name' && props.row.first_name
                "
              >
                {{
                  props.row.first_name ? props.row.first_name.toUpperCase() : ""
                }}
              </span>
              <span
                v-if="props.column.field == 'last_name' && props.row.last_name"
              >
                {{
                  props.row.last_name ? props.row.last_name.toUpperCase() : ""
                }}
              </span>
              <span v-if="props.column.field == 'rank' && props.row.rank">
                {{
                  props.row.rank ? props.row.rank.description.toUpperCase() : ""
                }}
              </span>
              <span
                v-if="
                  props.column.field == 'nationality' && props.row.nationality
                "
              >
                {{
                  props.row.nationality
                    ? props.row.nationality.toUpperCase()
                    : ""
                }}
              </span>
              <span
                v-if="props.column.field == 'unique_id' && props.row.unique_id"
              >
                {{ props.row.unique_id ? props.row.unique_id : "" }}
              </span>
              <span v-if="props.column.field == 'email' && props.row.email">
                {{ props.row.email ? props.row.email.toUpperCase() : "" }}
              </span>
              <span v-if="props.column.field == 'average' && props.row.average">
                {{ props.row.average ? props.row.average : "" }}
              </span>
              <span
                v-if="
                  props.column.field == 'task_perfomed' &&
                  props.row.task_perfomed
                "
              >
                {{ props.row.task_perfomed ? props.row.task_perfomed : "" }}
              </span>
            </template>
          </vue-good-table>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import axios from "axios";
// import Vue from "vue";
let GaugeChart = require("vue-gauge/assets/bundle.js");

export default {
  props: {
    title: {
      type: String,
      default: "Awesome Wizard",
    },
  },
  data() {
    return {
      isLoading: false,
      searchingStatus: false,
      multipleBar2,
      CPPtest: {
        options: {
          chartWidth: 320,
          hasNeedle: true,
          needleColor: "black",
          needleStartValue: 0,
          // needleValue: 0,
          needleUpdateSpeed: 5,
          arcColors: ["orange", "green"],
          arcDelimiters: [12.5],
          rangeLabel: ["0", "160"],
        },
      },
      KARCOtest: {
        options: {
          chartWidth: 320,
          hasNeedle: true,
          needleColor: "black",
          needleStartValue: 0,
          // needleValue: 0,
          needleUpdateSpeed: 5,
          arcColors: ["orange", "green"],
          arcDelimiters: [33.33],
          rangeLabel: ["0", "900"],
        },
      },
      VIDEOTELtest: {
        options: {
          chartWidth: 320,
          hasNeedle: true,
          needleColor: "black",
          needleStartValue: 0,
          // needleValue: 0,
          needleUpdateSpeed: 5,
          arcColors: ["orange", "green"],
          arcDelimiters: [33.33],
          rangeLabel: ["0", "900"],
        },
      },
      type: 0,
      total_kpi_CPP: 0,
      cpp_out_of: 0,
      karco_videotel_out_of: 0,
      test: 0,
      total_kpi_karco_tasks: 0,
      total_kpi_videotel_tasks: 0,
      kpi_CPP: 0,
      kpi_karco_tasks: 0,
      kpi_videotel_tasks: 0,
      program_count: "",
      inActive_user: "",
      total_task_completed: "",
      userCounts: [],
      ttp: [],
      ships: [],
      userRankCount: [],
      rank: "",
      top_performers: [],
      top_performers_by_average: [],
      top_performers_by_task: [],
      total_tasks_performed: [],
      form: {
        year: "",
      },
      from_date: "",
      to_date: "",
      years: [
        { value: 2020, text: 2020 },
        { value: 2021, text: 2021 },
      ],
      searchShip: "",
      selectedShip: [],
      shipItems: [],

      searchPeriod: "",
      selectedPeriod: [],
      periodItems: [
        { id: "30", text: "1 Month" },
        { id: "90", text: "3 Month" },
        { id: "180", text: "6 Month" },
        { id: "365", text: "12 Month" },
        { id: "730", text: "24 Month" },
      ],

      searchRank: "",
      selectedRank: [],
      selectedTopPerformerByAverageRank: [],
      selectedTopPerformerByTaskRank: [],
      selectedTopPerformerRank: [],
      rankItems: [],
      filter_type: "Marks",
      TopPerformerByAveragecolumns: [
        {
          label: "First Name",
          field: "first_name",
        },
        {
          label: "Last Name",
          field: "last_name",
        },
        {
          label: "Rank",
          field: "rank",
        },
        {
          label: "Nationality",
          field: "nationality",
        },
        {
          label: "Danos ID",
          field: "unique_id",
        },
        {
          label: "Gender",
          field: "gender",
        },
        {
          label: "Email",
          field: "email",
        },
        {
          label: "Average",
          field: "average",
        },
        // {
        //   label: "Date Of Birth",
        //   field: "dob",
        // },
      ],
      TopPerformerByTaskcolumns: [
        {
          label: "First Name",
          field: "first_name",
        },
        {
          label: "Last Name",
          field: "last_name",
        },
        {
          label: "Rank",
          field: "rank",
        },
        {
          label: "Nationality",
          field: "nationality",
        },
        {
          label: "Danos ID",
          field: "unique_id",
        },
        {
          label: "Gender",
          field: "gender",
        },
        {
          label: "Email",
          field: "email",
        },
        {
          label: "Tasks Performed",
          field: "task_perfomed",
        },
        // {
        //   label: "Date Of Birth",
        //   field: "dob",
        // },
      ],
      TopPerformercolumns: [
        {
          label: "First Name",
          field: "first_name",
        },
        {
          label: "Last Name",
          field: "last_name",
        },
        {
          label: "Rank",
          field: "rank",
        },
        {
          label: "Nationality",
          field: "nationality",
        },
        {
          label: "Danos ID",
          field: "unique_id",
        },
        {
          label: "Gender",
          field: "gender",
        },
        {
          label: "Email",
          field: "email",
        },
        {
          label: "Average",
          field: "average",
        },
        {
          label: "Tasks Performed",
          field: "task_perfomed",
        },
        // {
        //   label: "Date Of Birth",
        //   field: "dob",
        // },
      ],
      cppGauge: null,
      karcoGauge: null,
      videotelGauge: null,
    };
  },
  watch: {
    selectedShip: "getTotalTaskPerformed",
    selectedRank: "getTotalTaskPerformed",
    selectedTopPerformerByAverageRank: "getTopPerformers_by_Average",
    selectedTopPerformerByTaskRank: "getTopPerformers_by_Task",
    selectedTopPerformerRank: "getTopPerformers",
    type: "getTopPerformers",
    selectedPeriod: "clearDateFilter",
    from_date: "clearPeriodFilter",
    to_date: "clearPeriodFilter",
  },
  mounted() {
    this.year = "2022";
    this.getData(this.year);
    this.getMasters();
    this.kpiData();
    this.selectedPeriod.push({ id: "90", text: "3 Month" });
    this.cppGauge = GaugeChart.gaugeChart(
      document.querySelector("#cpp-graph"),
      320,
      this.CPPtest.options
    );
    this.karcoGauge = GaugeChart.gaugeChart(
      document.querySelector("#karco-graph"),
      320,
      this.KARCOtest.options
    );
    this.videotelGauge = GaugeChart.gaugeChart(
      document.querySelector("#videotel-graph"),
      320,
      this.VIDEOTELtest.options
    );
  },
  methods: {
    clearPeriodFilter() {
      this.selectedPeriod = [];
      this.period = "";
    },
    clearDateFilter() {
      if (this.selectedPeriod[0]) {
        this.period = this.selectedPeriod[0] ? this.selectedPeriod[0].id : "";
        this.from_date = "";
        this.to_date = "";
      }
    },
    async getData(year) {
      this.year = year;
      this.isLoading = true;
      let userCounts = await axios.get(`/user_counts?year=${year}`);
      this.userCounts = userCounts.data.data;
      this.program_count = userCounts.data.program_count;
      this.inActive_user = userCounts.data.inActive_user;
      this.total_task_completed = userCounts.data.total_task_completed;

      let ThirdOfficerA = 0;
      let ThirdOfficerB = 0;
      let ThirdOfficer = {};
      let FourthEngineerA = 0;
      let FourthEngineerB = 0;
      let FourthEngineer = {};
      this.userCounts.forEach((user) => {
        if (
          user.rank != null &&
          user.rank != "" &&
          user.rank != "ETO" &&
          user.rank != "Master"
        ) {
          const rank = user.rank;

          switch (rank) {
            case "Deck Cadet":
              user.id = 1;
              break;
            case "Engine Cadet":
              user.id = 2;
              break;
            case "Third Officer A":
              ThirdOfficerA = user.userCount;
              break;
            case "Third Officer B":
              ThirdOfficerB = user.userCount;
              break;
            case "Fourth Engineer A":
              FourthEngineerA = user.userCount;
              break;
            case "Second Engineer":
              user.id = 5;
              break;
            case "Fourth Engineer B":
              FourthEngineerB = user.userCount;
              break;
            case "Chief Engineer":
              user.id = 6;
              break;
            case "Third Engineer":
              user.id = 4;
              break;
            case "Second Officer":
              user.id = 8;
              break;
            case "Chief Officer":
              user.id = 9;
              break;
            default:
              console.log("Try looking up for a hint.");
          }
          if (user.id) {
            this.userRankCount.push(user);
          }
        }
      });

      ThirdOfficer = {
        id: 7,
        rank: "Third Officer",
        userCount: ThirdOfficerA + ThirdOfficerB,
      };
      this.userRankCount.push(ThirdOfficer);
      FourthEngineer = {
        id: 3,
        rank: "Forth Engineer",
        userCount: FourthEngineerA + FourthEngineerB,
      };
      this.userRankCount.push(FourthEngineer);

      this.userRankCount.sort((a, b) => a.id - b.id);

      // this.kpiData();
      this.getTotalTaskPerformed();
      // this.getTopPerformers_by_Average();
      // this.getTopPerformers_by_Task();
      // this.getTopPerformers();
      this.isLoading = false;
    },
    async getTopPerformers_by_Average() {
      this.isLoading = true;
      let rank = this.selectedTopPerformerByAverageRank[0]
        ? this.selectedTopPerformerByAverageRank[0].id
        : "";
      let top_performers_by_average = await axios.get(
        `/top_performers_by_average?year=${this.year}&rank=${rank}`
      );
      this.top_performers_by_average = top_performers_by_average.data.data;
      this.isLoading = false;
    },
    async getTopPerformers_by_Task() {
      this.isLoading = true;
      let rank = this.selectedTopPerformerByTaskRank[0]
        ? this.selectedTopPerformerByTaskRank[0].id
        : "";

      let top_performers_by_task = await axios.get(
        `/top_performers_by_task?year=${this.year}&rank=${rank}`
      );
      this.top_performers_by_task = top_performers_by_task.data.data;
      this.isLoading = false;
    },
    async getTopPerformers() {
      this.isLoading = true;
      let rank = this.selectedTopPerformerRank[0]
        ? this.selectedTopPerformerRank[0].id
        : "";

      let top_performers = await axios.get(
        `/top_performers?year=${this.year}&rank=${rank}&type=${this.type}`
      );
      this.top_performers = top_performers.data.data;
      this.filter_type = top_performers.data.filter_type;
      this.isLoading = false;
    },
    async getTotalTaskPerformed() {
      this.isLoading = true;
      this.rank = this.selectedRank[0] ? this.selectedRank[0].id : "";
      this.ships = [];
      this.selectedShip.forEach((ship) => {
        this.ships.push(ship.id);
      });

      let total_tasks_performed = await axios.get(
        `/total_tasks_performed?year=${this.year}&ship=${this.ships}&rank=${this.rank}`
      );
      this.total_tasks_performed = total_tasks_performed.data.data;
      multipleBar2.series[0].data = [];
      this.total_tasks_performed.forEach((data) => {
        multipleBar2.series[0].data.push(data);
      });
      // console.log("Multiple Bar");
      // console.log(multipleBar2);

      this.total_karco_tasks_performed =
        total_tasks_performed.data.total_karco_tasks_performed;
      // multipleBar2.setOption();
      multipleBar2.series[1].data = [];
      this.total_karco_tasks_performed.forEach((data) => {
        multipleBar2.series[1].data.push(data);
      });

      this.total_videotel_tasks_performed =
        total_tasks_performed.data.total_videotel_tasks_performed;
      multipleBar2.series[2].data = [];
      this.total_videotel_tasks_performed.forEach((data) => {
        multipleBar2.series[2].data.push(data);
      });
      this.ttp = [];
      this.month = [];
      this.total_tasks_performed.forEach((month) => {
        this.ttp.push(month);
      });
      this.isLoading = false;
    },
    async getMasters() {
      let masters = await axios.get(`analytics/masters`);
      masters = masters.data;
      masters.ships.forEach((ship) => {
        this.shipItems.push({
          id: ship.id,
          text: ship.description,
        });
      });
      masters.posts.forEach((rank) => {
        this.rankItems.push({
          id: rank.id,
          text: rank.description,
        });
      });
    },
    async kpiData() {
      this.searchingStatus = true;
      this.period = "90";
      let kpi_data = await axios.get(
        `/kpi_data?year=${this.year}&from_date=${this.from_date}&to_date=${this.to_date}&period=${this.period}`
      );
      this.kpi_CPP = kpi_data.data.kpi_CPP_percentage;
      this.kpi_karco_tasks = kpi_data.data.kpi_karco_tasks_percentage;
      this.kpi_videotel_tasks = kpi_data.data.kpi_videotel_tasks_percentage;

      this.total_kpi_CPP = kpi_data.data.kpi_CPP;
      this.total_kpi_karco_tasks = kpi_data.data.kpi_karco_tasks;
      this.total_kpi_videotel_tasks = kpi_data.data.kpi_videotel_tasks;
      this.cpp_out_of = kpi_data.data.cpp_out_of;
      this.karco_videotel_out_of = kpi_data.data.karco_videotel_out_of;

      // CPP GAUGE SECTION
      this.cppGauge.removeGauge();
      let rangeLast = this.cpp_out_of * 3;
      this.CPPtest.options.arcDelimiters = [33.33];
      // this.CPPtest.options.chartWidth = 420;
      this.CPPtest.options.rangeLabel = ["0", "" + rangeLast];
      this.cppGauge = GaugeChart.gaugeChart(
        document.querySelector("#cpp-graph"),
        320,
        this.CPPtest.options
      );

      let cppGraphPercent = (this.total_kpi_CPP / rangeLast) * 100;
      this.cppGauge.updateNeedle(cppGraphPercent);

      // KARCO GAUGE SECTION
      this.karcoGauge.removeGauge();
      let karco_rangeLast = this.karco_videotel_out_of * 3;
      this.KARCOtest.options.arcDelimiters = [33.33];
      this.KARCOtest.options.rangeLabel = ["0", "" + karco_rangeLast];
      this.karcoGauge = GaugeChart.gaugeChart(
        document.querySelector("#karco-graph"),
        320,
        this.KARCOtest.options
      );

      let karcoGraphPercent =
        (this.total_kpi_karco_tasks / karco_rangeLast) * 100;
      this.karcoGauge.updateNeedle(karcoGraphPercent);

      // VIDEOTEL GAUGE SECTION
      this.videotelGauge.removeGauge();
      let videotel_rangeLast = this.karco_videotel_out_of * 3;
      this.VIDEOTELtest.options.arcDelimiters = [33.33];
      this.VIDEOTELtest.options.rangeLabel = ["0", "" + videotel_rangeLast];
      this.videotelGauge = GaugeChart.gaugeChart(
        document.querySelector("#videotel-graph"),
        320,
        this.VIDEOTELtest.options
      );

      let videotelGraphPercent =
        (this.total_kpi_videotel_tasks / videotel_rangeLast) * 100;
      this.videotelGauge.updateNeedle(videotelGraphPercent);

      this.searchingStatus = false;
    },
  },
  computed: {
    filteredShipItems() {
      return this.shipItems.filter((pt) => {
        return (
          pt.text.toLowerCase().indexOf(this.searchShip.toLowerCase()) !== -1
        );
      });
    },
    filteredRankItems() {
      return this.rankItems.filter((pt) => {
        return (
          pt.text.toLowerCase().indexOf(this.searchRank.toLowerCase()) !== -1
        );
      });
    },
    filteredPeriodItems() {
      return this.periodItems.filter((pt) => {
        return (
          pt.text.toLowerCase().indexOf(this.searchPeriod.toLowerCase()) !== -1
        );
      });
    },
  },
};

// Multibar 2 Chart
var dark_heading = "#c2c6dc";
export const multipleBar2 = {
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "shadow",
    },
  },
  grid: {
    top: "8%",
    left: "3%",
    right: "4%",
    bottom: "3%",
    containLabel: true,
  },
  yAxis: {
    type: "value",
    min: 0,
    max: 500,
    interval: 100,
    axisLabel: {
      formatter: "{value}",
      color: dark_heading,
      fontSize: 12,
      fontStyle: "normal",
      fontWeight: 400,
    },
    axisLine: {
      show: false,
      lineStyle: {
        color: dark_heading,
        width: 1,
      },
    },
    axisTick: {
      show: false,
      lineStyle: {
        color: dark_heading,
        width: 1,
      },
    },
    splitLine: {
      lineStyle: {
        color: "#ddd",
        width: 1,
        opacity: 0.5,
      },
    },
  },
  xAxis: {
    type: "category",
    boundaryGap: true,
    data: [
      "JANUARY",
      "FEBRUARY",
      "MARCH",
      "APRIL",
      "MAY",
      "JUNE",
      "JULY",
      "AUGUST",
      "SEPTEMBER",
      "OCTOBER",
      "NOVEMBER",
      "DECEMBER",
    ],
    axisLabel: {
      formatter: "{value}",
      color: dark_heading,
      fontSize: 12,
      fontStyle: "normal",
      fontWeight: 400,
    },
    axisLine: {
      show: false,
      lineStyle: {
        color: dark_heading,
        width: 1,
      },
    },
    axisTick: {
      show: false,
      lineStyle: {
        color: dark_heading,
        width: 1,
      },
    },
    splitLine: {
      show: false,
      lineStyle: {
        color: dark_heading,
        width: 1,
      },
    },
  },
  series: [
    {
      color: "#3182bd",
      name: "CPP",
      type: "bar",
      barGap: 0,
      label: {
        normal: {
          show: false,
          position: "insideBottom",
          distance: 5,
          align: "left",
          verticalAlign: "middle",
          rotate: 90,
          formatter: "{c}  {name|{a}}",
          fontSize: 14,
          fontWeight: "bold",
          rich: {
            name: {
              color: "#fff",
            },
          },
        },
      },
      data: [],
      // data: [320, 332, 301, 334, 390, 350, 215, 332, 301, 334, 390, 350],
    },
    {
      color: "#74c475",
      name: "KARCO",
      type: "bar",
      label: {
        normal: {
          show: false,
          position: "insideBottom",
          distance: 5,
          align: "left",
          verticalAlign: "middle",
          rotate: 90,
          formatter: "{c}  {name|{a}}",
          fontSize: 14,
          fontWeight: "bold",
          rich: {
            name: {
              color: "#fff",
            },
          },
        },
      },
      data: [],
      // data: [220, 182, 191, 234, 290, 190, 210, 182, 191, 234, 290, 190],
    },
    {
      color: "#e6550d",
      name: "Videotel",
      type: "bar",
      label: {
        normal: {
          show: false,
          position: "insideBottom",
          distance: 5,
          align: "left",
          verticalAlign: "middle",
          rotate: 90,
          formatter: "{c}  {name|{a}}",
          fontSize: 14,
          fontWeight: "bold",
          rich: {
            name: {
              color: "#fff",
            },
          },
        },
      },
      data: [],
      // data: [150, 232, 201, 154, 190, 150, 130, 232, 201, 154, 190, 150],
    },
    // {
    //   color: "#756bb1",
    //   name: "Wetland",
    //   type: "bar",
    //   label: {
    //     normal: {
    //       show: false,
    //       position: "insideBottom",
    //       distance: 5,
    //       align: "left",
    //       verticalAlign: "middle",
    //       rotate: 90,
    //       formatter: "{c}  {name|{a}}",
    //       fontSize: 14,
    //       fontWeight: "bold",
    //       rich: {
    //         name: {
    //           color: "#fff",
    //         },
    //       },
    //     },
    //   },
    //   data: [98, 77, 101, 99, 40, 30, 50],
    // },
  ],
};
</script>

<style>
.gull-border-none {
  border-bottom: none !important;
}
table.tableOne.vgt-table {
  border: none;
}
table.vgt-table td {
  padding: 8px;
}
.breadcrumb h1 {
  color: white;
}
</style>
