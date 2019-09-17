import React, {Fragment} from 'react';
import CardList from '../CardList';
import Filter from '../Filter';
import CardDetail from '../CardDetail';
import serviceFetch from '../../services/serviceFetch';
import {Route, Switch} from 'react-router-dom';
import styles from '../../styles/style.scss';

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

	handlerSearchStatus = (e) => {
		const {value} = e.target;
		this.setState({
			searchStatus: value
		});
	};

	//filter every input
	inputFilters = () => {
		const {searchPeopleName, peopleData, searchStatus} = this.state;

		return peopleData
			.filter((person) => {
				return person.name
					.toLowerCase()
					.includes(searchPeopleName.toLowerCase());
			})
			.filter((person) => {
				return !searchStatus || searchStatus.includes('all')
					? true
					: searchStatus
							.toLowerCase()
							.includes(person.status.toLowerCase());
			});
	};

	findId = (id) => {
		const {peopleData} = this.state;
		return peopleData.find((people) => {
			return people.id === parseInt(id);
		});
	};

	render() {
		const {
			isFetching,
			peopleData,
			searchPeopleName,
			searchStatus
		} = this.state;
		return (
			<div className={styles.wrapper}>
				{isFetching ? (
					<div className={styles.loading}> Loading... </div>
				) : (
					<Fragment>
						<nav className={styles.hidden}><h1>Rick and Morty</h1></nav>
						<main className={styles.mainContent}>
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
												filterByStatus={
													this.handlerSearchStatus
												}
												searchPeopleName={
													searchPeopleName
												}
												searchStatus={searchStatus}
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
