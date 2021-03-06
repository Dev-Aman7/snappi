import { useState } from "react";
import "./App.css";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

import Main from "./Main";

import data from "./data";

function App() {
  const [value, setValue] = useState(1);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const depth1 = Object.keys(data);
  console.log(depth1);

  return (
    <div className="App">
      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={value} default={1}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              {depth1.map((elem, index) => {
                return <Tab label={elem} value={index + 1} />;
              })}
            </TabList>
          </Box>
          {depth1.map((elem, index) => {
            return (
              <TabPanel value={index + 1}>
                <Main depth2={data[elem]} />
              </TabPanel>
            );
          })}
        </TabContext>
      </Box>
    </div>
  );
}

export default App;
