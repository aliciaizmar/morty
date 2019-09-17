import React, {Fragment} from 'react';
import './styles.scss';
import Card from '../Card';
import { Link } from 'react-router-dom';
import styles from '../../styles/style.scss';

function CardList(props) {
	const {peopleData} = props;

	return (
		<Fragment>			
			<div className={styles.hidden}>
				{peopleData.length === 0 ? (
					<p>No founds</p>
				) : (
					<p>List of characters: {peopleData.length}</p>
				)}
			</div>
			<ul className={styles.list}>
					{peopleData.length === 0 ? (
						<p className={styles.nouser}>We can't find that name</p>
					): (
						peopleData.map((person) => {
							return (
								<li className={styles.listItem} key={person.id}>
									<Link to={`/detail/${person.id}`}>
										<Card
											id={person.id}
											name={person.name}
											src={person.image}
											status={person.status}
										/>
									</Link>
								</li>
							);
						})
					)}
			</ul>
		</Fragment>
	);
}

export default CardList;
