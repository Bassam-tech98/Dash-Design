import { Box, Typography, useTheme } from '@mui/material';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import React from 'react'
import { columns, rows } from './DataInvoices';

export default function Invocate() {
  const theme = useTheme();
  return (
    <div>
      <Typography
        sx={{
          color: theme.palette.success.main,
          fontSize: "40px",
        }}
      >
        Invioces
      </Typography>
      <Typography
        sx={{
          color: theme.palette.success.main,
          fontSize: "20px",
        }}
      >
        List of invoice Balances
      </Typography>
      <Box style={{ height: 600, width: "98%", mx: "auto" }}>
        <DataGrid
          checkboxSelection
          slots={{toolbar:GridToolbar}}
          rows={rows} columns={columns} getRowId={(row) => row.Id} />
      </Box>
    </div>
  );
}
