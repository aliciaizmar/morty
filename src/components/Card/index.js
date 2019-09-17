import React, {Fragment} from 'react';
import './styles.scss';
import CardDetail from '../CardDetail';

function Card(props) {
    const { src, name, id, status, peopleData } = props;
	return (
		<Fragment>
			<h2 className="list__name" id={id}>
				{name}
			</h2>
			<img className="list__image" src={src} alt={name} />
			<div className="list__others">
				<span className="list__id">id: {id}</span>
				<span className="list__status">{status}</span>
			</div>

			{/* <CardDetail peopleData={peopleData} /> */}
		</Fragment>
	);
}

export default Card;
