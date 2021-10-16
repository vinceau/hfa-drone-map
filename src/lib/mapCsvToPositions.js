const isNegativeCoordinate = /[SW]$/

export const mapCsvToPositions = (text) => {
  const results = text.split("\n").map((line) => {
    console.log(line);
    const chunks = line.split(",");
    if (chunks.length === 0) {
      return null;
    }
    console.log("chunks length: ", chunks.length);
    const code = chunks[0];
    if (code !== "M" || chunks.length !== 7) {
      return null;
    }
    const id = chunks[1];
    const lat = mapStringToFloat(chunks[2]);
    const long = mapStringToFloat(chunks[3]);
    return { id, lat, long };
  });
  return results.filter((r) => r !== null);
};

const mapStringToFloat = (str) => {
  let sign = 1.
  if (isNegativeCoordinate.test(str)) {
    sign = -1.
  }
  return sign * parseFloat(str.substring(0, str.length - 1));
};
