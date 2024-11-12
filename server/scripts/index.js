const contract = require('../build/contracts/Energy.json')
const web3 = require('../web3Instance')

const CONTRACT_ADDRESS = contract.networks['5777'].address
const CONTRACT_ABI = contract.abi
const energyContract = new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS)


exports.add_node = async(source, destination) => {
    try{
        let resp = await energyContract.methods.add_node(source, destination).send({
            from: source,
            gas: 6721975,
			gasPrice: '10000000000'
        })

        return resp
    }catch(err) {
        console.error(err);
        return
    }
}

exports.add_connection = async(source, destination) => {
    try {
        let resp = await energyContract.methods.add_connection(source, destination).send({
            from: source,
            gas: 6721975,
			gasPrice: '10000000000'
        })

        return resp
    } catch (error) {
        console.error(error);
    }
}

exports.get_node = async(node) => {
    try {
        let resp = await energyContract.methods.get_node_by_address(node).call()
        return resp
    } catch (err) {
        console.error(err)
    }
}

exports.get_bids_length = async() => {
    try {
        let resp = await energyContract.methods.get_bid_length().call()
        return resp
    } catch (error) {
        console.error(error);
    }
}

exports.create_bid = async(quantity, price, bidder, expiry) => {
    try {
        let resp = await energyContract.methods.create_bid(quantity, price, bidder, expiry).send({
            from: bidder,
            gas: 6721975,
			gasPrice: '10000000000'
        })
        return resp;
    } catch (error) {
        console.error(error);
    }
}

exports.execute_transaction = async(quantity, buyer, bid_id, service_providers, total_value) => {
    try {
        let resp = await energyContract.methods.execute_transaction(quantity, buyer, bid_id, service_providers, total_value).send({
            from: buyer,
            gas: 6721975,
			gasPrice: '10000000000'
        })
        return resp
    } catch (error) {
        console.error(error);
    }
}

exports.get_bids = async(index) => {
    try {
        let resp = await energyContract.methods.get_bids(index).call()
        return resp
    } catch (error) {
        console.error(error);
    }
}

exports.get_node = async(node) => {
    try {
        let resp = await energyContract.methods.get_node_by_address(node).call()
        return resp
    } catch (error) {
        console.error(error);
    }
}

exports.get_transactions = async(index) => {
    try {
        let resp = await energyContract.methods.get_transactions(index).call()
        return resp
    } catch (error) {
        console.error(error);
    }
}

exports.shortest_path = async(graph, start, end) => {
    if (!graph[start] || !graph[end]) {
      return null;
    }
  
    const queue = [[start]];
    const visited = new Set();
  
    while (queue.length) {
      const path = queue.shift();
      const node = path[path.length - 1];
  
      if (node === end) {
        return path;
      }
  
      if (visited.has(node)) {
        continue;
      }
  
      visited.add(node);
  
      for (const neighbor of graph[node]) {
        queue.push(path.concat(neighbor));
      }
    }
  
    return [];
}

exports.get_transactions_length = async() => {
    try {
        let resp = await energyContract.methods.get_transactions_length().call()
        return resp;
    } catch (error) {
        console.error(error);
    }
}