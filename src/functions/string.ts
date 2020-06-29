
export const isUpperCase = (char: string) => {
  return char === char.toUpperCase() && char.match(/[a-zA-Z]/i);
}

export const isLowerCase = (char: string) => {
  return char === char.toLowerCase() && char.match(/[a-zA-Z]/i);
}

/** 
 * HelloWorld =>  hello-world
 * USA        =>  usa
 * USAIsland  =>  usa-island
*/
export const seperateJoinedWords = (target: string, seperator: string) => {
  let result = "";
  for (let it = 0; it < target.length - 1; it++) {
    if (it > 0 && isUpperCase(target[it]) && isLowerCase(target[it + 1])) {
      result += seperator;
    }
    result += target[it].toLowerCase();
  }
  result += target[target.length - 1].toLowerCase();

  return result;
}