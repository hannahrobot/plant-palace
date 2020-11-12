import React from 'react'
import {connect} from 'react-redux'
import {updateProduct} from '../store/products'

class UpdateProduct extends React.Component {
  constructor() {
    super()
    this.state = {
      name: '',
      price: null,
      category: '',
      climate: '',
      season: '',
      description: '',
      inventory: null,
      imageUrl: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.updateProduct(this.state)
  }

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            name="name"
            type="text"
            onChange={this.handleChange}
            value={this.state.name}
          />
          <label htmlFor="description">Description:</label>
          <input
            name="description"
            type="text"
            onChange={this.handleChange}
            value={this.state.description}
          />
          <label htmlFor="category">Description:</label>
          <input
            name="category"
            type="text"
            onChange={this.handleChange}
            value={this.state.category}
          />
          <label htmlFor="imageUrl">Image URL:</label>
          <input
            name="imageUrl"
            type="text"
            onChange={this.handleChange}
            value={this.state.imageUrl}
          />
          <label htmlFor="price">Price:</label>
          <input
            name="price"
            type="text"
            onChange={this.handleChange}
            value={this.state.price}
          />
          <label htmlFor="climate">Climate:</label>
          <input
            name="climate"
            type="text"
            onChange={this.handleChange}
            value={this.state.climate}
          />
          <label htmlFor="season">Season:</label>
          <input
            name="season"
            type="text"
            onChange={this.handleChange}
            value={this.state.season}
          />
          <label htmlFor="inventory">Inventory:</label>
          <input
            name="inventory"
            type="text"
            onChange={this.handleChange}
            value={this.state.inventory}
          />
        </form>
      </>
    )
  }
}

const mapStateToProps = state => ({
  products: state.products
})

const mapDispatchToProps = dispatch => {
  return {
    updateProduct: product => dispatch(updateProduct(product))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UpdateProduct)
