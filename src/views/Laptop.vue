<template>
  <div class="container">
    <!--Header-->
    <div class="header-title max-w-full">Laptop</div>
    <!--Body-->
    <div class="content-body">
      <div class="add_Laptop">
        <button class="drop-shadow-lg ...">
          <router-link to="/addLaptop"
            ><span class="material-icons">add_circle</span></router-link
          >
        </button>
      </div>
      <!--contents-->
      <div class="laptop_dashboard">
        <!--Search Panel-->
        <div class="search_panels">
          <input
            v-model="bio"
            class="bg-gray-100"
            type="text"
            placeholder="BIO / Serial no."
          />
          <input
            v-model="currentUser"
            class="bg-gray-100"
            type="text"
            placeholder="Current User"
          />
          <input
            v-model="dateIssued"
            class="bg-gray-100"
            type="text"
            placeholder="Date Issued"
          />
          <input
            v-model="laptopBrand"
            class="bg-gray-100"
            type="text"
            placeholder="Laptop Brand"
          />
          <input
            v-model="serialNumber"
            class="bg-gray-100"
            type="text"
            placeholder="Serial Number"
          />
          <input
            v-model="hostName"
            class="bg-gray-100"
            type="text"
            placeholder="Host Name"
          />
          <input
            v-model="noAsset"
            class="bg-gray-100"
            type="text"
            placeholder="No. of Asset"
          />
          <input
            v-model="hid"
            class="bg-gray-100"
            type="text"
            placeholder="HID"
          />
          <input
            v-model="stat"
            class="bg-gray-100"
            type="text"
            placeholder="Status"
          />
          <input
            v-model="accessories"
            class="bg-gray-100"
            type="text"
            placeholder="Accessories"
          />
          <input
            v-model="remarks"
            class="bg-gray-100"
            type="text"
            placeholder="Remarks"
          />
          <input
            v-model="newUser"
            class="bg-gray-100"
            type="text"
            placeholder="New User"
          />

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
      </div>
      <div class="w-full table">
            <ag-grid-vue  class="ag-theme-alpine w-full h-full"
            :columnDefs="columnDefs"
            :rowData="rowData">
        </ag-grid-vue>
          </div>
    </div>
  </div>
</template>

