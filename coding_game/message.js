// const message = "A some random tex.Z";
// const parts = ["A some r", "ran", "ndom text.Z"];

function rebuildMessage(parts) {
  if (parts.length === 1) {
    return parts[0];
  }
  const first = parts.find((part) => part[0] === "A");
  const last = parts.find((part) => part[part.length - 1] === "Z");

  const orderedParts = [first];
  let current = first;
  while (orderedParts.length + 1 < parts.length) {
    const next = parts.find((part) => part[0] === current[current.length - 1]);
    orderedParts.push(next);
    current = next;
  }
  orderedParts.push(last);
  return (
    orderedParts
      .filter((x) => x)
      .map((part) => part.slice(0, part.length - 1))
      .join("") + "Z"
  );
}

module.exports = rebuildMessage;
