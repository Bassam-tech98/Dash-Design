import { Box, Button, Stack, Typography } from '@mui/material';
import React from 'react'

export default function Transictions({ test1, test2, test3,btn}) {
  return (
    //ruesiblity components //
    <Stack
      direction={{ xs: "column", sm: "row" }}
      flexWrap={"wrap"}
      justifyContent={"space-between"}
      padding={1}
      flexGrow={1}
    >
      <Box>
        <Typography variant="body1" color={"teal"}>
          {test1}
        </Typography>
        <Typography variant="body2" color={"red"}>
          {test2}
        </Typography>
      </Box>
      <Typography variant="body1" color={"purple"}>
        {test3}
      </Typography>
      <Button
        sx={{
          color: "white",
          bgcolor: "orange",
          fontSize: "10px",
          padding: "5px",
        }}
      >
        {btn}
      </Button>
    </Stack>
  );
}
