import { DarkMode } from '@mui/icons-material';
import { IconButton, Stack, useTheme } from '@mui/material'
import React from 'react'
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
export default function LogicDarkLight({ setmode }) {
    const theme = useTheme();
  return (
    <div>
      <Stack direction={"row"}>
        {theme.palette.mode === "light" ? (
          <IconButton
            onClick={() => {
              setmode((state) => (state === "light" ? "dark" : "light"));
            }}
            color="inherit"
          >
            <WbSunnyOutlinedIcon />
          </IconButton>
        ) : (
          <IconButton
            onClick={() => {
              setmode((state) => (state === "light" ? "dark" : "light"));
            }}
              color="inherit"
            
            >
              <DarkMode/>
          </IconButton>
        )}
        <IconButton color="inherit">
          <NotificationsActiveOutlinedIcon />
        </IconButton>
        <IconButton color="inherit">
          <SettingsOutlinedIcon />
        </IconButton>
        <IconButton color="inherit">
          <PersonOutlineOutlinedIcon />
        </IconButton>
      </Stack>
    </div>
  );
}
