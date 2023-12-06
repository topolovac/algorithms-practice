function compute(bytes) {
  const kib = 1024;
  const mib = 1048576;

  if (bytes < kib) {
    return String(bytes);
  } else if (bytes < mib) {
    return String(Math.floor(bytes / kib)) + " KiB";
  }
  return String(Math.floor(bytes / mib)) + " MiB";
}

module.exports = compute;
