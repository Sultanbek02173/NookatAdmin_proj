import { useEffect, useState } from 'react';
import { Navigations } from '../../features';
import './aiylAimaksPage.scss';
import { AiylAimaksInfo } from '../../widgets';
import slidItem from '../../shared/images/adminPage/imageSlide.png';

export const AiylAimaksPage = () => {
    const [active, setActive] = useState(1);
    const [currentText, setCurrentText] = useState('');
    const [currentTitle, setCurrentTitle] = useState('Oбщая информация о районе');
    const [destrictImgs, setDestrictImgs] = useState();
    
    const destricts = [
        {
            id: 1,
            name: 'Кок-Бельский аильный округ',
            textInInfoBlock: 'Айылный аймак Тенгизбай — это живописный уголок Ноокатского района, известный своими природными богатствами, культурными традициями и активным развитием сельского хозяйства. Площадь: около 350 км² Население: более 12 000 человек Основные отрасли: земледелие, животноводство, ремесленное производство Айылный аймак включает несколько сел, каждое из которых уникально своим вкладом в экономику и культуру района.',
            imgs: [
                {image: slidItem},
                {image: slidItem},
                {image: slidItem},
                {image: slidItem},
            ]
            
        },
        {
            id: 2,
            name: 'Н.Исанов аильный округ',
            textInInfoBlock: 'Айылный аймак Тенгизбай — это живописный уголок Ноокатского района, известный своими природными богатствами, культурными традициями и активным развитием сельского хозяйства. Площадь: около 350 км² Население: более 12 000 человек Основные отрасли: земледелие, животноводство, ремесленное производство Айылный аймак включает несколько сел, каждое из которых уникально своим вкладом в экономику и культуру района.',
            imgs: [
                {image: slidItem},
                {image: slidItem},
                {image: slidItem},
                {image: slidItem},
            ]
        },
        {
            id: 3,
            name: 'Кенешский аильный округ',
            textInInfoBlock: 'Айылный аймак Тенгизбай — это живописный уголок Ноокатского района, известный своими природными богатствами, культурными традициями и активным развитием сельского хозяйства. Площадь: около 350 км² Население: более 12 000 человек Основные отрасли: земледелие, животноводство, ремесленное производство Айылный аймак включает несколько сел, каждое из которых уникально своим вкладом в экономику и культуру района.',
            imgs: [
                {image: slidItem},
                {image: slidItem},
                {image: slidItem},
                {image: slidItem},
            ]
        },
        {
            id: 4,
            name: 'Кыргыз-Атинский аильный округ',
            textInInfoBlock: 'Айылный аймак Тенгизбай — это живописный уголок Ноокатского района, известный своими природными богатствами, культурными традициями и активным развитием сельского хозяйства. Площадь: около 350 км² Население: более 12 000 человек Основные отрасли: земледелие, животноводство, ремесленное производство Айылный аймак включает несколько сел, каждое из которых уникально своим вкладом в экономику и культуру района.',
            imgs: [
                {image: slidItem},
                {image: slidItem},
                {image: slidItem},
                {image: slidItem},
            ]
        },
        {
            id: 5,
            name: 'Т.Зулпуев айылный округ',
            textInInfoBlock: 'Айылный аймак Тенгизбай — это живописный уголок Ноокатского района, известный своими природными богатствами, культурными традициями и активным развитием сельского хозяйства. Площадь: около 350 км² Население: более 12 000 человек Основные отрасли: земледелие, животноводство, ремесленное производство Айылный аймак включает несколько сел, каждое из которых уникально своим вкладом в экономику и культуру района.',
            imgs: [
                {image: slidItem},
                {image: slidItem},
                {image: slidItem},
                {image: slidItem},
            ]
        },
        {
            id: 6,
            name: 'Кара-Ташский аильный округ',
            textInInfoBlock: 'Айылный аймак Тенгизбай — это живописный уголок Ноокатского района, известный своими природными богатствами, культурными традициями и активным развитием сельского хозяйства. Площадь: около 350 км² Население: более 12 000 человек Основные отрасли: земледелие, животноводство, ремесленное производство Айылный аймак включает несколько сел, каждое из которых уникально своим вкладом в экономику и культуру района.',
            imgs: [
                {image: slidItem},
                {image: slidItem},
                {image: slidItem},
                {image: slidItem},
            ]
        },
        {
            id: 7,
            name: 'А.Мирмахмудов  аильный округ',
            textInInfoBlock: 'Айылный аймак Тенгизбай — это живописный уголок Ноокатского района, известный своими природными богатствами, культурными традициями и активным развитием сельского хозяйства. Площадь: около 350 км² Население: более 12 000 человек Основные отрасли: земледелие, животноводство, ремесленное производство Айылный аймак включает несколько сел, каждое из которых уникально своим вкладом в экономику и культуру района.',
            imgs: [
                {image: slidItem},
                {image: slidItem},
                {image: slidItem},
                {image: slidItem},
            ]
        },
        {
            id: 8,
            name: 'Джаны-Ноокатский аильный округ',
            textInInfoBlock: 'Айылный аймак Тенгизбай — это живописный уголок Ноокатского района, известный своими природными богатствами, культурными традициями и активным развитием сельского хозяйства. Площадь: около 350 км² Население: более 12 000 человек Основные отрасли: земледелие, животноводство, ремесленное производство Айылный аймак включает несколько сел, каждое из которых уникально своим вкладом в экономику и культуру района.',
            imgs: [
                {image: slidItem},
                {image: slidItem},
                {image: slidItem},
                {image: slidItem},
            ]
        },
        {
            id: 9,
            name: 'Бельский аильный округ',
            textInInfoBlock: 'Айылный аймак Тенгизбай — это живописный уголок Ноокатского района, известный своими природными богатствами, культурными традициями и активным развитием сельского хозяйства. Площадь: около 350 км² Население: более 12 000 человек Основные отрасли: земледелие, животноводство, ремесленное производство Айылный аймак включает несколько сел, каждое из которых уникально своим вкладом в экономику и культуру района.',
            imgs: [
                {image: slidItem},
                {image: slidItem},
                {image: slidItem},
                {image: slidItem},
            ]
        },
        {
            id: 10,
            name: 'Кок-Жарский аильный округ',
            textInInfoBlock: 'Айылный аймак Тенгизбай — это живописный уголок Ноокатского района, известный своими природными богатствами, культурными традициями и активным развитием сельского хозяйства. Площадь: около 350 км² Население: более 12 000 человек Основные отрасли: земледелие, животноводство, ремесленное производство Айылный аймак включает несколько сел, каждое из которых уникально своим вкладом в экономику и культуру района.',
            imgs: [
                {image: slidItem},
                {image: slidItem},
                {image: slidItem},
                {image: slidItem},
            ]
        },
        {
            id: 11,
            name: 'Он Эки-Бельский аильный округ',
            textInInfoBlock: 'Айылный аймак Тенгизбай — это живописный уголок Ноокатского района, известный своими природными богатствами, культурными традициями и активным развитием сельского хозяйства. Площадь: около 350 км² Население: более 12 000 человек Основные отрасли: земледелие, животноводство, ремесленное производство Айылный аймак включает несколько сел, каждое из которых уникально своим вкладом в экономику и культуру района.',
            imgs: [
                {image: slidItem},
                {image: slidItem},
                {image: slidItem},
                {image: slidItem},
            ]
        },
        {
            id: 12,
            name: 'Найман  аильный округ',
            textInInfoBlock: 'Айылный аймак Тенгизбай — это живописный уголок Ноокатского района, известный своими природными богатствами, культурными традициями и активным развитием сельского хозяйства. Площадь: около 350 км² Население: более 12 000 человек Основные отрасли: земледелие, животноводство, ремесленное производство Айылный аймак включает несколько сел, каждое из которых уникально своим вкладом в экономику и культуру района.',
            imgs: [
                {image: slidItem},
                {image: slidItem},
                {image: slidItem},
                {image: slidItem},
            ]
        },
        {
            id: 13,
            name: 'Т.Кулатов аильный округ',
            textInInfoBlock: 'Айылный аймак Тенгизбай — это живописный уголок Ноокатского района, известный своими природными богатствами, культурными традициями и активным развитием сельского хозяйства. Площадь: около 350 км² Население: более 12 000 человек Основные отрасли: земледелие, животноводство, ремесленное производство Айылный аймак включает несколько сел, каждое из которых уникально своим вкладом в экономику и культуру района.',
            imgs: [
                {image: slidItem},
                {image: slidItem},
                {image: slidItem},
                {image: slidItem},
            ]
        },
        {
            id: 14,
            name: 'Тоолос аильный округ',
            textInInfoBlock: 'Айылный аймак Тенгизбай — это живописный уголок Ноокатского района, известный своими природными богатствами, культурными традициями и активным развитием сельского хозяйства. Площадь: около 350 км² Население: более 12 000 человек Основные отрасли: земледелие, животноводство, ремесленное производство Айылный аймак включает несколько сел, каждое из которых уникально своим вкладом в экономику и культуру района.',
            imgs: [
                {image: slidItem},
                {image: slidItem},
                {image: slidItem},
                {image: slidItem},
            ]
        },
        {
            id: 15,
            name: 'Ынтымак аильный округ',
            textInInfoBlock: 'Айылный аймак Тенгизбай — это живописный уголок Ноокатского района, известный своими природными богатствами, культурными традициями и активным развитием сельского хозяйства. Площадь: около 350 км² Население: более 12 000 человек Основные отрасли: земледелие, животноводство, ремесленное производство Айылный аймак включает несколько сел, каждое из которых уникально своим вкладом в экономику и культуру района.',
            imgs: [
                {image: slidItem},
                {image: slidItem},
                {image: slidItem},
                {image: slidItem},
            ]
        },
    ]

    const handleButtonClick = (id) => {
        const select = destricts.find((item) => item.id === id);
        
        if (select) {
            setCurrentTitle(select.name);
            setCurrentText(select.textInInfoBlock);
            setDestrictImgs(select.imgs);
        }
    };

    useEffect(() => {
        handleButtonClick(active);        
    }, [active]);

    return (
        <div className='container row aiyl-container'>
            <Navigations selected={active} setSelected={setActive} list={destricts} />
            <div className='content'>
                <AiylAimaksInfo title={currentText} text={currentTitle} images={destrictImgs} />
            </div>
        </div>
    );
}

