<template>
  <div class="main-content">
    <breadcumb :page="'Videotel Tasks List'" :folder="'Videotel Tasks'" />
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
        :rows="videotel_tasks"
      >
        <div slot="table-actions" class="mb-3">
          <b-row>
            <router-link tag="a" class to="/app/videotel-tasks/upload">
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
              to="/app/videotel-tasks/create"
              ><i class="i-Add text-white mr-2"> </i>Add videotel-task
            </b-button> -->
          </b-row>
        </div>

        <template slot="table-row" slot-scope="props">
          <!-- <span v-if="props.column.field == 'button'">
            <a :href="'/app/videotel-tasks/' + props.row.id">
              <i class="i-Eraser-2 text-25 text-success mr-2"></i>
              {{ props.row.button }}</a
            >
          </span> -->
          <span v-if="props.column.field == 'location'">
            {{ props.row.ship.description }}
          </span>
          <span v-if="props.column.field == 'first_name'">
            {{ props.row.user.first_name }}
          </span>
          <span v-if="props.column.field == 'last_name'">
            {{ props.row.user.last_name }}
          </span>
          <span v-if="props.column.field == 'crew_id'">
            {{ props.row.user.unique_id }}
          </span>
          <span v-if="props.column.field == 'rank'">
            {{ props.row.user.rank.description }}
          </span>
          <span v-if="props.column.field == 'training_title'">
            {{ props.row.training_title }}
          </span>
          <span v-if="props.column.field == 'module'">
            {{ props.row.module }}
          </span>
          <span v-if="props.column.field == 'type'">
            {{ props.row.type }}
          </span>
          <span v-if="props.column.field == 'date'">
            {{ props.row.date }}
          </span>
          <span v-if="props.column.field == 'duration'">
            {{ props.row.duration }}
          </span>
          <span v-if="props.column.field == 'score'">
            {{ props.row.score }}
          </span>
          <span v-if="props.column.field == 'delete'">
            <b-button
              variant="primary"
              class="btn-rounded d-none d-sm-block"
              @click="deleteVideotel(props.row.id)"
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
    title: "Videotel Task Lits",
  },
  data() {
    return {
      columns: [
        {
          label: "Location",
          field: "location",
        },
        {
          label: "First Name",
          field: "first_name",
        },
        {
          label: "Last Name",
          field: "last_name",
        },
        {
          label: "Crew ID",
          field: "crew_id",
        },
        {
          label: "Rank",
          field: "rank",
        },
        {
          label: "Training Title",
          field: "training_title",
        },
        {
          label: "Module",
          field: "module",
        },
        {
          label: "Type",
          field: "type",
        },
        {
          label: "Date",
          field: "date",
        },
        {
          label: "Duration",
          field: "duration",
        },
        {
          label: "Score",
          field: "score",
        },
        {
          label: "Action",
          field: "delete",
        },
      ],
      videotel_tasks: [],
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    async getData() {
      this.isLoading = true;
      let videotel_tasks = await axios.get(`videotel_tasks`);
      this.videotel_tasks = videotel_tasks.data.data;
      // this.count = videotel_tasks.data.count;
      // this.serialNoStarting = (page - 1) * this.rowsPerPage;
      this.isLoading = false;
    },
    async deleteVideotel(id) {
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
          axios.post(`delete_videotel_tasks/${id}`);
          this.$swal("Deleted!", "Your file has been deleted.", "success");
          this.getData();
        }
      });
    },
  },
};
</script>
<style></style>
