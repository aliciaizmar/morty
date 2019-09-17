import React, {Fragment} from 'react';
import styles from '../../styles/style.scss';

function Filter(props) {
	const {searchPeopleName, filterByName, filterByStatus} = props;

	return (
		<Fragment>
			<form className={styles.form}>
				<div className={styles.form__name}>
					<label className={styles.hidden} htmlFor="name">
						Filter by name
					</label>
					<input
						className={styles.form__input_text}
						type="text"
						id="name"
						name="name"
						value={searchPeopleName}
						onChange={filterByName}
						placeholder='Filter by name'
					/>
				</div>
				<div className={styles.form__radio}>
					<fieldset>
						<legend className={styles.hidden}>Status: </legend>
						<label htmlFor="alive">
							<input
								type="radio"
								name="status"
								className={styles.form__input_radio}
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
								className={styles.form__input_radio}
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
								className={styles.form__input_radio}
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
								className={styles.form__input_radio}
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
