
import React from 'react'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer';
import ImageGallery from 'react-image-gallery'; 
import "react-image-gallery/styles/css/image-gallery.css";
import './CarDetails.css'
import CatalogueItem from '../../Components/Catalogue/CatalogueItem';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { original } from '@reduxjs/toolkit';

const CarDetails = () => {
	let inStock = true
	const car = useSelector(state => state.cars.car)
	// const images = [
	// 	{
	// 		original: `/assets/carDetail3.svg`,
	// 		thumbnail: `/assets/carDetail3.svg`
	// 	},
	// 	{
	// 		original: `/assets/carDetail2.svg`,
	// 		thumbnail: `/assets/carDetail2.svg`
	// 	},
		
	// 	{
	// 		original: `/assets/carDetail4.svg`,
	// 		thumbnail: `/assets/carDetail4.svg`
	// 	},
	// 	{
	// 		original: `/assets/carDetail5.svg`,
	// 		thumbnail: `/assets/carDetail5.svg`
	// 	},
	// ]
  return (
	<div className='carDetail'>
		<Header />

		<div className='car_wrapper'>
			<div className="car_detail_slider">
			<ImageGallery
						thumbnailPosition='left'
                        items = {car?.images?.map(it => ({original: it.image, thumbnail: it.image}))}
						showFullscreenButton={false}
						showPlayButton={false}
						showNav={false}
                        thumbnailWidth={200}
                        className={'imageGallary'}
						/>
		 </div>
		 <div className="car_detail_description">
			<div className="car_title">{car.model}</div>
			<div className="car_price"> от  {car.price}  cом</div>
			<div className="cars_details">
				<div className="cars_detail_item">
					<div className="cars_detail_subheader">В наличии: </div>
					<div className="cars_detail_value"> Под заказ</div>
				</div>
				<div className="cars_detail_item">
					<div className="cars_detail_subheader">Год выпуска: </div>
					<div className="cars_detail_value">{car.production_year}</div>
				</div>
				<div className="cars_detail_item">
					<div className="cars_detail_subheader">Тип двигателя: </div>
					<div className="cars_detail_value"> Трехфазный электродвигатель</div>
				</div>
				<div className="cars_detail_item">
					<div className="cars_detail_subheader">Мощность:</div>
					<div className="cars_detail_value">{car.power}</div>
				</div>
				<div className="cars_detail_item">
					<div className="cars_detail_subheader">Ускорение: (0-100  км/ч)</div>
					<div className="cars_detail_value">7,9 секунды</div>
				</div>
				<div className="cars_detail_item">
					<div className="cars_detail_subheader">Максимальная скорость:  </div>
					<div className="cars_detail_value">{car.top_speed}</div>
				</div>
				<div className="cars_detail_item">
					<div className="cars_detail_subheader">Привод:</div>
					<div className="cars_detail_value">Задний</div>
				</div>
				<div className="cars_detail_item">
					<div className="cars_detail_subheader">Запас хода (цикл WLTP):</div>
					<div className="cars_detail_value">447–521 км</div>
				</div>
			</div>
			<button className='secondary_btn'>{inStock ? 'Оформить заказ' : 'Заказать'}</button>
		</div>
		
		 </div>
		 <div className="car_description_text">
			<div className="description_header">Описание</div>
			<div className="description_text">Кабриолет Lexus IS в очень многом отличается от стандартного седана. Как отмечает производитель, главной целью создания 2-дверного варианта серии IS был синтез мощного внешнего вида спортивного купе и стильной изысканности кабриолета. В результате автомобиль получил практически все уникальные внешние панели кузова и многие прочие детали. Общими с седаном остались разве что капот, фары, дверные ручки и наружные зеркала. Благодаря многочисленным ребрам жесткости в конструкции кузова, усиленным порогам и раме ветрового стекла кабриолет IS эффективно поглощает энергию удара в случае столкновения и обеспечивает защиту пассажиров наравне с седаном. Модель дебютировала в 2008 году на Парижском автосалоне. В США поступила в продажу в 2009-м двух версиях: IS250C и IS350C, которые оборудованы такими же двигателями V6 (2,5 или 3,5 литра), что и у соответствующих версий седана.  </div>
		</div>

		<div className="car_table">
			<div className="table_column">
				<div className="table_row">
					<div className="table_th">Вес аккумулятора</div>
					<div className="table_td">50кг</div>
				</div>
					<div className="table_row">
					<div className="table_th">Разгон 0-100 км/ч:</div>
					<div className="table_td">7,9 с</div>
				</div>
					<div className="table_row">
					<div className="table_th">Максимальная скорость:</div>
					<div className="table_td">180 км/ч</div>
				</div>
					<div className="table_row">
					<div className="table_th">Ёмкость батареи, полная / полезная:</div>
					<div className="table_td">2 кВт⋅ч / 76,6 кВт⋅ч</div>
				</div>
					<div className="table_row">
					<div className="table_th">Тип аккумулятора:</div>
					<div className="table_td">литий-ионный</div>
				</div>
					<div className="table_row">
					<div className="table_th">Запас хода (цикл WLTP):</div>
					<div className="table_td">447–521 км</div>
				</div>
					<div className="table_row">
					<div className="table_th">КФС:</div>
					<div className="table_td"></div>
				</div>
			</div>
			<div className="table_column">
				<div className="table_row">
					<div className="table_th">Вес аккумулятора</div>
					<div className="table_td">50кг</div>
				</div>
					<div className="table_row">
					<div className="table_th">Разгон 0-100 км/ч:</div>
					<div className="table_td">7,9 с</div>
				</div>
					<div className="table_row">
					<div className="table_th">Максимальная скорость:</div>
					<div className="table_td">180 км/ч</div>
				</div>
					<div className="table_row">
					<div className="table_th">Ёмкость батареи, полная / полезная:</div>
					<div className="table_td">2 кВт⋅ч / 76,6 кВт⋅ч</div>
				</div>
					<div className="table_row">
					<div className="table_th">Тип аккумулятора:</div>
					<div className="table_td">литий-ионный</div>
				</div>
					<div className="table_row">
					<div className="table_th">Запас хода (цикл WLTP):</div>
					<div className="table_td">447–521 км</div>
				</div>
					<div className="table_row">
					<div className="table_th">КФС:</div>
					<div className="table_td"></div>
				</div>
			</div>
		</div>
		<div className="description_header" style={{textAlign: 'left', width: '80%', margin: '0 auto'}}>Похожие авто</div>
		<div className="similar_auto">
			<Link to='/car/1' style={{textDecoration: 'none'}}>
				<CatalogueItem/>
			</Link>
			<Link to='/car/2' style={{textDecoration: 'none'}}>
				<CatalogueItem/>
			</Link>
			<Link to='/car/3' style={{textDecoration: 'none'}}>
				<CatalogueItem/>
			</Link>
			<Link to='/car/4' style={{textDecoration: 'none'}}>
				<CatalogueItem/>
			</Link>
		
			
		
		</div>
		<Footer />
	</div>
  )
}

export default CarDetails