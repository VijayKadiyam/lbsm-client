<template>
  <div class="main-content">
    <breadcumb :page="'Update User'" :folder="'Users'" />
    <b-row>
      <b-col md="12">
        <b-card title="User Update">
          <b-row>
            <b-col md="12">
              <b-button
                style="float: right; margin-top: -45px"
                @click="$router.back()"
                variant="primary"
                ><i class="i-Arrow-Back-3"></i> Back</b-button
              >
            </b-col>
          </b-row>
          <b-form @submit.prevent="submit">
            <b-row>
              <b-col md="6">
                <b-form-group label="First Name">
                  <b-form-input
                    class="mb-2"
                    label="First Name"
                    placeholder="Enter First Name"
                    v-model.trim="$v.form.first_name.$model"
                  >
                  </b-form-input>

                  <b-alert
                    show
                    variant="danger"
                    class="error mt-1"
                    v-if="!$v.form.first_name.required"
                    >Field is required</b-alert
                  >
                </b-form-group>
              </b-col>
              <b-col md="6">
                <b-form-group label="User Name">
                  <b-form-input
                    class="mb-2"
                    label="User Name"
                    placeholder="Enter User Name"
                    v-model.trim="$v.form.user_name.$model"
                  >
                  </b-form-input>
                  <b-alert
                    show
                    variant="danger"
                    class="error mt-1"
                    v-if="!$v.form.user_name.required"
                    >Field is required</b-alert
                  >
                </b-form-group>
              </b-col>
            </b-row>
            <b-row>
              <b-col md="6">
                <b-form-group label="Middle Name">
                  <b-form-input
                    class="mb-2"
                    label="Middle Name"
                    placeholder="Enter Middle Name"
                    v-model="form.middle_name"
                  >
                  </b-form-input>
                </b-form-group>
              </b-col>
              <b-col md="6">
                <b-form-group label="Last Name">
                  <b-form-input
                    class="mb-2"
                    label="Last Name"
                    placeholder="Enter Last Name"
                    v-model="form.last_name"
                  >
                  </b-form-input>
                </b-form-group>
              </b-col>
            </b-row>
            <b-row>
              <b-col md="6">
                <b-form-group label="Gender">
                  <b-row>
                    <b-col md="8">
                      <span>Male</span>
                      <label class="switch switch-success mr-3 ml-3">
                        <input
                          type="checkbox"
                          checked="checkbox"
                          v-model="form.gender"
                        /><span class="slider"></span>
                      </label>
                      <span>Female</span>
                    </b-col>
                  </b-row>
                </b-form-group>
              </b-col>
              <b-col md="6">
                <b-form-group label="Date Of Birth">
                  <b-form-datepicker
                    id="dob"
                    v-model="form.dob"
                    class="mb-2"
                    placeholder="Date Of Birth"
                  ></b-form-datepicker>
                </b-form-group>
              </b-col>
            </b-row>
            <b-row>
              <b-col md="6">
                <b-form-group label="Email">
                  <b-form-input
                    class="mb-2"
                    label="Email"
                    placeholder="email address"
                    v-model.trim="$v.form.email.$model"
                  >
                  </b-form-input>

                  <b-alert
                    show
                    variant="danger"
                    class="error mt-1"
                    v-if="!$v.form.email.email"
                  >
                    {{ $v.form.email.$model }} is invalid.</b-alert
                  >
                  <!-- <b-alert
                    show
                    variant="danger"
                    class="error mt-1"
                    v-if="!$v.form.email.required"
                    >Field is required</b-alert
                  > -->
                </b-form-group>
              </b-col>
              <b-col md="6">
                <b-form-group label="Attachment">
                  <b-form-file
                    id="file-default"
                    name="imagepath"
                    ref="file"
                    accept="image/*"
                  ></b-form-file>
                </b-form-group>
              </b-col>
            </b-row>
            <b-row>
              <b-col md="6">
                <b-form-group label="Rank">
                  <vue-tags-input
                    v-model="searchRank"
                    :tags="selectedRank"
                    :max-tags="1"
                    class="tag-custom text-15 mb-2"
                    :autocomplete-items="filteredRankItems"
                    :add-only-from-autocomplete="true"
                    @tags-changed="(newTags) => (selectedRank = newTags)"
                    placeholder="Type Rank Name"
                  />
                </b-form-group>
              </b-col>
              <b-col md="6">
                <b-form-group label="Danos Id">
                  <b-form-input
                    class="mb-2"
                    label="Danos"
                    placeholder="Danos Id"
                    v-model="form.unique_id"
                  >
                  </b-form-input>
                </b-form-group>
              </b-col>
            </b-row>
            <b-row>
              <b-col md="6">
                <b-form-group label="Nationality">
                  <vue-tags-input
                    v-model="searchNationality"
                    :tags="selectedNationality"
                    :max-tags="1"
                    class="tag-custom text-15 mb-2"
                    :autocomplete-items="filteredNationalityItems"
                    :add-only-from-autocomplete="true"
                    @tags-changed="(newTags) => (selectedNationality = newTags)"
                    placeholder="Type Nationality Name"
                  />
                </b-form-group>
              </b-col>
              <b-col md="6">
                <b-form-group label="Active">
                  <b-row>
                    <b-col md="8">
                      <span>IN ACTIVE</span>
                      <label class="switch switch-success mr-3 ml-3">
                        <input
                          type="checkbox"
                          checked="checkbox"
                          v-model="form.active"
                        /><span class="slider"></span>
                      </label>
                      <span>ACTIVE</span>
                    </b-col>
                  </b-row>
                </b-form-group>
              </b-col>
            </b-row>
            <b-button
              type="submit"
              variant="primary"
              :disabled="submitStatus === 'PENDING'"
              >Submit</b-button
            >

            <p v-once class="typo__p" v-if="submitStatus === 'OK'">
              {{ makeToastTwo("success") }}
            </p>
            <p v-once class="typo__p" v-if="submitStatus === 'ERROR'">
              {{ makeToast("danger") }}
            </p>
            <div v-once class="typo__p" v-if="submitStatus === 'PENDING'">
              <div class="spinner sm spinner-primary mt-3"></div>
            </div>
          </b-form>

          <hr />
          <h4>User Ship</h4>
          <br />
          <b-row>
            <b-col md="4">
              <b-form-group label="Ship">
                <vue-tags-input
                  v-model="searchShip"
                  :tags="selectedShip"
                  class="tag-custom text-15 mb-2"
                  :autocomplete-items="filteredShipItems"
                  :add-only-from-autocomplete="true"
                  @tags-changed="(newTags) => (selectedShip = newTags)"
                  placeholder="Type Ship Name"
                />
              </b-form-group>
            </b-col>
            <b-col md="3">
              <b-form-group label="From Date">
                <b-form-datepicker
                  id="from_date"
                  v-model="userShip.from_date"
                  class="mb-2"
                  placeholder="From Date"
                ></b-form-datepicker>
              </b-form-group>
            </b-col>
            <b-col md="3">
              <b-form-group label="To Date">
                <b-form-datepicker
                  id="to_date"
                  v-model="userShip.to_date"
                  class="mb-2"
                  placeholder="To Date"
                ></b-form-datepicker>
              </b-form-group>
            </b-col>
            <b-col md="2">
              <br />
              <b-button @click="saveUserShip" variant="primary">
                Save
              </b-button>
            </b-col>
          </b-row>
          <hr />
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
              :rows="user_ships"
            >
              <template slot="table-row" slot-scope="props">
                <span v-if="props.column.field == 'button'">
                  <b-button
                    @click="deleteUserShip(props.row.id)"
                    variant="primary"
                  >
                    Delete
                  </b-button>
                </span>
              </template>
            </vue-good-table>
          </b-card>
          <hr />
          <h4>User I-Test</h4>
          <br />
          <b-row>
            <b-col md="3">
              <b-form-group label="Date">
                <b-form-datepicker
                  id="date"
                  v-model="useritest.date"
                  class="mb-2"
                  placeholder="Date"
                ></b-form-datepicker>
              </b-form-group>
            </b-col>
            <b-col md="3">
               <b-form-group label="Percentage">
                  <b-form-input
                    class="mb-2"
                    label="Percentage"
                    placeholder="Enter Percentage"
                    v-model="useritest.percentage"
                  >
                  </b-form-input>
               </b-form-group>
            </b-col>
            <b-col md="4">
              <b-form-group label="Status">
                <vue-tags-input
                  v-model="searchStatus"
                  :tags="selectedStatus"
                  class="tag-custom text-15 mb-2"
                  :autocomplete-items="filteredStatusItems"
                  :add-only-from-autocomplete="true"
                  @tags-changed="(newTags) => (selectedStatus = newTags)"
                  placeholder="Type Status"
                />
              </b-form-group>
            </b-col>
            <b-col md="2">
              <br />
              <b-button @click="saveUserITest" variant="primary">
                Save
              </b-button>
            </b-col>
          </b-row>
          <hr />
          <b-card>
            <vue-good-table
              :columns="userItestcolumns"
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
              :rows="useritest"
            >
              <template slot="table-row" slot-scope="props">
                <span v-if="props.column.field == 'button'">
                  <b-button
                    @click="deleteUserItest(props.row.id)"
                    variant="primary"
                  >
                    Delete
                  </b-button>
                </span>
              </template>
            </vue-good-table>
          </b-card>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import axios from "axios";
