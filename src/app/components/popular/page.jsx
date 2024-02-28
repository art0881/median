import React from 'react'
import s from './popular.module.css'
import Title from '@/app/shared/ui/title/title'
import Cart from '@/app/shared/ui/cart/cart'
import Button from '@/app/shared/ui/button/button'

const Popular = () => {
  // Массив с данными для каждой карточки
  const cardsData = [
    {
      imageUrl: '/card1.png',
      title: 'ГЛИНА',
      description: 'Материалы, применяемые в строительстве для постройки, ремонта и реконструкций сооружений',
      price: '490 руб.',
    },
    {
      imageUrl: '/card2.jpg',
      title: 'ПЕСОК',
      description: 'Материалы, применяемые в строительстве для постройки, ремонта и реконструкций сооружений',
      price: '540 руб.',
    },
    {
      imageUrl: '/card3.jpg',
      title: 'ГРАВИЙ',
      description: 'Материалы, применяемые в строительстве для постройки, ремонта и реконструкций сооружений',
      price: '590 руб.',
    },
  ];

  return (
    <div className={s.main}>
      <div className={s.block}>
        <Title title="Популярные товары" text="В каталоге нашего магазина 
        представлено большое количество строительных материалов" />
        <div className={s.card_block}>
        {cardsData.map((card, index) => (
            <Cart
              key={index}
              imageUrl={card.imageUrl}
              title={card.title}
              description={card.description}
            >
              <div style={{margin:'0 auto'}}>
              <p className={s.price}>{card.price}</p>
              <Button padding="10px 60px">Купить</Button>
              </div>
            </Cart>
          ))}
        </div>
      </div>
      </div>
  )
}

export default Popular