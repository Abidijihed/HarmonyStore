import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Accordion, AccordionDetails, AccordionSummary, Checkbox, Divider, FormControlLabel, FormGroup, Typography } from "@material-ui/core";
import { Pagination } from "@mui/material";
import HomeCard from "../card/HomeCard";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function ProductsFiltrer({ products }) {
  const { category } = useParams();
  const [selectedProducts, setSelectedProducts] = useState("");
  const [expanded, setExpanded] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 5; // Number of products to display per page

  const handleCheckboxChange = (event) => {
    const value = event.target.value;
    if (event.target.checked) {
      setSelectedProducts(value);
    } else {
      setSelectedProducts("");
    }
  };

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  // Calculate the index range for the current page
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
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
                  value="Bijoux"
                  onChange={handleCheckboxChange}
                />
              }
              label="Bijoux"
            />
           {selectedProducts==="Bijoux"?<><Accordion
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
                      style={{cursor: "pointer",marginBottom:"3px",padding:"10px"}} className="category">
                    Chaine
                    </Typography>
                    <Divider />
                    <Typography style={{cursor: "pointer",marginTop:"3px",padding:"10px"}}className="category">
                   Bague
                    </Typography>
                    <Typography style={{cursor: "pointer",marginTop:"3px",padding:"10px"}}className="category">
                   Gourmette
                    </Typography>
                    <Typography style={{cursor: "pointer",marginTop:"3px",padding:"10px"}}className="category">
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
                      style={{cursor: "pointer",marginBottom:"3px",padding:"10px"}} className="category">
                    Série
                    </Typography>
                    <Divider />
                    <Typography style={{cursor: "pointer",marginTop:"3px",padding:"10px"}}className="category">
                   Bague
                    </Typography>
                    <Typography style={{cursor: "pointer",marginTop:"3px",padding:"10px"}}className="category">
                   Solitaire
                    </Typography>
                    <Typography style={{cursor: "pointer",marginTop:"3px",padding:"10px"}}className="category">
                   Alliance
                    </Typography>
                    <Typography style={{cursor: "pointer",marginTop:"3px",padding:"10px"}}className="category">
                   Pendentif
                    </Typography>
                    <Typography style={{cursor: "pointer",marginTop:"3px",padding:"10px"}}className="category">
                   Bracelet
                    </Typography>
                    <Typography style={{cursor: "pointer",marginTop:"3px",padding:"10px"}}className="category">
                   Gourmette
                    </Typography>
                    <Typography style={{cursor: "pointer",marginTop:"3px",padding:"10px"}}className="category">
                   Chaine
                    </Typography>
                    <Typography style={{cursor: "pointer",marginTop:"3px",padding:"10px"}}className="category">
                   Boucles D'Oreilles
                    </Typography>
                    <Typography style={{cursor: "pointer",marginTop:"3px",padding:"10px"}}className="category">
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
                      style={{cursor: "pointer",marginBottom:"3px",padding:"10px"}} className="category">
                    Série
                    </Typography>
                    <Divider />
                    <Typography style={{cursor: "pointer",marginTop:"3px",padding:"10px"}}className="category">
                   Bague
                    </Typography>
                    <Typography style={{cursor: "pointer",marginTop:"3px",padding:"10px"}}className="category">
                   Pendentif
                    </Typography>
                    <Typography style={{cursor: "pointer",marginTop:"3px",padding:"10px"}}className="category">
                   Bracelet
                    </Typography>
                    <Typography style={{cursor: "pointer",marginTop:"3px",padding:"10px"}}className="category">
                   Gourmette
                    </Typography>
                    <Typography style={{cursor: "pointer",marginTop:"3px",padding:"10px"}}className="category">
                   Chaine
                    </Typography>
                    <Typography style={{cursor: "pointer",marginTop:"3px",padding:"10px"}}className="category">
                   Boucle
                    </Typography>
                    <Typography style={{cursor: "pointer",marginTop:"3px",padding:"10px"}}className="category">
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
                      style={{cursor: "pointer",marginBottom:"3px",padding:"10px"}} className="category">
                    Bague
                    </Typography>
                    <Divider />
                    <Typography style={{cursor: "pointer",marginTop:"3px",padding:"10px"}}className="category">
                   Bracelet
                    </Typography>
                    <Typography style={{cursor: "pointer",marginTop:"3px",padding:"10px"}}className="category">
                   Gourmette
                    </Typography>
                    <Typography style={{cursor: "pointer",marginTop:"3px",padding:"10px"}}className="category">
                   Pendentif
                    </Typography>
                    <Typography style={{cursor: "pointer",marginTop:"3px",padding:"10px"}}className="category">
                   Boucle
                    </Typography>
                  </AccordionDetails>
                  </Accordion>
                </>:null}
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
                    Montres Enfant
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails style={{display:'block'}}>
                    <Typography style={{cursor: "pointer",marginTop:"3px",padding:"10px"}}className="category">
                   Plastique
                    </Typography>
                    <Typography style={{cursor: "pointer",marginTop:"3px",padding:"10px"}}className="category">
                   Gomme
                    </Typography>
                    <Typography style={{cursor: "pointer",marginTop:"3px",padding:"10px"}}className="category">
                   Tissu
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                </>:null}
          
            <FormControlLabel
              control={
                <Checkbox value="Parures" onChange={handleCheckboxChange} />
              }
              label="Parures"
            />
             <FormControlLabel
              control={
                <Checkbox value="Idées Cadeaux" onChange={handleCheckboxChange} />
              }
              label="Idées Cadeaux"
            />
             {selectedProducts==="Idées Cadeaux"?<><Accordion
                  expanded={expanded === "panel3"}
                  onChange={handleChange("panel3")}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3bh-content"
                    id="panel3bh-header"
                  >
                    <Typography sx={{ width: "33%", flexShrink: 0 }} className="categorytitle">
                    Idées Cadeaux
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails style={{display:'block'}}>
                    <Typography
                      style={{cursor: "pointer",marginBottom:"3px",padding:"10px"}} className="category">
                    Idées Cadeaux Aniversare
                    </Typography>
                    <Divider />
                    <Typography style={{cursor: "pointer",marginTop:"3px",padding:"10px"}}className="category">
                    Idées Cadeaux Mariage
                    </Typography>
                  </AccordionDetails>
                  </Accordion></>:null}
          </FormGroup>
        </Col>
        <Col sm={8} id="productinfoo">
          {currentProducts
            .filter(
              (el) =>
                el.product_name.toUpperCase() === category.toUpperCase() ||
                el.category.toUpperCase() === category.toUpperCase() ||
                el.category.toUpperCase() ===
                  category.toUpperCase().slice(0, category.indexOf(" ")) ||
                selectedProducts.toUpperCase() === el.category.toUpperCase()
            )
            .map((el) => (
              <React.Fragment key={el.id}>
                <HomeCard product={el} />
              </React.Fragment>
            ))}
          <Pagination
            count={Math.ceil(products.length / productsPerPage)}
            color="secondary"
            style={{
              marginTop: "10px",
              display: "flex",
              justifyContent: "center",
            }}
            onChange={(event, page) => paginate(page)}
          />
        </Col>
      </Row>
    </div>
  );
}