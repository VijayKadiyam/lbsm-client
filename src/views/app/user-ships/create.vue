<template>
  <div class="main-content">
    <breadcumb
      :page="'Create User Program Task'"
      :folder="'User Program Tasks'"
    />

    <b-row class="justify-content-md-center">
      <b-col md="9">
        <b-card>
          <b-form @submit.prevent="submit">
            <b-form-group label="User">
              <vue-tags-input
                v-model="searchUser"
                :tags="selectedUser"
                :max-tags="1"
                class="tag-custom text-15 mb-2"
                :autocomplete-items="filteredUserItems"
                :add-only-from-autocomplete="true"
                @tags-changed="(newTags) => (selectedUser = newTags)"
                placeholder="Type User Name"
              />
            </b-form-group>
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
            <b-form-group label="From Date">
              <b-form-datepicker
                id="from_date"
                v-model.trim="$v.form.from_date.$model"
                class="mb-2"
                placeholder="From Date"
              ></b-form-datepicker>
              <b-alert
                show
                variant="danger"
                class="error mt-1"
                v-if="!$v.form.from_date.required"
                >Field is required</b-alert
              >
            </b-form-group>
            <b-form-group label="To Date">
              <b-form-datepicker
                id="to_date"
                v-model.trim="$v.form.to_date.$model"
                class="mb-2"
                placeholder="To Date"
              ></b-form-datepicker>
              <b-alert
                show
                variant="danger"
                class="error mt-1"
                v-if="!$v.form.to_date.required"
                >Field is required</b-alert
              >
            </b-form-group>

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
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import axios from "axios";
import { required } from "vuelidate/lib/validators";
export default {
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: "Program Task | Create",
  },
  data() {
    return {
      form: {
        user_id: "",
        from_date: "",
        to_date: "",
        ship_id: "",
      },
      submitStatus: null,

      searchUser: "",
      selectedUser: [],
      userItems: [],

      searchShip: "",
      selectedShip: [],
      shipItems: [],
    };
  },
  computed: {
    filteredUserItems() {
      return this.userItems.filter((u) => {
        return (
          u.text.toLowerCase().indexOf(this.searchUser.toLowerCase()) !== -1
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
  },
  validations: {
    form: {
      from_date: {
        required,
      },
      to_date: {
        required,
      },
    },
  },
  mounted() {
    this.form.site_id = this.site.id;
    this.getMasters();
  },
  methods: {
    async getMasters() {
      let masters = await axios.get(`user_ships/masters`);
      masters = masters.data;
      masters.ships.forEach((ship) => {
        this.shipItems.push({
          id: ship.id,
          text: ship.description,
        });
      });
      masters.users.forEach((user) => {
        let rank_desc = user.rank ? user.rank.description : "";
        this.userItems.push({
          id: user.id,
          text:
            user.user_name +
            " " +
            user.last_name +
            " (Rank - " +
            rank_desc +
            ") (Danos - " +
            user.unique_id +
            ")",
        });
      });
    },
    //   validate form
    async submit() {
      console.log("submit!");
      if (this.selectedShip[0]) {
        this.form.ship_id = this.selectedShip[0].id;
      }
      if (this.selectedUser[0]) {
        this.form.user_id = this.selectedUser[0].id;
      }
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.submitStatus = "ERROR";
      } else {
        try {
          this.isLoading = true;
          // console.log(this.form);
          let user_ships = await axios.post(`user_ships`, this.form);
          this.user_ships = user_ships.data.data;
          this.isLoading = false;
          this.submitStatus = "OK";

          // setTimeout(() => {
          this.$router.push(`/app/user-ships/`);
          // }, 1000);
        } catch (e) {
          this.isLoading = false;
        }
      }
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
  },
};
</script>
<style>
.spinner.sm {
  height: 2em;
  width: 2em;
}
</style>
