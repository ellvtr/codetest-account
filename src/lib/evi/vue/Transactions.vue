<script>
module.exports = {
   name: "transactions"
  ,props: ["account"]
  ,data(){
    return {
      msg: "Some Message"
    };
  }
};

</script>

<template><span>

<table class="table table-striped">
  <thead>
    <tr>
      <th>From</th>
      <th>To</th>
      <th>Description</th>
      <th>Amount</th>
      <th>Date</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="tran in account.transactions">
      <td>{{tran.from}}</td>
      <td>{{tran.to}}</td>
      <td>{{tran.description}}</td>
      <td>{{tran.amount}}</td>
      <td>{{tran.date}}</td>
    </tr>
  </tbody>
</table>

</span></template>

<style scoped>
</style>
