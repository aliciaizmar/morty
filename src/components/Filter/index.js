import React, {Fragment} from 'react';
import './styles.scss';

function Filter(props) {
	const {} = props;
	return (
		<Fragment>
			<form className="form">
				<div className="form__name">
					<label className="form__label">Búsqueda por nombre</label>
					<input className="form__input-text" name="" value="" />
				</div>
			</form>
		</Fragment>
	);
}

export default Filter;
