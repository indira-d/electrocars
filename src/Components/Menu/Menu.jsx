import React from 'react'
import { Button, Dropdown } from 'antd';
import './Menu.css'
import { CaretDownOutlined } from '@ant-design/icons';

const Menu = () => {

	const items = [
  {
    key: '1',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
        Седан
      </a>
    ),
  },
  {
    key: '2',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
        Внедорожник
      </a>
    ),
  },
  {
    key: '3',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
        Универсал
      </a>
    ),
  },
];


  return (
	<div className='menu'>
		<Dropdown 
		 className='dropdown'
		menu={{ items }} placement="bottom" arrow={{ pointAtCenter: true }} >
      <Button>Тип кузова <CaretDownOutlined style={{margin: '0 10px'}} /></Button>
    </Dropdown>
    <Dropdown className='dropdown' menu={{ items }} placement="bottom" arrow={{ pointAtCenter: true }}>
      <Button>Бренд <CaretDownOutlined style={{margin: '0 10px'}}/></Button>
    </Dropdown>
    <Dropdown className='dropdown' menu={{ items }} placement="bottom" arrow={{ pointAtCenter: true }}>
      <Button>Привод <CaretDownOutlined style={{margin: '0 10px'}}/></Button>
    </Dropdown>
    <br />
    <Dropdown className='dropdown' menu={{ items }} placement="bottom" arrow={{ pointAtCenter: true }}>
      <Button>Год от <CaretDownOutlined style={{margin: '0 10px'}}/></Button>
    </Dropdown>
    <Dropdown className='dropdown' menu={{ items }} placement="bottom" arrow={{ pointAtCenter: true }}>
      <Button>Год до <CaretDownOutlined style={{margin: '0 10px'}}/></Button>
    </Dropdown>
	<button className='button'> Найти электромобиль</button>
	</div>
  )
}

export default Menu