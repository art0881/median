import React from 'react';
import Image from 'next/image';
import s from './cart.module.css';

const Cart = ({ imageUrl, title, description, children }) => {
  return (
    <div className={s.margin}>
      <div className={s.block}>
        <div className={s.center}>
            <Image className={s.img} src={imageUrl} alt="Example" width={200} height={200} />
            <p className={s.title}>{title}</p>
            <p className={s.text}>{description}</p>
            {children}
        </div>
      </div>
    </div>
  );
};

export default Cart;
