
import React from 'react'
import './Indicators.css'
import CountUp from 'react-countup';



  
  const Indicators = () => {
	return (
	  <div className='indicators'>
			<div className="h2">О НАС В ЦИФРАХ</div>
			<div className="subheader">Мы обеспечиваем безопасную доставку авто в максимально сжатые сроки “под ключ”</div>
			<div className="numbers">
				<div className='numbers_item'>
					<div className="number">
						<CountUp
							start={0}
							end={30}
							duration={5.75}				
							></CountUp>
						</div>
					<div className="text">дней - средний срок доставки</div>
				</div>
				<div className='numbers_item'>
					<div className="number">
						<CountUp
							start={0}
							end={400}
							duration={5.75}		
							className='number'		
							></CountUp>
					</div>
					<div className="text">Брендов электромобилей</div>
				</div>
				<div className='numbers_item'>
					<div className="number">
						<CountUp
							start={0}
							end={3465}
							duration={5.75}
							separator=" "	
							className='number'			
						>3465</CountUp>
					</div>
					<div className="text">Актуальных предложений</div>
				</div>
				<div className='numbers_item'>
					<div className="number">
						<CountUp
							start={0}
							end={4563}
							duration={5.75}
							separator=" "	
							className='number'			
						></CountUp>
					</div>
					<div className="text">Комплектации на портале</div>
				</div>		
			</div>
			<div className="chart">
				<img src='/assets/chart.svg' alt='' className='chart_img'/>
			</div>
	  </div>
	)
  }
  
  export default Indicators


