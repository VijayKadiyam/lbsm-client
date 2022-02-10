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

    <b-row>
      <b-col md="6" lg="6" sm="6">
        <b-card
          title="SCHEDULES PERFORMANCE - EXPECTED VS COMPLETED"
          class="mb-30"
        >
          <div id="basicArea-chart">
            <apexchart
              type="radialBar"
              height="350"
              :options="PSCDEfRatio.chartOptions"
              :series="PSCDEfRatio.series"
            />
          </div>
        </b-card>
      </b-col>
      <b-col md="6" lg="6" sm="6">
        <b-card
          title="SCHEDULES PERFORMANCE - EXPECTED VS COMPLETED"
          class="mb-30"
        >
          <div id="basicArea-chart">
            <apexchart
              type="radialBar"
              height="350"
              :options="PSCDEfRatio.chartOptions"
              :series="PSCDEfRatio.series"
            />
          </div>
        </b-card>
      </b-col>
    </b-row>
    <!-- <b-row>
      <b-col md="12" class="mb-30">
        <b-card class="h-100">
          <b-dropdown
            variant="primary"
            id="dropdown-1"
            text="Month"
            class="mb-2 mr-2"
          >
            <b-dropdown-item>January</b-dropdown-item>
            <b-dropdown-item>February</b-dropdown-item>
            <b-dropdown-item>March</b-dropdown-item>
            <b-dropdown-item>April</b-dropdown-item>
            <b-dropdown-item>May</b-dropdown-item>
            <b-dropdown-item>June</b-dropdown-item>
            <b-dropdown-item>July</b-dropdown-item>
            <b-dropdown-item>August</b-dropdown-item>
            <b-dropdown-item>September</b-dropdown-item>
            <b-dropdown-item>October</b-dropdown-item>
            <b-dropdown-item>November</b-dropdown-item>
            <b-dropdown-item>December</b-dropdown-item>
          </b-dropdown>
          <b-dropdown
            variant="primary"
            id="dropdown-1"
            v-model="form.year"
            text="Year"
            class="mb-2 mr-2"
          >
            <b-dropdown-item
              v-for="year in years"
              :key="year.value"
              :value="year.value"
              @click="getData(year.value)"
              >{{ year.value }}</b-dropdown-item
            >
          </b-dropdown>
        </b-card>
      </b-col>
    </b-row> -->
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
            <b-col
              md="6"
              sm="6"
              lg="2"
              v-for="(user, r) in userRankCount"
              :key="`user${r}`"
            >
              <b-card class="card-icon-big text-center mb-30" v-if="r <= 5">
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
    <!-- <b-row>
      <b-col md="12" lg="6" sm="6">
        <b-card
          title="SCHEDULES PERFORMANCE - EXPECTED VS COMPLETED"
          class="mb-30"
        >
          <div id="basicArea-chart">
            <apexchart
              type="radialBar"
              height="350"
              :options="PSCDEfRatio.chartOptions"
              :series="PSCDEfRatio.series"
            />
          </div>
        </b-card>
      </b-col>
    </b-row> -->
    <b-row>
      <b-col md="12" lg="12">
        <b-card title="Total Tasks Performed (2021)" class="mb-30">
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

          <div id="basicArea-chart" style="min-height: 365px">
            <apexchart
              type="bar"
              height="350"
              :options="TopBasicCauses.chartOptions"
              :series="TopBasicCauses.chartOptions.series"
            />
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
            </template>
          </vue-good-table>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import axios from "axios";
