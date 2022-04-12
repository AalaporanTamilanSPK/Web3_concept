//web3 create address
var express = require('express');
var Web3 = require('web3');
var app =express();

app.get('/',function(req,res){

    var provider ="  '**your ifuralink**'";
var web3Provider = new Web3.providers.HttpProvider(provider)
var web3 = new Web3(web3Provider);
    // create address web3
    // var account = web3.eth.accounts.create();
    // console.log(account);
    // res.send(account);

    //balance get
    web3.eth.getBalance(' Enter the check address ',async (err, result) => {
        if (err) {
            console.log(err);
            return;
        }
        let balance = web3.utils.fromWei(result,"ether");
        console.log(balance+ " ETH");
        res.send(balance);
       });

}); 

app.listen(9020);

