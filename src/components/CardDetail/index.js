import React, { Fragment } from 'react';
import './styles.scss';
import { Link } from 'react-router-dom';
import { FaAngleLeft } from 'react-icons/fa';
import styles from '../../styles/style.scss';

function CardDetail(props) {
	const { match } = props;

	return (
		<Fragment>
			<Link to="/" title="Back">
				<div className={styles.link__back}>
					<FaAngleLeft className={styles.icon} /> Back
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
							src={match.image}
							alt={match.name}
						/>
						<h3 className={styles.hidden}>Aditional Info</h3>
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
								Appears in episode
							</li>

						</ul>
						<ul className={styles.list__episodes}>
							{match.episode.map((episode, index) => {

								const newEpisode = episode.slice(40);
								return (
									<li key={index}> {newEpisode} </li>
								);
							})}
						</ul>
					</div>
				</div>
			) : (
					<p className={styles.nouser}>This character doesn't exists</p>
				)}
		</Fragment>
	);
}

export default CardDetail;
