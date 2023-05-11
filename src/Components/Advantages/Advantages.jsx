import React from 'react'
import './Advantages.css'

const Advantages = () => {
  return (
	<div className='advantages'>
		<div className="h2">ПРЕИМУЩЕСТВА ЭЛЕКТРОМОБИЛЕЙ</div>
		<div className='content'>
				<div className="content_img">
					<img src='/assets/pros1.svg' className='img'/>
				</div>

				<div className="content_text">
					<div className='content_text_wrapper'>
						<div className='content_item'>
						<div className="h3">ДОСТУПНОСТЬ</div>
						<div className="divider2"></div>
					    <div className="content_description">Электромобили в Кыргызстане можно растаможить совершенно бесплатно. Платите только за стоимость авто, но не за его узаконивание.</div>
					</div>
					<div className='content_item'>
						<div className="h3">ЭКОЛОГИЯ И ТРЕНД</div>
						<div className="divider2"></div>
						<div className="content_description">
							Электромобили – это экологически чистый вид транспорта. Помогайте экологии родного города, не ущемляя себя в мобильности.
						</div>
					</div>
					</div>
				</div>

				<div className="content_text">
					<div className='content_text_wrapper'>
						<div className='content_item'>
							<div className="h3">ДЕШЕВЛЕ ОБЩЕСТВЕННОГО ТРАНСПОРТА</div>
							<div className="divider2"></div>
							<div className="content_description"> Ваш электромобиль – экономнее общественного транспорта. Стоимость пробега в 100 км составляет всего от 15 до 35 сомов.</div>
						</div>
						<div className='content_item'>
							<div className="h3">ЗАБУДЬТЕ ОБ АЗС</div>
							<div className="divider2"></div>
							<div className="content_description">
								Все что нужно – доступ к обычной розетке. Экономьте значительные суммы денег на топливе и не теряйте времени в очередях на заправках.
							</div>
						</div>
					</div>
				</div>

			    <div className="content_img">
					<img src='/assets/pros2.svg' className='img'/>
				</div>
		</div>
	</div>
  )
}

export default Advantages