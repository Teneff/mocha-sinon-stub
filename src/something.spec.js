import impl from "./impl";
import something from "./something";

import { stub } from "sinon";

describe("proba", () => {
  before(() => {
    stub(impl, "method").returns("bananas");
  });

  it("should ", () => {
    expect(something()).to.equal("bananasxxxx");
  });
});
