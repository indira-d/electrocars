import React, {useState} from 'react'
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import './Header.css'

const Header = () => {
	const [open, setOpen] = useState(false);

	const handleMenuClick = (e) => {
		if (e.key === '3') {
		setOpen(false);
		}
	};

	const handleOpenChange = (flag) => {
		setOpen(flag);
	};

		const items = [
			{
				label: 'В наличии',
				key: '1',
			},
			{
				label: 'На заказ',
				key: '2',
			},
		]; 

  return (
	<div className='header'>
		<div className="header_logo">
			<img src='/assets/logo.svg' alt='logo' className='logo'/>
		</div>
		<div className="header_menu">
			<div className="menu_item">
				<Dropdown
					menu={{
						items,
						onClick: handleMenuClick,
					}}
					onOpenChange={handleOpenChange}
					open={open}
					>
					<a onClick={(e) => e.preventDefault()}>
						<Space>
							ЭЛЕКТРОМОБИЛИ
							<DownOutlined />
						</Space>
					</a>
				</Dropdown>
			</div>
			<div className="menu_item">КАТАЛОГ</div>
			<div className="menu_item">О НАС</div>
			<div className="menu_item">КОНТАКТЫ</div>
		</div>
	</div>
  )
}

export default Header
