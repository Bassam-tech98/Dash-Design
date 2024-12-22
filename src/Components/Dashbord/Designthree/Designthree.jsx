
import { Box, Paper} from '@mui/material';
import React from 'react'
import Goegraphy from "../../Goegraphy/Goegraphy"
import PieChart from '../../PieChart/PieChart';
import BarChart from '../../BarChart/BarChart';


export default function Designthree() {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
       
      }}
    >
      <Paper sx={{ width: { xs: "100%", sm: "33%" }, mb: 2 ,overflow:"clip" ,padding:"40px"}}>
        <PieChart isdashboard={true} />
      </Paper>
      <Paper sx={{ width: { xs: "100%", sm: "33%" }, mb: 2,overflow:"clip" ,padding:"40px" }}>
        <BarChart isdashboard={true} />
      </Paper>
      <Paper sx={{ width: { xs: "100%", sm: "33%" }, mb: 2,overflow:"clip" ,padding:"40px" }}>
        <Goegraphy isdashboard={true} />
      </Paper>
    </Box>
  );
}
