import { Box, Paper, Stack, Typography, useTheme } from '@mui/material';
import React from 'react'
import LineChart from '../../LineChart/LineChart';
import Transictions from '../Transictions/Transictions';

export default function Designtwo() {
  const theme = useTheme();
  return (
    <Stack
      direction={{ xs: "column", sm: "row" }}
      
      flexWrap={"wrap"}
      gap={2}
      mb={5}
     
    >
      <Paper sx={{ maxWidth: 900, flexGrow: 1,overflow:"clip",padding:"40px" }}>
        <LineChart isdashboard={true} />
      </Paper>
      <Paper flexGrow={1} mt={10} overflow={"clip"} padding="40px">
        <Box>
          <Typography
            sx={{ fontWeight: "bold", p: 1.2 }}
            color={theme.palette.secondary.main}
            variant="h6"
          >
            Recent Transactions
          </Typography>

          <Transictions 
            test1={"014ref"}
            test2={" johinnode"}
            test3={"2023-09-01"}
            btn={"ClickUp"}
          />
          <Transictions
            test1={"016ref"}
            test2={"Cruessnode"}
            test3={"2023-04-01"}
            btn={"ClickUp"}
          />
          <Transictions
            test1={"015ref"}
            test2={" Mickelnode"}
            test3={"2024-06-02"}
            btn={"ClickUp"}
          />
          <Transictions
            test1={"017ref"}
            test2={"finilaanode"}
            test3={"2024-06-02"}
            btn={"ClickUp"}
          />
        </Box>
      </Paper>
    </Stack>
  );
}
