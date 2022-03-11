<template>
  <div class="main-content">
    <breadcumb :page="'KARCO Tasks List'" :folder="'KARCO Tasks'" />
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
        :rows="karco_tasks"
      >
        <div slot="table-actions" class="mb-3">
          <b-row>
            <router-link tag="a" class to="/app/karco-tasks/upload">
              <i class="i-Upload text-25 text-success mr-2"></i
            ></router-link>
            <b-button
              @click="$router.back()"
              variant="primary"
              class="btn-rounded d-none d-sm-block mr-2"
              ><i class="i-Arrow-Back-3"></i> BACK</b-button
            >

            <!-- <b-button
              variant="primary"
              class="btn-rounded d-none d-sm-block"
              to="/app/karco-tasks/create"
              ><i class="i-Add text-white mr-2"> </i>Add karco-task
            </b-button> -->
          </b-row>
        </div>

        <template slot="table-row" slot-scope="props">
          <!-- <span v-if="props.column.field == 'button'">
            <a :href="'/app/karco-tasks/' + props.row.id">
              <i class="i-Eraser-2 text-25 text-success mr-2"></i>
              {{ props.row.button }}</a
            >
          </span> -->
          <span v-if="props.column.field == 'vessel_name'">
            {{ props.row.ship.description }}
          </span>
          <span v-if="props.column.field == 'crew_name'">
            {{ props.row.user.user_name }}
          </span>
          <span v-if="props.column.field == 'employee_id'">
            {{ props.row.user.unique_id }}
          </span>
          <span v-if="props.column.field == 'rank'">
            {{ props.row.user.rank.description }}
          </span>
          <span v-if="props.column.field == 'nationality'">
            {{ props.row.user.nationality }}
          </span>
          <span v-if="props.column.field == 'department'">
            {{ props.row.department }}
          </span>
          <span v-if="props.column.field == 'status'">
            {{ props.row.status }}
          </span>
          <span v-if="props.column.field == 'signed_on'">
            {{ props.row.signed_on }}
          </span>
          <span v-if="props.column.field == 'video_title'">
            {{ props.row.video_title }}
          </span>
          <span v-if="props.column.field == 'no_of_preview_watched'">
            {{ props.row.no_of_preview_watched }}
          </span>
          <span v-if="props.column.field == 'no_of_video_watched'">
            {{ props.row.no_of_video_watched }}
          </span>
          <span v-if="props.column.field == 'obtained_marks'">
            {{ props.row.obtained_marks }}
          </span>
          <span v-if="props.column.field == 'total_marks'">
            {{ props.row.total_marks }}
          </span>
          <span v-if="props.column.field == 'percentage'">
            {{ props.row.percentage }}
          </span>
          <span v-if="props.column.field == 'done_on'">
            {{ props.row.done_on }}
          </span>
          <span v-if="props.column.field == 'due_days'">
            {{ props.row.due_days }}
          </span>
          <span v-if="props.column.field == 'assessment_status'">
            {{ props.row.assessment_status }}
          </span>
          <span v-if="props.column.field == 'delete'">
            <b-button
              variant="primary"
              class="btn-rounded d-none d-sm-block"
              @click="deleteKarcos(props.row.id)"
              >Delete
            </b-button>
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
    title: "KARCO Task Lits",
  },
  data() {
    return {
      columns: [
        {
          label: "Vessel Name",
          field: "vessel_name",
        },
        {
          label: "Crew Name",
          field: "crew_name",
        },
        {
          label: "Employee ID",
          field: "employee_id",
        },
        {
          label: "Rank",
          field: "rank",
        },
        {
          label: "Department",
          field: "department",
        },
        {
          label: "Status",
          field: "status",
        },
        {
          label: "Signed On",
          field: "signed_on",
        },
        {
          label: "Nationality",
          field: "nationality",
        },
        {
          label: "Video Title",
          field: "video_title",
        },
        {
          label: "No. Of Preview Watched",
          field: "no_of_video_watched",
        },
        {
          label: "Obtained Marks",
          field: "obtained_marks",
        },
        {
          label: "Total Marks",
          field: "total_marks",
        },
        {
          label: "Percentage",
          field: "percentage",
        },
        {
          label: "Done On",
          field: "done_on",
        },
        {
          label: "Due Days",
          field: "due_days",
        },
        {
          label: "Assessment Status",
          field: "assessment_status",
        },
        {
          label: "Action",
          field: "delete",
        },
      ],
      karco_tasks: [],
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    async getData() {
      this.isLoading = true;
      let karco_tasks = await axios.get(`karco_tasks`);
      this.karco_tasks = karco_tasks.data.data;
      // this.count = karco_tasks.data.count;
      // this.serialNoStarting = (page - 1) * this.rowsPerPage;
      this.isLoading = false;
    },
    async deleteKarcos(id) {
      this.$swal({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.value) {
          axios.post(`delete_karco_tasks/${id}`);
          this.$swal("Deleted!", "Your file has been deleted.", "success");
          this.getData();
        }
      });
    },
  },
};
</script>
<style></style>
