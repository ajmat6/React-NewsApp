import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class NewsItem extends Component {
    render() {
    //Destructuring and pulling title and description from props:
    let {title,description, imageurl, newsurl, author, date, sources} = this.props;  
    return (
      <div className='my-3 mx-5'>
        <div className="card" style={{height: '32rem'}}>

            {/* for the newsource badge and style is for pushing it inwards*/}
            <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{left: '85%'}}>
                {sources}
                {/* <span class="visually-hidden">unread messages</span> */}
            </span>

            <img src={imageurl === null?imageurl='https://brand.asana.biz/images/f_auto,q_auto/v1682365456/AvocadoProblem-1/AvocadoProblem-1.jpg?_i=AA':imageurl} className="card-img-top" alt="..." />
            <div className="card-body">
                
                <h5 className="card-title">{title}... </h5>
                <p className="card-text">{description}...</p>

                {/* if author is null it will show unknown and also converting the date obtained into GMT formt */}
                <p className='card-text'><small className='text-muted'>By {author == null? 'unknown' : author} on {new Date(date).toGMTString()}</small></p>

                {/* style is used for fixing the button at bottom of the card */}
                <a rel="noreferrer" href={newsurl} target='_blank' className="btn btn-dark" style={{position: 'absolute', bottom: '1rem'}}>Read More</a>
            </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
