	
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
		this.addquery = this.addquery.bind(this); 
		this.clearquery = this.clearquery.bind(this);
		this.trimquery = this.trimquery.bind(this);
	  } 
	  
	  rightCharacter(value)
	  {
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

	  addquery(value)
	  {
		let type = this.rightCharacter(value);
		if(type === 2)
		{
			let q = this.state.query;
			q = q + value;
			this.setState({ query : q });
		}
		else if(type === 1)
		{
			this.add1(this.state.query + value);
		}
		else if(type === 0)
		{
			this.giveresult();
		}
	  }


	  add1(value)
	  {
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

	  giveresult()
	  {
		let q = this.state.query;
		if(q && this.rightCharacter(q[q.length-1])!==1)
		{
			try {
				q = evaluate(q);
			}
			catch(err) 
            { 
                alert("Math Error"); 
            } 
            if (q===undefined) 
			{
				alert("Math Error");
			}
			else{
				this.setState({ query : String(q) });
			}
		}
	  }

	 trimquery(e)
	 {
		let q = this.state.query;
		if(q.length)
		{
		  q = q.slice(0,-1);
		  this.setState({ query : q });
		}
	 }

	 clearquery(e)
	 {
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

// <input type="text" placeholder="insert your expression" // value = {this.state.query} // onKeyDown={ (e) => this.keyPress(e) } // onChange = { (e) => this.add1(e.target.value) } // />