import React from 'react';
class Button extends React.Component {
		
	  constructor(props)
	  {
		super(props);
	  }
	  
	  render()
	  {
		  return (
			<td className={this.props.class} onClick={()=>this.props.addquery(this.props.value)} >{this.props.value}</td>
		  )
	  }
	}
	
export default Button;	