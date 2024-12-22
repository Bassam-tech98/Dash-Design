import React from 'react'
import DesignOne from './DesignOne/DesignOne'
import Designtwo from './Designtwo/Designtwo'
import Designthree from './Designthree/Designthree'
import { Box, Button, Typography, useTheme } from '@mui/material'


export default function Dashbord() {
  const theme = useTheme();
  return (
    <div>
      <Typography
        sx={{
          color: theme.palette.info.light,
          fontSize: "40px",
        }}
      >
        Dashboard
      </Typography>
      <Typography
        sx={{
          color: theme.palette.primary.light,
          fontSize: "20px",
        }}
      >
        Welcome To Your Dashboard
      </Typography>
      <Box sx={{textAlign:"right"}}>
        <Button variant='contained' color='primary' sx={{ padding: "6px 8px","&:hover":{color:"white",backgroundColor:"teal"},borderRadius:"50px",textTransform:"capitalize" }} >
          Dwonload Reports
        </Button>
      </Box>

      <DesignOne />







      
      <Designtwo />
      <Designthree />
    </div>
  );
}
