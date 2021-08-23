import Image from 'next/image';
import { useState } from 'react';
import { StarIcon } from '@heroicons/react/solid';

const Product = ({ id, title, price, description, category, image }) => {
  const [rating] = useState(2);
  return (
    <div>
      <p>{category}</p>

      <Image src={image} height={200} width={200} objectFit='contain' />
      <h4>{title}</h4>
    </div>
  );
};

export default Product;