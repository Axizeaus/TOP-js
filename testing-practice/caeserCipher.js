export default function caeser(str, key) {
  if (key < 0) return caeser(str, key + 26);

  // variable to store the result
  var res = "";
  // iterate over the string
  for (var i = 0; i < str.length; i++) {
    // Get the character that we are going to add
    var c = str[i];
    // Check if it's a letter
    if (c.match(/[a-z]/i)) {
      // Get the letter's code
      var code = str.charCodeAt(i);
      // Capital letters
      if (code >= 65 && code <= 90)
        c = String.fromCharCode(((code - 65 + key) % 26) + 65);
      // Lowercase letters
      else if (code >= 97 && code <= 122)
        c = String.fromCharCode(((code - 97 + key) % 26) + 97);
    }
    // Add the character
    res += c;
  }
  // Result
  return res;
}

console.log(caeser("I hope this Works Too...", -5));
