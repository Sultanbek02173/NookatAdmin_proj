import { SliderComponent } from '../../../features'
import ru from '../../../shared/images/adminPage/ru.png'
import ru2 from '../../../shared/images/adminPage/ru2.png'
import ru3 from '../../../shared/images/adminPage/ru3.png'
import '../slide.scss';


export function Liders() {

  const ruimage=[
    {image: ru, name: 'Эргешов Асилбек Камилович', status:'Мэр Ноукатского района'},
    {image: ru2, name: 'Эргешов Асилбек Камилович', status:'Мэр Ноукатского района'},
    {image: ru3, name: 'Эргешов Асилбек Камилович', status:'Мэр Ноукатского района'},
    {image: ru2, name: 'Эргешов Асилбек Камилович', status:'Мэр Ноукатского района'},
  ]
  return (
    <section>
      {

      }
        {ruimage.map((item, index) => (
          <div className="grid-ru" key={index}>
            <div className="img-ru">
              <img src={item.image}  />
            </div>

            <div className="ru-names">
              <h2 id='name-ru'>{item.name}</h2>
              <p id='status-ru'><i>{item.status}</i></p>
            </div>

          </div>
        ))}
      {/* <SliderComponent /> */}
    </section>
  )
}
