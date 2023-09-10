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
     expanded={expanded === "panel1"}
    onChange={handleChange("panel1")}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                  >
                    <Typography sx={{ width: "33%", flexShrink: 0 }} className="categorytitle">
                    Bijoux Homme
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails style={{display:'block'}}>
                    <Typography
                     onClick={() =>
                  navigate(`/product/${encodeURIComponent("Chaine")}`)
                }
                      style={{cursor: "pointer",marginBottom:"3px",padding:"10px"}} className="category">
                    Chaine
                    </Typography>
                    <Divider />
                    <Typography 
                       onClick={() =>
                  navigate(`/product/${encodeURIComponent("Bague")}`)
                }
                    style={{cursor: "pointer",marginTop:"3px",padding:"10px"}}className="category">
                   Bague
                    </Typography>
                    <Typography 
                    onClick={() =>
                  navigate(`/product/${encodeURIComponent("Gourmette")}`)
                }
                    style={{cursor: "pointer",marginTop:"3px",padding:"10px"}}className="category">
                   Gourmette
                    </Typography>
                    <Typography
                    onClick={() =>
                  navigate(`/product/${encodeURIComponent("Accessoire")}`)
                }
                     style={{cursor: "pointer",marginTop:"3px",padding:"10px"}}className="category">
                   Accessoire
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
                    <Typography sx={{ width: "33%", flexShrink: 0 }} className="categorytitle">
                    Bijoux Femme
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails style={{display:'block'}}>
                    <Typography
                    onClick={() =>
                  navigate(`/product/${encodeURIComponent("Série")}`)
                }
                      style={{cursor: "pointer",marginBottom:"3px",padding:"10px"}} className="category">
                    Série
                    </Typography>
                    <Divider />
                    <Typography
                    onClick={() =>
                  navigate(`/product/${encodeURIComponent("Bague")}`)
                }
                     style={{cursor: "pointer",marginTop:"3px",padding:"10px"}}className="category">
                   Bague
                    </Typography>
                    <Typography
                    onClick={() =>
                  navigate(`/product/${encodeURIComponent("Solitaire")}`)
                }
                     style={{cursor: "pointer",marginTop:"3px",padding:"10px"}}className="category">
                   Solitaire
                    </Typography>
                    <Typography
                    onClick={() =>
                  navigate(`/product/${encodeURIComponent("Alliance")}`)
                }
                     style={{cursor: "pointer",marginTop:"3px",padding:"10px"}}className="category">
                   Alliance
                    </Typography>
                    <Typography
                    onClick={() =>
                  navigate(`/product/${encodeURIComponent("Solitaire et alliance")}`)
                }
                     style={{cursor: "pointer",marginTop:"3px",padding:"10px"}}className="category">
                   Solitaire et Alliance
                    </Typography>
                    <Typography
                    onClick={() =>
                  navigate(`/product/${encodeURIComponent("Pendentif")}`)
                }
                     style={{cursor: "pointer",marginTop:"3px",padding:"10px"}}className="category">
                   Pendentif
                    </Typography>
                    <Typography 
                    onClick={() =>
                  navigate(`/product/${encodeURIComponent("Bracelet")}`)
                }
                    style={{cursor: "pointer",marginTop:"3px",padding:"10px"}}className="category">
                   Bracelet
                    </Typography>
                    <Typography
                    onClick={() =>
                  navigate(`/product/${encodeURIComponent("Gourmette")}`)
                }
                     style={{cursor: "pointer",marginTop:"3px",padding:"10px"}}className="category">
                   Gourmette
                    </Typography>
                    <Typography 
                    onClick={() =>
                  navigate(`/product/${encodeURIComponent("Chaine")}`)
                }
                    style={{cursor: "pointer",marginTop:"3px",padding:"10px"}}className="category">
                   Chaine
                    </Typography>
                    <Typography 
                    onClick={() =>
                  navigate(`/product/${encodeURIComponent("Boucles D'Oreilles")}`)
                }
                    style={{cursor: "pointer",marginTop:"3px",padding:"10px"}}className="category">
                   Boucles D'Oreilles
                    </Typography>
                    <Typography
                     onClick={() =>
                  navigate(`/product/${encodeURIComponent("Broche")}`)
                }
                     style={{cursor: "pointer",marginTop:"3px",padding:"10px"}}className="category">
                   Broche
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
                    CHICHKHAN
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails style={{display:'block'}}>
                  <Typography
                  onClick={() =>
                  navigate(`/product/${encodeURIComponent("Série")}`)
                }
                      style={{cursor: "pointer",marginBottom:"3px",padding:"10px"}} className="category">
                    Série
                    </Typography>
                    <Divider />
                    <Typography
                    onClick={() =>
                  navigate(`/product/${encodeURIComponent("Bague")}`)
                }
                     style={{cursor: "pointer",marginTop:"3px",padding:"10px"}}className="category">
                   Bague
                    </Typography>
                    <Typography
                    onClick={() =>
                  navigate(`/product/${encodeURIComponent("Pendentif")}`)
                }
                     style={{cursor: "pointer",marginTop:"3px",padding:"10px"}}className="category">
                   Pendentif
                    </Typography>
                    <Typography
                    onClick={() =>
                  navigate(`/product/${encodeURIComponent("Bracelet")}`)
                }
                     style={{cursor: "pointer",marginTop:"3px",padding:"10px"}}className="category">
                   Bracelet
                    </Typography>
                    <Typography
                    onClick={() =>
                  navigate(`/product/${encodeURIComponent("Gourmette")}`)
                }
                     style={{cursor: "pointer",marginTop:"3px",padding:"10px"}}className="category">
                   Gourmette
                    </Typography>
                    <Typography 
                    
                    onClick={() =>
                  navigate(`/product/${encodeURIComponent("Chaine")}`)
                }
                    style={{cursor: "pointer",marginTop:"3px",padding:"10px"}}className="category">
                   Chaine
                    </Typography>
                    <Typography 
                    onClick={() =>
                  navigate(`/product/${encodeURIComponent("Boucle")}`)
                }
                    style={{cursor: "pointer",marginTop:"3px",padding:"10px"}}className="category">
                   Boucle
                    </Typography>
                    <Typography
                    onClick={() =>
                  navigate(`/product/${encodeURIComponent("Broche")}`)
                }
                     style={{cursor: "pointer",marginTop:"3px",padding:"10px"}}className="category">
                   Broche
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
                    <Typography sx={{ width: "33%", flexShrink: 0 }} className="categorytitle">
                    Bijoux Enfant
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails style={{display:'block'}}>
                    <Typography
                    onClick={() =>
                  navigate(`/product/${encodeURIComponent("Bague")}`)
                }
                      style={{cursor: "pointer",marginBottom:"3px",padding:"10px"}} className="category">
                    Bague
                    </Typography>
                    <Divider />
                    <Typography
                    onClick={() =>
                  navigate(`/product/${encodeURIComponent("Bracelet")}`)
                }
                     style={{cursor: "pointer",marginTop:"3px",padding:"10px"}}className="category">
                   Bracelet
                    </Typography>
                    <Typography
                    onClick={() =>
                  navigate(`/product/${encodeURIComponent("Gourmette")}`)
                }
                     style={{cursor: "pointer",marginTop:"3px",padding:"10px"}}className="category">
                   Gourmette
                    </Typography>
                    <Typography
                    onClick={() =>
                  navigate(`/product/${encodeURIComponent("Pendentif")}`)
                }
                     style={{cursor: "pointer",marginTop:"3px",padding:"10px"}}className="category">
                   Pendentif
                    </Typography>
                    <Typography 
                    onClick={() =>
                  navigate(`/product/${encodeURIComponent("Boucle")}`)
                }
                    style={{cursor: "pointer",marginTop:"3px",padding:"10px"}}className="category">
                   Boucle
                    </Typography>
                    <Typography
                    onClick={() =>
                  navigate(`/product/${encodeURIComponent("Série")}`)
                }
                      style={{cursor: "pointer",marginBottom:"3px",padding:"10px"}} className="category">
                    Série
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
                    Montres Homme
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails style={{display:'block'}}>
                    <Typography
                    onClick={() =>
                  navigate(`/product/${encodeURIComponent("Acier")}`)
                }
                      style={{cursor: "pointer",marginBottom:"3px",padding:"10px"}} className="category">
                    Acier
                    </Typography>
                    <Divider />
                    <Typography 
                    onClick={() =>
                  navigate(`/product/${encodeURIComponent("Cuir")}`)
                }
                    style={{cursor: "pointer",marginTop:"3px",padding:"10px"}}className="category">
                   Cuir
                    </Typography>
                    <Typography 
                    onClick={() =>
                  navigate(`/product/${encodeURIComponent("Plastique")}`)
                }
                    style={{cursor: "pointer",marginTop:"3px",padding:"10px"}}className="category">
                   Plastique
                    </Typography>
                    <Typography 
                    onClick={() =>
                  navigate(`/product/${encodeURIComponent("Céramique")}`)
                }
                     style={{cursor: "pointer",marginTop:"3px",padding:"10px"}}className="category">
                   Céramique
                    </Typography>
                    <Typography 
                    onClick={() =>
                  navigate(`/product/${encodeURIComponent("Gomme")}`)
                }
                     style={{cursor: "pointer",marginTop:"3px",padding:"10px"}}className="category">
                   Gomme
                    </Typography>
                    <Typography
                    onClick={() =>
                  navigate(`/product/${encodeURIComponent("Tissu")}`)
                }
                     style={{cursor: "pointer",marginTop:"3px",padding:"10px"}}className="category">
                   Tissu
                    </Typography>
                  </AccordionDetails>
                  </Accordion>
                  <Accordion
                  expanded={expanded === "panel5"}
                  onChange={handleChange("panel5")}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel5bh-content"
                    id="panel5bh-header"
                  >
                    <Typography sx={{ width: "33%", flexShrink: 0 }} className="categorytitle">
                    Montres Femme
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails style={{display:'block'}}>
                    <Typography
                    onClick={() =>
                  navigate(`/product/${encodeURIComponent("Acier")}`)
                }
                      style={{cursor: "pointer",marginBottom:"3px",padding:"10px"}} className="category">
                    Acier
                    </Typography>
                    <Divider />
                    <Typography
                    onClick={() =>
                  navigate(`/product/${encodeURIComponent("Cuir")}`)
                }
                     style={{cursor: "pointer",marginTop:"3px",padding:"10px"}}className="category">
                   Cuir
                    </Typography>
                    <Typography
                    onClick={() =>
                  navigate(`/product/${encodeURIComponent("Plastique")}`)
                }
                     style={{cursor: "pointer",marginTop:"3px",padding:"10px"}}className="category">
                   Plastique
                    </Typography>
                    <Typography
                    onClick={() =>
                  navigate(`/product/${encodeURIComponent("Céramique")}`)
                }
                     style={{cursor: "pointer",marginTop:"3px",padding:"10px"}}className="category">
                   Céramique
                    </Typography>
                    <Typography
                    onClick={() =>
                  navigate(`/product/${encodeURIComponent("Gomme")}`)
                }
                     style={{cursor: "pointer",marginTop:"3px",padding:"10px"}}className="category">
                   Gomme
                    </Typography>
                    <Typography 
                    onClick={() =>
                  navigate(`/product/${encodeURIComponent("Tissu")}`)
                }
                    style={{cursor: "pointer",marginTop:"3px",padding:"10px"}}className="category">
                   Tissu
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  expanded={expanded === "panel6"}
                  onChange={handleChange("panel6")}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel6bh-content"
                    id="panel6bh-header"
                  >
                    <Typography sx={{ width: "33%", flexShrink: 0 }} className="categorytitle">
                    Montres Enfant
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails style={{display:'block'}}>
                    <Typography 
                    onClick={() =>
                  navigate(`/product/${encodeURIComponent("Plastique")}`)
                }
                     style={{cursor: "pointer",marginTop:"3px",padding:"10px"}}className="category">
                   Plastique
                    </Typography>
                    <Typography 
                     onClick={() =>
                  navigate(`/product/${encodeURIComponent("Gomme")}`)
                }
                    style={{cursor: "pointer",marginTop:"3px",padding:"10px"}}className="category">
                   Gomme
                    </Typography>
                    <Typography
                    onClick={() =>
                  navigate(`/product/${encodeURIComponent("Tissu")}`)
                }
                     style={{cursor: "pointer",marginTop:"3px",padding:"10px"}}className="category">
                   Tissu
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  expanded={expanded === "panel7"}
                  onChange={handleChange("panel7")}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel7bh-content"
                    id="panel7bh-header"
                  >
                    <Typography
                    onClick={() =>
                  navigate(`/product/${encodeURIComponent("Idées Cadeaux")}`)
                }
                     sx={{ width: "33%", flexShrink: 0 }} className="categorytitle">
                    Idées Cadeaux
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails style={{display:'block'}}>
                    <Typography
                    onClick={() =>
                  navigate(`/product/${encodeURIComponent("Idées Cadeaux Aniversare")}`)
                }
                      style={{cursor: "pointer",marginBottom:"3px",padding:"10px"}} className="category">
                    Idées Cadeaux Aniversare
                    </Typography>
                    <Divider />
                    <Typography
                    onClick={() =>
                  navigate(`/product/${encodeURIComponent("Idées Cadeaux Mariage")}`)
                }
                     style={{cursor: "pointer",marginTop:"3px",padding:"10px"}}className="category">
                    Idées Cadeaux Mariage
                    </Typography>
                  </AccordionDetails>
                  </Accordion>
    </div>
  )
}
