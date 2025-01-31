import React, { useState } from 'react';
import '../slide.scss';

export const Vacancies = () => {
  const vacElement = [
    {
      heading: 'Специалист по документообороту',
      microText: 'Ведение и обработка официальной документации, организация архивов, взаимодействие с другими отделами.',
      details: 'Дополнительная информация: знание документооборота, владение 1С, работа с архивами.'
    },
    {
      heading: 'Главный бухгалтер',
      microText: 'Ведение бухгалтерского учета, составление финансовых отчетов, контроль бюджета.',
      details: 'Требования: опыт работы от 5 лет, знание налогового законодательства, работа с отчетностью.'
    },
    {
      heading: 'Юрист-консультант',
      microText: 'Правовая поддержка администрации, подготовка и проверка договоров, консультации по законодательным вопросам.',
      details: 'Требования: опыт работы от 5 лет, знание налогового законодательства, работа с отчетностью.'

    }  ];

  const [openEventId, setOpenEventId] = useState(null);

  const toggle = (id) => {
    setOpenEventId((prevId) => (prevId === id ? null : id));
  };

  const handleButtonClick = (e, id) => {
    e.stopPropagation();
    toggle(id);
  };

  return (
    <div>
      <div className="vac-container">
        <div className="vac-text">
          <h1>Доступные вакансии</h1>
        </div>
        {vacElement.map((item, index) => (
          <div className="gridCards" key={index}>
            <div className="card-left">
              <h2>{item.heading}</h2>
              <p><i>{item.microText}</i></p>
            </div>
            
            {openEventId === index && (
              <div className="details-content">
                <p>{item.details}</p>
              </div>
            )}
            <div className="link">
              <button onClick={(e) => handleButtonClick(e, index)} className="events_button">
                <p>{openEventId === index ? "Закрыть" : "Подробнее"}</p>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};