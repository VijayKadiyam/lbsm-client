<template>
  <div class="main-content">
    <breadcumb :page="'Program Posts'" :folder="'Program Posts'" />
    <!-- <div class="wrapper"> -->
    <b-row>
      <b-col md="12" class="mt-4 mb-4">
        <b-card title="Programs">
          <b-row>
            <b-col md="9">
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
            </b-col>
            <b-col md="3">
              <b-button
                variant="primary"
                class="btn-rounded d-none d-sm-block"
                @click="save()"
                >Save
              </b-button>
            </b-col>
          </b-row>
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
        <div slot="table-actions-bottom" class="mb-1 mr-2 mt-3 pull-right">
          <b-button
            variant="primary"
            class="btn-rounded d-none d-sm-block"
            @click="addEmptyProgram()"
            ><i class="i-Add text-white mr-2"></i>Add Row
          </b-button>
        </div>

        <template slot="table-row" slot-scope="props">
          <span v-if="props.column.field == 'sr_no'">
            <b-button
              variant="primary"
              class="btn-rounded d-none d-sm-block"
              @click="deleteProgram(row)"
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
              v-model="post"
              :tags="posts"
              :max-tags="1"
              class="tag-custom text-15"
              :add-only-from-autocomplete="true"
              :autocomplete-items="postfilteredItems"
              @tags-changed="(newTags) => (posts = newTags)"
              placeholder="Type Value Name"
            />
          </span>
        </template>
      </vue-good-table>
    </b-card>
  </div>
</template>

<script>
import axios from "axios";
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
        },
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
      programItems: [],
      post: "",
      posts: [],
      postItems: [],
    };
  },
  computed: {
    filteredProgramItems() {
      return this.programItems.filter((p) => {
        return p.text.toLowerCase().indexOf(this.program.toLowerCase()) !== -1;
      });
    },
    postfilteredItems() {
      return this.postItems.filter((vl) => {
        return vl.text.toLowerCase().indexOf(this.post.toLowerCase()) !== -1;
      });
    },
  },
  watch: {
    programs: "search",
  },
  mounted() {
    this.getMasters();
  },
  methods: {
    async getMasters() {
      let masters = await axios.get("program_posts/masters");
      masters = masters.data;
      masters.programs.forEach((program) => {
        this.programItems.push({
          id: program.id,
          text: program.program_name,
        });
      });
      masters.posts.forEach((post) => {
        this.postItems.push({
          id: post.id,
          text: post.name,
        });
      });
    },
    async search() {
      this.isLoading = true;
      if (this.programs.length > 0) {
        this.programId = this.programs[0].id;
        let programs = await axios.get(
          `/programs/${this.programId}/program_posts`
        );
        this.programs = programs.data.data;
          // console.log(this.programs);
      }

      this.isLoading = false;
    },
    async save() {
      if (this.valueLists.length > 0) {
        this.isSaving = true;
        let payload = {
          datas: this.valueLists,
        };
        let response = await axios.post(
          `/values/${this.valueId}/value_lists_multiple`,
          payload
        );
        this.valueLists = response.data.data;
        this.isSaving = false;
      }
    },
    addEmptyProgram() {
      this.rows.push({
        // value_id: this.search,
        // site_id: this.site.id,
        description: "",
        code: "",
        is_active: 1,
      });
    },
    deleteProgram() {
      this.rows.splice(this.rows.index, 1);
    },
  },
};
</script>
<style >
</style>
