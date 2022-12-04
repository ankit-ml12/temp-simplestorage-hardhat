const {task} = require("hardhat/config")
//both line do the same thing you can use any one of them
  // expect(currentValue.toString()).to.equal(expectedValue);})

task("block-number", "Print the current block Number").setAction(

    async (taskArgs, hre)=>{
        const blockNumber =await hre.ethers.provider.getBlockNumber()
        console.log(`current block number is ${blockNumber}`);
    }
)
module.exports={}