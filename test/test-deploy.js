const { assert,expect } = require("chai");
const {ethers} = require("hardhat")

describe("SimpleStorage", function () {
  let simpleStorageFactory, simpleStorage;
  beforeEach(async function (){
        simpleStorageFactory =await ethers.getContractFactory("SimpleStorage");
        simpleStorage = await simpleStorageFactory.deploy()
  });
 
it("number should start with 0", async function(){
  const currentvalue = await simpleStorage.retrieve();
  const expectedValue = 0;
  assert.equal(currentvalue.toString(), expectedValue);
});

it('should update when we call store', async function (){
  const expectedValue ="7";
  const transactionResponse = await simpleStorage.store(expectedValue);
  await transactionResponse.wait(1);

  const currentValue = await simpleStorage.retrieve()
  assert.equal(currentValue.toString(), expectedValue);
 })

})