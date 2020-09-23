function translatePigLatin(str) {
  let conRegex = /^[^aeiou]+/;
  // var regex = /[aeiou]/gi;
  let myConsonants = str.match(conRegex);
  return myConsonants !== null
    ? str.replace(conRegex, "").concat(myConsonants).concat("ay")
    : str.concat("way");
}

console.log(translatePigLatin("consonant"));
