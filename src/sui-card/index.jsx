import React, { PropTypes } from 'react'
import cx from 'classnames'

export default function SuiCard (props) {
  const classNames = cx(props.className, {
    'sui-Card': !props.className,
    'sui-Card--landscape': props.landscapeLayout,
    'sui-Card--contentfirst': props.landscapeLayout && props.contentFirst
  })

  return (
    <div className={classNames}>
      <div className='sui-Card-primary'>
        {props.primary}
      </div>
      {
        props.secondary &&
          <div className='sui-Card-secondary'>
            {props.secondary}
          </div>
      }
    </div>
  )
}

SuiCard.propTypes = {
  className: PropTypes.string,
  contentFirst: PropTypes.bool,
  landscapeLayout: PropTypes.bool,
  primary: PropTypes.any.isRequired,
  secondary: PropTypes.any
}
