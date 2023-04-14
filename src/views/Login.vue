<template>

    <div class="container shadow-xl" :class="flex">
            <img src="../assets/final-jccs.png"/>
            <input v-model="userName" :class="utxt" class="border-2 border-gray-500... rounded-md ..." placeholder="Username"/>
            <input :class="pw" v-model="password"  class="border-2 border-gray-500... rounded-md ..." placeholder="Password" type="password"/>
            <button @click="alerting" :class="lbtn" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">LOGIN</button>
    </div>

</template>

<script>
import Home from './Home.vue'





export default{
    


    name: 'Login',
    components:{
        
    },
    props:{
        
    },

    data(){

        return{
            flex : 'align',
            lbtn : 'lbutton',
            utxt: 'usertxt',
            alerts : 'Incorrect Username and Password',
            userName: '',
            password : '',
            correct : 'TAMA ANG IMONG LOGIN',
            pw : 'password'
            
        }
    }, methods : {

       
       alerting(){
        if(this.userName != 'admin' && this.password != 'admin'){
            
           
            this.userName = ''
            this.password = ''
           
            alert(this.alerts)
           
        }  

        else {
            alert(this.correct)
            this.$router.push({ name: 'Home' })
        }

       }
    }
    
}
</script>

<style scoped>

.container{
max-width: 75vh;
border-color: black;
max-height: 1500px;
padding: 150px;
}

.align{
display: flex;
flex-direction: column;
width: 200px;
margin: auto;

}



.usertxt{
margin-top: 30px;
}
.lbutton{
margin-top: 15px;

}

.password {
         margin-top: 10px;
     }

img{
     height: 5rem;
     width: 30rem;
margin-left: 20px;
}
</style>