
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

export interface IParagraphyJoinedWordsConfig {
  isCapitalizeDisabled?: boolean,
}
/** 
 * camelCasedText => Camel cased text
 * helloWorld! => Hello world!
*/
export const paragraphyJoinedWords = (target: string, config: IParagraphyJoinedWordsConfig = {}) => {
  if (!target) { return ""; }

  let result = "";
  for (let it = 0; it < target.length; it++) {
    result += isUpperCase(target[it]) ?
      " " + target[it].toLowerCase()
      : target[it];
  }
  result = result.trim();
  result = config.isCapitalizeDisabled !== true && result ? (result[0].toUpperCase() + result.slice(1)) : result;

  return result;
}


/** 
 * Upper Cased Text => Upper cased text
 * Long Paragraph. With 2 Sentences  => Long paragraph. With 2 senteces
*/
export const fixParagraphCase = (target: string) => {
  if (!target) { return ""; }

  const regexForEndOfSentence = new RegExp("[^a-zA-Z0-9,;:\s\"']")

  let result = "";
  for (let it = 0; it < target.length; it++) {
    if (isUpperCase(target[it])
      && (
        it === 0
        || (it - 1 >= 0 && target[it - 1].match(regexForEndOfSentence)) // New sentence without space break
        || (it - 2 >= 0 && target[it - 1] === "" && target[it - 2].match(regexForEndOfSentence)) // If new sentence
        || (it + 1 < target.length && isUpperCase(target[it + 1])) // If consecutively upperCases
        || (it - 1 >= 0 && isUpperCase(target[it - 1])) // If consecutively upperCases
      )
    ) {
      result += target[it];
    }
    else {
      result += target[it].toLowerCase();
    }
  }
  result = result.trim();
  result = result ? (result[0].toUpperCase() + result.slice(1)) : result;

  return result;
}