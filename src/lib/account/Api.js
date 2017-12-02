const cl = console.log; cl;
const $ = global.$;

class Api {

  constructor(){
    this.endpoints = {
      accountBalance: "/api/balance",
      addTransaction: "/api/balance/add"
    };
  }

  getBalance(){
    return new Promise((resolve, reject) => {
      $.ajax({
        type: "GET",
        url: this.endpoints.accountBalance
      })
      .done((data, textStatus, jqXHR)=>{
        resolve(data);
      })
      .fail((jqXHR, textStatus, errorThrown)=>{
        reject(errorThrown);
        // reject({jqXHR, textStatus, errorThrown});
      });
    }); // Promise
  } // getBalance

  addTransaction(options){
    const op = options || {};
    const data = op.data;
    // Ideally validate data or throw error

    return new Promise((resolve, reject) => {
      $.ajax({
        type: "PUT",
        url: this.endpoints.addTransaction,
        data: JSON.stringify(data),
        dataType: "text"
      })
      .done((data, textStatus, jqXHR)=>{
        resolve(data);
      })
      .fail((jqXHR, textStatus, errorThrown)=>{
        reject(errorThrown);
      });
    }); // Promise
  } // addTransaction

} // class

module.exports = Api;
