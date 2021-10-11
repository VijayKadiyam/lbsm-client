<template>
  <div class="main-content">
    <breadcumb :page="'List'" :folder="'User Program Posts'" />
    <!-- User & Program Details card -->
    <b-row>
      <b-col md="6">
        <b-card class="mb-4">
          <div class="content">
            <b-row>
              <b-col md="3">
                <p class="text-muted mt-2 mb-0">User Name</p>
              </b-col>
              <b-col md="9">
                <p class="text-primary text-24 line-height-1 mb-2">
                  {{ user_program_posts[0].user.user_name }}
                </p>
              </b-col>
            </b-row>
            <b-row>
              <b-col md="3">
                <p class="text-muted mt-2 mb-0">First Name</p>
              </b-col>
              <b-col md="9">
                <p class="text-primary text-24 line-height-1 mb-2">
                  {{ user_program_posts[0].user.first_name }}
                </p>
              </b-col>
            </b-row>
            <b-row>
              <b-col md="3">
                <p class="text-muted mt-2 mb-0">Email</p>
              </b-col>
              <b-col md="9">
                <p class="text-primary text-24 line-height-1 mb-2">
                  {{ user_program_posts[0].user.email }}
                </p>
              </b-col>
            </b-row>
            <b-row>
              <b-col md="3">
                <p class="text-muted mt-2 mb-0">Phone</p>
              </b-col>
              <b-col md="9">
                <p class="text-primary text-24 line-height-1 mb-2">
                  {{ user_program_posts[0].user.phone }}
                </p>
              </b-col>
            </b-row>
          </div>
        </b-card>
      </b-col>
      <b-col md="6">
        <b-card class="mb-4">
          <div class="content">
            <b-row>
              <b-col md="3">
                <p class="text-muted mt-2 mb-0">Program Name</p>
              </b-col>
              <b-col md="9">
                <p class="text-primary text-20 line-height-1 mb-0">
                  {{ user_program_posts[0].program.program_name }}
                </p>
              </b-col>
            </b-row>
            <b-row>
              <b-col md="3">
                <p class="text-muted mt-2 mb-0">Program Description</p>
              </b-col>
              <b-col md="9">
                <p class="text-primary text-20 line-height-1 mb-0">
                  {{ user_program_posts[0].program.program_description }}
                </p>
              </b-col>
            </b-row>
            <b-row>
              <b-col md="3">
                <p class="text-muted mt-2 mb-0">Instructor</p>
              </b-col>
              <b-col md="9">
                <p class="text-primary text-20 line-height-1 mb-0">
                  {{ user_program_posts[0].program.instructor }}
                </p>
              </b-col>
            </b-row>
            <b-row>
              <b-col md="3">
                <p class="text-muted mt-2 mb-0">Hours</p>
              </b-col>
              <b-col md="9">
                <p class="text-primary text-20 line-height-1 mb-0">
                  {{ user_program_posts[0].program.hours }}
                </p>
              </b-col>
            </b-row>
          </div>
        </b-card>
      </b-col>
    </b-row>
    <!-- /User & Program Details card -->
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
        :rows="user_program_posts"
      >
        <div slot="table-actions" class="mb-3">
          <b-button
            variant="primary"
            class="btn-rounded d-none d-sm-block"
            to="/app/user-program-posts/create"
            ><i class="i-Add text-white mr-2"> </i>Add User Program Post
          </b-button>
        </div>
        <div slot="table-actions" class="mb-3"></div>

        <template slot="table-row" slot-scope="props">
          <span v-if="props.column.field == 'button'">
            <a href="/app/user-program-posts/id">
              <i class="i-Eraser-2 text-25 text-success mr-2"></i>
              {{ props.row.button }}</a
            >
          </span>
          <span v-if="props.column.field == 'program_post'">
            {{ props.row.program_post.post.description }}
          </span>
          <span v-else-if="props.column.field == 'promotion_date'">
            {{ props.row.promotion_date }}
          </span>
          <span v-else-if="props.column.field == 'remarks'">
            {{ props.row.remarks }}
          </span>
        </template>
      </vue-good-table>
    </b-card>
  </div>
