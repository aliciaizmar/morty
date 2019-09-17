import React, {Fragment} from 'react';
import './styles.scss';
import {Link} from 'react-router-dom';
import { FaAngleLeft } from 'react-icons/fa';
import styles from '../../styles/style.scss';

function CardDetail(props) {
	const {match} = props;

	return (
		<Fragment>
			<Link to="/" title="Back">
				<div className={styles.link__back}>
					<span>
						<FaAngleLeft className={styles.icon} />
						Back
					</span>
				</div>
			</Link>

			{match ? (
				<div className={styles.detail__main}>
					<h2 className={styles.detail__name}>
						<span>{match.name}</span>
						<span>#{match.id}</span>
					</h2>

					<div className={styles.detail__content}>
						<img
							className={styles.detail__image}
							// src={match.image}
							alt={match.name}
						/>
						<h3 className={styles.detail__title}>Aditional Info</h3>
						<ul className={styles.details__list}>
							<li className={styles.details__list_title}> Gender</li>
							<li className={styles.details__list_item}>
								{match.gender}
							</li>
							<li className={styles.details__list_title}>Origin</li>
							<li className={styles.details__list_item}>{match.name}</li>
							<li className={styles.details__list_title}>Species</li>
							<li className={styles.details__list_item}>
								{match.species}
							</li>
							<li className={styles.details__list_title}>
								Appears in episode:
								<ul className={styles.list__episodes}>
									{match.episode.map((episode, index) => {
										//remove url and appear only the number of episodes and replace slash with empty string
										//const newEpisode = episode.slice(-2).replace('/', '');
										const newEpisode = episode.slice(40);
										return (
											<li key={index}> {newEpisode}</li>
										);
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
