import React, { Component } from 'react';

class Counter extends Component {


	formatCount() {
		//this is called object desctructuring, in the event that we reuse the same line of code multiple times, it is more efficient to target our key properties this way
		const { value } = this.props.counter;
		return value === 0 ? 'Zero' : value;
	}
	//     // this method is how we can render classes dynamically using ternary operations
	getBadgeClasses() {
		//let classes equal a predetermind set of strings and then
		let classes = 'badge m-2 badge-';
		//if the count is zero set badge- to badge-warning else set it to badge-primary
		classes += this.props.counter.value === 0 ? 'warning' : 'primary';
		//return the new value
		return classes;
		/*  */
		// }
	}

	render() {
		return (
			<div>
				{/* {this.state.tags.length === 0 && "Please create a new tag!"}
				{this.renderTag()} */}
				<span className={this.getBadgeClasses()}>{this.formatCount()}</span>
				<button
					onClick={() => this.props.onIncrement(this.props.counter)}
					className="btn btn-secondary btn-sm m-2"
				>
					Increase
				</button>
				<button
					onClick={() => this.props.onDecrement(this.props.counter)}
					className="btn btn-secondary btn-sm badge-primary"
				>
					Decrease
				</button>
				<button
					onClick={() => this.props.onDelete(this.props.counter.id)}
					className="btn btn-danger btn-sm m-2"
				>
					Delete
				</button>
			</div>
		);
	}
}

export default Counter;
