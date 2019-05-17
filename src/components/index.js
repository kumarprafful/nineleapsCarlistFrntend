import React, {Component, Fragment} from 'react';
import axios from 'axios';

import {Input} from 'reactstrap';
import {APIURL} from '../constants';

import CarTable from './displayTable';
import ChartModal from './chartModal';
import SSpinner from './spinner';

class DisplayAll extends Component{

  constructor(props){
    super(props);
    this.state = {
      cars_list: null,
      car_list_columns: null,
      avg: {
        us_avg:null,
        jp_avg: null,
        eu_avg: null,
      },
      graphData: null,

      loading: false,
    };

  }

  componentWillMount(){
    this.fetchCars();
    this.fetchAverages();
  }


  fetchAverages(){
    const url = `${APIURL}avg`;
    axios.get(url)
    .then(res => {
      this.setState({avg: res.data});
      if (this.state.avg!=null) {
        const data = [
          {
            "name": "US",
            "avg": this.state.avg.us_avg,
          },
          {
            "name": "Europe",
            "avg": this.state.avg.eu_avg,
          },
          {
            "name": "Japan",
            "avg": this.state.avg.jp_avg,
          },
        ];
        this.setState({graphData:data})
      }
    });


  }

  fetchCars() {
    const url = `${APIURL}all_cars`;
    this.setState({loading:true})
    axios.get(url)
    .then(res => {
      // console.log(res);
      this.setState({cars_list:res.data},()=> { this.setState({loading:false})});
    });

    const columns = [
      {
        Header: 'Car',
        accessor: 'car_name',
      },
      {
        Header: 'Origin',
        accessor: 'origin',
      },
      {
        Header: 'Model',
        accessor: 'model',
      },
      {
        Header: 'MPG',
        accessor: 'mpg',
      },
      {
        Header: 'Cylinders',
        accessor: 'cylinders',
      },
      {
        Header: 'Horsepower',
        accessor: 'horsepower',
      },
      {
        Header: 'Displacement',
        accessor: 'displacement',
      },
      {
        Header: 'Acceleration',
        accessor: 'acceleration',
      },{
        Header: 'Weight',
        accessor: 'weight',
      },
    ];
    this.setState({car_list_columns:columns});
  }

  originFilter(e){
    if(e.target.value === 'All'){
      this.fetchCars();
    } else {
      const origin = e.target.value
      const url = `${APIURL}max/${origin}`;
      this.setState({loading:true});
      axios.get(url)
      .then(res => {
        this.setState({cars_list:res.data},()=> { this.setState({loading:false})})
      })
    }
  }

  displayCars(){
    if (this.state.cars_list===null || this.state.loading===true){
      return <SSpinner />;
    }
    else{
      return (
        <Fragment>
          <CarTable
            carData={this.state.cars_list}
            columns={this.state.car_list_columns}
          />
        </Fragment>
      )
    }
  }

  render() {
    return (
      <Fragment>
      <div className="header">
        <div className="inline">
          <span>Filter by Origin(max disp):
          <Input type="select" onChange={(e) => this.originFilter(e)}>
            <option defaultValue>All</option>
            <option>US</option>
            <option>Europe</option>
            <option>Japan</option>
          </Input>
          </span>
          <ChartModal graphData={this.state.graphData} />
        </div>
      </div>
        {this.displayCars()}
      </Fragment>
    );
  }
}

export default DisplayAll;
