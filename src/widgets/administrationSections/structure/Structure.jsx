import Str from '../../../shared/images/adminPage/str.png';
import '../slide.scss';


export function Structure() {
  return (
    <div>
       <div className="str-con">
          <div className="title-text" ><h1>структура администрации</h1></div>
            <div className="image-con">
              <img src={Str} className='str-image' />
            </div>     
       </div>
    </div>
  )
}
