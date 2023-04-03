import { ArrowRightOutlined } from '@ant-design/icons'
import React from 'react'
import './Catalogue.css'

const CatalogueItem = () => {
  return (
	<div className='catalogue_item'>
		<img src='/assets/BMW.svg' alt='' className='item_img'/>
		<div className="item_name">BMW iX3</div>
		<div>
			<div className='item_detail'>
				<div>Цена в Бишкеке:</div>
				<div className='black'>53 000$</div>
			</div>
			<div className='item_detail'>
				<div>Запас хода:</div>
				<div className='black'>500 км</div>
			</div>
			<div className='item_detail'>
				<div>Год:</div>
				<div className='black'>2022</div>
			</div>
		</div>
		<button className='primary_btn'>Подробнее <ArrowRightOutlined style={{marginLeft: '8px'}}/></button>

	</div>
  )
}

export default CatalogueItem