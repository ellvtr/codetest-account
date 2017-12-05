<script>
module.exports = {
   name: "transactions"
  ,props: ["account"]
  ,data(){
    return {
      msg: "Some Message"
    };
  }
  ,methods: {
    toDate(str){
      return new Date(str).toDateString();
    }
    ,toTime(str){
      return new Date(str).toLocaleTimeString();
    }
    ,to(tran){
      return tran.to ? "to: " + tran.to : null;
    }
    ,from(tran){
      return tran.from ? "from: " + tran.from : null;
    }
    ,toFrom(tran){
      return this.to(tran) || this.from(tran);
    }
    ,amount(tran){
      const am = tran.to && tran.amount > 0 ? -tran.amount : tran.amount;
      return am.toFixed(2);
    }
  }
};

</script>

<template><span>

<table class="table table-striped table-responsive">
  <thead>
    <tr>
      <th>Date</th>
      <th>Time</th>
      <th>To/From</th>
      <th>Description</th>
      <th class="txt-right">Amount</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="tran in account.transactions">
      <td>{{toDate(tran.date)}}</td>
      <td>{{toTime(tran.date)}}</td>
      <td>{{ toFrom(tran) }}</td>
      <td>{{tran.description}}</td>
      <td class="txt-right">{{ amount(tran) }}</td>
      <!-- <td>{{tran.amount}}</td> -->
    </tr>
  </tbody>
</table>

</span></template>

<style scoped>
.txt-right {
  text-align: right;
}
</style>
