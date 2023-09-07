import React, { useState } from 'react'
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useNavigate } from 'react-router-dom';
import { Divider } from "@material-ui/core";
import Typography from "@mui/material/Typography";

export default function FilterComponent() {
    const navigate = useNavigate();
    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    };
  
  return (
    <div>
    <Accordion
        expanded={expanded === "panel9"}
        onChange={handleChange("panel9")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel9bh-content"
          id="panel9bh-header"
        >
           <Typography sx={{ width: "33%", flexShrink: 0 }} className="categorytitle">
           Bijoux
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography onClick={() =>
            navigate(
              `/product/${encodeURIComponent("Bijoux Homme")}`
            )
          } style={{cursor: "pointer",marginTop:"3px",padding:"10px"}}className="category">
          Bijoux Homme
          </Typography>
          <Divider />
          <Typography onClick={() =>
            navigate(
              `/product/${encodeURIComponent("Bijoux Femme")}`
            )
          } style={{cursor: "pointer",marginTop:"3px",padding:"10px"}}className="category">
          Bijoux Femme
          </Typography>
          <Divider />
          <Typography onClick={() =>
            navigate(
              `/product/${encodeURIComponent("Bijoux Enfant")}`
            )
          } style={{cursor: "pointer",marginTop:"3px",padding:"10px"}}className="category">
          Bijoux Enfant
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
           <Typography sx={{ width: "33%", flexShrink: 0 }} className="categorytitle">
           Montres
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography onClick={() =>
            navigate(
              `/product/${encodeURIComponent("Montres Homme")}`
            )
          } style={{cursor: "pointer",marginTop:"3px",padding:"10px"}}className="category">
          Montres Homme
          </Typography>
          <Divider />
          <Typography onClick={() =>
            navigate(
              `/product/${encodeURIComponent("Montres Femme")}`
            )
          } style={{cursor: "pointer",marginTop:"3px",padding:"10px"}}className="category">
          Montres Femme
          </Typography>
          <Divider />
          <Typography onClick={() =>
            navigate(
              `/product/${encodeURIComponent("Montres Enfant")}`
            )
          } style={{cursor: "pointer",marginTop:"3px",padding:"10px"}}className="category">
          Montres Enfant
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel8"}
        onChange={handleChange("panel8")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel8bh-content"
          id="panel8bh-header"
        >
           <Typography sx={{ width: "33%", flexShrink: 0 }} className="categorytitle">
          Idées Cadeaux
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Typography   onClick={() =>
            navigate(
              `/product/${encodeURIComponent("Idées Cadeaux Aniversare")}`
            )
          } style={{cursor: "pointer",marginBottom:"3px",padding:"10px"}} className="category">
          Aniversare
          </Typography>
          <Divider />
          <Typography onClick={() =>
            navigate(
              `/product/${encodeURIComponent("Idées Cadeaux Mariage")}`
            )
          } style={{cursor: "pointer",marginTop:"3px",padding:"10px"}}className="category">
          Mariage
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}
