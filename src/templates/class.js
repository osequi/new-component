/**
 * Component description
 *
 */
import React from 'react';
import PropTypes from 'prop-types';
import styled, {css} from 'styled-components';


/**
 * The loading container
 */
const Loading = styled.div``;


/**
 * The main container
 */
const Container = styled.div``;


/**
 * The main class
 */
class COMPONENT_NAME extends React.Component {
	render() {
		const {loading, className} = this.props;

		if (loading) {
			return (
				<Loading className={className}>Loading ...</Loading>
			)
		}

		return (
			<Container className={className} />
		)
	}
}


/**
 * The prop types
 */
COMPONENT_NAME.propTypes = {
	/**
	 * Component is loading?
	 */
	loading: PropTypes.bool,
}


/**
 * Default props
 */
COMPONENT_NAME.defaultProps = {
	loading: false,
};


export default COMPONENT_NAME;
