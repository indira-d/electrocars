import React from 'react'
import './WhyWe.css'
import { LikeOutlined, SketchOutlined } from '@ant-design/icons'

const WhyWe = () => {
  return (
	<div>
		<div className="h2">ПОЧЕМУ ИМЕННО МЫ?</div>
		<div className='val'>
				<div className="val_item">
					<div className="val_subheader"><SketchOutlined  style={{marginLeft: '15px', fontSize: '18px'}}/> &nbsp; КЛЮЧЕВЫЕ ЦЕННОСТИ</div>
					<div className="val_text">
						Мы даём гарантию защиты Ваших интересов на всех этапах выбора и покупки электротранспорта. <br/>
						Мы делаем покупку электромобиля прозрачной и надежной на всех этапах. <br/>
						Мы создаем заново понимание того, каким должен быть клиентский сервис в сфере продажи электромобилей.
						Именно этот подход делает нас номером один среди конкурентов по продажам электромобилей.</div>
				</div>
				
				<div className="val_item">
					<div className="val_img_block"></div>
					<img src='/assets/frontcar.svg' className="val_img"></img>
				</div>

				<div className="val_item">
					<div className="val_img_block"></div>
					<img src='/assets/backcar.svg' className="val_img"></img>
				</div>
				<div className="val_item">
					<div className="val_subheader"><LikeOutlined  style={{marginLeft: '15px', fontSize: '18px'}}/> &nbsp;ЭКСПЕРНОСТЬ И ОПЫТ</div>
					<div className="val_text">
GSR Electrocar- это энергетический узел, который связывает всех нас.
Наша цель — сделать электротранспорт доступным для каждого. <br/>
Электромобиль - это стиль и образ жизни. Это новая философия современного общества.
Мы предлагаем вам самый большой выбор электромобилей и лучшие условия для покупки и доставки. Мы готовы делиться с Вами нашим опытом и экспертностью.
</div>
				</div>
			</div>
			
	</div>
  )
}

export default WhyWe