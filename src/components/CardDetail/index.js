import React, {Fragment} from 'react';
import './styles.scss';
import {Link} from 'react-router-dom';
import {FaAngleLeft} from 'react-icons/fa';

function CardDetail(props) {
	const {match, peopleData} = props;
	console.log(match);
	console.log('cardetail', props);

	// console.log('detail:', match);
	return (
		<Fragment>
			<Link to="/">
				<div className="link__back">
					<span>
						<FaAngleLeft className="icon" />
						Back
					</span>
				</div>
			</Link>

			{match ? (
				<div className="detail__main">
					<h2 className="detail__name">
						<span>{match.name}</span>
						<span>#{match.id}</span>
					</h2>

					<div className="detail__content">
						<img
							className="detail__image"
							// src={match.image}
							alt={match.name}
						/>
						<h3 className="detail__title">
							Aditional Info CARDETAIL
						</h3>
						<ul className="details__list">
							<li className="details__list-title"> Gender</li>
							<li className="details__list-item">
								{match.gender}
							</li>
							<li className="details__list-title">Origin</li>
							<li className="details__list-item">{match.name}</li>
							<li className="details__list-title">Species</li>
							<li className="details__list-item">
								{match.species}
							</li>
							<li className="details__list-title">
								Number of episodes
								<ul className="list__episodes">
                                    {match.episode.map((episode, index) => {
                                        //remove url and appear only the number of episodes and replace slash with empty string
                                        //const newEpisode = episode.slice(-2).replace('/', '');
                                        const newEpisode = episode.slice(40);
                                        return <li key={index}> {newEpisode}</li>                                        
									})}
								</ul>
							</li>
						</ul>
					</div>
				</div>
			) : (
				<p>This character doesn't exists</p>
			)}
		</Fragment>
	);
}

export default CardDetail;
