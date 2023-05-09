import React from 'react'
import HeaderWithSearch from '../../Components/Header/HeaderWithSearch'
import Catalogue from '../../Components/Catalogue/Catalogue'
import Footer from '../../Components/Footer/Footer'
import Menu from '../../Components/Menu/Menu'

const CataloguePage = () => {
  return (
	<div>
	
		<HeaderWithSearch />
		<Menu />
		<h3 style={{textAlign: 'left', width: '80%', margin: '40px auto', paddingLeft: '40px'}}>РЕЗУЛЬТАТЫ ПОИСКА</h3>
		<Catalogue />
		<Footer />
	</div>
  )
}

export default CataloguePage