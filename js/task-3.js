function checkForSpam(message) {
  // console.trace();
  if (message.toUpperCase().includes(`SPAM`))
    return message.toUpperCase().includes(`SPAM`);
  else if (message.toUpperCase().includes(`SALE`))
    return message.toUpperCase().includes(`SALE`);
  else return message.toUpperCase().includes(`SALE`);
}

console.log(checkForSpam("Latest technology news")); // false
console.log(checkForSpam("JavaScript weekly newsletter")); // false
console.log(checkForSpam("Get best sale offers now!")); // true
console.log(checkForSpam("Amazing SalE, only tonight!")); // true
console.log(checkForSpam("Trust me, this is not a spam message")); // true
console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!")); // true
console.log(checkForSpam("[SPAM] How to earn fast money?")); // true
