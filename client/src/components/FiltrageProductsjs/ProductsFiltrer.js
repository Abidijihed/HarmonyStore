import React from 'react'
import { useParams } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Checkbox, FormControlLabel, FormGroup } from '@material-ui/core';
import { Pagination } from '@mui/material';
export default function ProductsFiltrer() {
  const { category  } = useParams();

  return (
    <div style={{margin: "10% 5% 5% 5%"}}>
      <Row>
    <Col sm={4} style={{background:"#708090",boxShadow: "2px 4px 4px",padding:"15px 30px"}}>
    <FormGroup>
  <FormControlLabel control={<Checkbox  />} label="Earrings" />
  <FormControlLabel control={<Checkbox  />} label="Rings" />
  <FormControlLabel control={<Checkbox  />} label="Tiaras" />
  <FormControlLabel control={<Checkbox  />} label="Watchs" />
  <FormControlLabel control={<Checkbox  />} label="Necklaces" />
  <FormControlLabel control={<Checkbox  />} label="Braclets" />
  <FormControlLabel control={<Checkbox  />} label="Label" />
  <FormControlLabel control={<Checkbox  />} label="Label" />
  <FormControlLabel control={<Checkbox  />} label="Label" />
</FormGroup>
    </Col>
    <Col sm={8}>
    <Pagination count={10} color="secondary" />
    </Col>
  </Row>
    </div>
  )
}
