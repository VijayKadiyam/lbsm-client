<template>
  <div class="main-content">
    <breadcumb
      :page="'Update User Program Task'"
      :folder="'User Program Tasks'"
    />

    <b-row class="justify-content-md-center">
      <b-col md="9">
        <b-card title="User Program Task Update">
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
            <b-form-group label="Program Task">
              <vue-tags-input
                v-model="searchProgramTask"
                :tags="selectedProgramTask"
                class="tag-custom text-15 mb-2"
                :autocomplete-items="filteredProgramTaskItems"
                :add-only-from-autocomplete="true"
                @tags-changed="(newTags) => (selectedProgramTask = newTags)"
                placeholder="Type Program Task Name"
              />
            </b-form-group>
            <b-form-group label="Marks Obtained" v-if="user.roles[0].id != 4">
              <b-form-input
                class="mb-2"
                label="Marks Obtained"
                placeholder="Enter Marks Obtained"
                v-model.trim="$v.form.marks_obtained.$model"
              >
              </b-form-input>
              <b-alert
                show
                variant="danger"
                class="error mt-1"
                v-if="!$v.form.marks_obtained.required"
                >Field is required</b-alert
              >
              <b-alert
                show
                variant="danger"
                class="error mt-1"
                v-if="!$v.form.marks_obtained.decimal"
                >Numeric Values Only</b-alert
              >
            </b-form-group>
            <b-form-group label="Remark" v-if="user.roles[0].id != 4">
              <b-form-input
                class="mb-2"
                label="Remark"
                placeholder="Enter Remark"
                v-model="form.remark"
              >
              </b-form-input>
            </b-form-group>
            <b-form-group label="Completion Date" v-if="user.roles[0].id != 4">
              <b-form-datepicker
                id="dob"
                v-model.trim="$v.form.completion_date.$model"
                class="mb-2"
                placeholder="Completion Date"
              ></b-form-datepicker>
              <b-alert
                show
                variant="danger"
                class="error mt-1"
                v-if="!$v.form.completion_date.required"
                >Field is required</b-alert
              >
            </b-form-group>
            <b-row>
              <b-col
                md="6"
                v-if="
                  user.roles[0].id != 4 && (form.marks != '' || form.marks > 0)
                "
              >
                <b-form-group label="Attachment 1">
                  <b-form-file name="imagepath1" ref="file1"></b-form-file>
                </b-form-group>
                <b-row>
                  <b-col md="6">
                    <center>
                      <a
                        :href="mediaUrl + form.imagepath1"
                        v-if="form.imagepath1 != null"
                        target="_blank"
                      >
                        <img
                          v-if="form.imagepath1.split('.').pop() == 'pdf'"
                          src="/img/pdf.png"
                          style="width: 40px; height: 40px"
                        />
                        <img
                          v-else-if="
                            form.imagepath1.split('.').pop() == 'xls' ||
                            form.imagepath1.split('.').pop() == 'xlsx' ||
                            form.imagepath1.split('.').pop() == 'csv'
                          "
                          src="/img/excel.png"
                          style="width: 40px; height: 40px"
                        />
                        <img
                          v-else
                          src="/img/file.png"
                          style="width: 40px; height: 40px"
                        />

                        <br />
                        <span>View Attachment 1</span>
                      </a>
                    </center>
                  </b-col>
                  <b-col md="6">
                    <center>
                      <a
                        href="#"
                        v-if="form.imagepath1 != null"
                        @click="
                          DeleteImage(form.id, form.imagepath1, 'imagepath1')
                        "
                      >
                        <i class="i-Close-Window text-25"></i>
                        <br />
                        <span>Remove Attachment 1</span>
                      </a>
                    </center>
                  </b-col>
                </b-row>
              </b-col>
              <b-col md="6" v-else>
                <b-row>
                  <b-col md="6">
                    <center>
                      <a
                        :href="mediaUrl + form.imagepath1"
                        v-if="form.imagepath1 != null"
                        target="_blank"
                      >
                        <img
                          v-if="form.imagepath1.split('.').pop() == 'pdf'"
                          src="/img/pdf.png"
                          style="width: 40px; height: 40px"
                        />
                        <img
                          v-else-if="
                            form.imagepath1.split('.').pop() == 'xls' ||
                            form.imagepath1.split('.').pop() == 'xlsx' ||
                            form.imagepath1.split('.').pop() == 'csv'
                          "
                          src="/img/excel.png"
                          style="width: 40px; height: 40px"
                        />
                        <img
                          v-else
                          src="/img/file.png"
                          style="width: 40px; height: 40px"
                        />

                        <br />
                        <span>View Attachment 1</span>
                      </a>
                    </center>
                  </b-col>
                  <b-col md="6">
                    <center>
                      <a
                        href="#"
                        v-if="form.imagepath1 != null"
                        @click="
                          DeleteImage(form.id, form.imagepath1, 'imagepath1')
                        "
                      >
                        <i class="i-Close-Window text-25"></i>
                        <br />
                        <span>Remove Attachment 1</span>
                      </a>
                    </center>
                  </b-col>
                </b-row>
              </b-col>

              <b-col
                md="6"
                v-if="
                  user.roles[0].id != 4 && (form.marks != '' || form.marks > 0)
                "
              >
                <b-form-group label="Attachment 2">
                  <b-form-file name="imagepath2" ref="file2"></b-form-file>
                </b-form-group>
                <b-row>
                  <b-col md="6">
                    <center>
                      <a
                        :href="mediaUrl + form.imagepath2"
                        v-if="form.imagepath2 != null"
                        target="_blank"
                      >
                        <img
                          v-if="form.imagepath2.split('.').pop() == 'pdf'"
                          src="/img/pdf.png"
                          style="width: 40px; height: 40px"
                        />
                        <img
                          v-else-if="
                            form.imagepath2.split('.').pop() == 'xls' ||
                            form.imagepath2.split('.').pop() == 'xlsx' ||
                            form.imagepath2.split('.').pop() == 'csv'
                          "
                          src="/img/excel.png"
                          style="width: 40px; height: 40px"
                        />
                        <img
                          v-else
                          src="/img/file.png"
                          style="width: 40px; height: 40px"
                        />
                        <br />
                        <span>View Attachment 2</span>
                      </a>
                    </center>
                  </b-col>
                  <b-col md="6">
                    <center>
                      <a
                        href="#"
                        v-if="form.imagepath2 != null"
                        @click="
                          DeleteImage(form.id, form.imagepath2, 'imagepath2')
                        "
                      >
                        <i class="i-Close-Window text-25"></i>
                        <br />
                        <span>Remove Attachment 2</span>
                      </a>
                    </center>
                  </b-col>
                </b-row>
              </b-col>
              <b-col md="6" v-else>
                <b-row>
                  <b-col md="6">
                    <center>
                      <a
                        :href="mediaUrl + form.imagepath2"
                        v-if="form.imagepath2 != null"
                        target="_blank"
                      >
                        <img
                          v-if="form.imagepath2.split('.').pop() == 'pdf'"
                          src="/img/pdf.png"
                          style="width: 40px; height: 40px"
                        />
                        <img
                          v-else-if="
                            form.imagepath2.split('.').pop() == 'xls' ||
                            form.imagepath2.split('.').pop() == 'xlsx' ||
                            form.imagepath2.split('.').pop() == 'csv'
                          "
                          src="/img/excel.png"
                          style="width: 40px; height: 40px"
                        />
                        <img
                          v-else
                          src="/img/file.png"
                          style="width: 40px; height: 40px"
                        />
                        <br />
                        <span>View Attachment 2</span>
                      </a>
                    </center>
                  </b-col>
                  <b-col md="6">
                    <center>
                      <a
                        href="#"
                        v-if="form.imagepath2 != null"
                        @click="
                          DeleteImage(form.id, form.imagepath2, 'imagepath2')
                        "
                      >
                        <i class="i-Close-Window text-25"></i>
                        <br />
                        <span>Remove Attachment 2</span>
                      </a>
                    </center>
                  </b-col>
                </b-row>
              </b-col>
            </b-row>
            <b-row>
              <b-col
                md="6"
                v-if="
                  user.roles[0].id != 4 && (form.marks != '' || form.marks > 0)
                "
              >
                <b-form-group label="Attachment 3">
                  <b-form-file name="imagepath3" ref="file3"></b-form-file>
                </b-form-group>
                <b-row>
                  <b-col md="6">
                    <center>
                      <a
                        :href="mediaUrl + form.imagepath3"
                        v-if="form.imagepath3 != null"
                        target="_blank"
                      >
                        <img
                          v-if="form.imagepath3.split('.').pop() == 'pdf'"
                          src="/img/pdf.png"
                          style="width: 40px; height: 40px"
                        />
                        <img
                          v-else-if="
                            form.imagepath3.split('.').pop() == 'xls' ||
                            form.imagepath3.split('.').pop() == 'xlsx' ||
                            form.imagepath3.split('.').pop() == 'csv'
                          "
                          src="/img/excel.png"
                          style="width: 40px; height: 40px"
                        />
                        <img
                          v-else
                          src="/img/file.png"
                          style="width: 40px; height: 40px"
                        />
                        <br />
                        <span>View Attachment 3</span>
                      </a>
                    </center>
                  </b-col>
                  <b-col md="6">
                    <center>
                      <a
                        href="#"
                        v-if="form.imagepath3 != null"
                        @click="
                          DeleteImage(form.id, form.imagepath3, 'imagepath3')
                        "
                      >
                        <i class="i-Close-Window text-25"></i>
                        <br />
                        <span>Remove Attachment 3</span>
                      </a>
                    </center>
                  </b-col>
                </b-row>
              </b-col>
              <b-col md="6" v-else>
                <b-row>
                  <b-col md="6">
                    <center>
                      <a
                        :href="mediaUrl + form.imagepath3"
                        v-if="form.imagepath3 != null"
                        target="_blank"
                      >
                        <img
                          v-if="form.imagepath3.split('.').pop() == 'pdf'"
                          src="/img/pdf.png"
                          style="width: 40px; height: 40px"
                        />
                        <img
                          v-else-if="
                            form.imagepath3.split('.').pop() == 'xls' ||
                            form.imagepath3.split('.').pop() == 'xlsx' ||
                            form.imagepath3.split('.').pop() == 'csv'
                          "
                          src="/img/excel.png"
                          style="width: 40px; height: 40px"
                        />
                        <img
                          v-else
                          src="/img/file.png"
                          style="width: 40px; height: 40px"
                        />
                        <br />
                        <span>View Attachment 3</span>
                      </a>
                    </center>
                  </b-col>
                  <b-col md="6">
                    <center>
                      <a
                        href="#"
                        v-if="form.imagepath3 != null"
                        @click="
                          DeleteImage(form.id, form.imagepath3, 'imagepath3')
                        "
                      >
                        <i class="i-Close-Window text-25"></i>
                        <br />
                        <span>Remove Attachment 3</span>
                      </a>
                    </center>
                  </b-col>
                </b-row>
              </b-col>

              <b-col
                md="6"
                v-if="
                  user.roles[0].id != 4 && (form.marks != '' || form.marks > 0)
                "
              >
                <b-form-group label="Attachment 4">
                  <b-form-file name="imagepath4" ref="file4"></b-form-file>
                </b-form-group>
                <b-row>
                  <b-col md="6">
                    <center>
                      <a
                        :href="mediaUrl + form.imagepath4"
                        v-if="form.imagepath4 != null"
                        target="_blank"
                      >
                        <img
                          v-if="form.imagepath4.split('.').pop() == 'pdf'"
                          src="/img/pdf.png"
                          style="width: 40px; height: 40px"
                        />
                        <img
                          v-else-if="
                            form.imagepath4.split('.').pop() == 'xls' ||
                            form.imagepath4.split('.').pop() == 'xlsx' ||
                            form.imagepath4.split('.').pop() == 'csv'
                          "
                          src="/img/excel.png"
                          style="width: 40px; height: 40px"
                        />
                        <img
                          v-else
                          src="/img/file.png"
                          style="width: 40px; height: 40px"
                        />
                        <br />
                        <span>View Attachment 4</span>
                      </a>
                    </center>
                  </b-col>
                  <b-col md="6">
                    <center>
                      <a
                        href="#"
                        v-if="form.imagepath4 != null"
                        @click="
                          DeleteImage(form.id, form.imagepath4, 'imagepath4')
                        "
                      >
                        <i class="i-Close-Window text-25"></i>
                        <br />
                        <span>Remove Attachment 4</span>
                      </a>
                    </center>
                  </b-col>
                </b-row>
              </b-col>
              <b-col md="6" v-else>
                <b-row>
                  <b-col md="6">
                    <center>
                      <a
                        :href="mediaUrl + form.imagepath4"
                        v-if="form.imagepath4 != null"
                        target="_blank"
                      >
                        <img
                          v-if="form.imagepath4.split('.').pop() == 'pdf'"
                          src="/img/pdf.png"
                          style="width: 40px; height: 40px"
                        />
                        <img
                          v-else-if="
                            form.imagepath4.split('.').pop() == 'xls' ||
                            form.imagepath4.split('.').pop() == 'xlsx' ||
                            form.imagepath4.split('.').pop() == 'csv'
                          "
                          src="/img/excel.png"
                          style="width: 40px; height: 40px"
                        />
                        <img
                          v-else
                          src="/img/file.png"
                          style="width: 40px; height: 40px"
                        />
                        <br />
                        <span>View Attachment 4</span>
                      </a>
                    </center>
                  </b-col>
                  <b-col md="6">
                    <center>
                      <a
                        href="#"
                        v-if="form.imagepath4 != null"
                        @click="
                          DeleteImage(form.id, form.imagepath4, 'imagepath4')
                        "
                      >
                        <i class="i-Close-Window text-25"></i>
                        <br />
                        <span>Remove Attachment 4</span>
                      </a>
                    </center>
                  </b-col>
                </b-row>
              </b-col>
            </b-row>
            <b-row>
              <b-col md="6" v-if="user.roles[0].id != 4">
                <b-form-group label="Is Completed">
                  <label class="switch switch-success mr-3">
                    <input
                      type="checkbox"
                      checked="checkbox"
                      v-model="form.is_completed"
                    /><span class="slider"></span>
                  </label>
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
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import axios from "axios";
import { decimal, required } from "vuelidate/lib/validators";
export default {
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: "User Program Task | Update",
  },
  data() {
    return {
      form: {
        user_id: "",
        program_id: "",
        program_task_id: "",
        marks_obtained: "",
        is_completed: "",
        completion_date: "",
        ship_id: "",
        imagepath1: "",
        imagepath2: "",
        imagepath3: "",
        imagepath4: "",
      },
      submitStatus: null,
      searchProgramTask: "",
      selectedProgramTask: [],

      searchShip: "",
      selectedShip: [],
      shipItems: [],

      program_taskItems: [],
    };
  },
  computed: {
    filteredProgramTaskItems() {
      return this.program_taskItems.filter((pt) => {
        return (
          pt.text
            .toLowerCase()
            .indexOf(this.searchProgramTask.toLowerCase()) !== -1
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
      marks_obtained: {
        required,
        decimal,
      },
      completion_date: {
        required,
      },
    },
  },
  mounted() {
    this.form.user_program_id = this.$route.params.user_program_id;
    this.form.site_id = this.site.id;
    this.getData();
    this.getMasters();
  },
  methods: {
    async getMasters() {
      let masters = await axios.get(`user_program_tasks/masters`);
      masters = masters.data;
      this.ships = masters.ships;
      this.ships.forEach((ship) => {
        this.shipItems.push({
          id: ship.id,
          text: ship.description,
        });
      });
      this.ships.forEach((ship) => {
        if (ship.id == this.form.ship_id) {
          this.selectedShip.push({
            id: ship.id,
            text: ship.description,
          });
        }
      });
      let user_program = await axios.get(
        `/user_programs/${this.$route.params.user_program_id}`
      );
      let user = await axios.get(`/users/${this.user_program.user_id}`);
      this.user = user.data.data;

      this.user_program = user_program.data.data;
      this.user_program_posts = user.data.data.user_program_posts;
      this.user_program_posts.forEach((userProgramPost) => {
        userProgramPost.program_post.program_tasks.forEach((ProgramTask) => {
          this.program_taskItems.push({
            id: ProgramTask.id,
            text: ProgramTask.serial_no + "-" + ProgramTask.task,
          });
        });
      });

      this.user_program_posts = user.data.data.user_program_posts;
      this.user_program_posts.forEach((userProgramPost) => {
        userProgramPost.program_post.program_tasks.forEach((ProgramTask) => {
          if (ProgramTask.id == this.form.program_task_id) {
            this.selectedProgramTask.push({
              id: ProgramTask.id,
              text: ProgramTask.serial_no + "-" + ProgramTask.task,
            });
          }
        });
      });

      // this.program_tasks.forEach((programTask) => {
      //   if (programTask.id == this.form.program_task_id) {
      //     this.selectedProgramTask.push({
      //       id: programTask.id,
      //       text: programTask.serial_no + "-" + programTask.task,
      //     });
      //   }
      // });
    },
    async getData() {
      this.isLoading = true;
      let form = await axios.get(
        `user_programs/${this.$route.params.user_program_id}/user_program_tasks/${this.$route.params.id}`
      );
      this.form = form.data.data;

      let user_program = await axios.get(
        `/user_programs/${this.$route.params.user_program_id}`
      );
      this.user_program = user_program.data.data;
      console.log(this.user_program);
      this.isLoading = false;
    },
    //   validate form
    async submit() {
      console.log("submit!");
      if (this.selectedShip[0]) {
        this.form.ship_id = this.selectedShip[0].id;
      }
      if (this.selectedProgramTask[0]) {
        this.form.program_task_id = this.selectedProgramTask[0].id;
      }
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.submitStatus = "ERROR";
      } else {
        try {
          this.submitStatus = "PENDING";
          this.isLoading = true;
          // console.log(this.form);
          await axios.patch(
            `user_programs/${this.form.user_program_id}/user_program_tasks/${this.$route.params.id}`,
            this.form
          );
          await this.handleFileUpload();
          this.submitStatus = "OK";
          // setTimeout(() => {
          this.$router.push(
            `/app/user-program/${this.$route.params.user_program_id}/user-program-tasks/`
          );
          // }, 1000);
          this.isLoading = false;
        } catch (e) {
          this.isLoading = false;
          this.submitStatus = "ERROR";
        }
      }
    },
    async handleFileUpload() {
      let attachment1 = this.$refs.file1?.files[0];
      let attachment2 = this.$refs.file2?.files[0];
      let attachment3 = this.$refs.file3?.files[0];
      let attachment4 = this.$refs.file4?.files[0];
      const user_program_task_id = this.form.id;

      let formData = new FormData();
      formData.append("user_program_task_id", user_program_task_id);
      formData.append("imagepath1", attachment1);
      formData.append("imagepath2", attachment2);
      formData.append("imagepath3", attachment3);
      formData.append("imagepath4", attachment4);
      await axios
        .post("upload_user_program_task_images", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .catch(function () {
          console.log("FAILURE!!");
        });
    },
    async DeleteImage(id, imageName, imageField) {
      // alert(data.id + ' - ' + imageField);
      this.$swal({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Remove it!",
      }).then((result) => {
        if (result.value) {
          axios.post(
            `user_programs/delete_image?user_program_task_id=${id}&imageField=${imageField}&imageName=${imageName}`
          );
          this.getData();
          this.$swal(
            "Deleted!",
            "Your attachment has been removed.",
            "success"
          );
        }
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
  },
};
</script>
<style>
.spinner.sm {
  height: 2em;
  width: 2em;
}
</style>