import {
  email,
  // numeric,
  // between,
  required,
  // sameAs,
  // minLength,
  // maxLength,
} from "vuelidate/lib/validators";
export default {
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: "User Update",
  },
  data() {
    return {
      form: {
        first_name: "",
        middle_name: "",
        last_name: "",
        user_name: "",
        dob: "",
        gender: "",
        password: "",
        email: "",
        // active: 1,
        role_id: 4,
      },
      userShip: {
        user_id: "",
        from_date: "",
        to_date: "",
        ship_id: "",
      },
      useritest: {
        user_id: "",
        date: "",
        status: "",
        percentage: "",
      },
      searchRank: "",
      selectedRank: [],
      RankItems: [],

      searchShip: "",
      selectedShip: [],
      shipItems: [],

      searchNationality: "",
      selectedNationality: [],
      nationalityItems: [],

      searchStatus: "",
      selectedStatus: [],
      statusItems: [
        { text: "Fail", id: "Fail" },
        { text: "Pass", id: "Pass" },
      ],

      submitStatus: null,

      columns: [
        {
          label: "Ship",
          field: "ship.description",
        },
        {
          label: "From Date",
          field: "from_date",
        },
        {
          label: "To Date",
          field: "to_date",
        },
        {
          label: "Action",
          field: "button",
        },
      ],
      userItestcolumns: [
        {
          label: "Date",
          field: "date",
        },
        {
          label: "Percetage",
          field: "percentage",
        },
        {
          label: "Status",
          field: "status",
        },
        {
          label: "Action",
          field: "button",
        },
      ],
      user_ships: [],
    };
  },
  validations: {
    form: {
      first_name: {
        required,
      },
      user_name: {
        required,
      },
      email: {
        // required,
        email,
      },
    },

    // add input
    // peopleAdd: {
    //   required,
    //   minLength: minLength(3),
    //   $each: {
    //     multipleFirst Name: {
    //       required,
    //       minLength: minLength(5)
    //     }
    //   }
    // },
    // validationsGroup:['peopleAdd.multipleFirst Name']
  },
  mounted() {
    this.getMasters();
    // this.form.site_id = this.site.id
    this.getData();
    this.getUserShipData();
  },
  computed: {
    filteredRankItems() {
      return this.RankItems.filter((u) => {
        return (
          u.text.toLowerCase().indexOf(this.searchRank.toLowerCase()) !== -1
        );
      });
    },
    filteredNationalityItems() {
      return this.nationalityItems.filter((u) => {
        return (
          u.text.toLowerCase().indexOf(this.searchNationality.toLowerCase()) !==
          -1
        );
      });
    },
    filteredShipItems() {
      return this.shipItems.filter((pt) => {
        return (
          pt.text.toLowerCase().indexOf(this.searchShip.toLowerCase()) !== -1
        );
      });
    },
    filteredStatusItems() {
      return this.statusItems.filter((pt) => {
        return (
          pt.text.toLowerCase().indexOf(this.searchStatus.toLowerCase()) !== -1
        );
      });
    },
  },
  methods: {
    async getMasters() {
      let masters = await axios.get("users/masters");
      masters = masters.data;
      masters.ranks.forEach((rank) => {
        this.RankItems.push({
          id: rank.id,
          text: rank.description,
        });
      });
      masters.nationalities.forEach((nationality) => {
        this.nationalityItems.push({
          id: nationality.id,
          text: nationality.description,
        });
      });

      let Shipmasters = await axios.get(`user_ships/masters`);
      Shipmasters = Shipmasters.data;
      Shipmasters.ships.forEach((ship) => {
        this.shipItems.push({
          id: ship.id,
          text: ship.description,
        });
      });
    },
    //   validate form
    async submit() {
      console.log("submit!");
      if (this.selectedRank[0]) {
        this.form.rank_id = this.selectedRank[0].id;
      }
      if (this.selectedNationality[0]) {
        this.form.nationality = this.selectedNationality[0].text;
      }
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.submitStatus = "ERROR";
      } else {
        try {
          this.isLoading = true;
          await axios.patch(`/users/${this.$route.params.id}`, this.form);
          await this.handleFileUpload();

          this.isLoading = false;
          this.$router.push("/app/users");
        } catch (e) {
          this.isLoading = false;
        }
        this.submitStatus = "PENDING";
        // setTimeout(() => {
        this.submitStatus = "OK";
        this.$router.push("/app/users/");
        // }, 1000);
      }
    },
    async handleFileUpload() {
      let attachment = this.$refs.file?.files[0];
      const userid = this.form.id;
      let formData = new FormData();
      formData.append("userid", userid);
      formData.append("imagepath", attachment);
      await axios
        .post("upload_user_image", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .catch(function() {
          console.log("FAILURE!!");
        });
    },
    makeToast(variant = null) {
      this.$bvToast.toast("Please fill the form correctly.", {
        title: `Variant ${variant || "default"}`,
        variant: variant,
        solid: true,
      });
    },
    makeToastTwo(variant = null) {
      this.$bvToast.toast("Successfully Submitted", {
        title: `Variant ${variant || "default"}`,
        variant: variant,
        solid: true,
      });
    },

    inputSubmit() {
      console.log("submitted");
    },
    async getData() {
      this.isLoading = true;

      let form = await axios.get(`/users/${this.$route.params.id}`);
      this.form = form.data.data;
      this.form.nationality = this.form.nationality.toUpperCase();
      this.rankdata = this.RankItems.find((sp) => sp.id == this.form.rank_id);
      this.selectedRank.push({
        id: this.rankdata.id,
        text: this.rankdata.text,
      });

      this.Nationalitydata = this.nationalityItems.find(
        (sp) => sp.text == this.form.nationality
      );
      this.selectedNationality.push({
        id: this.Nationalitydata.id,
        text: this.Nationalitydata.text,
      });

      this.isLoading = false;
    },
    async getUserShipData() {
      this.isLoading = true;

      // User Program Task log
      let user_ships = await axios.get(
        `/user_ships?user_id=${this.$route.params.id}`
      );
      this.user_ships = user_ships.data.data;
      // this.serialNoStarting = (page - 1) * this.rowsPerPage;
      this.isLoading = false;
    },
    async saveUserShip() {
      if (this.selectedShip[0]) {
        this.userShip.ship_id = this.selectedShip[0].id;
      }

      this.userShip.user_id = this.$route.params.id;
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.submitStatus = "ERROR";
      } else {
        try {
          this.isLoading = true;
          // console.log(this.form);
          let user_ships = await axios.post(`user_ships`, this.userShip);
          this.user_ships = user_ships.data.data;
          this.userShip = user_ships.data.data;
          this.isLoading = false;
          this.searchShip = "";
          this.userShip.from_date = "";
          this.userShip.to_date = "";
          this.submitStatus = "OK";

          // setTimeout(() => {
          // this.$router.push(`/app/user-ships/`);
          // }, 1000);
        } catch (e) {
          this.isLoading = false;
        }
      }
      this.getUserShipData();
    },
    async deleteUserShip(UserShipId) {
      await axios.delete(`/user_ships/${UserShipId}`);
      this.getUserShipData();
    },
    async getUserITestData() {
      this.isLoading = true;

      // User Program Task log
      let useritest = await axios.get(
        `/user_i_tests?user_id=${this.$route.params.id}`
      );
      this.useritest = useritest.data.data;
      // this.serialNoStarting = (page - 1) * this.rowsPerPage;
      this.isLoading = false;
    },
    async saveUserITest() {
      if (this.selectedStatus[0]) {
        this.useritest.status = this.selectedStatus[0].id;
      }

      this.useritest.user_id = this.$route.params.id;
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.submitStatus = "ERROR";
      } else {
        try {
          this.isLoading = true;
          // console.log(this.form);
          let useritest = await axios.post(`user_i_tests`, this.useritest);
          this.useritest = useritest.data.data;
          this.useritest = useritest.data.data;
          this.isLoading = false;
          this.searchStatus = "";
          this.useritest.date = "";
          this.useritest.percentage = "";
          this.submitStatus = "OK";

          // setTimeout(() => {
          // this.$router.push(`/app/user-ships/`);
          // }, 1000);
        } catch (e) {
          this.isLoading = false;
        }
      }
      this.getUserITestData();
    },
    async deleteUserItest(UserITestId) {
      await axios.delete(`/user_i_tests/${UserITestId}`);
      this.getUserITestData();
    },
  },
};
</script>
<style>
.spinner.sm {
  height: 2em;
  width: 2em;
}
</style>
