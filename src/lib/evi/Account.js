const cl = console.log; cl;
const api = require("./api.singleton.js");

class Account {
  constructor(){
    this.api = api;
    this._data;
    this.name = "";
    this.iban = "";
    this.balance = null;
    this.currency = "";
    this.transactions = [];
    this.noSync = true;
    this.transactionFailed = false;

    this.sync();
  }

  sync(){
    this.api.balance()
    .then(data=>{
      this._data = data;
      this.setData(data);
      this.noSync = false;
    })
    .catch(e=>{
      this.noSync = true;
      throw new Error("Account.sync error: " + e);
    });
  }

  setData(data){
    for(const prop in data.account){
      this[prop] = data.account[prop];
    }
    this.currency = data.currency;
    this.transactions = data.debitsAndCredits;
  }

  addTransaction(options){
    const op = options || {};
    const data = op.data;
    this.api.balanceAdd({data})
    .then(d=>{
      this.transactionFailed = false;
      this.sync();
    })
    .catch(e=>{
      this.transactionFailed = true;
      throw new Error("Account.addTransaction error: " + e);
    });
  }

} // class

module.exports = Account;
