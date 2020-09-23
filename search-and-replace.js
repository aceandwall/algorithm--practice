function myReplace(str, before, after) {
  let regexCapStart = /^[A-Z]/g;
  if (regexCapStart.test(before)) {
    after = after.charAt(0).toUpperCase() + after.slice(1);
  } else {
    after = after.toLowerCase();
  }
  let newArr = str.split(" ");

  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] === before) {
      newArr[i] = newArr[i].replace(before, after);
    }
  }

  return newArr.join(" ");
}

myReplace("I think we should look up there", "up", "Down");
