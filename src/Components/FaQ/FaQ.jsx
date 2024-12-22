import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Stack } from "@mui/material";

export default function FaQ() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Stack direction={"column"} gap={3}>
      <Accordion defaultExpanded onChange={handleChange("panel1")}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}>
            What is the purpose of this website?
          </Typography>
          <Typography sx={{ color: "text.secondary" }}>
            Learn more about its features
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            This website is designed to provide users with various tools and
            resources to help manage their accounts and settings.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}>
            How can I change my password?
          </Typography>
          <Typography sx={{ color: "text.secondary" }}>
            Password settings and security
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            To change your password, go to the "Account Settings" page, and
            click on the "Change Password" option. Follow the prompts to set a
            new password.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}>
            How do I update my personal data?
          </Typography>
          <Typography sx={{ color: "text.secondary" }}>
            Personal information management
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            You can update your personal data by going to the "Profile" section
            in the "Settings" menu. Here, you can edit your name, email, and
            other contact information.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}>
            What should I do if I encounter an issue?
          </Typography>
          <Typography sx={{ color: "text.secondary" }}>
            Troubleshooting and support
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            If you encounter any issues, please visit our "Help Center" or
            contact support via the "Contact Us" form. You can also check the
            FAQ section for common issues and solutions.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Stack>
  );
}
