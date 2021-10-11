<template>
  <div class="main-content">
    <breadcumb :page="'Program Posts'" :folder="'Program Posts'" />
    <!-- <div class="wrapper"> -->
    <b-row>
      <b-col md="12" class="mt-4 mb-4">
        <b-card title="Programs">
          <vue-tags-input
            v-model="program"
            :tags="programs"
            :max-tags="1"
            class="tag-custom text-15"
            :add-only-from-autocomplete="true"
            :autocomplete-items="filteredProgramItems"
            @tags-changed="(newTags) => (programs = newTags)"
            placeholder="Type Program Name"
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
        <div slot="table-actions-bottom" class="mb-3">
          <b-button
            variant="primary"
            class="btn-rounded d-none d-sm-block"
            @click="addEmptyValueList()"
            ><i class="i-Add text-white mr-2"></i>Add Row
          </b-button>
        </div>

        <template slot="table-row" slot-scope="props">
          <!-- <b-form> -->
          <span v-if="props.column.field == 'sr_no'">
            <!-- <span @click="deleteValueList(valueList)" v-if="!valueList.id"> -->
            <!-- <span  > -->
              <b-button
            variant="primary"
            class="btn-rounded d-none d-sm-block"
            @click="deleteValueList(rows)"
            >X
          </b-button>
            </span>
          <span v-if="props.column.field == 'serial_no'">
            <b-form-input
              class="mb-2"
              label="Serial No"
              placeholder="Enter Serial No"
            >
            </b-form-input>
          </span>
          <span v-if="props.column.field == 'post_id'">
            <vue-tags-input
            v-model="value_list"
            :tags="value_lists"
            :max-tags="1"
            class="tag-custom text-15"
            :add-only-from-autocomplete="true"
            :autocomplete-items="ValueListfilteredItems"
            @tags-changed="(newTags) => (value_lists = newTags)"
            placeholder="Type Value List"
          />
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
    title: "Value List",
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
          label: "Serial No",
          field: "serial_no",
        },
        {
          label: "Post ID",
          field: "post_id",
        }
      ],
      tag: "",

      rows: [
        {
          description: "",
          code: "",
        },
      ],
      //   auto complete
      program: "",
      programs: [],   
      programItems: [
        {
          text: "Program 1",
        },
        {
          text: "Program 2",
        },
        {
          text: "Program 3",
        },
        {
          text: "Program 4",
        },
        {
          text: "Program 5",
        },
      ],
      value_list: "",
      value_lists: [],
      valueListItems: [
        {
          text: "Mumbai",
        },
        {
          text: "India",
        },
        {
          text: "Maharashtra",
        },
        {
          text: "Accounts",
        },
        {
          text: "Male",
        },
      ],
    };
  },
  computed: {
    filteredProgramItems() {
      return this.programItems.filter((p) => {
        return p.text.toLowerCase().indexOf(this.program.toLowerCase()) !== -1;
      });
    },
    ValueListfilteredItems() {
      return this.valueListItems.filter((vl) => {
        return vl.text.toLowerCase().indexOf(this.value_list.toLowerCase()) !== -1;
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
