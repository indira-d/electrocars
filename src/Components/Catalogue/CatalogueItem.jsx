import { ArrowRightOutlined } from '@ant-design/icons'
import React from 'react'
import './Catalogue.css'

const CatalogueItem = ({car}) => {
  return (
	<div className='catalogue_item'>
		<div className='image_container'>
			<img src={car?.images[0]?.image} alt='' className='item_img'/>
		</div>
		<div className="item_name">{car?.model}</div>
		<div>
			<div className='item_detail'>
				<div>Цена в Бишкеке:</div>
				<div className='black'>{car?.price}$</div>
			</div>
			<div className='item_detail'>
				<div>Запас хода:</div>
				<div className='black'>{car?.battery_capacity}км</div>
			</div>
			<div className='item_detail'>
				<div>Год:</div>
				<div className='black'>{car?.production_year}</div>
			</div>
		</div>
		<button className='primary_btn'>Подробнее <ArrowRightOutlined style={{marginLeft: '8px'}}/></button>

	</div>
  )
}

export default CatalogueItem