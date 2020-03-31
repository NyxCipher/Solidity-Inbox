const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

const provider = new HDWalletProvider(
	'fragile only hero trend inherit aim merit all hazard manage eight twenty',
	'rinkeby.infura.io/v3/141f097af9334fd8bf9c1424eb0ef1df'
);
const web3 = new Web3(provider)
const deploy = async () => {
	const accounts = await web3.eth.getAcounts();

	console.log('Attemptig to deploy from account', accoounts[0]);
	//const result = await new web3.eth.Contract(JSON.parse(interface))
	//	.deploy({data: bytecode, arguements: ['Hi There']})
	//	.send({ gas: '1000000', from: accounts[0]});
	const result = await new web3.eth.Contract(JSON.parse(interface))
     .deploy({data: '0x' + bytecode, arguments: ['Hi there!']}) // add 0x bytecode
     .send({from: accounts[0]}); // remove 'gas'
	console.log('COntract deployed to' results.option.address);
};
deploy();

//const result = await new web3.eth.Contract(JSON.parse(interface))
//     .deploy({data: '0x' + bytecode, arguments: ['Hi there!']}) // add 0x bytecode
//     .send({from: accounts[0]}); // remove 'gas'