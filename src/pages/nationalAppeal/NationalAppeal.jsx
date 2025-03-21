import { useState } from "react";

export const NationalAppeal = () => {
    const [selected, setSelected] = useState(1);
    const people = [
        {
          id: 1,
          textInImage: 'Oбщая информация о районе',
          textInInfoBlock:
            'Ноокатский район — это один из крупнейших и значимых регионов Кыргызстана, расположенный на юге страны. Его географическое положение обеспечивает уникальный климат, способствующий развитию сельского хозяйства.Район занимает площадь 3 000 км², а его население насчитывает более 200 000 человек. Здесь находятся живописные природные ландшафты, плодородные земли и множество исторических памятников.Ноокатский район гордится своими традициями и является местом, где современность гармонично сочетается с богатым культурным наследием',
        },
        {
          id: 2,
          textInImage: 'Паспорт района',
          textInInfoBlock:
            '"Ноокатский район характеризуется следующими показателями: Площадь: 3 000 км² Население: 200 000 человек Административное деление: Включает 15 айылных аймаков Экономика: Основными направлениями являются сельское хозяйство, животноводство и поддержка малого бизнеса.Район играет важную роль в экономике региона, благодаря своей стратегической инфраструктуре и плодородным землям."',
        },
        {
          id: 3,
          textInImage: 'Алйные Аймаки',
          textInInfoBlock:
            '"В Ноокатском районе расположено 15 айылных аймаков, каждый из которых уникален. Некоторые из них включают: Айылный аймак Араван: Этот аймак славится своими садами и высокими урожаями фруктов. Здесь процветает плодородное земледелие и фермерство. Айылный аймак Тенгизбай: Центр животноводства и традиционных ремесел. Местные жители сохраняют национальные традиции и активно развивают текстильное производство. Айылный аймак Кызыл-Туу: Богат не только своими природными красотами, но и историческими памятниками, рассказывающими о древних культурах региона. Каждый айылный аймак вносит свой вклад в развитие района, сохраняя уникальные традиции и особенности."',
        },
        {
          id: 4,
          textInImage: 'Выдающийся личности района',
          textInInfoBlock: 'Здесь будет информация о выдающихся личностях района.',
          
        },
        {
          id: 5,
          textInImage: 'История района',
          textInInfoBlock:
            '"Ноокатский район был основан в 1930 году. За время своего существования он стал одним из центров сельского хозяйства, культуры и образования на юге Кыргызстана.Историческое наследие района включает древние памятники, свидетельствующие о богатом прошлом этих земель. Благодаря стратегическому расположению, район играл важную роль в торговле и культурном обмене между народами.Сегодня история Ноокатского района является основой для его дальнейшего развития и процветания."',
        },
        {
          id: 6,
          textInImage: 'Карта района',
        },
    ];
    
    return (
        <div>
            
        </div>
    );
}
