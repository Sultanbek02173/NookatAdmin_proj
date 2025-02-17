import { useEffect, useState } from "react";
import { Navigations } from "../../features";
import { Liders, Schedule, Structure, Vacancies } from "../../widgets";
import './adminestration.scss'
import { useParams } from "react-router-dom";

export const AdministrationPage = () => {
    const { id } = useParams();
    const [selected, setSelected] = useState(1)
    const navElements = [
        { name: 'Руководители',id: 1 },
        { name: 'Структура администрации',id: 2 },
        { name: 'Вакансии',id: 3 },
        { name: 'График приема граждан',id: 4},
    ];

    useEffect(() => {
        setSelected(id);
    }, [id])

    return (
        <div className="container app-container">
            <Navigations selected={selected} setSelected={setSelected} list={navElements} />
            <div className="content">
                {
                selected == 1 
                ? <Liders /> 
                : selected == 2
                ? <Structure />
                : selected == 3 
                ? <Vacancies />
                : selected == 4 
                ? <Schedule />
                : ''
                }

            </div>
        </div>
    );
}

