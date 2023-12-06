function compute(a, b, c) {
  a = String(a).split("").reverse().join("");
  b = String(b).split("").reverse().join("");
  c = String(c).split("").reverse().join("");
  for (let i = 0; i < a.length; i++) {
    if (Number(a[i]) + Number(b[i]) !== Number(c[i])) {
      return String(i);
    }
  }

  return "ok";
}

module.exports = compute;
