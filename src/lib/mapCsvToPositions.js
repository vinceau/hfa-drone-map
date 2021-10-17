const KEYS = ["id", "lat", "long", "avgSpeed", "avgBearing", "avgCurrent", "batteryVoltage"];

function checkingForMissingData(id, outputs, listErrors) {
  var missingLocation = "";

  for (var j = 1; j < KEYS.length; j++) {
    if (outputs[id][KEYS[j]] === "Missing Data") {
      // storing a string of all the locations that has missing data in the outputs.
      console.log(listErrors);
      listErrors[id].id = id;
      missingLocation += KEYS[j];
      if (j + 1 < KEYS.length) {
        missingLocation += ", ";
      }

      listErrors[id].messages += missingLocation;
    }
  }

  return listErrors;
}

export const mapCsvToPositions = (text) => {
  const outputs = {};
  const listErrors = {};
  var noErrors = 0;
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
      listErrors[id] = { id };
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

    outputs[id].complete = KEYS.reduce((a, b) => a && !!outputs[id][b], true);
    console.log(id, outputs[id]);
  });

  const newOutput = Object.values(outputs);

  for (var k = 0; index < newOutput.length; k++) {
    if (!newOutput[k].complete) {
      noErrors += 1;
      newListError = checkingForMissingData(k, newOutput, Object.values(listErrors));
    }
  }

  return { values: newOutput, errors: noErrors, where: listErrors, messages: newListError };
};

const mapStringToFloat = (str) => {
  let sign = 1;
  if (/[SW]$/.test(str)) {
    sign = -1;
  }
  return sign * parseFloat(str.substring(0, str.length - 1));
};
