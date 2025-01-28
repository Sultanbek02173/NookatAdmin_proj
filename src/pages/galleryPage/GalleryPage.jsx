import { useState } from "react";
import "./Gallery.scss";
import newFotoOne from "../../shared/images/newFotoOne.png";
import newFotoTwo from "../../shared/images/newFotoTwo.png";
import newFotoThree from "../../shared/images/newFotoThree.png";
import threeD from "../../shared/images/threeD.png";
import archivedOne from "../../shared/images/archivedOne.png";
import archivedTwo from "../../shared/images/archivedTwo.png";
import archivedThree from "../../shared/images/archivedThree.png";
import archivedFour from "../../shared/images/archivedFour.png";
import archivedFive from "../../shared/images/archivedFive.png";
import archivedSix from "../../shared/images/archivedSix.png";
import btn3d from "../../shared/images/btn3d.svg"
import { BaseComponents, TourCard } from "../../features";
import { TourModal } from "../../entities";
// import { useTranslation } from "react-i18next";

const newFoto = [
    { img: newFotoOne },
    { img: newFotoTwo },
    { img: newFotoThree },
    { img: newFotoTwo },
    { img: newFotoThree },
    { img: newFotoOne },
];
const threeDd = [
    {
        img: threeD,
        name: "Кара-Кой ",
        mapUrl: "https://www.google.com/maps/embed?pb=!4v1737569549476!6m8!1m7!1sCAoSLEFGMVFpcE1EOWE3Sktzb2haRTNUT3MwNWkzT2tOWHdWa2wwQ1liTVJ1UG9P!2m2!1d40.44229808485902!2d72.80227582119277!3f343.2831737063165!4f3.076413581579601!5f0.7820865974627469",
    },
    {
        img: threeD,
        name: "Кара-Кой ",
        mapUrl: "https://www.google.com/maps/embed?pb=!4v1737576699639!6m8!1m7!1sCAoSLEFGMVFpcE1sb3A3MHp3OHVNak9PY3duRS1PRFRMc0RheHZTNEdEMDZnYUw1!2m2!1d40.21560613273215!2d72.52980868869783!3f138.221612158031!4f10.538033710649898!5f0.7820865974627469",
    },
    {
        img: archivedTwo,
        name: "Кызыл-Туу",
        mapUrl: "https://www.google.com/maps/embed?pb=!4v1737576783597!6m8!1m7!1sCAoSLEFGMVFpcFBiOHJHX09Td2dKbjh1eDdFNWRyaFltV0V3SHlBVlo0R3FCTW5O!2m2!1d40.05013048335451!2d72.6513416941521!3f25.186073673269856!4f-4.059059455096445!5f0.7820865974627469",
    },
    {
        img: threeD,
        name: "Он-Эки-Бел",
        mapUrl: "https://www.google.com/maps/embed?pb=!4v1737576898945!6m8!1m7!1sCAoSLEFGMVFpcFB2RDZjVVhCbzVvU3E2QWdwSnNvVjdfWUNjRzN1N1Y5d1ExT01Q!2m2!1d40.09252169824526!2d72.34839629148958!3f87.32349507858045!4f8.356824413136124!5f0.7820865974627469",
    },
    {
        img: threeD,
        name: "Кара-Кой ",
        mapUrl: "https://www.google.com/maps/embed?pb=!4v1737569549476!6m8!1m7!1sCAoSLEFGMVFpcE1EOWE3Sktzb2haRTNUT3MwNWkzT2tOWHdWa2wwQ1liTVJ1UG9P!2m2!1d40.44229808485902!2d72.80227582119277!3f343.2831737063165!4f3.076413581579601!5f0.7820865974627469",
    },
    {
        img: threeD,
        name: "Кара-Кой ",
        mapUrl: "https://www.google.com/maps/embed?pb=!4v1737576699639!6m8!1m7!1sCAoSLEFGMVFpcE1sb3A3MHp3OHVNak9PY3duRS1PRFRMc0RheHZTNEdEMDZnYUw1!2m2!1d40.21560613273215!2d72.52980868869783!3f138.221612158031!4f10.538033710649898!5f0.7820865974627469",
    },
    {
        img: threeD,
        name: "Кызыл-Туу",
        mapUrl: "https://www.google.com/maps/embed?pb=!4v1737576783597!6m8!1m7!1sCAoSLEFGMVFpcFBiOHJHX09Td2dKbjh1eDdFNWRyaFltV0V3SHlBVlo0R3FCTW5O!2m2!1d40.05013048335451!2d72.6513416941521!3f25.186073673269856!4f-4.059059455096445!5f0.7820865974627469",
    },
    {
        img: threeD,
        name: "Он-Эки-Бел",
        mapUrl: "https://www.google.com/maps/embed?pb=!4v1737576898945!6m8!1m7!1sCAoSLEFGMVFpcFB2RDZjVVhCbzVvU3E2QWdwSnNvVjdfWUNjRzN1N1Y5d1ExT01Q!2m2!1d40.09252169824526!2d72.34839629148958!3f87.32349507858045!4f8.356824413136124!5f0.7820865974627469",
    },
    {
        img: threeD,
        name: "Кара-Кой ",
        mapUrl: "https://www.google.com/maps/embed?pb=!4v1737569549476!6m8!1m7!1sCAoSLEFGMVFpcE1EOWE3Sktzb2haRTNUT3MwNWkzT2tOWHdWa2wwQ1liTVJ1UG9P!2m2!1d40.44229808485902!2d72.80227582119277!3f343.2831737063165!4f3.076413581579601!5f0.7820865974627469",
    },
 
];

