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
<div class="row">

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
    <button @click="showAddTransaction('debit')" v-if="mode === 'overview'"
      class="btn btn-lg btn-primary">Add debit</button>
    <button @click="showAddTransaction('credit')" v-if="mode === 'overview'"
      class="btn btn-lg btn-primary">Add credit</button>
    <add-transaction v-if="mode === 'add-debit'" mode="debit"/>
    <add-transaction v-if="mode === 'add-credit'" mode="credit"/>
  </div> <!-- col -->

  <div v-if="mode === 'overview'" class="col col-lg-6 col-lg-offset-3">
    <transactions :account="account" />
  </div> <!-- col -->

</div> <!-- row -->
</div> <!-- container -->
</span></template>

<style scoped>
.panel {
  margin-top: 1rem;
}
</style>
