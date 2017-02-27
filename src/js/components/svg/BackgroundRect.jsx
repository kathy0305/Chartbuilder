import React, {PropTypes} from 'react';

const BackgroundRect = React.createClass({

	propTypes: {
		dimensions: PropTypes.shape({
			width: PropTypes.number,
			height: PropTypes.number
		}),
		x: PropTypes.number,
		y: PropTypes.number
	},

	getDefaultProps: function() {
		return {
			x: 0,
			y: 0
		}
	},

	render: function() {
		const props = this.props;
		return (
			<g className="svg-background-wrap">
				<rect
					className="svg-background"
					width={props.dimensions.width}
					height={props.dimensions.height}
					x={props.x}
					y={props.y}
				/>
			</g>
		);
	}

});

module.exports = BackgroundRect;
