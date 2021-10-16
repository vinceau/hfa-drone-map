export const mapCsvToPositions = (text) => {
  const outputs = {};
  text.split("\n").forEach((line) => {
    const chunks = line.split(",");
    if (chunks.length === 0 || chunks.length !== 7) {
      return null;
    }
    console.log(chunks);
    console.log("chunks length: ", chunks.length);
    const code = chunks[0];
    const id = chunks[1];

    if (!outputs[id]) {
      outputs[id] = { id };
    }

    if (code === "P") {
      outputs[id].batteryVoltage = chunks[2];
    } else if (code === "M") {
      const lat = mapStringToFloat(chunks[2]);
      const long = mapStringToFloat(chunks[3]);
      const avgSpeed = chunks[4];
      const avgBearing = chunks[5];
      const avgCurrent = chunks[6];

      outputs[id].lat = lat;
      outputs[id].long = long;
      outputs[id].avgSpeed = avgSpeed;
      outputs[id].avgBearing = avgBearing;
      outputs[id].avgCurrent = avgCurrent;
    }
  });

  return Object.values(outputs);
};

const mapStringToFloat = (str) => {
  let sign = 1;
  if (/[SW]$/.test(str)) {
    sign = -1;
  }
  return sign * parseFloat(str.substring(0, str.length - 1));
};
