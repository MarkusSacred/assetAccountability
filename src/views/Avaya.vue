<template>
    <div class="container">
        <!--Header-->
        <div class="header-title max-w-full">
            Avaya
        </div>
        <!--Body-->
        <div class="content-body">
              <div class="add_Monitor">
               <button class="drop-shadow-lg ...">
                <router-link to="/login"><span class="material-icons">add_circle</span></router-link>
               </button>   
              </div>
                    <!--contents-->
                            <div class="avaya_dashboard">
                                    <!--Search Panel-->
                                    <div class="search_panels">
                                        <input v-model="bio" class="bg-gray-100" type="text" placeholder="BIO / Serial no.">
                                        <input v-model="currentUser"  class="bg-gray-100" type="text" placeholder="Current User">
                                        <input v-model="description" class="bg-gray-100" type="text" placeholder="Description">
                                        <input v-model="avayaCode"  class="bg-gray-100" type="text" placeholder="Avaya code">
                                        <input v-model="dateIssued"  class="bg-gray-100" type="text" placeholder="Date Issued">
                                        <input v-model="avayaLocal" class="bg-gray-100" type="text" placeholder="Avaya Local">
                                        <input v-model="serialNumber"  class="bg-gray-100" type="text" placeholder="Serial Number">
                                        <input v-model="stats"  class="bg-gray-100" type="text" placeholder="Status">
                                        <input v-model="remarks" class="bg-gray-100" type="text" placeholder="Remarks">
                                        <input v-model="newUser" class="bg-gray-100" type="text" placeholder="New User">
                                         <!--Buttons-->
                                            <div class="search_button">
                                                <button @click="clear()" class="bg-blue-400 rounded-md ... p-[5px] drop-shadow-lg ...">Clear</button>
                                                <button class="bg-blue-400 rounded-md ... p-[5px] drop-shadow-lg ...">Search</button>
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

   
       
    </div>
</template>

<script>
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { AgGridVue } from "ag-grid-vue3";
export default {
    name : 'Avaya',
    components : {
        AgGridVue
    },
    data(){
        return {
            bio : '',
            currentUser : '',
            description : '',
            avayaCode : '',
            dateIssued : '',
            avayaLocal : '',
            serialNumber : '',
            stats : '',
            remarks : '',
            newUser : '',
    

        } 
    }, methods : {
        clear(){
            this.bio = '',
            this.currentUser = '',
            this.description = '',
            this.avayaCode = '',
            this.dateIssued = '',
            this.avayaLocal = '',
            this.serialNumber = '',
            this.stats = '',
            this.remarks = '',
            this.newUser = ''
        }
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
        { Bio: "150", Cu: "Mark Arcedas", Des: "Avaya Phone 1608-I", Ac: "0189115", Di : "4/18/2023", Al : "47336", Sn: "16WZ153004D9", status : "Active" 
          ,remarks : "Executive Officer/Deployed", Nu: "Ryan Rinon"
        },
        { Bio: "150", Cu: "Mark Arcedas", Des: "Avaya Phone 1608-I", Ac: "0189115", Di : "4/18/2023", Al : "47336", Sn: "16WZ153004D9", status : "Active" 
          ,remarks : "Executive Officer/Deployed", Nu: "Ryan Rinon"
        },
        { Bio: "150", Cu: "Mark Arcedas", Des: "Avaya Phone 1608-I", Ac: "0189115", Di : "4/18/2023", Al : "47336", Sn: "16WZ153004D9", status : "Active" 
          ,remarks : "Executive Officer/Deployed", Nu: "Ryan Rinon"
        },
        { Bio: "150", Cu: "Mark Arcedas", Des: "Avaya Phone 1608-I", Ac: "0189115", Di : "4/18/2023", Al : "47336", Sn: "16WZ153004D9", status : "Active" 
          ,remarks : "Executive Officer/Deployed", Nu: "Ryan Rinon"
        },
      
      ],
    };
  },
}


</script>

<style lang="scss">


.header-title{
    margin: 2px;
    background-color: var(--dark);
    color: azure;
    padding: 1rem;
    font-weight: bold;
    font-size: x-large;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    filter: drop-shadow(0 10px 8px rgb(0 0 0 / 0.04)) drop-shadow(0 4px 3px rgb(0 0 0 / 0.1));
    border-radius: 0.5rem

    
}

h1 {
    font-size:xx-large;
}

.content-body{
    filter: drop-shadow(0 10px 8px rgb(0 0 0 / 0.04)) drop-shadow(0 4px 3px rgb(0 0 0 / 0.1));
    border-radius: 0.5rem;
    background-color: #FFFFFF;
    margin-top: 10px;
    min-height: 100vh;
    min-width: 100vh;
    padding: 1rem;
    }


.add_Monitor{
    text-align: right;
    margin-left: 5rem !important;
					color: var(--primary);
					transform: translateX(0.5rem);
}

.add_Monitor:hover{
   color: var(--dark);
   transition: 0.1s ease-in-out;
}

input{
    margin: 10px;
    filter: drop-shadow(0 4px 3px rgb(0 0 0 / 0.07)) drop-shadow(0 2px 2px rgb(0 0 0 / 0.06));
    border-radius: 0.375rem; /* 6px */
}

.search_button{
    text-align: right;
    button{
        margin: 10px;
        padding-left: 2rem;
        padding-right: 2rem;
        background-color: var(--primary);
        font-family: sans-serif;
        font-weight: bold;

      
    }
    button:hover{
            background-color: var(--dark);
            transition: 0.2s ease-in-out;
        }
}


</style>