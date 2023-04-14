<template>
    <div class="container">
        <!--Header-->
        <div class="header-title max-w-full">
            Setting
        </div>
        <!--Body-->
        <div class="content-body">

                    <!--contents-->
                            <div class="setting_dashboard">
                                    <div class="setting_button ">
                                        <!--Add user-->

                                            <div class="nav_btn" id="user">
                                                <button @click="showHideAddUser()" :class="addUser" class="g-blue-500 bg-blue-700 text-white font-bold py-2 px-4 rounded">+ Add User</button>
                                                <span v-if="isHaveUser" class="text-red-500 mx-2">Please fill up the field</span>
                                            <div id="hidden_user" v-if="isAddUser" >
                                                    <input v-model="ids"  class="bg-gray-100" type="text" placeholder="User ID">
                                                    <input v-model="fullname"  class="bg-gray-100" type="text" placeholder="Full name">
                                                    <button @click="getAddUser()" class="addButton g-blue-500 bg-blue-500  text-white font-bold py-2 px-4 rounded">Add</button>
                                                    
                                                    <div class="data-validate">
                                                        <div class="addedUser" v-for="(user, index) in listofUser" :key="index">
                                                                     {{ user }} 
                                                        <button class="buttonRemove" @click="removeUser(index)">X</button>
                                                        </div>
                                                       
                                                    </div>
                                            </div>
                                            </div>
                                        <!--Add Laptop-->
                                        <div class="nav_btn" id="laptop">
                                                <button @click="showHideAddLaptop()" :class="addUser" class="g-blue-500 bg-blue-700 text-white font-bold py-2 px-4 rounded">+ Add Laptop</button>
                                                <span v-if="isHaveLaptop" class="text-red-500 mx-2">Please fill up the field</span>
                                            <div id="hidden_user" v-if="isAddLaptop" >
                                                    <input v-model="laptopBrand"  class="bg-gray-100" type="text" placeholder="Laptop Brand">
                                                    <input v-model="laptopSerial"  class="bg-gray-100" type="text" placeholder="Serial No.">
                                                    <button @click="getAddLaptop()" class="addButton g-blue-500 bg-blue-500 text-white font-bold py-2 px-4 rounded">Add</button>
                                                    
                                                    <div class="data-validate">
                                                        <div class="addedLaptop" v-for="(user, index) in listofLaptop" :key="index">
                                                        {{ user }} 
                                                        <button class="buttonRemove" @click="removeLaptop(index)">X</button>
                                                        </div>
                                                       
                                                    </div>
                                            </div>
                                            </div>
                                        <!--Monitor-->
                                        <div class="nav_btn" id="monitor">
                                                <button @click="showHideAddMonitor()" :class="addUser" class="g-blue-500 bg-blue-700 text-white font-bold py-2 px-4 rounded">+ Add Monitor</button>
                                                <span v-if="isHaveMonitor" class="text-red-500 mx-2">Please fill up the field</span>
                                            <div id="hidden_user" v-if="isAddMonitor" >
                                                    <input v-model="monitorCode"  class="bg-gray-100" type="text" placeholder="Monitor Code">
                                                    <input v-model="monitorSerial"  class="bg-gray-100" type="text" placeholder="Monitor Serial">
                                                    <button @click="getAddMonitor()" class="addButton g-blue-500 bg-blue-500 text-white font-bold py-2 px-4 rounded">Add</button>
                                                    
                                                    <div class="data-validate">
                                                        <div class="addedUser" v-for="(user, index) in listofMonitor" :key="index">
                                                        {{ user }} 
                                                        <button class="buttonRemove" @click="removeMonitor(index)">X</button>
                                                        </div>
                                                       
                                                    </div>
                                            </div>
                                            </div>
                                        <!--Avaya-->
                                        <div class="nav_btn" id="avaya">
                                                <button @click="showHideAddAvaya()" :class="addUser" class="g-blue-500 bg-blue-700 text-white font-bold py-2 px-4 rounded">+ Add Avaya</button>
                                                <span v-if="isHaveAvaya" class="text-red-500 mx-2">Please fill up the field</span>
                                            <div id="hidden_user" v-if="isAddAvaya" >
                                                    <input v-model="itemAvaya"  class="bg-gray-100" type="text" placeholder="Item">
                                                    <input v-model="avayaCode"  class="bg-gray-100" type="text" placeholder="Avaya Code">
                                                    <input v-model="avayaSerial"  class="bg-gray-100" type="text" placeholder="Avaya Serial no.">
                                                    <button  @click="getAvaya()" class="addButton g-blue-500 bg-blue-500 text-white font-bold py-2 px-4 rounded">Add</button>
                                                    
                                                    <div class="data-validate">
                                                        <div class="addedUser" v-for="(user, index) in listofAvaya" :key="index">
                                                        {{ user }} 
                                                        <button class="buttonRemove" @click="removeAvaya(index)">X</button>
                                                        </div>
                                                       
                                                    </div>
                                            </div>
                                            </div>
                                        <!--System unit-->
                                        <div class="nav_btn" id="systemUnit">
                                                <button @click="showHideAddSU()" :class="addUser" class="g-blue-500 bg-blue-700 text-white font-bold py-2 px-4 rounded">+ Add System Unit</button>
                                                <span v-if="isHaveSU" class="text-red-500 mx-2">Please fill up the field</span>
                                            <div id="hidden_user" v-if="isAddSU" >
                                                    <input v-model="itemSU"  class="bg-gray-100" type="text" placeholder="Item">
                                                    <input v-model="suWorkStation"  class="bg-gray-100" type="text" placeholder="Work Station no.">
                                                    <input v-model="suCpuCode"  class="bg-gray-100" type="text" placeholder="CPU/Laptop Code">
                                                    <input v-model="suCpuSerial"  class="bg-gray-100" type="text" placeholder="Laptop / CPU Serial no.">
                                                    <input v-model="suOperatingSystem"  class="bg-gray-100" type="text" placeholder="Operating system">
                                                    <button @click="getSU()" class="addButton g-blue-500 bg-blue-500 text-white font-bold py-2 px-4 rounded">Add</button>
                                                    
                                                    <div class="data-validate">
                                                        <div class="addedUser" v-for="(user, index) in listofSU" :key="index">
                                                        {{ user }} 
                                                        <button class="buttonRemove" @click="removeSU(index)">X</button>
                                                        </div>
                                                       
                                                    </div>
                                            </div>
                                            </div>
                                    </div>

                                    <!--Logout-->
                                    <div class="logout">
                                       
                                            <router-link to="/login">
                                                <button class="btn btn-red">
                                                Logout</button>
                                            </router-link>
                                        
                                    </div>
                            </div>
        </div>

   
       
    </div>