const archived = [
    { img: archivedOne },
    { img: archivedTwo },
    { img: archivedThree },
    { img: archivedFour },
    { img: archivedFive },
    { img: archivedSix },
];

const buttons = [
    { name: "НОВЫЕ ФОТОГРАФИИ" },
    { name: "3D ТУР" },
    { name: "АРХИВНЫЕ ФОТОГРАФИИ" },
];

export const GalleryPage = () => {

    const [activeButton, setActiveButton] = useState(buttons[0].name);
    const [currentMapUrl, setCurrentMapUrl] = useState("");

    const handleOnClick = (name) => {
        setActiveButton(name);
    };

    const openModalWithMap = (mapUrl) => {
        setCurrentMapUrl(mapUrl);
    };

    const closeModal = () => {
        setCurrentMapUrl("");
    };


    return (
        <div className="gallery">
            <div className="container">

                <div className="gallery_menu">
                    {buttons.map((el) => (
                        <button
                            onClick={() => handleOnClick(el.name)}
                            className={`gallery_menu_btn ${el.name === activeButton ? "active" : ""}`}
                            key={el.name}
                        >
                            {el.name}
                        </button>
                    ))}
                </div>

                <div className="gallery_content">
                    {activeButton === "НОВЫЕ ФОТОГРАФИИ" && (
                        <div className="photo_gallery">
                            {newFoto.map((el, index) => (
                                <div key={index} className="photo_card">
                                    <img src={el.img} alt={`new-foto-${index}`} />
                                </div>
                            ))}
                        </div>
                    )}

                    {activeButton === "3D ТУР" && (
                        <div className="photo3d_gallery">
                            {threeDd.map((el, index) => (
                                <TourCard key={index} el={el} openModalWithMap={openModalWithMap}/>
                            ))}
                        </div>
                    )}

                    {activeButton === "АРХИВНЫЕ ФОТОГРАФИИ" && (
                        <div className="photo_gallery">
                            {archived.map((el, index) => (
                                <div key={index} className="photo_card">
                                    <img src={el.img} alt={`archived-foto-${index}`} />
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            {currentMapUrl && (
                <TourModal mapUrl={currentMapUrl} closeModal={closeModal}/>
            )}
        </div>
    );
}

