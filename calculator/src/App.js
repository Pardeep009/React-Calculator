import React from 'react';
import { evaluate } from 'mathjs'
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
      q = evaluate(q);
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

 clearquery()
 {
    this.setState({ query : "" });
 }

  render()
  {
    return (
      <div className="App">
        <div className="row">
         <div className="col-sm-4"></div>
         <div className="col-sm-4">
           <div className="row">
            <div className="col-sm-12 main-div">
            <input type="text" placeholder="insert your expression" 
                value = {this.state.query}
                onKeyDown={ (e) => this.keyPress(e) }
                onChange = { (e) => this.add1(e.target.value) }
            />
              <table className="table table-striped table-bordered">
                <tbody>
                  <tr>
                    <td onClick = { e => this.addquery("1") }>
                      1
                    </td>
                    <td onClick = { e => this.addquery("2") }>
                      2
                    </td>
                    <td onClick = { e => this.addquery("3") }>
                      3
                    </td>
                    <td onClick = { e => this.add1(this.state.query + "+") }>
                      +
                    </td>
                  </tr>

                  <tr>
                    <td onClick = { e => this.addquery("4") }>
                      4
                    </td>
                    <td onClick = { e => this.addquery("5") }>
                      5
                    </td>
                    <td onClick = { e => this.addquery("6") }>
                      6
                    </td>
                    <td onClick = { e => this.add1(this.state.query + "-") }>
                      -
                    </td>
                  </tr>

                  <tr>
                    <td onClick = { e => this.addquery("7") }>
                      7
                    </td>
                    <td onClick = { e => this.addquery("8") }>
                      8
                    </td>
                    <td onClick = { e => this.addquery("9") }>
                      9
                    </td>
                    <td onClick = { e => this.add1(this.state.query + "*") }>
                      *
                    </td>
                  </tr>

                  <tr>
                    <td onClick = { e => this.giveresult() }>
                      =
                    </td>
                    <td onClick = { e => this.addquery("0") }>
                      0
                    </td>
                    <td onClick = { e => this.addquery(".") }>
                      .
                    </td>
                    <td onClick = { e => this.add1(this.state.query + "/") }>
                      /
                    </td>
                  </tr>
                </tbody>

            </table>
            <div className="col-sm-12" onClick = { e => this.clearquery() }>
                  clear
            </div>
           </div>
         </div>
         <div className="col-sm-4"></div>  
        </div>
        
      </div>
      </div>
    )
  }

}

export default App;
