import React from 'react';

const Headline = () => {
	return <h1 className="title">Welcome to React world.</h1>
}

const Greeting = (props) => {

	const {name, age} = props;
	return <p>You will love it {name} ({age})!</p>
	// return <p>You will love it {props.name} ({props.age})!</p>
}

export const App = () => {
	return (
	<div>
		<Headline />
		<Greeting  name="Oleg" age={25} />
	</div>
	)
}

Greeting.propTypes = {
  name: React.PropTypes.string,
  age: React.PropTypes.number.isRequired
}