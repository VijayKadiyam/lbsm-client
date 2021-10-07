<template>
  <div class="main-content">
    <breadcumb :page="'User List'" :folder="'Users'" />
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
        :rows="users"
      >
        <div slot="table-actions" class="mb-3">
          <b-button
            variant="primary"
            class="btn-rounded d-none d-sm-block"
            to="/app/users/create"
            ><i class="i-Add-User text-white mr-2"> </i>Add User
          </b-button>
        </div>

        <template slot="table-row" slot-scope="props">
          <span v-if="props.column.field == 'button'">
            <a href="/app/users/id">
              <i class="i-Eraser-2 text-25 text-success mr-2"></i>
              {{ props.row.button }}</a
            >
            <a href="">
              <i class="i-Close-Window text-25 text-danger"></i>
              {{ props.row.button }}</a
            >
          </span>
            <!-- <span v-else-if="props.column.field == 'first_name'">
              <a href="/app/users/id">
                <div class="ul-widget-app__profile-pic">
                  <img
                    class="profile-picture avatar-sm mb-2 rounded-circle img-fluid"
                    :src="props.row.avatar"
                    alt=""
                  />
                  {{ props.row.first_name }}
                </div>
              </a>
            </span> -->
          <span v-else-if="props.column.field == 'gender'">
                {{ props.row.gender==0?'Male':'Female' }}
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
    title: "Task Manager",
  },
  data() {
    return {
      foods: ["apple", "orrange"],
      columns: [
        {
          label: "First Name",
          field: "first_name",
        },
        {
          label: "User Name",
          field: "user_name",
        },
        {
          label: "Gender",
          field: "gender",
        },
        {
          label: "Email",
          field: "email",
        },
        {
          label: "Phone",
          field: "phone",
        },
        {
          label: "Date Of Birth",
          field: "dob",
          type: "date",
          dateInputFormat: "yyyy-MM-dd",
          dateOutputFormat: "dd-MM-yyyy",
        },
        {
          label: "Action",
          field: "button",
          html: true,
          tdClass: "text-right",
          thClass: "text-right",
        },
      ],
      users: [
        {
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
        {
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
        {
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
        {
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
        {
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
        {
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
        {
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
        {
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
        {
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
        {
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
        {
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
        {
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
