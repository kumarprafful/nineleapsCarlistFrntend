import React, {Component} from 'react';
import {Button, Modal, ModalHeader, ModalBody} from 'reactstrap';

import {BarChart, Label, XAxis, YAxis, Tooltip, Bar, Legend} from 'recharts';

class ChartModal extends Component {
  constructor(props){
    super(props);
    this.state = {
      modal: false,
    };
    this.toggle = this.toggle.bind(this);

  }

  toggle(){
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }


  render() {
    return (
      <span className="chart-btn">
        <Button onClick={this.toggle}>Chart</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} size="lg">
          <ModalHeader toggle={this.toggle}>Average</ModalHeader>

          <ModalBody>
            <div style={{width:"auto", height:"28em"}}>
              <BarChart width={730} height={400} data={this.props.graphData}>
                <XAxis dataKey="name">
                  <Label value="Origin" position="insideBottomRight" />
                </XAxis>
                <YAxis>
                  <Label value="Average displacement" angle={-90} position='insideLeft' />
                </YAxis>
                <Tooltip />
                <Legend verticalAlign="top" />
                <Bar dataKey="avg" fill="#00ceff" />
              </BarChart>
            </div>
          </ModalBody>
        </Modal>
      </span>

    );
  }
}

export default ChartModal;
