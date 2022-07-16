const chai = require("chai");
const assert = chai.assert;

const nameInverter = require("../nameInverter");

describe("#nameInverter()", function () {
  it("1. return an empty string when passed an empty string", function () {
    const str = "";
    const result = nameInverter(str);
    assert.equal(result, "");
  });
  it("2. return a single name when passed a single name", function () {
    const str = "name";
    const result = nameInverter(str);
    assert.equal(result, "name");
  });

  it("3. return a single name when passed a single name with extra spaces", function () {
    const str = "  name  ";
    const result = nameInverter(str);
    assert.equal(result, "name");
  });

  it("4. return a last-name, first-name when passed a first and last-name", function () {
    const str = "first last";
    const result = nameInverter(str);
    assert.equal(result, "last, first");
  });

  it("Stretch: 5. return a last-name, first-name when passed a first and last-name with extra spaces around the names", function () {
    const str = " first last";
    const result = nameInverter(str);
    assert.equal(result, "last, first");
  });

  it("6. return an empty string when passed a single honorific", function () {
    const str = "Dr. ";
    const result = nameInverter(str);
    assert.equal(result, "");
  });

  //// rabbithole
  it("7. return honorific first-name when passed honorific first-name", function () {
    const str = "Dr. first";
    const result = nameInverter(str);
    assert.equal(result, "Dr. first");
  });

  it("8. return a honorific last-name, first-name when passed honorific first-name last-name", function () {
    const str = "Dr. first-name last-name";
    const result = nameInverter(str);
    assert.equal(result, "Dr. last-name, first-name");
  });

  it("9. return a honorific last-name, first-name when passed honorific first-name last-name with extra spaces around the words", function () {
    const str = " Dr. first-name last-name ";
    const result = nameInverter(str);
    assert.equal(result, "Dr. last-name, first-name");
  });

  it("10. throw an error when name is undefined", function () {
    const str = undefined;
    const result = nameInverter(str);
    assert.equal(result, "Error");
  });
});
