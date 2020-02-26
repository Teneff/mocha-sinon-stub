const impl = require("./impl");
const something = require("./something");

const sinon = require("sinon");

describe("proba", () => {
  before(() => {
    sinon.stub(impl, "method").returns("bananas");
  });

  it("should ", () => {
    expect(something()).to.equal("bananasxxxx");
  });
});
