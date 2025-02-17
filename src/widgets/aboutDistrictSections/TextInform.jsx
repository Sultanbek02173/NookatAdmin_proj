import './textInform.scss';
import bg from '../../shared/images/aboutDistrict/bg.png'
import { BaseComponents } from '../../features';
import { useState } from 'react';
 
export const TextInform = ({ currentTitle, currentText, person }) => {
    const [index, setIndex] = useState();
    
    const changeIndex = (id) => {
        if(id === index){
            setIndex()
        }else{
            setIndex(id)
        } 
    }

    console.log(index);
    
    
    return (
        <section className="text-con">
            <div className="info">
                <div className="info-image">
                    <img src={bg} alt="" />
                    <p className="image-text">{currentTitle}</p>
                </div>
                <p>{currentText}</p>
                { 
                    currentTitle === 'Карта района' && (
                    <div>
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48714.91947496597!2d72.5770557539607!3d40.26058764505759!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bc35b99dc9f579%3A0x4590139fc0c83acb!2z0J3QvtC-0LrQsNGC!5e0!3m2!1sru!2skg!4v1738148413251!5m2!1sru!2skg" 
                            width="100%" 
                            height="300" 
                            
                            style={{ borderRadius: 20, border: 'none' }} 
                            allowFullScreen 
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>
                    )
                }  
                {
                    person &&
                    person.map((item) => (
                        <div key={item.id} className="base-components__parent">
                            <BaseComponents item={item} index={index} changeIndex={changeIndex} />
                        </div>
                    ))
                }
            </div>

        </section>
    );
}
