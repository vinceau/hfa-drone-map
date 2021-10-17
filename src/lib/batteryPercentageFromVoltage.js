const TOTAL_VOLTAGE = 13.61;
const DEPLETED_VOLTAGE = 11;

export const getBatteryLevelFromVoltage = (voltage) => {
  return Math.max(((voltage - DEPLETED_VOLTAGE) / (TOTAL_VOLTAGE - DEPLETED_VOLTAGE)) * 100, 0);
};
