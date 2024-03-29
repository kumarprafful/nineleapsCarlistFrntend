import React, {Component} from 'react';
import {Spinner} from 'reactstrap';

class SSpinner extends Component {
  render(){
    return (
      <div className="spinnerDiv">
       <Spinner type="grow" color="primary" />
       <Spinner type="grow" color="secondary" />
       <Spinner type="grow" color="success" />
       <Spinner type="grow" color="danger" />
       <Spinner type="grow" color="warning" />
       <Spinner type="grow" color="info" />
       <Spinner type="grow" color="light" />
       <Spinner type="grow" color="dark" />
       <p>This may take a while as the backend server is running on heroku</p>
     </div>
    );
  }
}
export default SSpinner;
