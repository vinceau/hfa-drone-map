const TOTAL_VOLTAGE = 13.61;
const DEPLETED_VOLTAGE = 11;

export const getBatteryLevelFromVoltage = (voltage) => {
  return (((voltage - DEPLETED_VOLTAGE) / (TOTAL_VOLTAGE - DEPLETED_VOLTAGE)) * 200).toFixed(2);
};
