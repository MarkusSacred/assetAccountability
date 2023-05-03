<template>
  <div class="container">
    <!--Header-->
    <div class="header-title max-w-full">Avaya</div>
    <!--Body-->
    <div class="content-body">
      <div class="add_Monitor">
        <button class="drop-shadow-lg ...">
          <router-link to="/login"
            ><span class="material-icons">add_circle</span></router-link
          >
        </button>
      </div>
      <!--contents-->
      <div class="avaya_dashboard">
        <!--Search Panel-->
        <div class="search_panels">
          <div class="laptop_dashboard">
            <!--Search Panel-->
            <div class="search_panels">
              <div class="search_field">
                <div class="w-72 input">
                  <div class="relative h-10 w-full min-w-[200px]">
                    <input
                      class="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-green-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                      placeholder=" "
                      v-model="bio"
                    />
                    <label
                      class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-green-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-green-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-green-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"
                    >
                      Bio/Serial no.
                    </label>
                  </div>
                </div>
                <!--Current user-->
                <div class="w-72 input">
                  <div class="relative h-10 w-full min-w-[200px]">
                    <input
                      class="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-green-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                      placeholder=" "
                      v-model="currentUser"
                    />
                    <label
                      class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-green-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-green-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-green-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"
                    >
                      Current User
                    </label>
                  </div>
                </div>
                <!--Description-->
                <div class="w-72 input">
                  <div class="relative h-10 w-full min-w-[200px]">
                    <input
                      class="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-green-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                      placeholder=" "
                      v-model="description"
                    />
                    <label
                      class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-green-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-green-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-green-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"
                    >
                      Description
                    </label>
                  </div>
                </div>
                <!--Monitor C-->
                <div class="w-72 input">
                  <div class="relative h-10 w-full min-w-[200px]">
                    <input
                      class="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-green-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                      placeholder=" "
                      v-model="avayaCode"
                    />
                    <label
                      class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-green-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-green-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-green-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"
                    >
                      Avaya Code
                    </label>
                  </div>
                </div>
                <!--Date issued-->
                <div class="w-72 input">
                  <div class="relative h-10 w-full min-w-[200px]">
                    <input
                      class="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-green-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                      placeholder=" "
                      v-model="dateIssued"
                    />
                    <label
                      class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-green-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-green-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-green-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"
                    >
                      Date Issued
                    </label>
                  </div>
                </div>
                <!--Host name-->
                <div class="w-72 input">
                  <div class="relative h-10 w-full min-w-[200px]">
                    <input
                      class="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-green-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                      placeholder=" "
                      v-model="avayaLocal"
                    />
                    <label
                      class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-green-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-green-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-green-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"
                    >
                      Avaya Local
                    </label>
                  </div>
                </div>
                <!--Remarks-->
                <div class="w-72 input">
                  <div class="relative h-10 w-full min-w-[200px]">
                    <input
                      class="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-green-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                      placeholder=" "
                      v-model="serialNumber"
                    />
                    <label
                      class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-green-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-green-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-green-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"
                    >
                      Serial
                    </label>
                  </div>
                </div>
              </div>

              <!--Buttons-->
            </div>
          </div>
          <!--Buttons-->
          <div class="search_button">
            <button
              @click="clear()"
              class="bg-blue-400 rounded-md ... p-[5px] drop-shadow-lg ..."
            >
              Clear
            </button>
            <button
              class="bg-blue-400 rounded-md ... p-[5px] drop-shadow-lg ..."
            >
              Search
            </button>
          </div>
        </div>

        <div class="w-full table">
          <ag-grid-vue
            class="ag-theme-alpine w-full h-full"
            :columnDefs="columnDefs"
            :rowData="rowData"
          >
          </ag-grid-vue>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "../css/panel.css";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { AgGridVue } from "ag-grid-vue3";
export default {
  name: "Avaya",
  components: {
    AgGridVue,
  },
  data() {
    return {
      bio: "",
      currentUser: "",
      description: "",
      avayaCode: "",
      dateIssued: "",
      avayaLocal: "",
      serialNumber: "",
      stats: "",
      remarks: "",
      newUser: "",
    };
  },
  methods: {
    clear() {
      (this.bio = ""),
        (this.currentUser = ""),
        (this.description = ""),
        (this.avayaCode = ""),
        (this.dateIssued = ""),
        (this.avayaLocal = ""),
        (this.serialNumber = ""),
        (this.stats = ""),
        (this.remarks = ""),
        (this.newUser = "");
    },
  },
  setup() {
    return {
      columnDefs: [
        { headerName: "Bio/Serial no.", field: "Bio" },
        { headerName: "Current User", field: "Cu" },
        { headerName: "Description", field: "Des" },
        { headerName: "Avaya Code", field: "Ac" },
        { headerName: "Date Issued", field: "Di" },
        { headerName: "Avaya Local", field: "Al" },
        { headerName: "Serial Number", field: "Sn" },
        { headerName: "Status", field: "status" },
        { headerName: "Remarks", field: "remarks" },
        { headerName: "New User", field: "Nu" },
      ],
      rowData: [
        {
          Bio: "150",
          Cu: "Mark Arcedas",
          Des: "Avaya Phone 1608-I",
          Ac: "0189115",
          Di: "4/18/2023",
          Al: "47336",
          Sn: "16WZ153004D9",
          status: "Active",
          remarks: "Executive Officer/Deployed",
          Nu: "Ryan Rinon",
        },
        {
          Bio: "150",
          Cu: "Mark Arcedas",
          Des: "Avaya Phone 1608-I",
          Ac: "0189115",
          Di: "4/18/2023",
          Al: "47336",
          Sn: "16WZ153004D9",
          status: "Active",
          remarks: "Executive Officer/Deployed",
          Nu: "Ryan Rinon",
        },
        {
          Bio: "150",
          Cu: "Mark Arcedas",
          Des: "Avaya Phone 1608-I",
          Ac: "0189115",
          Di: "4/18/2023",
          Al: "47336",
          Sn: "16WZ153004D9",
          status: "Active",
          remarks: "Executive Officer/Deployed",
          Nu: "Ryan Rinon",
        },
        {
          Bio: "150",
          Cu: "Mark Arcedas",
          Des: "Avaya Phone 1608-I",
          Ac: "0189115",
          Di: "4/18/2023",
          Al: "47336",
          Sn: "16WZ153004D9",
          status: "Active",
          remarks: "Executive Officer/Deployed",
          Nu: "Ryan Rinon",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.search_button {
  text-align: right;
  button {
    margin: 10px;
    padding-left: 2rem;
    padding-right: 2rem;
    background-color: var(--primary);
    font-family: sans-serif;
    font-weight: bold;
  }
  button:hover {
    color: white;
    background-color: var(--dark);
    transition: 0.2s ease-in-out;
  }
}
</style>
