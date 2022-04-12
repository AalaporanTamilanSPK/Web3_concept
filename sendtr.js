var Web3  =  require('web3');

var provider ="infura link";
var web3Provider = new Web3.providers.HttpProvider(provider)
var web3 = new Web3(web3Provider);

var Private_Key  =  ' you privarte key';
var from_address =  'you address';


var to_address  = 'to address';

async function eth_transaction(){
  var SingedTransaction = await web3.eth.accounts.signTransaction({
       from: from_address,
       to:  to_address,
       value: '1000',
       gas: 21000
  },  Private_Key  );

  web3.eth.sendSignedTransaction(SingedTransaction.rawTransaction).then((receipt) => {
        console.log(receipt);
  });
}

eth_transaction();