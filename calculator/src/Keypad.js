
	import React from 'react';
	import Button from './Button.js';
	
	class Keypad extends React.Component {
			render()
			{
				return (
				<div className="col-sm-12 Keypad">
					<table className="table table-bordered">
						<tbody>
						  <tr>
							<Button class={"operand"} value={"1"} addquery = {this.props.addquery}  />
							<Button class={"operand"} value={"2"} addquery = {this.props.addquery}  />
							<Button class={"operand"} value={"3"} addquery = {this.props.addquery}  />
							<Button class={"operators"} class={"operators"} value={"+"} addquery = {this.props.addquery}  />
						  </tr>

						  <tr>
							<Button class={"operand"} value={"4"} addquery = {this.props.addquery}  />
							<Button class={"operand"} value={"5"} addquery = {this.props.addquery}  />
							<Button class={"operand"} value={"6"} addquery = {this.props.addquery}  />
							<Button class={"operators"} class={"operators"} value={"-"} addquery = {this.props.addquery}  />
						  </tr>

						  <tr>
							<Button class={"operand"} value={"7"} addquery = {this.props.addquery}  />
							<Button class={"operand"} value={"8"} addquery = {this.props.addquery}  />
							<Button class={"operand"} value={"9"} addquery = {this.props.addquery}  />
							<Button class={"operators"} value={"*"} addquery = {this.props.addquery}  />
						  </tr>

						  <tr>
							<Button class={"evaluate"} value={"="} addquery = {this.props.addquery}  />
							<Button class={"operand"} value={"0"} addquery = {this.props.addquery}  />
							<Button class={"operators"} value={"."} addquery = {this.props.addquery}  />
							<Button class={"operators"} value={"/"} addquery = {this.props.addquery}  />
						  </tr>
						  
						</tbody>

					   </table>
					   <div className="row message">
							<div className="col-sm-6 action" onClick = {this.props.clearquery} >
								clear
							</div>
							<div className="col-sm-6 action" onClick = {this.props.trimquery}>
								deletee
							</div>
					   </div>
				</div>
			);
		}
	}

	export default Keypad;