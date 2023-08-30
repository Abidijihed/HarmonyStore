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

  return (
    <div>
      {oneproduct && (
        <div>
          <h1>{oneproduct.name}</h1>
          <p>{oneproduct.description}</p>
          <img
            src={oneproduct.images[selectedThumbnail]}
            alt={oneproduct.name}
            onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.2)')}
            onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          />
          <div>
            {oneproduct.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${oneproduct.name} Thumbnail ${index}`}
                onClick={() => handleThumbnailClick(index)}
                style={{
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
