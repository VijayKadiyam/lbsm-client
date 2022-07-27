<template>
  <div>
    <!-- <div
    style="min-height: 100vh; background-size: cover"
    :style="{ backgroundImage: 'url(' + bgImage + ')' }"
  > -->
    <div class="main-header" style="background-color: lightgrey">
      <div class="logo">
        <img src="@/assets/images/logo.png" alt />
      </div>

      <h2>Landbridge Ship Management (HK) Limited</h2>

      <div style="margin: auto"></div>

      <!-- <div class="header-part-right"> -->
      <div class="row">
        <!-- <b-form > -->
        <div class="col-md-4">
          <b-form-group label="Email Address" class="text-12">
            <b-form-input
              class="form-control-rounded"
              type="text"
              v-model="email"
              email
              required
            ></b-form-input>
          </b-form-group>
        </div>
        <div class="col-md-4">
          <b-form-group label="Password" class="text-12">
            <b-form-input
              class="form-control-rounded"
              type="password"
              v-model="password"
            ></b-form-input>
          </b-form-group>
        </div>
        <div class="col-md-4" style="padding-top: 14px">
          <b-button
            @click="formSubmit()"
            type="submit"
            tag="button"
            class="btn-rounded btn-block mt-2"
            variant="primary mt-2"
          >
            {{ isLoading == true ? "Loading..." : "SignIn" }}
          </b-button>
        </div>
        <!-- </b-form> -->
      </div>
      <div class="col-md-1"></div>
      <!-- </div> -->
    </div>

    <!-- <div class="col-md-12"> -->
    <!-- Slider -->
    <slider
      animation="fade"
      speed="6000"
      style="width: auto; height: 1280px; background: rgba(255, 255, 255, 0.5)"
    >
      <slider-item>
        <img src="@/assets/images/3.jpg" id="bg" />
      </slider-item>
      <slider-item>
        <img src="@/assets/images/4.jpeg" id="bg" />
      </slider-item>
      <slider-item>
        <img src="@/assets/images/5.jpeg" id="bg" />
      </slider-item>
      <slider-item>
        <img src="@/assets/images/6.jpg" id="bg" />
      </slider-item>
    </slider>
  </div>
  <!-- </div> -->
</template>
<script>
import { mapActions } from "vuex";
import { Slider, SliderItem } from "vue-easy-slider";
export default {
  metaInfo: {
    title: "SignIn",
  },
  components: {
    Slider,
    SliderItem,
  },
  data() {
    return {
      email: "admin@gmail.com",
      password: "123456",
      userId: "",
      // bgImage: require("@/assets/images/1.jpeg"),
      // bgImage2: require("@/assets/images/2.jpeg"),
      // logo: require("@/assets/images/logo.png"),
      // signInImage: require("@/assets/images/photo-long-3.jpg"),
      isLoading: false,
      sliderIndex: 1,
      // list: [
      //   {
      //     backgroundImage: "url(" + this.bgImage + ")",
      //     width: "100%",
      //     height: "100%",
      //   },
      //   {
      //     backgroundImage: "url(" + this.bgImage2 + ")",
      //     width: "100%",
      //     height: "100%",
      //   },
      //   { backgroundColor: "#f44336", width: "100%", height: "100%" },
      // ],
    };
  },
  computed: {
    validation() {
      return this.userId.length > 4 && this.userId.length < 13;
    },
  },

  methods: {
    ...mapActions({
      logIn: "auth/logIn",
    }),
    hello($event) {
      console.log(`hello index: ${$event}`);
    },
    formSubmit() {
      this.isLoading = true;
      this.logIn({ email: this.email, password: this.password }).then(() => {
        this.isLoading = false;
      });
    },
    makeToast(variant = null, msg) {
      this.$bvToast.toast(msg, {
        title: ` ${variant || "default"}`,
        variant: variant,
        solid: true,
      });
    },
  },
  watch: {
    user(val) {
      if (val && val.id) {
        this.makeToast("success", "Successfully Logged In");

        setTimeout(() => {
          this.$router.push("/");
        }, 500);
      }
    },
    error(val) {
      if (val != null) {
        this.makeToast("warning", val.message);
      }
    },
  },
};
</script>

<style>
.spinner.sm {
  height: 2em;
  width: 2em;
}
#bg {
  position: fixed;
  top: 0;
  left: 0;

  /* Preserve aspet ratio */
  min-width: 100%;
  height: 100%;
}
</style>
