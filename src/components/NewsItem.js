import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class NewsItem extends Component {
    render() {
    //Destructuring and pulling title and description from props:
    let {title,description, imageurl, newsurl} = this.props;  
    return (
      <div className='my-3'>
        <div className="card" style={{width: '18rem', height: '25rem'}}>
            <img src={imageurl == null?imageurl='https://www.brandingmag.com/wp-content/uploads/2023/04/COVER_001_AndiDavids_1200x676-1200x628.jpg':imageurl} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{title}...</h5>
                <p className="card-text">{description}...</p>
                <a href={newsurl} target='_blank' className="btn btn-primary">Read More</a>
            </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
