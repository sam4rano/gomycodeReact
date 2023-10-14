

const Greeting = (props) => {
  return (
	<div className="">
		<div style={{color:"red", fontSize:60}}>Welcome to GOMYCODE</div>
		<p>{props.greetings}</p>
		<hr />
	</div>
  )
}

export default Greeting