const cl = console.log; cl; // avoid linting error
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
    return new Promise((resolve, reject) => {
      this.api.balanceAdd({data})
      .then(r=>{
        this.transactionFailed = false;
        this.sync();
        resolve(r);
      })
      .catch(e=>{
        this.transactionFailed = true;
        reject(e);
      });
    });
  }

} // class

module.exports = Account;
