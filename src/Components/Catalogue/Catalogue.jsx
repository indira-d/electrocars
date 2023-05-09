import React from 'react'
import CatalogueItem from './CatalogueItem'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getCarDetails } from '../../redux/CarSlice'

const Catalogue = () => {
  const cars = useSelector(state => state.cars.cars)
  const dispatch = useDispatch()

  return (
    <div className='catalogue'>
      {
        cars.map(car => (
          <Link to={`/car/${car.id}`} 
                key={car.id} 
                style={{textDecoration: 'none'}}
                onClick={() => dispatch(getCarDetails(car.id))}
                >
            <CatalogueItem car={car}/>
          </Link>
          ))
      }
    </div>
  )
}

export default Catalogue