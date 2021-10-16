import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import * as React from "react";
import SwipeableViews from "react-swipeable-views";

import styles from "./Sidebar.module.css";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

export const Sidebar = ({ panels, currentIndex, setCurrentIndex }) => {
  const value = currentIndex;

  const handleChange = (event, newValue) => {
    setCurrentIndex(newValue);
  };

  const handleChangeIndex = (index) => {
    setCurrentIndex(index);
  };
  return (
    <Box className={styles.sidebar}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} indicatorColor="secondary" textColor="inherit" variant="fullWidth">
          {panels.map((panel, i) => {
            return <Tab key={panel.label} label={panel.label} {...a11yProps(i)} />;
          })}
        </Tabs>
      </AppBar>
      <SwipeableViews index={value} onChangeIndex={handleChangeIndex}>
        {panels.map((panel, i) => {
          return (
            <TabPanel key={panel.label} value={value} index={i}>
              {panel.contents}
            </TabPanel>
          );
        })}
      </SwipeableViews>
    </Box>
  );
};

Sidebar.propTypes = {
  setCurrentIndex: PropTypes.func.isRequired,
  panels: PropTypes.object.isRequired,
  currentIndex: PropTypes.number.isRequired,
};
