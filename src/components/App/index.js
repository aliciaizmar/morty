import React, {Fragment} from 'react';
import './styles.scss';
import CardList from '../CardList';
import Filter from '../Filter';
import CardDetail from '../CardDetail';
import serviceFetch from '../../services/serviceFetch';
import {Route, Switch} from 'react-router-dom';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			peopleData: [],
			isFetching: true,
			searchPeopleName: '',
			searchStatus: ''
		};
	}

	componentDidMount() {
		this.fetchData();
	}

	fetchData() {
		serviceFetch().then((data) => {
			data.results.forEach((item, index) => {
				//return item;
				return {
					...item,
					id: index
				};
			});

			this.setState({
				peopleData: data.results,
				isFetching: false
			});
		});
	}

	handlerSearchName = (e) => {
		const {value} = e.target;
		this.setState({
			searchPeopleName: value
		});
	};

	//filter every input
	inputFilters = () => {
		const {searchPeopleName, peopleData} = this.state;

		return peopleData
			.filter((person) => {
				return person.name
					.toLowerCase()
					.includes(searchPeopleName.toLowerCase());
			})
			.sort((a, b) => {
				return a.id - b.id;
			});
	};

	findId = (id) => {
		const {peopleData} = this.state;
		return peopleData.find((people) => {
			return people.id === parseInt(id);
		});
	};

	render() {
		const {isFetching, peopleData, searchPeopleName} = this.state;
		return (
			<div className="wrapper">
				{isFetching ? (
					<div className="loading"> Loading... </div>
				) : (
					<Fragment>
						<main className="main__content">
							<Switch>
								<Route
									exact
									path="/"
									render={() => (
										<Fragment>
											<Filter
												filterByName={
													this.handlerSearchName
												}
												searchPeopleName={
													searchPeopleName
												}
											/>
											<CardList
                                                peopleData={this.inputFilters()}
											/>
										</Fragment>
									)}
								/>

								<Route
									path="/detail/:id"
									render={(routerProps) => {
										return (
											<CardDetail
												match={this.findId(
													routerProps.match.params.id
												)}
												peopleData={peopleData}
											/>
										);
									}}
								/>
							</Switch>
						</main>
					</Fragment>
				)}
			</div>
		);
	}
}

export default App;
