<template>
        <div class="container">
            <!--Header-->
            <div class="header-title max-w-full">
                Add Laptop
            </div>
            <!--Body-->
            <div class="content-body">
                  <div class="add_Monitor">
                   <button class="drop-shadow-lg ..." @click="routerBack()" >
                    <router-link to="/" ><span class="material-icons">arrow_back</span></router-link>

                   </button>   
                  </div>
                        <!--contents-->
                                <div class="add_laptop_dashboard">
                                                   
                                </div>
            </div>
    
       
           
        </div>
    </template>
    
    <script>
import router from '../router';

    export default {
        name : 'addLaptop',
        data(){
            return {
                bio : '',
                currentUser : '',
                dateIssued : '',
                laptopBrand : '',
                serialNumber : '',
                hostName : '',
                noAsset : '',
                hid : '',
                stat : '',
                accessories : '',
                remarks : '',
                newUser : '',
    
            } 
        }, methods : {
            clear(){
                this.bio = '',
                this.currentUser = '',
                this.dateIssued = '',
                this.laptopBrand = '',
                this.serialNumber = '',
                this.hostName = '',
                this.noAsset = '',
                this.hid = '',
                this.stat = '',
                this.accessories = '',
                this.remarks = '',
                this.newUser = ''
            },
            routerBack(){
                router.go(-2)
            }
        }
    
    }
    
    
    </script>
    
    <style lang="scss" scoped>
    
    
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
        min-height: 100vh;
        min-width: 100vh;
        padding: 1rem;
        }
    
    
    .add_Monitor{
        margin: 0 !important;
        text-align: left !important;
        color: red;
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
    
   
    
    
    </style>