// import 
export default {
  // metaInfo: {
  //   // if no subcomponents specify a metaInfo.title, this title will be used
  //   title: "Dashboard v5",
  // },
  props: {
    title: {
      type: String,
      default: "Awesome Wizard",
    },
  },
  data() {
    return {
      TopBasicCauses,
      ActivitiesWithPPEIssues,
      PSCDEfRatio,
      type: 0,
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
      years: [
        { value: 2020, text: 2020 },
        { value: 2021, text: 2021 },
      ],
      searchShip: "",
      selectedShip: [],
      shipItems: [],

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
    };
  },
  watch: {
    selectedShip: "getTotalTaskPerformed",
    selectedRank: "getTotalTaskPerformed",
    selectedTopPerformerByAverageRank: "getTopPerformers_by_Average",
    selectedTopPerformerByTaskRank: "getTopPerformers_by_Task",
    selectedTopPerformerRank: "getTopPerformers",
    type: "getTopPerformers",
  },
  mounted() {
    this.year ="2022";
    this.getData(this.year);
    this.getMasters();
  },
  methods: {
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

      this.getTotalTaskPerformed();
      this.getTopPerformers_by_Average();
      this.getTopPerformers_by_Task();
      this.getTopPerformers();
      this.isLoading = false;
    },
    //     sortedArray(){
    //     return this.userRankCount.sort((a, b) => a.id - b.id );
    // },
    async getTopPerformers_by_Average() {
      let rank = this.selectedTopPerformerByAverageRank[0]
        ? this.selectedTopPerformerByAverageRank[0].id
        : "";
      this.isLoading = true;
      let top_performers_by_average = await axios.get(
        `/top_performers_by_average?year=${this.year}&rank=${rank}`
      );
      this.top_performers_by_average = top_performers_by_average.data.data;
      this.isLoading = false;
    },
    async getTopPerformers_by_Task() {
      let rank = this.selectedTopPerformerByTaskRank[0]
        ? this.selectedTopPerformerByTaskRank[0].id
        : "";

      this.isLoading = true;
      let top_performers_by_task = await axios.get(
        `/top_performers_by_task?year=${this.year}&rank=${rank}`
      );
      this.top_performers_by_task = top_performers_by_task.data.data;
      this.isLoading = false;
    },
    async getTopPerformers() {
      let rank = this.selectedTopPerformerRank[0]
        ? this.selectedTopPerformerRank[0].id
        : "";

      this.isLoading = true;
      let top_performers = await axios.get(
        `/top_performers?year=${this.year}&rank=${rank}&type=${this.type}`
      );
      this.top_performers = top_performers.data.data;
      this.filter_type = top_performers.data.filter_type;
      this.isLoading = false;
    },
    async getTotalTaskPerformed() {
      this.rank = this.selectedRank[0] ? this.selectedRank[0].id : "";
      this.ships = [];
      this.selectedShip.forEach((ship) => {
        this.ships.push(ship.id);
      });
      this.isLoading = true;
      let total_tasks_performed = await axios.get(
        `/total_tasks_performed?year=${this.year}&ship=${this.ships}&rank=${this.rank}`
      );
      this.total_tasks_performed = total_tasks_performed.data.data;
      this.total_karco_tasks_performed = total_tasks_performed.data.total_karco_tasks_performed;
      this.ttp = [];
      this.month = [];
      this.total_tasks_performed.forEach((month) => {
        this.ttp.push(month);
      });
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
  },
};
// const year=this.year;
// start::TopBasicCauses
export const TopBasicCauses = {
  chartOptions: {
    chart: {
      height: 350,
      type: "bar",
    },
    colors: [
      "#008FFB",
      "#00E396",
      "#FEB019",
      "#FF4560",
      "#775DD0",
      "#546E7A",
      "#26a69a",
      "#D10CE8",
    ],
    plotOptions: {
      bar: {
        columnWidth: "45%",
        distributed: true,
        endingShape: "rounded",
      },
    },
    dataLabels: {
      enabled: false,
    },
    series: [
      {
        data: [9, 6, 5, 4, 2, 2, 1, 4, 5, 10, 3, 5],
      },
    ],
    xaxis: {
      categories: [
        "January ",
        "February 2021",
        "March 201",
        "April 2021",
        "May 2021",
        "June 2021",
        "July 2021",
        "August 2021",
        "September 2021",
        "October 2021",
        "November 2021",
        "December 2021",
      ],
      labels: {
        style: {
          colors: [
            "#008FFB",
            "#00E396",
            "#FEB019",
            "#FF4560",
            "#775DD0",
            "#546E7A",
            "#26a69a",
            "#D10CE8",
          ],
          fontSize: "14px",
        },
      },
    },
  },
};

// start::ActivitiesWithPPEIssues
export const ActivitiesWithPPEIssues = {
  color: ["#c13018", "#f36d12", "#ebcb37", "#a0b967", "#0d94bc", "#04a9f4"],
  grid: {
    left: "3%",
    right: "4%",
    bottom: "3%",
    containLabel: true,
  },
  tooltip: {
    show: true,
    backgroundColor: "rgba(0, 0, 0, .8)",
  },
  xAxis: [
    {
      axisLine: {
        show: false,
      },
      splitLine: {
        show: false,
      },
    },
  ],
  yAxis: [
    {
      axisLine: {
        show: false,
      },
      splitLine: {
        show: false,
      },
    },
  ],

  series: [
    {
      name: "Activities with PPE Issues",
      type: "pie",
      radius: "50%",
      center: "50%",
      data: [
        {
          value: 11,
          name: "Painting",
        },
        {
          value: 6,
          name: "Working Overside",
        },
        {
          value: 4,
          name: "Working Aloft",
        },
        {
          value: 8,
          name: "Chemical Handling",
        },
        {
          value: 5,
          name: "Buffing/Grinding",
        },
      ],
      itemStyle: {
        emphasis: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: "rgba(0, 0, 0, 0.5)",
        },
      },
    },
  ],
};

// start::PSCDEfRatio
export const PSCDEfRatio = {
  series: [50],
  chartOptions: {
    plotOptions: {
      radialBar: {
        startAngle: -90,
        endAngle: 90,
        track: {
          background: "#e7e7e7",
          strokeWidth: "97%",
          margin: 5, // margin is in pixels
          shadow: {
            enabled: true,
            top: 2,
            left: 0,
            color: "#999",
            opacity: 1,
            blur: 2,
          },
        },
        dataLabels: {
          name: {
            show: false,
          },
          value: {
            offsetY: 15,
            fontSize: "22px",
          },
        },
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "light",
        shadeIntensity: 0.4,
        inverseColors: false,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 50, 53, 91],
      },
    },
    labels: ["Average Results"],
  },
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
