import { useEffect, useState } from "react";
import { Navigations } from "../../features";
import { TextInform } from "../../widgets";
import i18n from "../../i18n/i18n";
import { useDispatch, useSelector } from "react-redux";
import { fetchDistricts } from "../../app/store/reducers/districts";

export const AboutDistrict = () => {
    const [active, setActive] = useState(null);
    const [currentText, setCurrentText] = useState('');
    const [currentTitle, setCurrentTitle] = useState('');
    const [link, setLink] = useState('');
    const [bgImg, setBgImg] = useState('');
    const [person, setPerson] = useState([]);
    const dispatch = useDispatch();

    const { district } = useSelector((state) => state.district);

    const fetchDistrict = () => {
        dispatch(fetchDistricts());
    };

    useEffect(() => {
        fetchDistrict();

        i18n.on('languageChanged', fetchDistrict);
        return () => {
            i18n.off('languageChanged', fetchDistrict);
        };
    }, [dispatch]);

    useEffect(() => {
        if (district.length > 0 && active === null) {
            const firstDistrict = district[0];
            setActive(firstDistrict.id);
            handleButtonClick(firstDistrict.id);
        }
    }, [district]);

    const handleButtonClick = (id) => {
        const selectedDistrict = district.find((item) => item.id === id);
        if (selectedDistrict) {
            setCurrentTitle(selectedDistrict.title); 
            setCurrentText(selectedDistrict.description);
            setPerson(selectedDistrict.person); 
            setLink(selectedDistrict.link); 
            setBgImg(selectedDistrict.img);
        }
    };

    useEffect(() => {
        if (active !== null) {
            handleButtonClick(active);
        }
    }, [active]);

    return (
        <div className="container row app-container">
            {district.length > 0 && (
                <>
                    <Navigations selected={active} setSelected={setActive} list={district} />

                    <div className="content">
                        <TextInform bgImg={bgImg} link={link} currentTitle={currentTitle} currentText={currentText} person={person} />
                    </div>
                </>
            )}
        </div>
    );
};
