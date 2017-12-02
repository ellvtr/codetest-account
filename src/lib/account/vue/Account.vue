<script>
module.exports = {
  name: "my-comp"
  ,data(){
    return {
      msg: "Some Message"
    };
  }
};

</script>

<template><span>
  <h1></h1>
  <p>myComp</p>
</span></template>

<style scoped>
span {
  font-family: Ubuntu, Helvetica, Verdana, sans-serif;
  text-align: center;
}
</style>
