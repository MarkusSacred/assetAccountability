<template>
    <div class="container">
        <!--Header-->
        <div class="header-title max-w-full">
            System Unit
        </div>
        <!--Body-->
        <div class="content-body">
              <div class="add_Monitor">
               <button class="drop-shadow-lg ...">
                <router-link to="/login"><span class="material-icons">add_circle</span></router-link>
               </button>   
              </div>
                    <!--contents-->
                            <div class="monitor_dashboard">
                                    <!--Search Panel-->
                                    <div class="search_panels">
                                        <input v-model="bio"    class="bg-gray-100" type="text" placeholder="BIO">
                                        <input v-model="description"  class="bg-gray-100" type="text" placeholder="Description">
                                        <input v-model="workStation"  class="bg-gray-100" type="text" placeholder="Work Station">
                                        <input v-model="currentUser"  class="bg-gray-100" type="text" placeholder="Current User">
                                        <input v-model="dateIssued"  class="bg-gray-100" type="text" placeholder="Date Issued">
                                        <input v-model="cpu"  class="bg-gray-100" type="text" placeholder="CPU Code">
                                        <input v-model="remarks"  class="bg-gray-100" type="text" placeholder="Remarks">
                                        <input v-model="serialNumber"  class="bg-gray-100" type="text" placeholder="Serial Number">
                                        <input v-model="os"  class="bg-gray-100" type="text" placeholder="OS">
                                        <input v-model="stats"  class="bg-gray-100" type="text" placeholder="Status">
                                        <input v-model="hostName" class="bg-gray-100" type="text" placeholder="Host Name">
                                        <input v-model="newUser"  class="bg-gray-100" type="text" placeholder="New User">
                                       

                                         <!--Buttons-->
                                            <div class="search_button">
                                                <button @click="clear()" class="bg-blue-400 rounded-md ... p-[5px] drop-shadow-lg ...">Clear</button>
                                                <button class="bg-blue-400 rounded-md ... p-[5px] drop-shadow-lg ...">Search</button>
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

   
       
    </div>
</template>

<script>
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { AgGridVue } from "ag-grid-vue3";
export default {
    name : 'SystemUnit',
    components : {
        AgGridVue,
    },
    data(){
        return {
            bio : '',
            description : '',
            description : '',
            workStation : '',
            currentUser : '',
            dateIssued : '',
            cpu : '',
            remarks : '',
            serialNumber : '',
            os : '',
            stats : '',
            hostName : '',
            newUser : '',

        } 
    }, methods : {
        clear(){
            this.bio = '',
            this.description = '',
            this.description = '',
            this.workStation = '',
            this.currentUser = '',
            this.dateIssued = '',
            this.cpu = '',
            this.remarks = '',
            this.serialNumber = '',
            this.os = '',
            this.stats = '',
            this.hostName = '',
            this.newUser = ''
        }
    },
    setup() {
    return {
      columnDefs: [
        { headerName: "Bio/Serial no.", field: "Bio" },
        { headerName: "Description", field: "De" },
        { headerName: "Work Station", field: "Ws" },
        { headerName: "Current User", field: "Cu" },
        { headerName: "Date Issued", field: "Di" },
        { headerName: "CPU Code", field: "Cc" },
        { headerName: "Remarks", field: "remarks" },
        { headerName: "Serial Number", field: "Sn" },
        { headerName: "OS", field: "OS" },
        { headerName: "Status", field: "status" },
        { headerName: "Host Name", field: "Hn" },
        { headerName: "New User", field: "Nu" },
      ],
      rowData: [
        { Bio: "225", De: "HP Elitedesk 705 G2", Ws: "H05023C81", Cu: "Mark Arcedas", Di : "3/14/2023", Cc : "0174889", Sn: "SGH618RSXF",  OS: "174889", Hn: "JACWS00084",status : "Active" 
          ,remarks : "Deployed", Nu: "None"
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