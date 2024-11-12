const {Web3} = require('web3')

const web3Singleton = () => {
    return new Web3("http://0.0.0.0:7545")
}

const web3 = web3Singleton()

module.exports = web3