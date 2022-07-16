let creditLimit = 7000;

/*
 * Input: number of dollars to loan out
 * Returns: Promise of loan which may or may not fulfill, based on remaining credit.
 * If creditLimit is less than the requested amount, only the remaining limit is loaned out, otherwise the full amount is loaned out. If $0 remain in the limit, the loan request is rejected (error!).
 */
const loanOut = function (amount) {
  return new Promise((resolve, reject) => {
    if (creditLimit > amount) {
      resolve(amount);
      creditLimit -= amount;
    }
    if (creditLimit <= 0) {
      reject("Insufficient Funds");
    }

    if (creditLimit < amount) {
      resolve(creditLimit);
      creditLimit = 0;
    }
  });
};

console.log("Asking for $150, which should be okay ...");
loanOut(8000)
  .then((amountReceived) => {
    console.log(
      `\t-> I got $${amountReceived} loan from the bank! Remaining Credit Limit: $${creditLimit}`
    );
  })
  .catch((err) => {
    console.log(`\t-> Error: ${err}!`);
  });
