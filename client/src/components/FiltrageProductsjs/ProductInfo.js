import React from 'react'
import { useParams } from 'react-router-dom';

export default function ProductInfo() {
  const { id  } = useParams();

  return (
    <div>
        hello
        {console.log(id)}
    </div>
  )
}
