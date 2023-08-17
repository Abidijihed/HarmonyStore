import React from 'react'
import { useParams } from 'react-router-dom';

export default function ProductsFiltrer() {
  const { category  } = useParams();

  return (
    <div>ProductsFiltrer
      {console.log(category)}
    </div>
  )
}
