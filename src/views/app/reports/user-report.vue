<template>
  <section id="mydiv">
    <b-card>
      <b-button
        variant="primary"
        class="btn-rounded d-none d-sm-block"
        style="float: right"
        @click="generatePDF()"
      >
        Download Report
      </b-button>
      <center>
        <b-col md="3">
          <img src="@/assets/images/aaibuzz-logo1.png" alt />
        </b-col>
        <b-col md="9"><h4>Landbridge Ship Management (HK) Limited</h4></b-col>
      </center>
      <hr />
      <b-col md="12">
        <h4>
          User Details
        </h4>

        <table class="table table-response">
          <tr>
            <th>Sr No</th>
            <th>Name</th>
            <th>Rank</th>
            <th>Danos</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
          <tr>
            <td>1</td>
            <td>Kaisar</td>
            <td>Desk Enginner</td>
            <td>45882</td>
            <td></td>
            <td></td>
          </tr>
        </table>
      </b-col>
      <br />
      <b-col md="12">
        <h4>
          User Program Details
        </h4>

        <table class="table table-response">
          <tr>
            <th>Sr No</th>
            <th>Program Name</th>
            <th>Program Description</th>
          </tr>
          <tr>
            <td>1</td>
            <td>Program Name</td>
            <td>Program Description</td>
          </tr>
        </table>
      </b-col>
      <br />
      <b-col md="12">
        <h4>
          User Program Posts
        </h4>
        <table class="table table-response">
          <tr>
            <th>Sr No</th>
            <th>Post Name</th>
          </tr>
          <tr>
            <td>1</td>
            <td>POst</td>
          </tr>
        </table>
      </b-col>
      <br />
      <b-col md="12">
        <h4>
          User Program Tasks
        </h4>
        <table class="table table-response">
          <tr>
            <th>Sr No</th>
            <th>Program Name</th>
            <th>Task Name</th>
          </tr>
          <tr>
            <td>1</td>
            <td>Program 1</td>
            <td>Task 1</td>
          </tr>
        </table>
      </b-col>
      <br />
      <b-col md="12">
        <h4>
          User Ships
        </h4>
        <table class="table table-response">
          <tr>
            <th>Sr No</th>
            <th>Vessel Name</th>
            <th>From Date</th>
            <th>To Date</th>
          </tr>
          <tr>
            <td>1</td>
            <td>Glory</td>
            <td>22-02-2021</td>
            <td>22-02-2022</td>
          </tr>
        </table>
      </b-col>
    </b-card>
  </section>
</template>
<script>
import html2pdf from "html2pdf.js";
export default {
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: "User Reports",
  },
  methods: {
    generatePDF() {
      var element = document.getElementById("mydiv");
      var opt = {
        margin: 0,
        filename: "User-report.pdf",
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: "in", format: "A4", orientation: "portrait" },
      };
      html2pdf().set(opt).from(element).save();
    },
  },
};
</script>
