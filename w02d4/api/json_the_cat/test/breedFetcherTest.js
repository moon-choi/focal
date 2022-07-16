const { fetchBreedDescription } = require("../breedFetcher");
const { assert } = require("chai");
const breedName = process.argv[2];
// const brokenUrl = `https://broken.api.thecatapi.com/v1/breeds/search/?q=${breedName}`;

describe("fetchBreedDescription", () => {
  it("returns a string description for a valid breed, via callback", (done) => {
    fetchBreedDescription("Siberian", (err, desc) => {
      // we expect no error for this scenario
      assert.equal(err, null);

      const expectedDesc =
        "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";

      // compare returned description
      assert.equal(expectedDesc, desc.trim());
      done();
    });
  });
});

describe("fetchBreedDescription", () => {
  it("returns error for a non-existing breed, via callback", (done) => {
    fetchBreedDescription(breedName, (err, desc) => {
      assert.equal(err, `${breedName} is not found.`);
      assert.equal(desc, null);
      done();
    });
  });
});

// this case passed when i tried with broken url.
describe("fetchBreedDescription", () => {
  it("returns error for a broken url, via callback", (done) => {
    fetchBreedDescription("Siberian", (err, desc) => {
      assert.equal(
        err,
        `https://aaapi.thecatapi.com/v1/breeds/search/?q=Siberian is broken`
      );
      assert.equal(desc, null);

      done();
    });
  });
});
