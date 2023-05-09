import { CarOutlined, FacebookOutlined, FileDoneOutlined, FormOutlined, HomeOutlined, InstagramOutlined, MailOutlined, PhoneOutlined, WhatsAppOutlined } from '@ant-design/icons'
import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
	<div className='footer'>
		<div className="footer_logo">
			<img src="/assets/logo.svg" alt="" className="logo_img" />
		</div>
		<div className='footer_content'>
	        <div className="map">
				<iframe className='iframe_map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2924.018267794073!2d74.59011817600742!3d42.87245857114991!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389ec82748aed9cd%3A0xcdfa333a8172780f!2zMTQ2INGD0LsuINCi0L7QutGC0L7Qs9GD0LvQsCwg0JHQuNGI0LrQtdC6!5e0!3m2!1sru!2skg!4v1683196988399!5m2!1sru!2skg" width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" />
				</div>
				
			<div className="footer_block">
				<div className="h3" style={{textAlign: 'left', marginLeft: '10px'}}>Контакты</div>
				<div className="divider" style={{marginLeft: '10px', width: '60px'}}></div>
				<div className="footer_item">
					<div className="footer_item_text">
						<PhoneOutlined style={{marginRight: '8px', color: 'rgb(215, 93, 27)'}}/>
						Телефон:
					</div>
					<div className="footer_item_detail">+996 509 055 056</div>
				</div>
				<div className="footer_item">
					<div className="footer_item_text"><HomeOutlined style={{marginRight: '10px', color: 'rgb(215, 93, 27)'}}/> Адрес: </div>
					<div className="footer_item_detail">Кыргызстан, г.Бишкек, ул. Токтогула, 146</div>

				</div>
				<div className="footer_item">
					<div className="footer_item_text"> <MailOutlined style={{marginRight: '10px', fontSize: '14px', color: 'rgb(215, 93, 27)'}}/> Email:</div>
					<div className="footer_item_detail">gsr.electrocar@gmail.com</div>
				</div>
			</div>

			<div className="footer_links">
				<div className="h3" style={{textAlign: 'left', marginLeft: '10px'}}>Полезные ссылки</div>
				<div className="divider" style={{ marginLeft: '10px'}}></div>
				<div className="footer_link">
					<div className="footer_link_item">
						<CarOutlined style={{marginRight:'10px', color: 'rgb(215, 93, 27)'}}/> О нас
					</div>
					<div className="footer_link_item">
						<FileDoneOutlined style={{marginRight:'10px', color: 'rgb(215, 93, 27)'}}/> Каталог
					</div>
					<div className="footer_link_item">
						<FormOutlined style={{marginRight:'10px', color: 'rgb(215, 93, 27)'}}/> Оставить заявку
					</div>
				</div>
			</div>
				
		</div>
		<div className='social_networks'>
						<div><InstagramOutlined /></div>
						<div><FacebookOutlined /> </div>
						<div><WhatsAppOutlined /></div>
					</div>
	</div>
  )
}

export default Footer