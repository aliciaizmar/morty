import React, {Fragment} from 'react';
import './styles.scss';
import styles from '../../styles/style.scss';

function Card(props) {
	const {src, name, id, status} = props;
	return (
		<Fragment>
			<h2 className={styles.list__name} id={id}>
				{name}
			</h2>
			<img className={styles.list__image} src={src} alt={name} />
			<div className={styles.list__others}>
				<span className={styles.list__id}>id: {id}</span>
				<span className={styles.list__status}>{status}</span>
			</div>
		</Fragment>
	);
}

export default Card;
