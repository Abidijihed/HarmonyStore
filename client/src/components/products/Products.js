import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin:"25px"
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
});

const JewelryCard = ({product}) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image="/path/to/jewelry-image.jpg"
        title="Bijoux Femme"
      />
      <CardContent>
        <Typography variant="h5" component="div">
          Bijoux Femme
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Add a description or details about the jewelry here.
        </Typography>
        <Typography variant="h6" component="div" sx={{ mt: 2 }}>
          Price: $99.99
        </Typography>
        <Button variant="contained" sx={{ mt: 2 }}>
          Add to Cart
        </Button>
      </CardContent>
    </Card>
  );
};

export default JewelryCard;
