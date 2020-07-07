import React, { Component } from 'react';

class handlesearch extends Component {

    render(){


	const zips = this.props.data.map(zip => 
            <li>{zip}</li>) 

        return(
            <ul>{zips}</ul> 
        ) 
	}
}
export default handlesearch;