
<template>
  <div class="app">
    <Sidebar/>
     <router-view v-slot="{Component}">
          <transition name="fade" mode="out-in">
              <component :is="Component"></component>
          </transition>
      </router-view>
  </div>
</template>


<script >
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import Sidebar from './components/Sidebar.vue'
export default{
  name : 'App',
    components : {
      Sidebar,

},

}


</script>

<style lang="scss">
:root {
--primary: #4ade80;
--primary-alt: #22c55e;
--grey: #64748b;
--dark: #1e293b;
--dark-alt: #334155;
--light: #f1f5f9;
--sidebar-width: 300px;
}
* {
margin: 0;
padding: 0;
box-sizing: border-box;
font-family: 'Fira sans', sans-serif;
}
body {
background: var(--light);
}
button {
cursor: pointer;
appearance: none;
border: none;
outline: none;
background: none;
}
.app {
display: flex;
main, .container {
flex: 1 1 0;
padding: 2rem;
@media (max-width: 	1920px) {
  padding-left: 4rem;
}
}
}

.fade-enter-active,
.fade-leave-active {
transition: opacity 0.2s;
}
.fade-enter,
.fade-leave-to {
opacity: 0;
}

</style>