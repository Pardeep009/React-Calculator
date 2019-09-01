
	import React from 'react';
	class Screen extends React.Component {
			
			constructor(props)
			{
				super(props);
			}
		  
			render()
			{
				return (
				<div className="col-sm-12 screen">
					{this.props.value}
				</div>
				);
			}
		}
		
	export default Screen;	