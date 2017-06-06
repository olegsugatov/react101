import React from 'react';

export class App extends React.Component {
	
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	buyItems: ['milk', 'bread', 'fruit']
	  }

	}

	render() {
		const {buyItems} = this.state;
		return (
			<div>
			<h1>Shopping List</h1>
			{ 
				buyItems.map(item => { 
				return <p key={item}>{item}</p> 
				})
			}
			</div>
		)
	}
}

// const Headline = () => {
// 	return <h1 className="title">Welcome to React world.</h1>
// }

// const Greeting = (props) => {

// 	const {name, age} = props;
// 	return <p>You will love it {name} ({age})!</p>
// 	// return <p>You will love it {props.name} ({props.age})!</p>
// }

// Stateles component
// export const App = () => {
// 	return (
// 	<div>
// 		<Headline />
// 		<Greeting  name="Oleg" age={25} />
// 	</div>
// 	)
// }

// Greeting.propTypes = {
//   name: React.PropTypes.string,
//   age: React.PropTypes.number.isRequired
// }