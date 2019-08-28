import React from 'react';
import './App.css';

class App extends React.Component {

  constructor(props)
  {
    super(props);
    this.state = {
      query : "",
    }
  }

  addquery(value)
  {
    let q = this.state.query;
    q = q + value;
    this.setState({ query : q });
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
        return 1;

        default :
        return 0;

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
      q = eval(q);
      // console.log(typeof(q));
      this.setState({ query : String(q) });
    }
  }

  showalert()
  {
    
  }

  keyPress(e){
    if(e.keyCode === 13){
      this.giveresult();
    }
 }

 trimquery()
 {
    let q = this.state.query;
    if(q.length)
    {
      q = q.slice(0,-1);
      this.setState({ query : q });
    }
 }

  render()
  {
    return (
      <div className="App">
        <div className="row">
         <div className="col-sm-3"></div>
         <div className="col-sm-6">
           <div className="row">
            <div className="col-sm-12">
              <input type="text" placeholder="insert your expression" 
                value = {this.state.query}
                onKeyDown={ (e) => this.keyPress(e) }
                onChange = { (e) => this.add1(e.target.value) }
              />
            </div>
            <div className="col-sm-12">
              <button className="btn btn-primary" onClick = { e => this.addquery("1") }>1</button>
              <button className="btn btn-primary" onClick = { e => this.addquery("2") }>2</button>
              <button className="btn btn-primary" onClick = { e => this.addquery("3") }>3</button>
              <button className="btn btn-primary" onClick = { e => this.add1(this.state.query + "+") }>+</button>
            </div>
            <div className="col-sm-12">
              <button className="btn btn-primary" onClick = { e => this.addquery("4") }>4</button>
              <button className="btn btn-primary" onClick = { e => this.addquery("5") }>5</button>
              <button className="btn btn-primary" onClick = { e => this.addquery("6") }>6</button>
              <button className="btn btn-primary" onClick = { e => this.add1(this.state.query + "-") }>-</button>
            </div>
            <div className="col-sm-12">
              <button className="btn btn-primary" onClick = { e => this.addquery("7") }>7</button>
              <button className="btn btn-primary" onClick = { e => this.addquery("8") }>8</button>
              <button className="btn btn-primary" onClick = { e => this.addquery("9") }>9</button>
              <button className="btn btn-primary" onClick = { e => this.add1(this.state.query + "*") }>*</button>
            </div>
            <div className="col-sm-12">
              <button className="btn btn-primary" onClick = { e => this.giveresult() }>=</button>
              <button className="btn btn-primary" onClick = { e => this.addquery("0") }>0</button>
              <button className="btn btn-primary" onClick = { e => this.trimquery() }>rm</button>
              <button className="btn btn-primary" onClick = { e => this.add1(this.state.query + "/") }>/</button>
            </div>
           </div>
         </div>
         <div className="col-sm-3"></div>  
        </div>
        
      </div>
    )
  }

}

export default App;
