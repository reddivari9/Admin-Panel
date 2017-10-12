import React, { Component } from 'react';
import { Link } from "react-router-dom";


export default class Test1 extends Component {

	render(){
		const { match } = this.props;
		return(
			<div>
				<h2>{this.props.match.params.test} page</h2>

				<Link to={`${321}`}>Test2..</Link>
			</div>
		)
	}
}