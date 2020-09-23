function pairElement(str) {
  let pairedDNA = [];
  for (let i = 0; i < str.length; i++) {
    switch (str[i]) {
      case "A":
        pairedDNA.push(["A", "T"]);
        break;
      case "T":
        pairedDNA.push(["T", "A"]);
        break;
      case "G":
        pairedDNA.push(["G", "C"]);
        break;
      case "C":
        pairedDNA.push(["C", "G"]);
        break;
    }
  }

  return pairedDNA;
}

pairElement("GCG");
