import { useState } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

function Main({ depth2 }) {
  const [value, setValue] = useState(1);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const depth2Keys = Object.keys(depth2);

  return (
    <div>
      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              {depth2Keys.map((elem, index) => {
                return <Tab label={elem} value={index + 1} />;
              })}
            </TabList>
          </Box>
          {depth2Keys.map((elem, index) => {
            console.log("elem", elem, depth2[elem]);
            return (
              <TabPanel value={index + 1}>
                {Object.keys(depth2[elem]).length !== 0
                  ? JSON.stringify(depth2[elem], null, 2)
                  : "no value"}
              </TabPanel>
            );
          })}
        </TabContext>
      </Box>
    </div>
  );
}

export default Main;
