import React, { Fragment } from 'react';
import './styles.scss';
import { Link } from 'react-router-dom';
import { FaAngleLeft } from 'react-icons/fa';

function CardDetail(props) {
    const { match } = props;

    console.log('detail:', match);
    return (
        <Fragment>
            <Link to='/'>
                <div className='link__back'>
                    <span>
                        <FaAngleLeft className='icon' /> Back
                </span>
                </div>
            </Link>
            <div className="detail__main">
                <h2 className="detail__name">
                    <span>{match.name}</span>
                    <span>#{match.id}</span>
                </h2>

                <div className="detail__content">
                    <img className='detail__image' src={match.image} alt={match.name} />
                    <h3 className='detail__title'>Aditional Info</h3>
                    <ul className='details__list'>
                        <li className='details__list-title'> Gender</li>
                        <li className='details__list-item'> {match.gender}</li>
                        <li className='details__list-title'>Origin</li>
                        <li className='details__list-item'>{match.name}</li>
                        <li className='details__list-title'>Species</li>
                        <li className='details__list-item'>{match.species}</li>
                        <li className='details__list-title'>Episodes:
                        <ul>
                                {match.episode.map((episode, index) => {
                                    return <li key={index}> {episode}</li>

                                })}
                            </ul>
                        </li>
                    </ul>


                </div>

            </div>
        </Fragment>
    );
}

export default CardDetail;
