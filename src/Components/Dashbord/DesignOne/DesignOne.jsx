import {Stack, useTheme} from '@mui/material';
import React from 'react'
import CardDesign from '../../CardDesign/CardDesign';
import StorageIcon from "@mui/icons-material/Storage";
import LoginIcon from "@mui/icons-material/Login";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import { dataone, datathree, datatwo } from '../DataShared/DataShared';

export default function DesignOne() {
  const theme = useTheme();
  return (
    <Stack
      direction={"row"}
      flexWrap="wrap"
      justifyContent={{ xs: "center", sm: "space-between" }}
      margin={"20px 0px"}
      gap={2}
    >
      {/* Ruesible_Components */}

      <CardDesign
        Icon={
          <DesignServicesIcon
            sx={{ fontSize: "23px", color: theme.palette.secondary.main }}
          />
        }
        Title={"FrontEnd"}
        SubTitle={"DesignDeveloper"}
        data={dataone}
        scheme={"category10"}
        Increase={"+14%"}
      />
      <CardDesign
        Icon={
          <LoginIcon
            sx={{ fontSize: "23px", color: theme.palette.secondary.main }}
          />
        }
        Title={"BackEnd"}
        SubTitle={"LogicDeveloper"}
        data={datatwo}
        scheme={"dark2"}
        Increase={"+125,2%"}
      />

      <CardDesign
        Icon={
          <StorageIcon
            sx={{ fontSize: "23px", color: theme.palette.secondary.main }}
          />
        }
        Title={"Database"}
        SubTitle={"BusinessLogic"}
        data={datathree}
        scheme={"paired"}
        Increase={"123,5%"}
      />
    </Stack>
  );
}
