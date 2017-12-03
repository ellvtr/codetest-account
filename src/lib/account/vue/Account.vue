<script>
const account = require("../account.singleton.js");

module.exports = {
  name: "account-ui"
  ,data(){
    return {
      msg: "Some Message"
      ,account: null
    };
  }
  ,beforeMount(){
    this.account = account;
  }
};

</script>

<template><span>

  <h1>Account</h1>
  <div>
    <p v-for="trans in account.transactions">
      {{trans}}
    </p>
  </div>

</span></template>

<style scoped>
/*h1 {
  text-align: center;
}*/
</style>
