import React from 'react';
import ArrowIcon from './ArrowIcon';
import DefaultValueComponent from './DefaultValueComponent';
import './style.css';

class Select extends React.Component {
	static defaultProps = {
		valueComponent: DefaultValueComponent,
	};
	render() {
		const { style, value, valueComponent: ValueComponent } = this.props;
		return (
			<div className="mui-select-root" style={style}>
				<div className="mui-select-value">
          <ValueComponent value={value} />
        </div>
				<button className="mui-select-arrow-button">
					<ArrowIcon />
				</button>
			</div>
		);
	}
}

export default Select;
