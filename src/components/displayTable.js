import React, {Component} from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css'

class CarTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data_size: this.props.carData.length,
      filter_size: 20,
    };

  }
  componentWillMount(){
    this.fetchDataSize()
  }

  fetchDataSize(){
        if(this.state.data_size < 11){
          console.log(this.state.data_size);
          this.setState({filter_size:5});
        }
  }

  render() {
    return (
      <ReactTable
        data={this.props.carData}
        columns={this.props.columns}
        className="-highlight"
        defaultPageSize={this.state.filter_size}
       />
    );
  }
}

export default CarTable;
