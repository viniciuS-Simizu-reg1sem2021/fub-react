import React, {useContext, useEffect} from "react";
import {Link, useNavigate} from "react-router-dom"
import "./perfil.scss";
import {Container} from "react-bootstrap";
import Image from "react-bootstrap/Image";
import adriano from '../../Assets/Images/Adrian_de_cria.png'
import {UserContext, UsuarioContext} from "../../Contexts/UserContext";
import { faAward } from '@fortawesome/free-solid-svg-icons'
import StarRatingComponent from "react-star-rating-component";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function Perfil() {

    const navigate = useNavigate();
    const { UserState } = useContext(UsuarioContext);

    useEffect(() => {
        if(!UserState) {
            navigate('/home')
        }
    }, [])

    const { name, ratings, birthDate, occupation, city, state, district, description, imagePath } = UserState;
    const years = Math.floor((Date.now() - new Date(birthDate).getTime()) / 1000 / 60 / 60 / 24 / 365)
    let ratingStars
    if(ratings.length !== 0) {
        ratingStars = ratings.reduce((a, b) => a+b) / ratings.length
    } else {
        ratingStars = 0
    }
    ratingStars = 3.3

    return(
        <div id={'perfil'} className={'p-5 d-flex justify-content-center'}>

            <Container id={'perfil-container'} className={'bg-white px-5 py-4 h-100 gap-5 d-flex flex-column'}>

                <div className={'row'}>
                    <span className={'col-2'}>
                        <Image src={ imagePath ?? adriano } roundedCircle className={'w-100 border'} />
                    </span>

                    <span className={'col-10 d-flex flex-column justify-content-between text-secondary'}>

                        <div id={'perfil-name'} className={''}>
                            { name }
                        </div>

                        { ratingStars !== 0 ?
                            <div className={'stars'}>
                                <StarRatingComponent starColor={'red'} editing={false} value={ratingStars} emptyStarColor={'transparent'} renderStarIcon={() => <FontAwesomeIcon className={'px-1'} icon={faAward} />} />
                                <span className={'text-warning'}>{ ratingStars }</span>
                            </div>
                            :
                            null
                        }

                        <div id={'perfil-details'}>
                            { years } anos - { occupation }
                        </div>

                        <div id={'perfil-location'}>
                            { state }, { city }, { district }
                        </div>

                    </span>
                </div>

                <div className={'row px-4'}>
                    <div id={'about'} className={'text-secondary'}>Sobre</div>
                    <div>{ description }</div>
                </div>

            </Container>

        </div>
    )
}

export default Perfil;