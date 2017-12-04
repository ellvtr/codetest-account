<script>
const cl = console.log; cl;
const account = require("../account.singleton.js");

module.exports = {
   name: "add-transaction"
  ,props: ["mode"]
  ,data(){
    return {
       account: null
      ,input: {
         from: ""
        ,to: ""
        ,description: ""
        ,amount: null
        ,date: ""
      }
      ,warning: ""
    };
  }
  ,methods: {
    submit(){
      this.input.date = new Date().toISOString(); // Set date and time
      // Clone input data and add minus if debit:
      const data = $.extend({}, this.input);
      this.mode === "debit" ? data.amount = -data.amount : void 0;
      // Submit transaction; return if OK, else show error:
      this.account.addTransaction({data})
      .then(r=>{
        this.warning = "";
        this.$parent.showOverview();
      })
      .catch(e=>{
        this.warning = "Failed to contact server, please try again.";
      });
    }
    ,cancel(){
      this.$parent.showOverview();
    }
    ,validate(){
      let re = true;
      re = this.input.amount > 0 ? true : false;
      this.mode === "debit" && !this.input.to ? re = false : void 0;
      this.mode === "credit" && !this.input.from ? re = false : void 0;
      return re;
    }
    ,trySubmit(){
      this.validate() ? 
        this.submit() :
        this.warning = "Invalid input.";
    }
  }
  ,beforeMount(){
    this.account = account;
  }
};

</script>

<template><span>

<div class="panel panel-default">
  <div class="panel-heading">
    <h3 class="panel-title">Add {{mode}}</h3>
  </div>
  <div class="panel-body">

    <div v-if="warning" class="bg-warning">
      <h3>Oops!</h3>
      <p>{{warning}}</p>
    </div>
    <form class="form-horizontal">
      <div v-if="mode === 'credit'" class="form-group">
        <label for="from" class="col-sm-2 control-label">From</label>
        <div class="col-sm-10">
          <input v-model.trim="input.from" type="text" class="form-control" id="from" placeholder="From">
        </div>
      </div>
      <div v-if="mode === 'debit'" class="form-group">
        <label for="to" class="col-sm-2 control-label">To</label>
        <div class="col-sm-10">
          <input v-model.trim="input.to" type="text" class="form-control" id="to" placeholder="To">
        </div>
      </div>
      <div class="form-group">
        <label for="descr" class="col-sm-2 control-label">Description</label>
        <div class="col-sm-10">
          <input v-model.trim="input.description" type="text" class="form-control" id="descr" placeholder="Description">
        </div>
      </div>
      <div class="form-group">
        <label for="amount" class="col-sm-2 control-label">Amount</label>
        <div class="col-sm-10">
          <input v-model.number="input.amount" type="number" class="form-control" id="amount" placeholder="Amount">
        </div>
      </div>
    </form>
    <button class="btn btn-default" @click="cancel()">Cancel</button>
    <button class="btn btn-primary" @click="trySubmit()">Submit</button>
  </div> <!-- panel body -->
</div> <!-- panel -->

<!-- <pre>{{input}}</pre> -->

</span></template>

<style scoped>
</style>
