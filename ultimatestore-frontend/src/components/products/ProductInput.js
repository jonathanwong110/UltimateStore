import React, { Component } from 'react';

class ProductInput extends Component {

  constructor() {
    super()
    this.state = {
      title: '',
      price: '',
      description: '',
      image: ''
    }
  }

  handleChange = (e) => {
    this.setState({
        [e.target.name]: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = {...this.state}
    this.setState({
        title: '',
        price: '',
        description: '',
        image: ''
    });
    this.props.addProduct(newProduct)
  }


  render() {
    return (
      <div>
        Product Input
        <form onSubmit={e => this.handleSubmit(e)}>
        <br></br>
          <label>
              Title: 
              <input type="text" name="title" onChange={e => this.handleChange(e)} value={this.state.title}></input> 
          </label> 
          <label>
              Price: 
              <input type="text" name="price" onChange={e => this.handleChange(e)} value={this.state.price}></input>
          </label>
          <label>
              Description: <input type="text" name="description" onChange={e => this.handleChange(e)} value={this.state.description}></input> 
          </label>
          <label>
              Image: <input type="text" name="image" onChange={e => this.handleChange(e)} value={this.state.image}></input> 
          </label>
          <input type="submit" value="Create Product"></input>
        </form>
        <br></br>
        <br></br>
      </div>
    );
  }
};

export default ProductInput;