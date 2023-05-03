<template>
  <div class="container">
    <!--Header-->
    <div class="header-title max-w-full">Laptop</div>
    <!--Body-->
    <div class="content-body">
      <div class="add_Laptop">
        <button class="drop-shadow-lg ...">
          <router-link to="/login"
            ><span class="material-icons">add_circle</span></router-link
          >
        </button>
      </div>
      <!--contents-->
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
            <!--Date issed-->
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
                  Date Isseud
                </label>
              </div>
            </div>
            <!--Laptop Brand-->
            <div class="w-72 input">
              <div class="relative h-10 w-full min-w-[200px]">
                <input
                  class="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-green-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                  placeholder=" "
                  v-model="laptopBrand"
                />
                <label
                  class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-green-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-green-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-green-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"
                >
                  Laptop Brand
                </label>
              </div>
            </div>
            <!--Serial number-->
            <div class="w-72 input">
              <div class="relative h-10 w-full min-w-[200px]">
                <input
                  class="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-green-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                  placeholder=" "
                />
                <label
                  class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-green-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-green-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-green-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"
                >
                  Serial numer
                </label>
              </div>
            </div>
            <!--Host name-->
            <div class="w-72 input">
              <div class="relative h-10 w-full min-w-[200px]">
                <input
                  class="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-green-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                  placeholder=" "
                  v-model="hostName"
                />
                <label
                  class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-green-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-green-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-green-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"
                >
                  Host name
                </label>
              </div>
            </div>
            <!--No. of asset-->
            <div class="w-72 input">
              <div class="relative h-10 w-full min-w-[200px]">
                <input
                  class="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-green-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                  placeholder=" "
                  v-model="noAsset"
                />
                <label
                  class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-green-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-green-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-green-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"
                >
                  No. of Asset
                </label>
              </div>
            </div>
            <!--HID-->
            <div class="w-72 input">
              <div class="relative h-10 w-full min-w-[200px]">
                <input
                  class="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-green-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                  placeholder=" "
                  v-model="hid"
                />
                <label
                  class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-green-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-green-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-green-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"
                >
                  HID
                </label>
              </div>
            </div>
            <!--Status-->
            <div class="w-72 input">
              <div class="relative h-10 w-full min-w-[200px]">
                <input
                  class="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-green-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                  placeholder=" "
                  v-model="stat"
                />
                <label
                  class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-green-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-green-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-green-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"
                >
                  Status
                </label>
              </div>
            </div>
            <!--Accessories-->
            <div class="w-72 input">
              <div class="relative h-10 w-full min-w-[200px]">
                <input
                  class="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-green-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                  placeholder=" "
                  v-model="accessories"
                />
                <label
                  class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-green-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-green-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-green-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"
                >
                  Accessories
                </label>
              </div>
            </div>
            <!--Remarks-->
            <div class="w-72 input">
              <div class="relative h-10 w-full min-w-[200px]">
                <input
                  class="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-green-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                  placeholder=" "
                  v-model="remarks"
                />
                <label
                  class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-green-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-green-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-green-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"
                >
                  Remarks
                </label>
              </div>
            </div>
            <!--New user-->
            <div class="w-72 input">
              <div class="relative h-10 w-full min-w-[200px]">
                <input
                  class="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-green-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                  placeholder=" "
                  v-model="newUser"
                />
                <label
                  class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-green-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-green-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-green-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"
                >
                  New user
                </label>
              </div>
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
</template>

