import React, {Fragment} from 'react';
import './styles.scss';
import Card from '../Card';
import {Link} from 'react-router-dom';

function CardList(props) {
	const {peopleData} = props;
    //console.log(peopleData.length)

	return (
		<Fragment>
			<nav className="main__header">
				{/* <h1>Rick and Morty</h1> */}
			</nav>
			<ul className="list">
				{peopleData.map((person) => {
					return (
						<li className="list__item" key={person.id}>
							<Link to={`/detail/${person.id}`}>
								<Card
									id={person.id}
									name={person.name}
									// src={person.image}
									status={person.status}
								/>
							</Link>
						</li>
					);
				})}
			</ul>
		</Fragment>
	);
}

export default CardList;
