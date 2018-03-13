describe("A suite", function() {
    it("contains spec with an expectation", function() {
      expect(true).toBe(true);
    });


    it("sum of 2,3 should be 5", function() {
        var result = sum(2,3)
        expect(5).toBe(result);
    });
  });