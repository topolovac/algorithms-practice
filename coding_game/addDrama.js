function addDrama(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    const prev_char = str[i - 1];
    if (char === "!" && prev_char !== "!") {
      result += "!";
    }

    result += char;
  }
  return result.replaceAll(".", "!");
}

module.exports = addDrama;
