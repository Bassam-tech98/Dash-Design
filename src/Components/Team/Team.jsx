import React from 'react'
import { DataGrid } from "@mui/x-data-grid";
import { rows } from './DataTeam';
import { Box, Typography, useTheme} from '@mui/material';
import LockOpenIcon from "@mui/icons-material/LockOpen";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
export default function Team() {
  const theme = useTheme();
  const columns = [
    { field: "Id", headerName: "ID", width: 33 },
    {
      field: "Name",
      headerName: "Name",
      flex: 1,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "Email",
      headerName: "Email",
      flex: 1,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "age",
      headerName: "Age",
      flex: 1,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "Phone",
      headerName: "Phone",
      flex: 1,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "Access",
      headerName: "Access",
      flex: 1,
      headerAlign: "center",
      align: "center",

      renderCell: ({ row: { Access } }) => {
        return (
          <Box
            sx={{
              backgroundColor:
                Access === "Admin"
                  ? theme.palette.primary.dark
                  : Access === "manager"
                  ? theme.palette.secondary.dark
                  : "#3da58a",
              padding: { xs: "8px", sm: "10px" }, // padding يختلف حسب الشاشة
              alignItems: "center", // لضبط المحاذاة بشكل صحيح
              margin: "10px auto",
              width: { xs: "80px", sm: "100px" }, // عرض العنصر يختلف حسب حجم الشاشة
              borderRadius: "50px",
              color: "white",
              display: "flex",
              justifyContent: "center", // محاذاة المحتوى في المنتصف
              gap: 1, // إضافة مسافة بين الأيقونة والنص
            }}
          >
            {Access === "Admin" ? (
              <AdminPanelSettingsIcon />
            ) : Access === "manager" ? (
              <SecurityOutlinedIcon />
            ) : (
              <LockOpenIcon />
            )}
            <Typography
              sx={{
                display: { xs: "none", sm: "block" }, // إخفاء النص في الشاشات الصغيرة
                fontSize: { xs: "10px", sm: "14px" }, // حجم الخط يتغير حسب الشاشة
              }}
            >
              {Access}
            </Typography>
          </Box>
        );
      },
    },
  ];
  return (
    <div>
      <Typography sx={{
        color: theme.palette.success.main,
        fontSize: "40px",
        
       }}>Team</Typography>
      <Box style={{ height: 600, width: "98%",mx:"auto" }}>
        <DataGrid rows={rows} columns={columns} getRowId={(row) => row.Id} />
      </Box>
    </div>
  );
}
