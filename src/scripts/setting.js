export default {
  name: "setting",
  data() {
    return {
      addUser: "addUser",
      ids: "",
      fullname: "",
      /*Laptop*/
      laptopBrand: "",
      laptopSerial: "",
      /*Monitor*/
      monitorCode: "",
      monitorSerial: "",
      /*Avaya*/
      itemAvaya: "",
      avayaCode: "",
      avayaSerial: "",
      /*SU*/
      itemSU: "",
      suWorkStation: "",
      suCpuCode: "",
      suCpuSerial: "",
      suOperatingSystem: "",

      listofUser: [],
      listofLaptop: [],
      listofMonitor: [],
      listofAvaya: [],
      listofSU: [],
      isAddUser: false,
      isAddLaptop: false,
      isAddMonitor: false,
      isAddAvaya: false,
      isAddSU: false,
      isHaveUser: false,
      isHaveMonitor : false,
      isHaveLaptop : false,
      isHaveAvaya : false,
      isHaveSU : false,


    };
  },
  methods: {
    getAddUser() {
      this.isHaveUser = false;

      if (this.ids == "" || this.fullname == "") {
        this.isHaveUser = true;
      } else {
        this.listofUser.push(`${this.ids} ${this.fullname}`);
        (this.ids = ""), (this.fullname = "");
      }
    },
    getAddLaptop() {
      this.isHaveLaptop = false;

      if (this.laptopBrand == "" || this.laptopSerial == "") {
        this.isHaveLaptop = true;
      } else {
        this.listofLaptop.push(`${this.laptopBrand} ${this.laptopSerial}`);
        (this.laptopBrand = ""), (this.laptopSerial = "");
      }
    },
    getAddMonitor() {
      this.isHaveMonitor = false;

      if (this.monitorCode == "" || this.monitorSerial == "") {
        this.isHaveMonitor = true;
      } else {
        this.listofMonitor.push(`${this.monitorCode} ${this.monitorSerial}`);
        (this.monitorCode = ""), (this.monitorSerial = "");
      }
    },
    getAvaya() {
      this.isHaveContent = false;

      if (this.itemAvaya == "" || this.avayaCode == "" || this.avayaSerial == "") {
        this.isHaveContent = true;
      } else {
        this.listofAvaya.push(
          `${this.itemAvaya} ${this.avayaCode} ${this.avayaSerial}`
        );
        (this.itemAvaya = ""), (this.avayaCode = ""), (this.avayaSerial = "");
      }
    },
    getSU() {
      this.isHaveContent = false;

      if (this.ids == "" || this.fullname == "") {
        this.isHaveContent = true;
      } else {
        this.listofSU.push(
          `${this.itemSU} ${this.suWorkStation} ${this.suCpuCode} ${this.suCpuSerial} ${this.suOperatingSystem}`
        );
        (this.itemSU = ""),
          (this.suWorkStation = ""),
          (this.suCpuCode = ""),
          (this.suCpuSerial = ""),
          (this.suOperatingSystem = "");
      }
    },
    removeUser(index) {
      this.listofUser.splice(index, 1);
    },
    removeLaptop(index) {
      this.listofLaptop.splice(index, 1);
    },
    removeMonitor(index) {
      this.listofMonitor.splice(index, 1);
    },
    removeAvaya(index) {
      this.listofAvaya.splice(index, 1);
    },
    removeSU(index) {
      this.listofSU.splice(index, 1);
    },
    showHideAddUser() {
      this.isHaveUser = false;
      this.isAddUser = !this.isAddUser;

     
    },
    showHideAddLaptop() {
      this.isAddLaptop = !this.isAddLaptop;

      this.isHaveContent = false;
    },
    showHideAddMonitor() {
      this.isAddMonitor = !this.isAddMonitor;

      this.isHaveContent = false;
    },
    showHideAddAvaya() {
      this.isAddAvaya = !this.isAddAvaya;

      this.isHaveContent = false;
    },
    showHideAddSU() {
      this.isAddSU = !this.isAddSU;

      this.isHaveContent = false;
    },
  },
};
