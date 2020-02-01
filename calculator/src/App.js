	
	import React from 'react';
	import { evaluate } from 'mathjs'
	import './App.css';
	import Keypad from './Keypad.js';
	import Screen from './Screen.js';
	
	class Calculator extends React.Component {

	  constructor(props)
	  {
		super(props);
		this.state = {
		  query : "",
		}
	  } 
	  
	  rightCharacter = (value) => {
		  switch(value)
		  {
			case "0" :
			case "1" :
			case "2" :
			case "3" :
			case "4" :
			case "5" : 
			case "6" :
			case "7" :
			case "8" :
			case "9" :
			return 2;

			case "-" :
			case "+" :
			case "*" :
			case "/" :
			case "." :
			return 1;
			
			case "=" :
			return 0;

			default :
			return -1;

		  }
	  }

	  addquery = (value) => {
		let type = this.rightCharacter(value);
		if(type === 2)
		{
			let query = this.state.queryuery;
			query = query + value;
			this.setState({ queryuery : query });
		}
		else if(type === 1)
		{
			this.addOperator(this.state.query + value);
		}
		else if(type === 0)
		{
			this.giveresult();
		}
	  }


	  addOperator = (value) => {
		let k = this.rightCharacter(value[value.length-1]);
		if(k === 2)
		{
		  this.setState({ query : value });
		}
		else if(k === 1)
		{
		  if(value.length>=2 && k!==this.rightCharacter(value[value.length-2]))
		  {
			this.setState({ query : value });
		  }
		}
	  }

	  giveresult = () => {
		let query = this.state.queryuery;
		if(query && this.rightCharacter(query[query.length-1])!==1)
		{
			try {
				query = evaluate(query);
			}
			catch(err) 
            { 
                alert("Math Error"); 
			}
            if (query===undefined || query==Infinity) 
			{
				alert("Math Error");
			}
			else {
				this.setState({ query : String(query) });
			}
		}
	  }

	 trimquery = (e) => {
		let query = this.state.query;
		if(query.length)
		{
			query = query.slice(0,-1);
		  this.setState({ query : query });
		}
	 }

	 clearquery = (e) => {
		this.setState({ query : "" });
	 }
	 

	  render()
	  {
		return (
			<div className="App">
				<div className="row">
					<div className="col-sm-4">
						
					</div>
					<div className="col-sm-4">
						<div className="row">
							<div className="col-sm-12">
								<div className="row main-div">
									<Screen value={this.state.query} />
									<Keypad addquery = {this.addquery} clearquery = {this.clearquery} trimquery = {this.trimquery} />
								</div>
							</div>
						</div> 
					</div>
				</div>
			</div>
		)
	  }

	}

	export default Calculator;
