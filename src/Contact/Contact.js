import React from 'react';
import './Contact.scss';


class App extends React.Component {
  constructor(props) {
	super(props);
	this.state = {
  	name: '',
  	email: '',
  	message: ''
	}
  }

render() {
 return(
  <React.Fragment>
  <div className="imagen-contact imagen container-fluid"></div>
   <div className="container-fluid contact">
     <div className="container">
   <div className="App">
   <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
    <div className="form-group">
        <label htmlFor="name">Nombre</label>
        <input type="text" className="form-control input" value={this.state.name} onChange={this.onNameChange.bind(this)} />
    </div>
    <div className="form-group">
        <label htmlFor="exampleInputEmail1">Email</label>
        <input type="email" className="form-control input" aria-describedby="emailHelp" value={this.state.email} onChange={this.onEmailChange.bind(this)} />
    </div>
    <div className="form-group">
        <label htmlFor="message">Mensaje</label>
        <textarea className="form-control" rows="5" value={this.state.message} onChange={this.onMessageChange.bind(this)} />
    </div>
    <button type="submit" className="btn btn-primary">Enviar</button>
    </form>
    </div>
    </div>
    </div>
    </React.Fragment>
 );
}

  onNameChange(event) {
	this.setState({name: event.target.value})
  }

  onEmailChange(event) {
	this.setState({email: event.target.value})
  }

  onMessageChange(event) {
	this.setState({message: event.target.value})
  }

handleSubmit(event) {
  event.preventDefault();
  fetch('http://localhost:3000/about', {
    method: "POST",
    body: JSON.stringify(this.state),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
  }).then(
  (response) => (response.json())
    ).then((response)=> {
  if (response.status === 'success') {
    alert("Message Sent.");
    this.resetForm()
  } else if(response.status === 'fail') {
    alert("Message failed to send.")
  }
})
}
}

export default App;