import React from 'react'
import './Performance.css'

const Performance = () => {
  return (
	<div className='performance'>
		<div className='p_img_block'>
			<img src='/assets/tesla.svg' alt='' className='p_img'/>
		</div>
		<div className="performance_text">
           <div className="p_header">TESLA MODEL 3</div>
		   <div className="p_secondary_header">Specs Performance</div>
		   <div className='text_block'>
			<div className="p_description">
				<div className='bold'>Емкость аккумулятора: </div>
				<div>342 квт/ч</div>
				<div className="divider"></div>
			</div>
			<div className="p_description">
				<div className='bold'>Масса: </div>
				<div>2 тонны</div>
				<div className="divider"></div>
			</div>
			<div className="p_description">
				<div className='bold'>Разгон до 100 км/ч: </div>
				<div>3.3 сек</div>
				<div className="divider"></div>
			</div>
			<div className="p_description">
				<div className='bold'>Мощность: </div>
				<div>353 кВт</div>
				<div className="divider"></div>
			</div>
			<div className="p_description">
				<div className='bold'> Запас хода:</div>
				<div>510 км</div>
				<div className="divider"></div>
			</div>
			<div className="p_description">
				<div className='bold'>Габариты кузова: </div>
				<div>4694 x 1933 x 1443 </div>
				<div className="divider"></div>
			</div>
			<div className="p_description">
				<div className='bold'>Привод: </div>
				<div>Полный</div>
				<div className="divider"></div>
			</div>
			<div className="p_description">
				<div className='bold'>Клиренс: </div>
				<div>144 мм</div>
				<div className="divider"></div>
			</div>
			<div className="p_description">
				<div className='bold'>Вместимость: </div>
				<div>5 человек</div>
			</div>
			<div className="p_description">
				<div className='bold'>Время заряда от 20 до 80%: </div>
				<div>от домашней сети ≈ 15 ч., 
                     от станции ≈ 45 мин.</div>
			</div>
		   </div>
		  
		</div>
	</div>
  )
}

export default Performance