<script>
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import "../css/panel.css";
import { AgGridVue } from "ag-grid-vue3";
export default {
  name: "Laptop",
  components: {
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
        {
          Bio: "3",
          Cu: "Mark Arcedas",
          Di: "3/27/2023",
          Lb: "HP PRO BOOK 240G8",
          Sn: "5CG2045M45",
          Hn: "JACWSI7006",
          Hid: "None",
          status: "Active",
          remarks: "Executive Officer/Deployed",
          Nu: "None",
        },
        {
          Bio: "4",
          Cu: "Jerico Rito",
          Di: "3/27/2023",
          Lb: "HP PRO BOOK 240G8",
          Sn: "5CG2045M44",
          Hn: "JACWSI7006",
          Hid: "None",
          status: "Active",
          remarks: "Executive Officer/Deployed",
          Nu: "Ryan Rinon",
        },
        {
          Bio: "5",
          Cu: "Nate Bernas",
          Di: "3/27/2023",
          Lb: "HP PRO BOOK 240G8",
          Sn: "5CG2045M43",
          Hn: "JACWSI7006",
          Hid: "None",
          status: "Active",
          remarks: "Executive Officer/Deployed",
          Nu: "None",
        },
        {
          Bio: "6",
          Cu: "Joseph Abantao",
          Di: "3/27/2023",
          Lb: "HP PRO BOOK 240G8",
          Sn: "5CG2045M42",
          Hn: "JACWSI7006",
          Hid: "None",
          status: "Active",
          remarks: "Executive Officer/Deployed",
          Nu: "Jerico",
        },
        {
          Bio: "7",
          Cu: "Jomar Manaog",
          Di: "3/27/2023",
          Lb: "HP PRO BOOK 240G8",
          Sn: "5CG2045M41",
          Hn: "JACWSI7006",
          Hid: "None",
          status: "Active",
          remarks: "Executive Officer/Deployed",
          Nu: "Ryan Rinon",
        },
        {
          Bio: "8",
          Cu: "Dan Penetrante",
          Di: "3/27/2023",
          Lb: "HP PRO BOOK 240G8",
          Sn: "5CG2045M421",
          Hn: "JACWSI7006",
          Hid: "None",
          status: "Active",
          remarks: "Executive Officer/Deployed",
          Nu: "Ryan Rinon",
        },
        {
          Bio: "9",
          Cu: "Ryan Rinon",
          Di: "3/27/2023",
          Lb: "HP PRO BOOK 240G8",
          Sn: "5CG2045M4522",
          Hn: "JACWSI7006",
          Hid: "None",
          status: "Active",
          remarks: "Executive Officer/Deployed",
          Nu: "Ryan Rinon",
        },
        {
          Bio: "10",
          Cu: "Jiro Ota",
          Di: "3/27/2023",
          Lb: "HP PRO BOOK 240G8",
          Sn: "5CG2045M423",
          Hn: "JACWSI7006",
          Hid: "None",
          status: "Active",
          remarks: "Executive Officer/Deployed",
          Nu: "Ryan Rinon",
        },
        {
          Bio: "11",
          Cu: "Ricalyn Mae Abad",
          Di: "3/27/2023",
          Lb: "HP PRO BOOK 240G8",
          Sn: "5CG2045M4524",
          Hn: "JACWSI7006",
          Hid: "None",
          status: "Active",
          remarks: "Executive Officer/Deployed",
          Nu: "Ryan Rinon",
        },
        {
          Bio: "3",
          Cu: "Mark Arcedas",
          Di: "3/27/2023",
          Lb: "HP PRO BOOK 240G8",
          Sn: "5CG2045M45",
          Hn: "JACWSI7006",
          Hid: "None",
          status: "Active",
          remarks: "Executive Officer/Deployed",
          Nu: "None",
        },
        {
          Bio: "4",
          Cu: "Jerico Rito",
          Di: "3/27/2023",
          Lb: "HP PRO BOOK 240G8",
          Sn: "5CG2045M44",
          Hn: "JACWSI7006",
          Hid: "None",
          status: "Active",
          remarks: "Executive Officer/Deployed",
          Nu: "Ryan Rinon",
        },
        {
          Bio: "5",
          Cu: "Nate Bernas",
          Di: "3/27/2023",
          Lb: "HP PRO BOOK 240G8",
          Sn: "5CG2045M43",
          Hn: "JACWSI7006",
          Hid: "None",
          status: "Active",
          remarks: "Executive Officer/Deployed",
          Nu: "None",
        },
        {
          Bio: "6",
          Cu: "Joseph Abantao",
          Di: "3/27/2023",
          Lb: "HP PRO BOOK 240G8",
          Sn: "5CG2045M42",
          Hn: "JACWSI7006",
          Hid: "None",
          status: "Active",
          remarks: "Executive Officer/Deployed",
          Nu: "Jerico",
        },
        {
          Bio: "7",
          Cu: "Jomar Manaog",
          Di: "3/27/2023",
          Lb: "HP PRO BOOK 240G8",
          Sn: "5CG2045M41",
          Hn: "JACWSI7006",
          Hid: "None",
          status: "Active",
          remarks: "Executive Officer/Deployed",
          Nu: "Ryan Rinon",
        },
        {
          Bio: "8",
          Cu: "Dan Penetrante",
          Di: "3/27/2023",
          Lb: "HP PRO BOOK 240G8",
          Sn: "5CG2045M421",
          Hn: "JACWSI7006",
          Hid: "None",
          status: "Active",
          remarks: "Executive Officer/Deployed",
          Nu: "Ryan Rinon",
        },
        {
          Bio: "9",
          Cu: "Ryan Rinon",
          Di: "3/27/2023",
          Lb: "HP PRO BOOK 240G8",
          Sn: "5CG2045M4522",
          Hn: "JACWSI7006",
          Hid: "None",
          status: "Active",
          remarks: "Executive Officer/Deployed",
          Nu: "Ryan Rinon",
        },
        {
          Bio: "10",
          Cu: "Jiro Ota",
          Di: "3/27/2023",
          Lb: "HP PRO BOOK 240G8",
          Sn: "5CG2045M423",
          Hn: "JACWSI7006",
          Hid: "None",
          status: "Active",
          remarks: "Executive Officer/Deployed",
          Nu: "Ryan Rinon",
        },
        {
          Bio: "11",
          Cu: "Ricalyn Mae Abad",
          Di: "3/27/2023",
          Lb: "HP PRO BOOK 240G8",
          Sn: "5CG2045M4524",
          Hn: "JACWSI7006",
          Hid: "None",
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
    background-color: var(--dark);
    transition: 0.2s ease-in-out;
  }
}
</style>
