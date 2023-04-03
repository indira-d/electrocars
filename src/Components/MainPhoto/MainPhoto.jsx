import React from 'react'
import './MainPhoto.css'
import { ArrowRightOutlined } from '@ant-design/icons'

const MainPhoto = () => {
  return (
	<div className='main_photo'>
		<img src='/assets/11.jpeg' alt='main' className='photo_img'/>
		<div className='wrapper'>
			<div className="slogan">ВЫБЕРИ СВОЙ 
			<div className='electrocar'>electrocar!</div></div>
		<button className='btn'> Оставить заявку
		  <ArrowRightOutlined style={{marginLeft: '8px'}}/>
		</button>
		</div>
		

        
	</div>
  )
}

export default MainPhoto