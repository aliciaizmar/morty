import React, {Fragment} from 'react';
import './styles.scss';
import CardList from '../CardList';
import Filter from '../Filter';
import serviceFetch from '../../services/serviceFetch';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			peopleData: [],
			isFetching: true
		};
	}

	componentDidMount() {
		this.fetchData();
	}

	fetchData() {
		serviceFetch().then((data) => {
			data.results.forEach((item) => {
				return item;
			});

			this.setState({
				peopleData: data.results,
				isFetching: false
			});
		});
	}

	render() {
		const {isFetching, peopleData} = this.state;
		return (
			<div className="wrapper">
				{isFetching ? (
					<div className="loading"> Loading... </div>
				) : (
					<Fragment>
						<CardList peopleData={peopleData} />
						<Filter />
					</Fragment>
				)}
			</div>
		);
	}
}

export default App;
