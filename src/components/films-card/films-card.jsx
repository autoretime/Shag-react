import React, { useEffect, useState } from "react";
import AddFilm from "../add-film/addFilm";
import CardElement from "../card/card";
import ShowFullInfo from "../showFullInfo/full-info";
import UpdateCardEl from "../update-card/updateCard";
import './style.css';


 const FilmsCard  = ({film}) =>{        
    
    const FILMS_KEY = 'FILMS'
    const [films, setFilms] = useState( JSON.parse(localStorage.getItem(FILMS_KEY)) ?? []);
    const [showModal, setShowModal] = useState(false);
    const [fullInfoFilm, setFullInfoFilm] = useState({});
    const [showDescriptionModal, setShowDescriptionModal] = useState(false)
    const [showUpdateModal, setShowUpdateModal] = useState(false)
    const [activeFilm, setActiveFilm] = useState([])

    useEffect(() => {
      if(!localStorage.getItem(FILMS_KEY)){
        fetch('https://swapi.dev/api/films/')
            .then(res => res.json())
            .then(result => {
              setFilms(result.results)
              setLocalStorageValue(result.results)          
                console.log(result);
            })
      }      
    }, []);


    const setLocalStorageValue = value => {
      localStorage.setItem(FILMS_KEY, JSON.stringify(value));
    }

    
    const deleteFilm = (episode_id) =>{
      const newArray = films.filter(x => x.episode_id !== episode_id)
      setFilms(newArray);
      setLocalStorageValue(newArray)
    }

    const openDescriptionModal = film =>{
        setFullInfoFilm(film);
        setShowDescriptionModal(true);
    }

    const openUpdateModal = film =>{
      setActiveFilm(film);
      setShowUpdateModal(true);
    }


    const updateFilm = updatedFilm =>{
      const newArray = films.map(x => updatedFilm.episode_id ===  x.episode_id ? updatedFilm : x)
      setFilms(newArray)
      setLocalStorageValue(newArray)
    }

    const addFilm = film =>{
      const newArray = [...films, film]
      setFilms(newArray)
      setLocalStorageValue(newArray)
  }

    return (
      <div>
        <h1 class="text-white">FILM LIST</h1>
        <button
        
          variant="success"
          className="w-75 mt-5 text-white bg-dark"
          onClick={() => setShowModal(true)}
          
          >
          Add New Film
        </button>
        <div className="wrapper">
        {films.map((film) => (
          <CardElement
            film={film}
            handleOpen={() => openUpdateModal(film)}
            handleOpenDescription={() => openDescriptionModal(film)}
            deleteFilm={() => deleteFilm(film.episode_id)}
          />
        ))}
        <ShowFullInfo
        show={showDescriptionModal}
        fullInfoFilm={fullInfoFilm}
        handleClose={() => setShowDescriptionModal(false)}
        />

        <UpdateCardEl
          show={showUpdateModal}
          updateFilm={updateFilm}
          activeFilm={activeFilm}
          handleClose={() => setShowUpdateModal(false)}
          />

          <AddFilm          
          show={showModal}
          addFilm={addFilm}
          handleClose={() => setShowModal(false)}          
          />
        </div>
      </div>
    );
    

}



export default FilmsCard;