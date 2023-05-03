import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class NewsItem extends Component {
    render() {
    //Destructuring and pulling title and description from props:
    let {title,description, imageurl, newsurl} = this.props;  
    return (
      <div className='my-3 mx-5'>
        <div className="card" style={{height: '25rem'}}>
            <img src={imageurl === null?imageurl='https://brand.asana.biz/images/f_auto,q_auto/v1682365456/AvocadoProblem-1/AvocadoProblem-1.jpg?_i=AA':imageurl} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{title}...</h5>
                <p className="card-text">{description}...</p>
                <a rel="noreferrer" href={newsurl} target='_blank' className="btn btn-dark">Read More</a>
            </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