<script>
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { AgGridVue } from "ag-grid-vue3";
export default {
  
  name: "Laptop",
  components : {
    AgGridVue,
  },
  data() {
    return {
      bio: "",
      currentUser: "",
      dateIssued: "",
      laptopBrand: "",
      serialNumber: "",
      hostName: "",
      noAsset: "",
      hid: "",
      stat: "",
      accessories: "",
      remarks: "",
      newUser: "",
    };
  },
  methods: {
    clear() {
      (this.bio = ""),
        (this.currentUser = ""),
        (this.dateIssued = ""),
        (this.laptopBrand = ""),
        (this.serialNumber = ""),
        (this.hostName = ""),
        (this.noAsset = ""),
        (this.hid = ""),
        (this.stat = ""),
        (this.accessories = ""),
        (this.remarks = ""),
        (this.newUser = "");
    },
  },
  setup() {
    return {
      columnDefs: [
        { headerName: "Bio/Serial no.", field: "Bio" },
        { headerName: "Current User", field: "Cu" },
        { headerName: "Date Issued", field: "Di" },
        { headerName: "Laptop brand", field: "Lb" },
        { headerName: "Serial number", field: "Sn" },
        { headerName: "Host Name", field: "Hn" },
        { headerName: "No. of Asset", field: "Na" },
        { headerName: "HID", field: "Hid" },
        { headerName: "Status", field: "status" },
        { headerName: "Accessories", field: "acc" },
        { headerName: "Remarks", field: "remarks" },
        { headerName: "New User", field: "Nu" },
      ],
      rowData: [
        { Bio: "3", Cu: "Mark Arcedas", Di: "3/27/2023", Lb: "HP PRO BOOK 240G8", Sn : "5CG2045M45", Hn : "JACWSI7006", Hid: "None", status : "Active" 
          ,remarks : "Executive Officer/Deployed", Nu: "None"
        },
        { Bio: "4", Cu: "Jerico Rito", Di: "3/27/2023", Lb: "HP PRO BOOK 240G8", Sn : "5CG2045M44", Hn : "JACWSI7006", Hid: "None", status : "Active" 
          ,remarks : "Executive Officer/Deployed", Nu: "Ryan Rinon"
        },
        { Bio: "5", Cu: "Nate Bernas", Di: "3/27/2023", Lb: "HP PRO BOOK 240G8", Sn : "5CG2045M43", Hn : "JACWSI7006", Hid: "None", status : "Active" 
          ,remarks : "Executive Officer/Deployed", Nu: "None"
        },
        { Bio: "6", Cu: "Joseph Abantao", Di: "3/27/2023", Lb: "HP PRO BOOK 240G8", Sn : "5CG2045M42", Hn : "JACWSI7006", Hid: "None", status : "Active" 
          ,remarks : "Executive Officer/Deployed", Nu: "Jerico"
        },
        { Bio: "7", Cu: "Jomar Manaog", Di: "3/27/2023", Lb: "HP PRO BOOK 240G8", Sn : "5CG2045M41", Hn : "JACWSI7006", Hid: "None", status : "Active" 
          ,remarks : "Executive Officer/Deployed", Nu: "Ryan Rinon"
        },
        { Bio: "8", Cu: "Dan Penetrante", Di: "3/27/2023", Lb: "HP PRO BOOK 240G8", Sn : "5CG2045M421", Hn : "JACWSI7006", Hid: "None", status : "Active" 
          ,remarks : "Executive Officer/Deployed", Nu: "Ryan Rinon"
        },
        { Bio: "9", Cu: "Ryan Rinon", Di: "3/27/2023", Lb: "HP PRO BOOK 240G8", Sn : "5CG2045M4522", Hn : "JACWSI7006", Hid: "None", status : "Active" 
          ,remarks : "Executive Officer/Deployed", Nu: "Ryan Rinon"
        },
        { Bio: "10", Cu: "Jiro Ota", Di: "3/27/2023", Lb: "HP PRO BOOK 240G8", Sn : "5CG2045M423", Hn : "JACWSI7006", Hid: "None", status : "Active" 
          ,remarks : "Executive Officer/Deployed", Nu: "Ryan Rinon"
        },
        { Bio: "11", Cu: "Ricalyn Mae Abad", Di: "3/27/2023", Lb: "HP PRO BOOK 240G8", Sn : "5CG2045M4524", Hn : "JACWSI7006", Hid: "None", status : "Active" 
          ,remarks : "Executive Officer/Deployed", Nu: "Ryan Rinon"
        }, { Bio: "3", Cu: "Mark Arcedas", Di: "3/27/2023", Lb: "HP PRO BOOK 240G8", Sn : "5CG2045M45", Hn : "JACWSI7006", Hid: "None", status : "Active" 
          ,remarks : "Executive Officer/Deployed", Nu: "None"
        },
        { Bio: "4", Cu: "Jerico Rito", Di: "3/27/2023", Lb: "HP PRO BOOK 240G8", Sn : "5CG2045M44", Hn : "JACWSI7006", Hid: "None", status : "Active" 
          ,remarks : "Executive Officer/Deployed", Nu: "Ryan Rinon"
        },
        { Bio: "5", Cu: "Nate Bernas", Di: "3/27/2023", Lb: "HP PRO BOOK 240G8", Sn : "5CG2045M43", Hn : "JACWSI7006", Hid: "None", status : "Active" 
          ,remarks : "Executive Officer/Deployed", Nu: "None"
        },
        { Bio: "6", Cu: "Joseph Abantao", Di: "3/27/2023", Lb: "HP PRO BOOK 240G8", Sn : "5CG2045M42", Hn : "JACWSI7006", Hid: "None", status : "Active" 
          ,remarks : "Executive Officer/Deployed", Nu: "Jerico"
        },
        { Bio: "7", Cu: "Jomar Manaog", Di: "3/27/2023", Lb: "HP PRO BOOK 240G8", Sn : "5CG2045M41", Hn : "JACWSI7006", Hid: "None", status : "Active" 
          ,remarks : "Executive Officer/Deployed", Nu: "Ryan Rinon"
        },
        { Bio: "8", Cu: "Dan Penetrante", Di: "3/27/2023", Lb: "HP PRO BOOK 240G8", Sn : "5CG2045M421", Hn : "JACWSI7006", Hid: "None", status : "Active" 
          ,remarks : "Executive Officer/Deployed", Nu: "Ryan Rinon"
        },
        { Bio: "9", Cu: "Ryan Rinon", Di: "3/27/2023", Lb: "HP PRO BOOK 240G8", Sn : "5CG2045M4522", Hn : "JACWSI7006", Hid: "None", status : "Active" 
          ,remarks : "Executive Officer/Deployed", Nu: "Ryan Rinon"
        },
        { Bio: "10", Cu: "Jiro Ota", Di: "3/27/2023", Lb: "HP PRO BOOK 240G8", Sn : "5CG2045M423", Hn : "JACWSI7006", Hid: "None", status : "Active" 
          ,remarks : "Executive Officer/Deployed", Nu: "Ryan Rinon"
        },
        { Bio: "11", Cu: "Ricalyn Mae Abad", Di: "3/27/2023", Lb: "HP PRO BOOK 240G8", Sn : "5CG2045M4524", Hn : "JACWSI7006", Hid: "None", status : "Active" 
          ,remarks : "Executive Officer/Deployed", Nu: "Ryan Rinon"
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.header-title {
  margin: 2px;
  background-color: var(--dark);
  color: azure;
  padding: 1rem;
  font-weight: bold;
  font-size: x-large;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  filter: drop-shadow(0 10px 8px rgb(0 0 0 / 0.04))
    drop-shadow(0 4px 3px rgb(0 0 0 / 0.1));
  border-radius: 0.5rem;
}

h1 {
  font-size: xx-large;
}

.content-body {
  filter: drop-shadow(0 10px 8px rgb(0 0 0 / 0.04))
    drop-shadow(0 4px 3px rgb(0 0 0 / 0.1));
  border-radius: 0.5rem;
  background-color: white;
  margin-top: 10px;
  min-height: 100vh;
  min-width: 100vh;
  padding: 1rem;
}

.add_Laptop {
  text-align: right;
  margin-left: 5rem !important;
  color: var(--primary);
  transform: translateX(0.5rem);
}

.add_Laptop:hover {
  color: var(--dark);
  transition: 0.1s ease-in-out;
}

input {
  margin: 10px;
  filter: drop-shadow(0 4px 3px rgb(0 0 0 / 0.07))
    drop-shadow(0 2px 2px rgb(0 0 0 / 0.06));
  border-radius: 0.375rem; /* 6px */
}

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
    background-color: var(--dark);
    transition: 0.2s ease-in-out;
    color: white;
  }
}


.ag-theme-alpine{
    width: 100%;
    min-width: 10vh;
    height: 80vh;
    min-height: 80vh;
}

</style>
