import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Checkbox, FormControlLabel, FormGroup } from '@material-ui/core';
import { Pagination } from '@mui/material';
import HomeCard from '../card/HomeCard';

export default function ProductsFiltrer({ products }) {
  const { category } = useParams();
  const [nameproduct, setNameproduct] = useState('');

  const handleCheckboxChange = (event) => {
    if (event.target.checked) {
      setNameproduct(event.target.value);
    } else {
      setNameproduct('');
    }
  };

  return (
    <div style={{ margin: '10% 5% 5% 5%' }}>
      <Row>
        <Col sm={4} style={{ background: '#708090', boxShadow: '2px 4px 4px', padding: '15px 30px' }}>
          <FormGroup>
            <FormControlLabel control={<Checkbox value="Boucles d'oreilles" onChange={handleCheckboxChange} />} label="Boucles d'oreilles" />
            <FormControlLabel control={<Checkbox value="Bagues" onChange={handleCheckboxChange} />} label="Bagues" />
            <FormControlLabel control={<Checkbox value="Cournnes royales" onChange={handleCheckboxChange} />} label="Cournnes royales" />
            <FormControlLabel control={<Checkbox value="Montres" onChange={handleCheckboxChange} />} label="Montres" />
            <FormControlLabel control={<Checkbox value="Colliers" onChange={handleCheckboxChange} />} label="Colliers" />
            <FormControlLabel control={<Checkbox value="Braclets" onChange={handleCheckboxChange} />} label="Braclets" />
            <FormControlLabel control={<Checkbox value="Article enfant" onChange={handleCheckboxChange} />} label="Article enfant" />
            <FormControlLabel control={<Checkbox value="Label" onChange={handleCheckboxChange} />} label="Label" />
          </FormGroup>
        </Col>
        <Col sm={8} id="productinfoo">
          {products
            .filter((el) => el.category.toUpperCase() === category.toUpperCase() || el.category.toUpperCase() === category.toUpperCase().slice(0, category.indexOf(' ')))
            .map((el) => (
              <React.Fragment key={el.id}>
                <HomeCard product={el} />
              </React.Fragment>
            ))}
          <Pagination count={10} color="secondary" />
        </Col>
      </Row>
    </div>
  );
}
