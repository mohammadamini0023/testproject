import React, { Component } from 'react'
import { Carousel} from 'react-bootstrap'
import {Bar} from 'react-chartjs-2';
import data from './data.json'
import Cookies from 'js-cookie';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      products: data,
      visitpage: Cookies.get('visit'),
    }
    this.renderProduct = this.renderProduct.bind(this);
    this.seepage = this.seepage.bind(this);
  }

  seepage(){
    if(Cookies.get('visit') != false){
      Cookies.set('visit', 1, 1);
    }
        
  }

  renderProduct() {
    return this.state.products.map((product) => {
      return (
        <Carousel.Item key={product.price} onClick={this.seepage()} >
          <img
            className="d-block w-100"
            src={product.image}
            balt="First slide"
          />
          <Carousel.Caption>
            <h3>{product.title}</h3>
            <p>price: {product.price}</p>
          </Carousel.Caption>
        </Carousel.Item>
      )
    })
  }
  

  render() {

    let data= {
      labels: ["May","June", "July"],
      datasets: [{
      label: "my visit page",
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: [this.state.visitpage],
      }]}

    return (
      <div>
        <Carousel>
          {this.renderProduct()}
        </Carousel>
        < Bar data={data} />
      </div>
    )
  }
}

export default App;