</template>

<script src="../scripts/setting.js"></script>

<style lang="scss" scoped>
.setting_dashboard{
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
}

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
    background-color: azure;
    margin-top: 10px;
    max-height: 100vh;
    min-width: 100vh;
    padding: 1rem;
    overflow: auto;
    }



input{
    margin: 10px;
    filter: drop-shadow(0 4px 3px rgb(0 0 0 / 0.07)) drop-shadow(0 2px 2px rgb(0 0 0 / 0.06));
    border-radius: 0.375rem; /* 6px */
}

.addUser{
    width: 15rem;
    background-color: var(--primary);  
}

.addUser:hover{
        background-color: var(--dark);
    }

.hidden_user{
    margin-top: 10px;
    margin-bottom: 10px;
}

.data-validate{
    display: block;

    button{
        margin-left: 5px;
    }


}

#hidden_user{
    opacity: 1;
}

.nav_btn{
    margin-top: 10px;
    margin-bottom: 10px;
    
}

.btn {
    @apply font-bold py-2 px-4 rounded;
  }
  .btn-red {
    @apply bg-red-500 text-white;
  }
  .btn-red:hover {
    @apply bg-red-700;
  }

.logout{
    text-align: right;
    
}

.buttonRemove{
    
    @apply font-bold py-1 px-3 rounded;

    margin-top: 2px;
    margin-bottom: 2px;

    @apply bg-red-500 text-white;

 
}

.buttonRemove:hover {
    @apply bg-red-700;
  }

.addButton:hover{
   @apply bg-blue-700;
}
</style>