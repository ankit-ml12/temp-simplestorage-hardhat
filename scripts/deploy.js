const {ethers} = require("hardhat")

async function main(){
  const SimpleStorageFactory = await ethers.getContractFactory("SimpleStorage")

  console.log("Deploying Contract ....");
  const simpleStorage = await SimpleStorageFactory.deploy();
  await simpleStorage.deployed();
  console.log(simpleStorage.address);
}

main()
.then(()=>process.exit(0))
.catch ((error)=>{
  console.log(error);
  process.exit(1)
})