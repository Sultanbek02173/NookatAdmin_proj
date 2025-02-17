import { useEffect, useState } from "react";
import { Navigations } from "../../features";
import { TextInform } from "../../widgets";
import axios from 'axios';

export const AboutDistrict = () => {
    const [selected, setSelected] = useState(1);
    const [currentText, setCurrentText] = useState('');
    const [currentTitle, setCurrentTitle] = useState();

    const people = [
        {
            id: 1,
            name: 'Общая информация о районе',
            apiLink: 'https://adminsite.webtm.ru/ru/api/v1/passport/generalInformation/'
        },
        {
            id: 2,
            name: 'Паспорт района',
            apiLink: 'https://adminsite.webtm.ru/ru/api/v1/passport/passport/'
        },
        {
            id: 3,
            name: 'Выдающиеся личности района',
            apiLink: 'https://adminsite.webtm.ru/ru/api/v1/3'
        },
        {
            id: 4,
            name: 'История района',
            apiLink: 'https://adminsite.webtm.ru/ru/api/v1/passport/History/'
        },
        {
            id: 5,
            name: 'Карта района',
            apiLink: 'https://adminsite.webtm.ru/ru/api/v1/passport/map/'
        },
    ];

    useEffect(() => {
      console.log(selected)
      const selectedPerson = people.find(person => person.id === selected);
      if (selectedPerson) {
          axios.get(selectedPerson.apiLink)
              .then((response) => {
                  setCurrentTitle(selectedPerson.name);
                  setCurrentText(response.data.description || '');
                  console.log(response.data)
              })
              .catch((error) => {
                  console.error(error);
              });
      }
  }, [selected]);  

    const handleItemClick = (id) => {
        setSelected(id); 

       
    };

    return (
        <div className="container row app-container">
            
            <Navigations selected={selected} setSelected={setSelected} list={people} 
                onClick={() => handleItemClick(person.id)}
                style={{ cursor: "pointer", margin: "10px 0" }}
            />

            <div className="content">
                <TextInform currentTitle={currentTitle} currentText={currentText} />
                <p>{currentText}</p>
            </div>
        </div>
    );
};
                           