</template>

<script>
export default {
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: "User Program  Post Listing",
  },
  data() {
    return {
      columns: [
        {
          label: "Program Post",
          field: "program_post",
        },
        {
          label: "Promotion Date",
          field: "promotion_date",
          type: "date",
          dateInputFormat: "yyyy-MM-dd",
          dateOutputFormat: "yyyy/MM/dd",
        },
        {
          label: "Remarks",
          field: "remarks",
        },
        {
          label: "Action",
          field: "button",
        },
      ],
      user_program_posts: [
        {
          id: 1,
          site_id: 1,
          user_id: 1,
          user: {
            id: 1,
            avatar: require("@/assets/images/faces/1.jpg"),
            first_name: "John",
            middle_name: "John",
            last_name: "John",
            user_name: "John",
            gender: 0,
            dob: "1997-03-30",
            email: "jhonwick_23@gmail.com",
            phone: "+88012378478",
          },
          program_id: 1,
          program: {
            program_name: "Program Name - 1",
            program_description: "Program Description 1",
            instructor: "Instructor 1",
            hours: "1",
          },
          program_post_id: 2,
          program_post: {
            id: 2,
            serial_no: 12345,
            post_id: 5,
            post: {
              id: 5,
              site_id: 1,
              value_id: 2,
              description: "Engineer",
              code: "Engineer",
              is_active: true,
            },
          },
          promotion_date: "2021-03-16",
          remarks: "Remarks",
        },
        {
          id: 1,
          site_id: 1,
          user_id: 1,
          user: {
            id: 2,
            avatar: require("@/assets/images/faces/3.jpg"),
            first_name: "Jane",
            middle_name: "Jane",
            last_name: "Jane",
            user_name: "Jane",
            gender: 0,
            dob: "1997-03-30",
            email: "jameswann@gmail.com",
            phone: "+88012378478",
          },
          program_id: 1,
          program: {
            program_name: "Program Name - 2",
            program_description: "Program Description 2",
            instructor: "Instructor 2",
            hours: "2",
          },
          program_post_id: 2,
          program_post: {
            id: 2,
            serial_no: 12345,
            post_id: 5,
            post: {
              id: 5,
              site_id: 1,
              value_id: 2,
              description: "Engineer",
              code: "Engineer",
              is_active: true,
            },
          },
          promotion_date: "2021-03-16",
          remarks: "Remarks",
        },
        {
          id: 1,
          site_id: 1,
          user_id: 1,
          user: {
            id: 3,
            avatar: require("@/assets/images/faces/2.jpg"),
            first_name: "Susan",
            middle_name: "Susan",
            last_name: "Susan",
            user_name: "Susan",
            gender: 0,
            dob: "1997-03-30",
            email: "jameswann@gmail.com",
            phone: "+88012378478",
          },
          program_id: 1,
          program: {
            program_name: "Program Name - 3",
            program_description: "Program Description 3",
            instructor: "Instructor 3",
            hours: "3",
          },
          program_post_id: 2,
          program_post: {
            id: 2,
            serial_no: 12345,
            post_id: 5,
            post: {
              id: 5,
              site_id: 1,
              value_id: 2,
              description: "Engineer",
              code: "Engineer",
              is_active: true,
            },
          },
          promotion_date: "2021-03-16",
          remarks: "Remarks",
        },
        {
          id: 1,
          site_id: 1,
          user_id: 1,
          user: {
            id: 4,
            avatar: require("@/assets/images/faces/1.jpg"),
            first_name: "Chris",
            middle_name: "Chris",
            last_name: "Chris",
            user_name: "Chris",
            gender: 0,
            dob: "1997-03-30",
            email: "jhonwick_23@gmail.com",
            phone: "+88012378478",
          },
          program_id: 1,
          program: {
            program_name: "Program Name - 4",
            program_description: "Program Description 4",
            instructor: "Instructor 4",
            hours: "4",
          },
          program_post_id: 2,
          program_post: {
            id: 2,
            serial_no: 12345,
            post_id: 5,
            post: {
              id: 5,
              site_id: 1,
              value_id: 2,
              description: "Engineer",
              code: "Engineer",
              is_active: true,
            },
          },
          promotion_date: "2021-03-16",
          remarks: "Remarks",
        },
        {
          id: 1,
          site_id: 1,
          user_id: 1,
          user: {
            id: 5,
            avatar: require("@/assets/images/faces/4.jpg"),
            first_name: "Dan",
            middle_name: "Dan",
            last_name: "Dan",
            user_name: "Dan",
            gender: 0,
            dob: "1997-03-30",
            email: "jhonwick_23@gmail.com",
            phone: "+88012378478",
          },
          program_id: 1,
          program: {
            program_name: "Program Name - 5",
            program_description: "Program Description 5",
            instructor: "Instructor 5",
            hours: "5",
          },
          program_post_id: 2,
          program_post: {
            id: 2,
            serial_no: 12345,
            post_id: 5,
            post: {
              id: 5,
              site_id: 1,
              value_id: 2,
              description: "Engineer",
              code: "Engineer",
              is_active: true,
            },
          },
          promotion_date: "2021-03-16",
          remarks: "Remarks",
        },
        {
          id: 1,
          site_id: 1,
          user_id: 1,
          user: {
            id: 6,
            avatar: require("@/assets/images/faces/5.jpg"),
            first_name: "John",
            middle_name: "John",
            last_name: "John",
            user_name: "John",
            gender: 0,
            dob: "1997-03-30",
            email: "jameswann@gmail.com",
            phone: "+88012378478",
          },
          program_id: 1,
          program: {
            program_name: "Program Name - 6",
            program_description: "Program Description 6",
            instructor: "Instructor 6",
            hours: "6",
          },
          program_post_id: 2,
          program_post: {
            id: 2,
            serial_no: 12345,
            post_id: 5,
            post: {
              id: 5,
              site_id: 1,
              value_id: 2,
              description: "Engineer",
              code: "Engineer",
              is_active: true,
            },
          },
          promotion_date: "2021-03-16",
          remarks: "Remarks",
        },
        {
          id: 1,
          site_id: 1,
          user_id: 1,
          user: {
            id: 1,
            avatar: require("@/assets/images/faces/4.jpg"),
            first_name: "John",
            middle_name: "John",
            last_name: "John",
            user_name: "John",
            gender: 0,
            dob: "1997-03-30",
            email: "dan_brown@gmail.com",
            phone: "+88012378478",
          },
          program_id: 1,
          program: {
            program_name: "Program Name - 7",
            program_description: "Program Description 7",
            instructor: "Instructor 7",
            hours: "7",
          },
          program_post_id: 2,
          program_post: {
            id: 2,
            serial_no: 12345,
            post_id: 5,
            post: {
              id: 5,
              site_id: 1,
              value_id: 2,
              description: "Engineer",
              code: "Engineer",
              is_active: true,
            },
          },
          promotion_date: "2021-03-16",
          remarks: "Remarks",
        },
        {
          id: 1,
          site_id: 1,
          user_id: 1,
          user: {
            id: 2,
            avatar: require("@/assets/images/faces/3.jpg"),
            first_name: "Jane",
            middle_name: "Jane",
            last_name: "Jane",
            user_name: "Jane",
            gender: 0,
            dob: "1997-03-30",
            email: "jameswann@gmail.com",
            phone: "+88012378478",
          },
          program_id: 1,
          program: {
            program_name: "Program Name - 8",
            program_description: "Program Description 8",
            instructor: "Instructor 8",
            hours: "8",
          },
          program_post_id: 2,
          program_post: {
            id: 2,
            serial_no: 12345,
            post_id: 5,
            post: {
              id: 5,
              site_id: 1,
              value_id: 2,
              description: "Engineer",
              code: "Engineer",
              is_active: true,
            },
          },
          promotion_date: "2021-03-16",
          remarks: "Remarks",
        },
        {
          id: 1,
          site_id: 1,
          user_id: 1,
          user: {
            id: 3,
            avatar: require("@/assets/images/faces/2.jpg"),
            first_name: "Susan",
            middle_name: "Susan",
            last_name: "Susan",
            user_name: "Susan",
            gender: 0,
            dob: "1997-03-30",
            email: "janeswann@gmail.com",
            phone: "+88012378478",
          },
          program_id: 1,
          program: {
            program_name: "Program Name - 9",
            program_description: "Program Description 9",
            instructor: "Instructor 9",
            hours: "9",
          },
          program_post_id: 2,
          program_post: {
            id: 2,
            serial_no: 12345,
            post_id: 5,
            post: {
              id: 5,
              site_id: 1,
              value_id: 2,
              description: "Engineer",
              code: "Engineer",
              is_active: true,
            },
          },
          promotion_date: "2021-03-16",
          remarks: "Remarks",
        },
        {
          id: 1,
          site_id: 1,
          user_id: 1,
          user: {
            id: 4,
            avatar: require("@/assets/images/faces/1.jpg"),
            first_name: "Chris",
            middle_name: "Chris",
            last_name: "Chris",
            user_name: "Chris",
            gender: 0,
            dob: "1997-03-30",
            email: "jaasdameswann@gmail.com",
            phone: "+88012378478",
          },
          program_id: 1,
          program: {
            program_name: "Program Name - 10",
            program_description: "Program Description 10",
            instructor: "Instructor 10",
            hours: "10",
          },
          program_post_id: 2,
          program_post: {
            id: 2,
            serial_no: 12345,
            post_id: 5,
            post: {
              id: 5,
              site_id: 1,
              value_id: 2,
              description: "Engineer",
              code: "Engineer",
              is_active: true,
            },
          },
          promotion_date: "2021-03-16",
          remarks: "Remarks",
        },
        {
          id: 1,
          site_id: 1,
          user_id: 1,
          user: {
            id: 5,
            avatar: require("@/assets/images/faces/5.jpg"),
            first_name: "Dan",
            middle_name: "Dan",
            last_name: "Dan",
            user_name: "Dan",
            gender: 0,
            dob: "1997-03-30",
            email: "doomwaytne@gmail.com",
            phone: "+88012378478",
          },
          program_id: 1,
          program: {
            program_name: "Program Name - 10",
            program_description: "Program Description 10",
            instructor: "Instructor 10",
            hours: "10",
          },
          program_post_id: 2,
          program_post: {
            id: 2,
            serial_no: 12345,
            post_id: 5,
            post: {
              id: 5,
              site_id: 1,
              value_id: 2,
              description: "Engineer",
              code: "Engineer",
              is_active: true,
            },
          },
          promotion_date: "2021-03-16",
          remarks: "Remarks",
        },
        {
          id: 1,
          site_id: 1,
          user_id: 1,
          user: {
            id: 6,
            avatar: require("@/assets/images/faces/3.jpg"),
            first_name: "John",
            middle_name: "John",
            last_name: "John",
            user_name: "John",
            gender: 0,
            dob: "1997-03-30",
            email: "sidsacc@gmail.com",
            phone: "+88012378478",
          },
          program_id: 1,
          program: {
            program_name: "Program Name - 10",
            program_description: "Program Description 10",
            instructor: "Instructor 10",
            hours: "10",
          },
          program_post_id: 2,
          program_post: {
            id: 2,
            serial_no: 12345,
            post_id: 5,
            post: {
              id: 5,
              site_id: 1,
              value_id: 2,
              description: "Engineer",
              code: "Engineer",
              is_active: true,
            },
          },
          promotion_date: "2021-03-16",
          remarks: "Remarks",
        },
      ],
    };
  },
  methods: {
    addFile() {
      console.log("hello");
    },
  },
};
</script>
<style></style>
