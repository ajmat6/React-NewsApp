import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class NewsItem extends Component {
    render() {
    //Destructuring and pulling title and description from props:
    let {title,description, imageurl, newsurl} = this.props;  
    return (
      <div className='my-3'>
        <div className="card" style={{width: '18rem'}}>
            <img src={imageurl} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <a href="#" className="btn btn-primary">Read More</a>
            </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
