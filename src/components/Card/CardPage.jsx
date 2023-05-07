import React, { useEffect, useState } from 'react'

import styles from '../Card/Card.module.scss'


const Card = ({ onFavorite, onPlus, title, imageUrl, price}) => {

  const [isAdded, setIsAdded] = useState(false)


  const hendleClick = () => {
    onPlus({title, imageUrl, price});
    setIsAdded(!isAdded)
  }
  
  useEffect(() => {
 
  }, [isAdded])


  return (
    <div>
      <div className={styles.card}>
        <div className={styles.favorite}>
          <img src="/img/heart-unliked.svg" alt="Unliked" />
        </div>
        <img width={133} height={112} src={imageUrl} alt="" />
        <h5>{title}</h5>
        <div className="d-flex justify-between align-center" >
          <div className="d-flex flex-column ">
            <span>Цена:</span>
            <b>{price}.руб</b>
          </div>
          <img className={styles.plus} onClick={hendleClick} src={isAdded ? '/img/btn-plus.svg' : '/img/plus1.svg'} alt="Plus" />
        </div>
      </div>
    </div>
  )
}

export default Card