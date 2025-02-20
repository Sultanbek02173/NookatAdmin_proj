import { useEffect, useState } from "react";
import { Navigations } from "../../features";
import { Liders, Schedule, Structure, Vacancies } from "../../widgets";
import './adminestration.scss'
import { useParams } from "react-router-dom";
import axiosApi from "../../shared/api/AxiosApi";
import i18n from "../../i18n/i18n";


export const AdministrationPage = () => {
    const [managers, setManagers] = useState([]);
    const [vacancies, setVacancies] = useState([]);
    const [schedule, setSchedule] = useState([]);
    const [structure, setStructure] = useState([]);

    const { id } = useParams();
    const [selected, setSelected] = useState(1);

    const navElements = [
        { title: 'Руководители', id: 1 },
        { title: 'Структура администрации', id: 2 },
        { title: 'Вакансии', id: 3 },
        { title: 'График приема граждан', id:4 },
    ];

    useEffect(() => {
        setSelected(id);
    }, [id])

    const fetchData = (url, setData) => {
        axiosApi.get(url)
            .then(({ data }) => {
                setData(data)
            })
            .catch((err) => {
                console.log(err);
            })
    }

    useEffect(() => {
        const urls = [
            {
                url: '/api/v1/managers/managers/', setData: setManagers
            },
            {
                url: '/api/v1/passport/vacancies/', setData: setVacancies
            },
            {
                url: '/api/v1/managers/schedule/', setData: setSchedule
            },
            {
                url: '/api/v1/managers/structure_admins/', setData: setStructure
            }
        ];

        urls.map(({ url, setData }) => {
            fetchData(url, setData);
            i18n.on('languageChanged', () => {
                fetchData(url, setData)
            });
        });

        return () => {
            urls.map(({ url }) => {
                i18n.off('languageChanged', () => {
                    fetchData(url, setData)
                });
            });
        };
    }, [i18n]);


    return (
        <div className="container app-container">
            <Navigations selected={selected} setSelected={setSelected} list={navElements} />
            <div className="content">
                {
                    selected == 1
                        ? <Liders managers={managers} />
                        : selected == 2
                            ? <Structure structure={structure} />
                            : selected == 3
                                ? <Vacancies vacancies={vacancies} />
                                : selected == 4
                                    ? <Schedule schedule={schedule} />
                                    : ''
                }

            </div>
        </div>
    );
}

