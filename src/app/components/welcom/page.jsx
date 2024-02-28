import React from 'react'
import s from './welcom.module.css'
import Button from '@/app/shared/ui/button/button'
const Welcom = () => {
  return (
    <div className={s.main}>
      <div className={s.fon}></div>
      <div className={s.block}>
        <div className={s.block_title}>
        <div style={{marginBottom: "36px"}}><span className={s.span}>МАГАЗИН СТРОИТЕЛЬНЫХ МАТЕРИАЛОВ С ДОСТАВКОЙ</span></div>
        <div className={s.block_text}>Добро пожаловать на наш сайт. Мы занимаемся продажей и 
          доставкой строительных материалов уже на протяжении 10 лет. </div>
          <Button padding="13px 90px"  width="350px">Перейти в каталог</Button>
      </div>
      </div>
      </div>
  )
}

export default Welcom