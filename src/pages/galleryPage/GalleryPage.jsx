import { useEffect, useState } from "react";
import "./Gallery.scss";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import { Fancybox } from "@fancyapps/ui";
import { TourCard } from "../../features";
import { TourModal } from "../../entities";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchNewShapes, fetchArchivalPhotos, fetchOshTour } from "../../app/store/reducers/gallerySlice"; 


const buttons = [
    { name: "НОВЫЕ ФОТОГРАФИИ" },
    { name: "3D ТУР" },
    { name: "АРХИВНЫЕ ФОТОГРАФИИ" },
];

export const GalleryPage = () => {

    const [activeButton, setActiveButton] = useState(buttons[0].name);
    const [currentMapUrl, setCurrentMapUrl] = useState("");
    const {id} = useParams();

    const { newShapes, archivalPhotos, oshTour,  } = useSelector((state) => state.gallery);
  
    const handleOnClick = (name) => {
        setActiveButton(name);
    };

    const openModalWithMap = (mapUrl) => {
        setCurrentMapUrl(mapUrl);
    };

    const closeModal = () => {
        setCurrentMapUrl("");
    };
    useEffect(() => {
      Fancybox.bind("[data-fancybox]", {});
  
      return () => {
          Fancybox.unbind("[data-fancybox]");
      };
  }, []);
  

    useEffect(() => {
        if (id === "new-photo") {
            setActiveButton("НОВЫЕ ФОТОГРАФИИ");
        } else if (id === "3D-tour") {
            setActiveButton("3D ТУР");
        } else if (id === "archive-photos") {
            setActiveButton("АРХИВНЫЕ ФОТОГРАФИИ");
        }
    }, [id]);
    
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
                  {newShapes.map((el, index) => (
                    <a key={index} data-fancybox="gallery" href={el.image} className="photo_card">
                      <img className="photo_card_img" src={el.image} alt={`new-foto-${index}`} />
                    </a>
                  ))}
                </div>
              )}
    
              {activeButton === "3D ТУР" && (
                <div className="photo_gallery">
                  {oshTour.map((el, index) => (
                    <TourCard key={index} el={el} openModalWithMap={openModalWithMap} />
                  ))}
                </div>
              )}
    
              {activeButton === "АРХИВНЫЕ ФОТОГРАФИИ" && (
                <div className="photo_gallery">
                  {archivalPhotos.map((el, index) => (
                    <a key={index} data-fancybox="gallery" href={el.image} className="photo_card">
                      <img className="photo_card_img" src={el.image} alt={`archived-foto-${index}`} />
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
    
          {currentMapUrl && (
            <TourModal mapUrl={currentMapUrl} closeModal={closeModal} />
          )}
        </div>
      );
    };
    
