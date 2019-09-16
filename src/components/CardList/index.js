import React from 'react';
import './styles.scss';
import Card from '../Card';

function CardList(props) {
	const {peopleData} = props;
	//console.log(peopleData)

	return (
		<div>
			<ul className="list">
				{peopleData.map((person, index) => {
					return <li key={index}>{person.name}</li>;
				})}

				<Card />
			</ul>
		</div>
	);
}

export default CardList;
