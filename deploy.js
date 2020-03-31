const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

const provider = new HDWalletProvider(
	'{Key}',
	'https://rinkeby.infura.io/v3/{ID}'
);
const web3 = new Web3(provider);
const deploy = async () => {
	//const accounts = await web3.eth.getAcounts();
	const accounts = await web3.eth.getAccounts().catch((e) => { console.log(e); });

	console.log('Attemptig to deploy from account', accounts[0]);
	//const result = await new web3.eth.Contract(JSON.parse(interface))
	//	.deploy({data: bytecode, arguements: ['Hi There']})
	//	.send({ gas: '1000000', from: accounts[0]});
	//const result = await new web3.eth.Contract(JSON.parse(interface))
    // .deploy({data: '0x' + bytecode, arguments: ['Hi there!']}) // add 0x bytecode
    // .send({from: accounts[0]}); // remove 'gas'
	const result = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({data: bytecode, arguments: ['Hi There!']})
        .send({'from': accounts[0], 'gas': '1000000'}).catch((e) => { console.log(e); });

	console.log('Contract deployed to', result.options.address);
};
deploy();

//const result = await new web3.eth.Contract(JSON.parse(interface))
//     .deploy({data: '0x' + bytecode, arguments: ['Hi there!']}) // add 0x bytecode
//     .send({from: accounts[0]}); // remove 'gas'