import React from 'react'
import PropTypes from 'prop-types'
import loading from './Spinner-3.gif' //importing spiner gif as name with loading

const Spinner = () => {
    return (
      <div className='text-center'>
        <img src={loading} alt="loading" />
      </div>
    )
}

export default Spinner
