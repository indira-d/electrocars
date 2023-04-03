import React from 'react'
import './Brands.css'

const Brands = () => {
  return (
	<div>
		<div className="h2">ПОПУЛЯРНЫЕ БРЕНДЫ</div>
		<div className="brand_box">
			<div className="brand_item">
				<img src="/assets/kia.svg" alt="" className="brand_logo" />
				<div className="brand_name">KIA</div>
			</div>
			<div className="brand_item">
				<img src="/assets/itesla.svg" alt="" className="brand_logo" />
				<div className="brand_name">TESLA</div>
			</div>
			<div className="brand_item">
				<img src="/assets/mers.svg" alt="" className="brand_logo" />
				<div className="brand_name">MERCEDES BENZ</div>
			</div>
			<div className="brand_item">
				<img src="/assets/audi.svg" alt="" className="brand_logo" />
				<div className="brand_name">AUDI</div>
			</div>
			<div className="brand_item">
				<img src="/assets/nissan.svg" alt="" className="brand_logo" />
				<div className="brand_name">NISSAN</div>
			</div>
			<div className="brand_item">
				<img src="/assets/byd.svg" alt="" className="brand_logo" />
				<div className="brand_name">BYD</div>
			</div>
			<div className="brand_item">
				<img src="/assets/bmwi.svg" alt="" className="brand_logo" />
				<div className="brand_name">BMW</div>
			</div>
			<div className="brand_item">
				<img src="/assets/honda.svg" alt="" className="brand_logo" />
				<div className="brand_name">HONDA</div>
			</div>
			<div className="brand_item">
				<img src="/assets/volks.svg" alt="" className="brand_logo" />
				<div className="brand_name">VOLKSWAGEN</div>
			</div>
			<div className="brand_item">
				<img src="/assets/xpeng.svg" alt="" className="brand_logo" />
				<div className="brand_name">XPENG</div>
			</div>
		</div>
	</div>
  )
}

export default Brands