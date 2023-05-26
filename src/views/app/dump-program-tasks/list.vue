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
            <router-link
              v-if="!props.row.user_id"
              :to="'/app/dump-program-tasks/' + props.row.id"
              style="margin-bottom: 5px"
            >
              <button class="btn btn-success btn-sm">Manually Assign</button>
              {{ props.row.button }}</router-link
            >
            <button
              v-if="!props.row.user_id"
              @click="autoAssign(props.row.id)"
              class="btn btn-success btn-sm"
              style="margin-top: 5px"
            >
              <span v-if="autoAssignStatus == false">Auto Assign</span>
              <span v-else>Assigning...</span>
            </button>
          </span>
        </template>
      </vue-good-table>
      <b-div>
        <b-modal v-model="modalShow" hide-footer>
          <div class="d-block text-center">
            <h3>{{ msg }}</h3>
          </div>
          <b-button class="mt-3" block @click="modalShow = fasle"
            >Close</b-button
          >
        </b-modal>
      </b-div>
    </b-card>
  </div>
</template>

<script>
import axios from "axios";
export default {
  metaInfo: {
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
          label: "Assigned User",
          field: "user.first_name",
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
      autoAssignStatus: false,
      msg: "",
      modalShow: false,
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
      this.getData();
      this.generateStatus = false;
    },
    async autoAssign(dumpId) {
      this.autoAssignStatus = true;

      let dump_program_tasks = await axios.get(
        `/dump_program_tasks/assign/${dumpId}`
      );
      this.dump_program_tasks = dump_program_tasks.data.data;
      this.msg = dump_program_tasks.data.message;
      console.log(this.msg);
      this.modalShow = true;
      // this.serialNoStarting = (page - 1) * this.rowsPerPage;
      this.getData();
      this.autoAssignStatus = false;
    },
    // showModal() {
    //   this.$refs["my-modal"].show();
    // },
    // hideModal() {
    //   this.$refs["my-modal"].hide();
    // },
  },
};
</script>
<style></style>
