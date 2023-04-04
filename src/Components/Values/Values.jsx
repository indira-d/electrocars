import React from 'react'
import './Values.css'

const Values = () => {
  return (
	<div className='values'>
		<div className="values_item">
			<div className='values_img_block'>
				<div className="opacity"></div>
				<img src='/assets/dark1.jpeg' alt='' className='values_img'/>
			</div>
			<div className='values_text'>
				<div className="h3">ЭКСПЕРТНОСТЬ И ОПЫТ</div>
				<div className="divider2" style={{marginBottom: '20px'}}></div>
				
				Мы даём гарантию защиты Ваших интересов на всех этапах выбора и покупки электротранспорта.
				Мы делаем покупку электромобиля прозрачной и надежной на всех этапах.
				Мы создаем заново понимание того, каким должен быть клиентский сервис в сфере продажи электромобилей.
				Именно этот подход делает нас номером один среди конкурентов по продажам электромобилей.
							</div>
		</div>
		
		

		<div className="values_item">
			<div className='values_text'>
				<div className="h3">КЛЮЧЕВЫЕ ЦЕННОСТИ</div>
				<div className="divider2" style={{marginBottom: '20px'}}></div>
				
				Мы даём гарантию защиты Ваших интересов на всех этапах выбора и покупки электротранспорта.
				Мы делаем покупку электромобиля прозрачной и надежной на всех этапах.
				Мы создаем заново понимание того, каким должен быть клиентский сервис в сфере продажи электромобилей.
				Именно этот подход делает нас номером один среди конкурентов по продажам электромобилей.</div>
			<div className='values_img_block'>
				<div className="opacity2"></div>
				<img src='/assets/salon2.jpeg' alt='' className='values_img'/>
			</div>
			
			
		</div>
		
		

	</div>
  )
}

export default Values