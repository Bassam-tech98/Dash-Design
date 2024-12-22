import { Box, Typography, useTheme } from '@mui/material';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import React from 'react'
import { columns, rows } from './DataContact';

export default function Contact() {
  const theme = useTheme();
  return (
    <div>
      <Typography
        sx={{
          color: theme.palette.success.main,
          fontSize: "40px",
        }}
      >
        Contact
      </Typography>
      <Box style={{ height: 600, width: "98%", mx: "auto" }}>
        <DataGrid
          slots={{toolbar:GridToolbar}}
          rows={rows} columns={columns} getRowId={(row) => row.Id} />
      </Box>
    </div>
  );
}
