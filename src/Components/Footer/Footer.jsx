import { CarOutlined, FacebookOutlined, FileDoneOutlined, FormOutlined, HomeOutlined, InstagramOutlined, MailOutlined, PhoneOutlined, WhatsAppOutlined } from '@ant-design/icons'
import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
	<div className='footer'>
		<div className="footer_logo">
			<img src="/assets/logo.svg" alt="" className="logo_img" />
			<div className='social_networks'>
					<div><InstagramOutlined /></div>
					<div><FacebookOutlined /> </div>
					<div><WhatsAppOutlined /></div>
				</div>
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
			<div className="footer_item">
				{/* <div className='social_networks'>
					<div><InstagramOutlined /></div>
					<div><FacebookOutlined /> </div>
					<div><WhatsAppOutlined /></div>
				</div>
				 */}
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
  )
}

export default Footer