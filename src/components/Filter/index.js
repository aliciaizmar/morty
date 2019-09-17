import React, {Fragment} from 'react';
import './styles.scss';

function Filter(props) {
	const {searchPeopleName, filterByName, filterByStatus} = props;

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
				<div className="form__radio">
					<fieldset>
						<legend>Status: </legend>
						<label htmlFor="alive">
							<input
								type="radio"
								name="status"
								className="form__input-radio"
								id="alive"
								value="alive"
								onChange={filterByStatus}
							/>
							Alive
						</label>
						<label htmlFor="dead">
							<input
								type="radio"
								name="status"
								className="form__input-radio"
								id="dead"
								value="dead"
								onClick={filterByStatus}
							/>
							Dead
						</label>
						<label htmlFor="unknown">
							<input
								type="radio"
								name="status"
								className="form__input-radio"
								id="unknown"
								value="unknown"
								onClick={filterByStatus}
							/>
							Unknown
						</label>
						<label htmlFor="all">
							<input
								type="radio"
								name="status"
								className="form__input-radio"
								id="all"
								value="all"
								onClick={filterByStatus}
							/>
							All
						</label>
					</fieldset>
				</div>
			</form>
		</Fragment>
	);
}

export default Filter;
