import React from 'react'
import s from './header.module.css'
import Image from 'next/image';


const Header = () => {
  return (
    <div className={s.main}>
        <div className={s.block}>
            <div><Image src="/logo.png"alt="Example" width={200} height={45} /></div>
            <div className={s.link}>
                <ul className={s.ul}>
                    <li className={s.li}><a className={s.a}  href='#'>ПОЧЕМУ МЫ</a></li>
                    <li className={s.li}><a className={s.a}  href='#'>КАТАЛОГ</a></li>
                    <li className={s.li}><a className={s.a}  href='#'>ОТЗЫВЫ</a></li>
                    <li className={s.li}><a className={s.a}  href='#'>КОНТАКТЫ</a></li>
                <a className={s.tel}>+7 800 333 22 33</a>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Header