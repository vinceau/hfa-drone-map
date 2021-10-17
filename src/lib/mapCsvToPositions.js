const KEYS = ["id", "lat", "long", "avgSpeed", "avgBearing", "avgCurrent", "batteryVoltage"];
export const mapCsvToPositions = (text) => {
  const outputs = {};
  text.split("\n").forEach((line, i) => {
    console.log("line: ", line);
    const chunks = line.split(",");
    if (chunks.length < 2) {
      return null;
    }
    console.log(chunks);
    console.log("chunks length: ", chunks.length);
    const code = chunks[0];
    const id = chunks[1];

    if (!outputs[id]) {
      outputs[id] = { id };
    }

    try {
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
    } catch (err) {
      console.warn(`Error processing line ${i + 1}, drone id: ${id}`);
    }

    outputs[id].complete = KEYS.reduce((a, b) => a && !!outputs[id][b], true);
    console.log(id, outputs[id]);
  });

  const newOutput = Object.values(outputs);
  const listErrors = newOutput.filter((output) => !output.complete).map((output) => output.id);
  console.log(listErrors);
  return { values: newOutput, errors: listErrors };
};

const mapStringToFloat = (str) => {
  let sign = 1;
  if (/[SW]$/.test(str)) {
    sign = -1;
  }
  return sign * parseFloat(str.substring(0, str.length - 1));
};
