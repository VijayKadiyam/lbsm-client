<template>
  <div class="main-content">
    <breadcumb :page="'Dump Program Task'" :folder="'Dump Program Tasks'" />

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
        :rows="dump_program_tasks"
      >
        <div slot="table-actions" class="mb-6">
          <b-button
            variant="primary"
            class="btn-rounded d-none d-sm-block"
            @click="refreshDumpProgramTask()"
            ><i class="i-Refresh text-18 text-white mr-2"> </i>Refresh
          </b-button>
          &nbsp; &nbsp;
          <div
            v-if="generateStatus"
            class="spinner spinner-primary"
            style="float: right; margin-top: -40px"
          ></div>
        </div>

        <!-- <div slot="table-actions" class="mb-3"></div> -->

        <template slot="table-row" slot-scope="props">
          <span v-if="props.column.field == 'button'">
            <router-link :to="'/app/dump-program-tasks/' + props.row.id">
              <i class="i-Add text-25 text-success mr-2"></i>
              {{ props.row.button }}</router-link
            >
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
    title: "Dump Program Task",
  },
  data() {
    return {
      columns: [
        {
          label: "Subject",
          field: "subject",
        },
        {
          label: "Attachment",
          field: "imagepath1",
        },
        {
          label: "Action",
          field: "button",
        },
      ],
      dump_program_tasks: [],
      generateStatus: false,
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    async getData() {
      this.isLoading = true;

      // User Program Task log
      let dump_program_tasks = await axios.get(`/dump_program_tasks`);
      this.dump_program_tasks = dump_program_tasks.data.data;
      // this.serialNoStarting = (page - 1) * this.rowsPerPage;
      this.isLoading = false;
    },
    async refreshDumpProgramTask() {
      // alert("Refresh");
      this.generateStatus = true;

      // User Program Task log
      let dump_program_tasks = await axios.get(`/dump_program_tasks/emails`);
      this.dump_program_tasks = dump_program_tasks.data.data;
      // this.serialNoStarting = (page - 1) * this.rowsPerPage;
      this.generateStatus = false;
    },
  },
};
</script>
<style></style>
