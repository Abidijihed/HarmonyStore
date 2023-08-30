import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { get_one_product } from '../../redux/action/ProductAction';

export default function ProductInfo() {
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(get_one_product(id));
  }, [dispatch, id]);

  const oneproduct = useSelector((state) => state.UserReducer.oneproduct);

  // State to track the currently selected thumbnail
  const [selectedThumbnail, setSelectedThumbnail] = useState(0);

  // Function to handle thumbnail click
  const handleThumbnailClick = (index) => {
    setSelectedThumbnail(index);
  };
  const images = [
    'https://i.pinimg.com/236x/b0/2a/26/b02a26627db3d8c26c53d4823d1b0b59.jpg',
    'https://i.pinimg.com/564x/14/27/01/142701ebdf4690c97a301efedf606213.jpg',
    'https://i.pinimg.com/564x/42/d8/9f/42d89f4064254bea9cb2498df4bc7126.jpg',
  ];

  return (
    <div>
      {oneproduct && (
        <div style={{ textAlign: 'center' }}>
          <h1>{oneproduct.product_name}</h1>
          <p>{oneproduct.description}</p>
          <img
            src={oneproduct.image_url}
            alt={oneproduct.product_name}
            style={{
              width: '300px', // Adjust the width as needed
              height: '300px', // Adjust the height as needed
              transition: 'transform 0.2s', // Add smooth transition on hover
            }}
            onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.2)')}
            onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          />
          <div>
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${oneproduct.product_name} Thumbnail ${index}`}
                onClick={() => handleThumbnailClick(index)}
                style={{
                  width: '80px', // Adjust the width of thumbnails
                  height: '80px', // Adjust the height of thumbnails
                  border: selectedThumbnail === index ? '2px solid blue' : 'none',
                  margin: '5px',
                  cursor: 'pointer',
                }}
              />
            ))}
          </div>
          <button>Continue Shopping</button>
          <button>Add to Cart</button>
        </div>
      )}
    </div>
  );
}
