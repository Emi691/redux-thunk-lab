import React, { Component } from 'react';
import { connect } from 'react-redux'
import CatList from './CatList'
import { fetchCats } from './actions/catActions'

class App extends Component {  
  
  componentDidMount() {
    console.log(this.props)
    this.props.fetchCats()
  }

  renderLoading() {
    if (this.props.loading) {
      return <h4>Loading...</h4>
    }
  }
  
  render() {
    console.log(this.props.catPics)
    return (
      <div className="App">
        <h1>CatBook</h1>
        {this.renderLoading()}
        <CatList catPics={this.props.catPics}/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    catPics: state.cats,
    loading: state.loading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchCats: () => dispatch(fetchCats())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

