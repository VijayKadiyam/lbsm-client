<template>
  <div class="main-content">
    <breadcumb :page="'Value-List'" :folder="'Value-Lists'" />
    <!-- <div class="wrapper"> -->
    <b-row>
      <b-col md="12" class="mt-4 mb-4">
        <b-card title="Values">
          <vue-tags-input
            v-model="value"
            :tags="values"
            :max-tags="1"
            class="tag-custom text-15"
            :add-only-from-autocomplete="true"
            :autocomplete-items="filteredValueItems"
            @tags-changed="(newTags) => (values = newTags)"
            placeholder="Type Value Name"
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
        <div slot="table-actions-bottom" class="mb-1 mr-2 pull-right">
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
          <!-- </span> -->
          <span v-if="props.column.field == 'checked'">
            <label class="switch switch-success mr-3">
              <input type="checkbox" checked="checkbox" /><span
                class="slider"
              ></span>
            </label>
          </span>
          <span v-if="props.column.field == 'description'">
            <b-form-input
              class="mb-2"
              label="Description"
              placeholder="Enter Description"
            >
            </b-form-input>
          </span>
          <span v-if="props.column.field == 'code'">
            <b-form-input class="mb-2" label="Code" placeholder="Enter Code">
            </b-form-input>
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
      columns: [
        {
          label: "Sr No",
          field: "sr_no",
        },
        {
          label: "Description",
          field: "description",
        },
        {
          label: "Code",
          field: "code",
        },
        {
          label: "Active",
          field: "checked",
        },
      ],
      rows: [
        {
          description: "",
          code: "",
          active: "",
        },
      ],
      //   auto complete
      value: "",
      values:[],
      valueItems: [
        {
          text: "Country",
        },
        {
          text: "State",
        },
        {
          text: "City",
        },
        {
          text: "Department",
        },
        {
          text: "Category",
        },
      ],
    };
  },
  computed: {
    filteredValueItems() {
      return this.valueItems.filter((v) => {
        return v.text.toLowerCase().indexOf(this.value.toLowerCase()) !== -1;
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
