import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Accordion, AccordionDetails, AccordionSummary, Checkbox, Divider, FormControlLabel, FormGroup, Typography } from "@material-ui/core";
import { Pagination } from "@mui/material";
import HomeCard from "../card/HomeCard";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useNavigate } from "react-router-dom";

export default function ProductsFiltrer({ products }) {
  const navigate=useNavigate()
  const { category } = useParams();
  const [selectedProducts, setSelectedProducts] = useState("");
  const [expanded, setExpanded] = useState(false);

  const handleCheckboxChange = (event) => {
    const value = event.target.value;
    if (event.target.checked) {
     setSelectedProducts(value)
  }else{
    setSelectedProducts('')

  }
  }
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <div style={{ margin: "10% 5% 5% 5%" }}>
      <Row>
        <Col
          sm={4}
          style={{
            background: "#708090",
            boxShadow: "2px 4px 4px",
            padding: "15px 30px",
          }}
        >
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  value="Boucles d'oreilles"
                  onChange={handleCheckboxChange}
                />
              }
              label="Boucles d'oreilles"
            />
            <FormControlLabel
              control={
                <Checkbox value="Bagues" onChange={handleCheckboxChange} />
              }
              label="Bagues"
            />
            <FormControlLabel
              control={
                <Checkbox value="Montres" onChange={handleCheckboxChange} />
              }
              label="Montres"
            />
            {selectedProducts==="Montres"?<><Accordion
                  expanded={expanded === "panel1"}
                  onChange={handleChange("panel1")}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                  >
                    <Typography sx={{ width: "33%", flexShrink: 0 }} className="categorytitle">
                    Montres Homme
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails style={{display:'block'}}>
                    <Typography
                      style={{cursor: "pointer",marginBottom:"3px",padding:"10px"}} className="category">
                    Acier
                    </Typography>
                    <Divider />
                    <Typography style={{cursor: "pointer",marginTop:"3px",padding:"10px"}}className="category">
                   Cuir
                    </Typography>
                    <Typography style={{cursor: "pointer",marginTop:"3px",padding:"10px"}}className="category">
                   Plastique
                    </Typography>
                    <Typography style={{cursor: "pointer",marginTop:"3px",padding:"10px"}}className="category">
                   Céramique
                    </Typography>
                    <Typography style={{cursor: "pointer",marginTop:"3px",padding:"10px"}}className="category">
                   Gomme
                    </Typography>
                    <Typography style={{cursor: "pointer",marginTop:"3px",padding:"10px"}}className="category">
                   Tissu
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
                    Montres Femme
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails style={{display:'block'}}>
                    <Typography
                      style={{cursor: "pointer",marginBottom:"3px",padding:"10px"}} className="category">
                    Acier
                    </Typography>
                    <Divider />
                    <Typography style={{cursor: "pointer",marginTop:"3px",padding:"10px"}}className="category">
                   Cuir
                    </Typography>
                    <Typography style={{cursor: "pointer",marginTop:"3px",padding:"10px"}}className="category">
                   Plastique
                    </Typography>
                    <Typography style={{cursor: "pointer",marginTop:"3px",padding:"10px"}}className="category">
                   Céramique
                    </Typography>
                    <Typography style={{cursor: "pointer",marginTop:"3px",padding:"10px"}}className="category">
                   Gomme
                    </Typography>
                    <Typography style={{cursor: "pointer",marginTop:"3px",padding:"10px"}}className="category">
                   Tissu
                    </Typography>
                  </AccordionDetails>
                </Accordion></>:null}
            <FormControlLabel
              control={
                <Checkbox value="Colliers" onChange={handleCheckboxChange} />
              }
              label="Colliers"
            />
            <FormControlLabel
              control={
                <Checkbox value="Braclets" onChange={handleCheckboxChange} />
              }
              label="Braclets"
            />
            <FormControlLabel
              control={
                <Checkbox
                  value="Article enfant"
                  onChange={handleCheckboxChange}
                />
              }
              label="Article enfant"
            />
            <FormControlLabel
              control={
                <Checkbox value="Parures" onChange={handleCheckboxChange} />
              }
              label="Parures"
            />
          </FormGroup>
        </Col>
        <Col sm={8} id="productinfoo">
          {console.log(category.toUpperCase().slice(0, category.indexOf(" ")),selectedProducts)}
          {products.filter((el)=>
          el.category.toUpperCase() === category.toUpperCase() ||
         el.category.toUpperCase() === category.toUpperCase().slice(0, category.indexOf(" ")) ||
          selectedProducts.toUpperCase()===el.category.toUpperCase()).map((el) => (
            <React.Fragment key={el.id}>
              <HomeCard product={el} />
            </React.Fragment>
          ))}
        </Col>
        <Pagination count={10} color="secondary" style={{marginTop:"10px",display:'flex',justifyContent:'center'}}/>
      </Row>
    </div>
  );
}
