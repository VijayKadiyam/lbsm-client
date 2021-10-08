<template>
  <div class="main-content">
    <breadcumb :page="'List'" :folder="'User Programs'" />
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
        :rows="rows"
      >
        <div slot="table-actions" class="mb-3">
          <b-button
            variant="primary"
            class="btn-rounded d-none d-sm-block"
            to="/app/user-programs/create"
            ><i class="i-Add text-white mr-2"> </i>Add User Program
          </b-button>
        </div>
        <div slot="table-actions" class="mb-3"></div>

        <template slot="table-row" slot-scope="props">
          <span v-if="props.column.field == 'button'">
            <a href="/app/user-programs/id">
              <i class="i-Eraser-2 text-25 text-success mr-2"></i>
              {{ props.row.button }}</a
            >
          </span>
          <span v-if="props.column.field == 'user'">
            {{ props.row.user.user_name }}
          </span>
          <span v-if="props.column.field == 'program'">
            {{ props.row.program.program_name }}
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
    title: "User Program Listing",
  },
  data() {
    return {
      columns: [
        {
          label: "User Name",
          field: "user",
        },
        {
          label: "Program Name",
          field: "program",
        },
        {
          label: "Enrollment Date",
          field: "enrollment_date",
          type: "date",
          dateInputFormat: "yyyy-MM-dd",
          dateOutputFormat: "yyyy/MM/dd",
        },
        {
          label: "Action",
          field: "button",
        },
      ],
      rows: [
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
          enrollment_date: "2021-03-16",
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
          enrollment_date: "2021-03-16",
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
          enrollment_date: "2021-03-16",
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
          enrollment_date: "2021-03-16",
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
          enrollment_date: "2021-03-16",
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
          enrollment_date: "2021-03-16",
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
          enrollment_date: "2021-03-16",
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
          enrollment_date: "2021-03-16",
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
          enrollment_date: "2021-03-16",
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
          enrollment_date: "2021-03-16",
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
          enrollment_date: "2021-03-16",
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
          enrollment_date: "2021-03-16",
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
