<template>
  <div class="main-content">
    <breadcumb :page="'User Program Task'" :folder="'User Program Tasks'" />
    <!-- <div class="wrapper"> -->
    <b-row>
      <b-col md="12" class="mt-4 mb-4">
        <b-card title="Users">
          <vue-tags-input
            v-model="user"
            :tags="users"
            class="tag-custom text-15"
            :add-only-from-autocomplete="true"
            :autocomplete-items="filteredItems"
            @tags-changed="(newTags) => (users = newTags)"
            placeholder="Type User Name"
          />
        </b-card>
      </b-col>
    </b-row>
    <b-card>
      <vue-good-table
        :columns="columns"
        :line-numbers="true"
        :search-options="{
          enabled: false,
          placeholder: 'Search this table',
        }"
        :pagination-options="{
          enabled: true,
          mode: 'records',
        }"
        styleClass="tableOne vgt-table"
        :rows="rows"
        foot-clone
      >
        <!-- <div slot="table-actions-bottom" class="mb-3">
          <b-button
            variant="primary"
            class="btn-rounded d-none d-sm-block"
            @click="addEmptyValueList()"
            ><i class="i-Add text-white mr-2"></i>Add Row
          </b-button>
        </div> -->

        <template slot="table-row" slot-scope="props">
          <span v-if="props.column.field == 'button'">
            <b-button
            variant="primary"
            class="btn-rounded d-none d-sm-block"
            to="/app/user-program/id/user-program-tasks"><i class="i-Eye text-white mr-2"> View Tasks</i>
          </b-button>
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
    title: "User Program Tasks",
  },
  data() {
    return {
      // foods: ["apple", "orrange"],
      columns: [
        {
          label: "Sr No",
          field: "sr_no",
        },
        {
          label: "Program Name",
          field: "program_name",
        },
        {
          label: "Description",
          field: "description",
        },
        {
          label: "Instructor",
          field: "instructor",
        },
        {
          label: "Hours",
          field: "hours",
        },
        {
          label: "Task Detail",
          field: "button",
        },
      ],
      tag: "",

      rows: [
        {
          program_name: "Program 1",
          description: "Description",
          instructor: "Instructor",
          hours: 3,
        },
        {
          program_name: "Program 2",
          description: "Description",
          instructor: "Instructor",
          hours: 3,
        },
      ],
      //   auto complete
      user: "",

      autocompleteItems: [
        {
          text: "User 1",
        },
        {
          text: "User 2",
        },
        {
          text: "User 3",
        },
        {
          text: "User 4",
        },
        {
          text: "User 5",
        },
      ],
    };
  },
  computed: {
    filteredItems() {
      return this.autocompleteItems.filter((i) => {
        return i.text.toLowerCase().indexOf(this.tag.toLowerCase()) !== -1;
      });
    },
  },
  methods: {
    addFile() {
      console.log("hello");
    },
    addEmptyValueList() {
      this.rows.push({
        // value_id: this.search,
        // site_id: this.site.id,
        description: "",
        code: "",
        is_active: 1,
      });
    },
    // deleteValueList() {
    //    return this.rows.filter((i) => {
    //     return i.text.toLowerCase().indexOf(this.tag.toLowerCase()) !== -1;
    //   });
    // },
  },
};
</script>
<style >
</style>
