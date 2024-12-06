import miniswitch from ".";

import { expect } from "chai";


describe("miniswitch", () => {
    it("should return the value from the matching case", async () => {
      let v = "a";
      const result = await miniswitch(v, {
        a: () => Promise.resolve("Matched A"),
        b: () => Promise.resolve("Matched B"),
      });
      expect(result).to.equal("Matched A");
    });
  
    it("should return the default value when no case matches", async () => {
      let v = "c";
      const result = await miniswitch(
        v,
        {
          a: () => Promise.resolve("Matched A"),
          b: () => Promise.resolve("Matched B"),
        },
        () => Promise.resolve("Default")
      );
      expect(result).to.equal("Default");
    });
  
    it("should return undefined when no case matches and no default is provided", async () => {
      let v = "c";
      const result = await miniswitch(v, {
        a: () => Promise.resolve("Matched A"),
        b: () => Promise.resolve("Matched B"),
      });
      expect(result).to.be.undefined;
    });
  
    it("should work with synchronous values in cases", async () => { 
      let v = "a";
      const result = await miniswitch(v, {
        a: () => "Matched A",
        b: () => "Matched B",
      });
      expect(result).to.equal("Matched A");
    });
  
    it("should work with a synchronous default value", async () => {
      let v = "c";
      const result = await miniswitch(
        v,
        {
          a: () => "Matched A",
          b: () => "Matched B",
        },
        () => "Default"
      );
      expect(result).to.equal("Default");
    });
  
    it("should prioritize cases over the default when both are provided", async () => {
      let v = "b";
      const result = await miniswitch(
        v,
        {
          a: () => Promise.resolve("Matched A"),
          b: () => Promise.resolve("Matched B"),
        },
        () => Promise.resolve("Default")
      );
      expect(result).to.equal("Matched B");
    });
  });