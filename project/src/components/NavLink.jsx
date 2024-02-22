import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { useState } from "react";
import Register from "../pages/Register";
import UserList from "../pages/UserList";

const NavLink = () => {
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{typography: 'body1' }}>
    <TabContext value={value}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <TabList onChange={handleChange} aria-label="lab API tabs example">
          <Tab label="Kullanıcı Ekle" value="1" />
          <Tab label="Kullanıcılar" value="2" />
        </TabList>
      </Box>
      <TabPanel value="1"><Register/></TabPanel>
      <TabPanel value="2"><UserList/></TabPanel>
    </TabContext>
  </Box>
  );
};

export default NavLink;
