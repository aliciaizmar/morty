import React, {Fragment} from 'react';
import './styles.scss';

function Filter(props) {
	const {searchPeopleName, filterByName} = props;

	return (
		<Fragment>
			<form className="form">
				<div className="form__name">
					<label className="form__label" htmlFor="name">
						Filter by name
					</label>
					<input
						className="form__input-text"
						type="text"
						id="name"
						name="name"
						value={searchPeopleName}
						onChange={filterByName}
					/>
				</div>
			</form>
		</Fragment>
	);
}

export default Filter;
