import React from 'react'
import './Testimonials.css'
import { StarFilled} from '@ant-design/icons'

const Testimonials = () => {
  return (
	<div className='testimonials'>
    <h2>ОТЗЫВЫ НАШИХ КЛИЕНТОВ</h2>
    <div className="testimonials_content">
      <div className="testimonial">
        <div className="testimonial_img">
          <img src='/assets/test1.svg' alt='' className='t_img'/>
        </div>
        <div className="testimonial_stars">
          <StarFilled style={{color:'orange'}}/>
          <StarFilled style={{color:'orange'}}/>
          <StarFilled style={{color:'orange'}}/>
          <StarFilled style={{color:'orange'}}/>
          <StarFilled style={{color:'orange'}}/>
        </div>
        <div className="testimonial_text">Замечательные консультанты! Знают свое дело! Ответил на все наши вопросы по электромобилям, их эксплуатации.</div>
      </div>

       <div className="testimonial">
        <div className="testimonial_img">
          <img src='/assets/test2.svg' alt='' className='t_img'/>
        </div>
        <div className="testimonial_stars">
          <StarFilled style={{color:'orange'}}/>
          <StarFilled style={{color:'orange'}}/>
          <StarFilled style={{color:'orange'}}/>
          <StarFilled style={{color:'orange'}}/>
        </div>
        <div className="testimonial_text">Отличные автомобили. Тесла отдыхает по цене и оснащению. Приятно что в нашем городе открылся такой автосалон.</div>
      </div>

       <div className="testimonial">
        <div className="testimonial_img">
            <img src='/assets/test3.svg' alt='' className='t_img'/>
        </div>
        <div className="testimonial_stars">
          <StarFilled style={{color:'orange'}}/>
          <StarFilled style={{color:'orange'}}/>
          <StarFilled style={{color:'orange'}}/>
          <StarFilled style={{color:'orange'}}/>
          <StarFilled style={{color:'orange'}}/>
        </div>
        <div className="testimonial_text">Заказали через них авто, доставили в срок, машина в идеальном состоянии. Я довольна. Спасибо.</div>
      </div>

      <div className="testimonial">
        <div className="testimonial_img">
          <img src='/assets/test1.svg' alt='' className='t_img'/>
        </div>
        <div className="testimonial_stars">
          <StarFilled style={{color:'orange'}}/>
          <StarFilled style={{color:'orange'}}/>
          <StarFilled style={{color:'orange'}}/>
          <StarFilled style={{color:'orange'}}/>
          <StarFilled style={{color:'orange'}}/>
        </div>
        <div className="testimonial_text">Замечательные консультанты! Знают свое дело! Ответил на все наши вопросы по электромобилям, их эксплуатации.</div>
      </div>

    </div>
  </div>
  )
}

export default Testimonials