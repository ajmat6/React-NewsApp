import React, { Component } from 'react'
import PropTypes from 'prop-types'
import NewsItem from './NewsItem'

export class News extends Component {
  static propTypes = {

  }

  render() {
    return (
      <div className='container my-5'>
        <h1 className='text-align-center'>Newsmat - Today's Top Headlines</h1>
        <div className="row">
            <div className="col-md-4">
                <NewsItem title="My Title" description="This is a simple description"/>
            </div>
            <div className="col-md-4">
                <NewsItem title="My Title" description="This is a simple description"/>
            </div>
            <div className="col-md-4">
                <NewsItem title="My Title" description="This is a simple description"/>
            </div>
        </div>
      </div>
    )
  }
}

export default News
