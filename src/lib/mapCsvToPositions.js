const MAX_VOLTAGE = 13.61;
const MIN_VOLTAGE = 11.0;
const KEYS = ["id", "lat", "long", "avgSpeed", "avgBearing", "batteryLvl", "avgCurrent"];

export const mapCsvToPositions = (text) => {
  const outputs = {};
  const listErrors = [];
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
      var curVoltage = chunks[2] - MIN_VOLTAGE;
      const batteryLvl =
        Math.round((curVoltage / (MAX_VOLTAGE - MIN_VOLTAGE)) * 100, 2) + "% (" + chunks[2] + "/" + MAX_VOLTAGE + "V)";
      outputs[id].batteryLvl = batteryLvl;
    } else if (code === "M") {
      const lat = mapStringToFloat(chunks[2]);
      const long = mapStringToFloat(chunks[3]);
      const avgSpeed = chunks[4] + " NM/H";
      const avgBearing = chunks[5];
      const avgCurrent = chunks[6];

      outputs[id].lat = lat;
      outputs[id].long = long;
      outputs[id].avgSpeed = avgSpeed;
      outputs[id].avgBearing = avgBearing;
      outputs[id].avgCurrent = avgCurrent;
    }

    var complete = true;
    var noErrors = 0;
    for (var index = 1; index < KEYS.length; index++) {
      if (!outputs[id][KEYS[index]]) {
        outputs[id][KEYS[index]] = "Missing Data";
        complete = false;
      }
    }
    if (!complete) {
      noErrors += 1;
      listErrors.push(id);
    }
  });

  return { value: Object.values(outputs), errors: noErrors, where: listErrors };
};

const mapStringToFloat = (str) => {
  let sign = 1;
  if (/[SW]$/.test(str)) {
    sign = -1;
  }
  return sign * parseFloat(str.substring(0, str.length - 1));
};
