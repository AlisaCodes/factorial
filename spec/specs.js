describe('factorial', function() {
  it("returns the factorial of zero is 1", function() {
    expect(factorial(0)).to.equal(1);
  });

  it("returns the factorial of any number", function() {
    expect(factorial(5)).to.equal(120);
  });
});
