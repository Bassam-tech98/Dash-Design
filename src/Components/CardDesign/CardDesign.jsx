import { Box, Paper, Stack, Typography} from '@mui/material'
import { ResponsivePie } from '@nivo/pie';

import React from 'react'

export default function CardDesign({ Icon, Title, SubTitle, data, Increase, scheme }) {
  return (
    <Paper
      sx={{
        minWidth: "333px",
        display: "flex",
        justifyContent: "space-between",
              p: 1.5,
        flexGrow:1
      }}
    >
      <Stack gap={1}>
        {Icon}
        <Typography color='teal'>{Title}</Typography>
        <Typography color='red'>{SubTitle}</Typography>
      </Stack>

      <Stack alignItems={"center"}>
        <Box height={"80px"} width={"80px"}>
          <ResponsivePie
            data={data}
            margin={{ top: 10, right: 0, bottom: 10, left: 0 }}
            innerRadius={0.5}
            colors={{ scheme: scheme }}
            padAngle={0.7}
            enableArc={false}
            enableArcLabels={false}
            enableArcLinkLabels={false}
            activeOuterRadiusOffset={8}
            defs={[
              {
                id: "dots",
                type: "patternDots",
                background: "inherit",
                color: "rgba(255, 255, 255, 0.3)",
                size: 4,
                padding: 1,
                stagger: true,
              },
              {
                id: "lines",
                type: "patternLines",
                background: "inherit",
                color: "rgba(255, 255, 255, 0.3)",
                rotation: -45,
                lineWidth: 6,
                spacing: 10,
              },
            ]}
            fill={[
              { match: { id: "ruby" }, id: "dots" },
              { match: { id: "c" }, id: "dots" },
              { match: { id: "go" }, id: "dots" },
              { match: { id: "python" }, id: "dots" },
              { match: { id: "scala" }, id: "lines" },
              { match: { id: "lisp" }, id: "lines" },
              { match: { id: "elixir" }, id: "lines" },
              { match: { id: "javascript" }, id: "lines" },
            ]}
          />
        </Box>
        <Typography color='orange'>{Increase}</Typography>
      </Stack>
    </Paper>
  );
}
