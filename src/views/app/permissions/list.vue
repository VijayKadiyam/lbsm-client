<template>
  <div class="main-content">
    <breadcumb :page="'Permissions | List'" :folder="'Permissions'" />
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
          <!-- <b-button variant="primary" class="btn-rounded d-none d-sm-block" v-b-modal.modal-1  -->
          <!-- <b-button variant="primary" class="btn-rounded d-none d-sm-block"  to="/app/permissions/create"
            ><i class="i-Add-User text-white mr-2"> </i>Add Site
          </b-button> -->

          <!-- <b-modal id="modal-1" title="BootstrapVue">
            <b-form>
              <b-form-group
                id="input-group-1"
                label="Email address:"
                label-for="input-1"
                description="We'll never share your email with anyone else."
              >
                <b-form-input
                  id="input-1"
                  type="email"
                  required
                  placeholder="Enter email"
                ></b-form-input>
              </b-form-group>

              <b-form-group
                id="input-group-2"
                label="Your Name:"
                label-for="input-2"
              >
                <b-form-input
                  id="input-2"
                  required
                  placeholder="Enter name"
                ></b-form-input>
              </b-form-group>

              <b-form-group
                id="input-group-3"
                label="Food:"
                label-for="input-3"
              >
                <b-form-select
                  id="input-3"
                  :options="foods"
                  required
                ></b-form-select>
              </b-form-group>

              <b-form-group id="input-group-4">
                <b-form-checkbox-group id="checkboxes-4">
                  <b-form-checkbox value="me">Check me out</b-form-checkbox>
                  <b-form-checkbox value="that">Check that out</b-form-checkbox>
                </b-form-checkbox-group>
              </b-form-group>
            </b-form>
          </b-modal> -->
        </div>

        <template slot="table-row" slot-scope="props">
          
          <span v-if="props.column.field == 'checkbox'">
            <label class="switch switch-success mr-3">
              <input type="checkbox" checked="checkbox"
              ><span class="slider"></span>
              </label>
           
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
    title: "Permission Manage",
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
          label: "ID",
          field: "id",
        },
        {
          label: "Permissions",
          field: "permissions",
        },
        {
          label: "Admin",
          field: "checkbox",
        },
        {
          label: "Employee",
          field: "checkbox",
        },
        {
          label: "Supervisor",
          field: "checkbox",
        },
        {
          label: "Client",
          field: "checkbox",
        },
      ],
      rows: [
        {
          id: "Per-1",
          permissions: "Permission 1",
        },
        {
          id: "Per-2",
          permissions: "Permission 2",
        },
        {
          id: "Per-3",
          permissions: "Permission 3",
        },
        {
          id: "Per-4",
          permissions: "Permission 4",
        },
        {
          id: "Per-5",
          permissions: "Permission 5",
        },
        {
          id: "Per-6",
          permissions: "Permission 6",
        },
        {
          id: "Per-7",
          permissions: "Permission 7",
        },
        {
          id: "Per-8",
          permissions: "Permission 8",
        },
        {
          id: "Per-9",
          permissions: "Permission 9",
        },
        {
          id: "Per-10",
          permissions: "Permission 10",
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
<style >
</style>