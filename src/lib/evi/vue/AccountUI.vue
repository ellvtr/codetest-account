<script>
const account = require("../account.singleton.js");
const Transactions = require("./Transactions.vue");
const AddTransaction = require("./AddTransaction.vue");

module.exports = {
   name: "account-ui"
  ,components: { Transactions, AddTransaction }
  ,data(){
    return {
       account: null
      ,mode: "overview"
    };
  }
  ,beforeMount(){
    this.account = account;
  }
  ,mounted(){
    // Set rows to fill screen vertically:
    const h = $(document).innerHeight();
    $(".row-1").css("height", h*0.38);
    $(".row-2").css("height", h*0.58);
  }
  ,methods: {
    showAddTransaction(type){
      this.mode = "add-"+type;
    }
    ,showOverview(){
      this.mode = "overview";
    }
  }
};

</script>

<template><span>
<div class="container">
<div class="row row-1">

  <div class="col col-lg-6 col-lg-offset-3">
    <div class="panel panel-primary">
      <div class="panel-heading">
        <h3 class="panel-title">Account</h3>
      </div>
      <div class="panel-body">
        <label>Name:</label> {{account.name}} <br/>
        <label>IBAN:</label> {{account.iban}} <br/>
        <label>Currency:</label> {{account.currency}} <br/>
        <label>Balance:</label> {{account.balance}} <br/>
      </div>
    </div>
  </div> <!-- col -->

  <div class="col col-lg-6 col-lg-offset-3">
    <div class="btn-block">
    <button @click="showAddTransaction('debit')" v-if="mode === 'overview'"
      class="btn btn-lg btn-primary btn-trans">Add debit</button>
    <button @click="showAddTransaction('credit')" v-if="mode === 'overview'"
      class="btn btn-lg btn-primary btn-trans pull-right">Add credit</button>
    <add-transaction v-if="mode === 'add-debit'" mode="debit"/>
    <add-transaction v-if="mode === 'add-credit'" mode="credit"/>
    </div>
  </div> <!-- col -->

</div> <!-- row -->
<div class="row row-2">

  <div v-if="mode === 'overview'" class="col col-lg-6 col-lg-offset-3 transactions">
    <transactions v-if="!account.noSync" :account="account" />
    <div v-else class="bg-warning">
      <h3>Oops!</h3>
      <p>Failed to syncronize with the server.</p>
      <button @click="account.sync()" class="btn btn-primary">Please try again</button>
    </div>
  </div> <!-- col -->

</div> <!-- row -->
</div> <!-- container -->
</span></template>

<style scoped>
.container {
  height: 100%;
}
.panel {
  margin-top: 1rem;
}
.btn-block {
  margin: 0 auto 1rem auto; 
  width: 60%;
}
.btn-trans {
  width: 45%;
}
/*.row-1 {
}*/
.row-2 {
  overflow-y: auto;
}
</style>
