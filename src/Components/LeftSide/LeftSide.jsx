import React from "react";
import List from "@mui/material/List";
import MuiDrawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Avatar, styled, Tooltip, Typography } from "@mui/material";
import { useTheme } from "@emotion/react";
import ContactMailOutlinedIcon from "@mui/icons-material/ContactMailOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PersonPinOutlinedIcon from "@mui/icons-material/PersonPinOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import QuizOutlinedIcon from "@mui/icons-material/QuizOutlined";
import BubbleChartOutlinedIcon from "@mui/icons-material/BubbleChartOutlined";
import ShowChartOutlinedIcon from "@mui/icons-material/ShowChartOutlined";
import PieChartOutlinedIcon from "@mui/icons-material/PieChartOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import { useLocation, useNavigate } from "react-router-dom";


const drawerWidth = 240;
const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  variants: [
    {
      props: ({ open }) => open,
      style: {
        ...openedMixin(theme),
        "& .MuiDrawer-paper": openedMixin(theme),
      },
    },
    {
      props: ({ open }) => !open,
      style: {
        ...closedMixin(theme),
        "& .MuiDrawer-paper": closedMixin(theme),
      },
    },
  ],
}));
const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});
const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

export default function LeftSide({ open, handleDrawerClose }) {
  let location = useLocation();
  const theme = useTheme();
  const navigate = useNavigate();


  const SectionOne = [
    { Icon: <HomeOutlinedIcon />, Text: "Dashboard", Path: "/" },
    { Icon: <PeopleOutlinedIcon />, Text: "ManageTeam", Path: "/team" },
    { Icon: <ContactMailOutlinedIcon />, Text: "ContactInfo", Path: "/contact" },
    { Icon: <DescriptionOutlinedIcon />, Text: "Invocate", Path: "/invocate" },
  ];
   const SectionTwo = [
     { Icon: <PersonPinOutlinedIcon />, Text: "ProfileForm", Path: "/form" },
     {
       Icon: <CalendarMonthOutlinedIcon />,
       Text: "Calender",
       Path: "/calender",
     },
     {
       Icon: <QuizOutlinedIcon />,
       Text: "FaQ Page",
       Path: "/faq",
     },
   ];
   const SectionThree = [
     { Icon: <BarChartOutlinedIcon />, Text: "Bar Chart", Path: "/bar" },
     { Icon: <PieChartOutlinedIcon />, Text: "Pie Chart", Path: "/pie" },
     {
       Icon: <ShowChartOutlinedIcon />,
       Text: "Line Chart",
       Path: "/line",
     },
     {
       Icon: <BubbleChartOutlinedIcon />,
       Text: "Geography Chart",
       Path: "/goegraphy",
     },
   ];
 
  return (
    <Drawer variant="permanent" open={open}>
      <DrawerHeader>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === "rtl" ? (
            <ChevronRightIcon />
          ) : (
            <ChevronLeftIcon />
          )}
        </IconButton>
      </DrawerHeader>
      <Avatar
        sx={{
          mx: "auto",
          width: open ? 55 : 30,
          height: open ? 55 : 30,
          border: "2px solid gray",
          transition: "0.25s",
        }}
        alt="Travis Howard"
        src="/Images/pexels-comoyuli-26571112.jpg"
      />
      <Typography
        align="center"
        sx={{ fontSize: open ? 17 : 0, transition: "0.25s" }}
      >
        Retag
      </Typography>
      <Typography
        align="center"
        sx={{ fontSize: open ? 15 : 0, transition: "0.25s", color: "blue" }}
      >
        Admin
      </Typography>
      <Divider />
      <List>
        {SectionOne.map((Item) => (
          <ListItem key={Item.Path} disablePadding sx={{ display: "block" }}>
            <Tooltip title={open ? null : Item.Text} placement="left">
              <ListItemButton
                onClick={() => {
                  navigate(Item.Path);
                }}
                sx={[
                  {
                    minHeight: 48,
                    px: 2.5,
                    bgcolor: location.pathname === Item.Path ? "teal" : null,
                    color: location.pathname === Item.Path ? "white" : null,
                  },
                  open
                    ? {
                        justifyContent: "initial",
                      }
                    : {
                        justifyContent: "center",
                      },
                ]}
              >
                <ListItemIcon
                  sx={[
                    {
                      minWidth: 0,
                      justifyContent: "center",
                    },
                    open
                      ? {
                          mr: 3,
                        }
                      : {
                          mr: "auto",
                        },
                  ]}
                >
                  {Item.Icon}
                </ListItemIcon>
                <ListItemText
                  primary={Item.Text}
                  sx={[
                    open
                      ? {
                          opacity: 1,
                        }
                      : {
                          opacity: 0,
                        },
                  ]}
                />
              </ListItemButton>
            </Tooltip>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {SectionTwo.map((Item) => (
          <ListItem key={Item.Path} disablePadding sx={{ display: "block" }}>
            <Tooltip title={open ? null : Item.Text} placement="left">
              <ListItemButton
                onClick={() => {
                  navigate(Item.Path);
                }}
                sx={[
                  {
                    minHeight: 48,
                    px: 2.5,
                    bgcolor: location.pathname === Item.Path ? "blue" : null,
                    color: location.pathname === Item.Path ? "white" : null,
                  },
                  open
                    ? {
                        justifyContent: "initial",
                      }
                    : {
                        justifyContent: "center",
                      },
                ]}
              >
                <ListItemIcon
                  sx={[
                    {
                      minWidth: 0,
                      justifyContent: "center",
                    },
                    open
                      ? {
                          mr: 3,
                        }
                      : {
                          mr: "auto",
                        },
                  ]}
                >
                  {Item.Icon}
                </ListItemIcon>
                <ListItemText
                  primary={Item.Text}
                  sx={[
                    open
                      ? {
                          opacity: 1,
                        }
                      : {
                          opacity: 0,
                        },
                  ]}
                />
              </ListItemButton>
            </Tooltip>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {SectionThree.map((Item) => (
          <ListItem key={Item.Path} disablePadding sx={{ display: "block" }}>
            <Tooltip title={open ? null : Item.Text} placement="left">
              <ListItemButton
                onClick={() => {
                  navigate(Item.Path);
                }}
                sx={[
                  {
                    minHeight: 48,
                    px: 2.5,
                    bgcolor: location.pathname === Item.Path ? "purple" : null,
                    color: location.pathname === Item.Path ? "white" : null,
                  },
                  open
                    ? {
                        justifyContent: "initial",
                      }
                    : {
                        justifyContent: "center",
                      },
                ]}
              >
                <ListItemIcon
                  sx={[
                    {
                      minWidth: 0,
                      justifyContent: "center",
                    },
                    open
                      ? {
                          mr: 3,
                        }
                      : {
                          mr: "auto",
                        },
                  ]}
                >
                  {Item.Icon}
                </ListItemIcon>
                <ListItemText
                  primary={Item.Text}
                  sx={[
                    open
                      ? {
                          opacity: 1,
                        }
                      : {
                          opacity: 0,
                        },
                  ]}
                />
              </ListItemButton>
            </Tooltip>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}
