/*
 *
 * CommunityList
 *
 */

import React from 'react'
import PropTypes from 'prop-types'
import R from 'ramda'

import Popover from '../Popover'
import { Wrapper, Logo, PopoverInfo } from './styles'

import { uid, makeDebugger } from '../../utils'

/* eslint-disable no-unused-vars */
const debug = makeDebugger('c:CommunityList:index')
/* eslint-enable no-unused-vars */

const CommunityList = ({ items, emptyHint }) => {
  if (R.isEmpty(items)) {
    return !R.isEmpty(emptyHint) ? (
      <React.Fragment>{emptyHint}</React.Fragment>
    ) : null
  }

  return (
    <Wrapper>
      {items.map(community => (
        <Popover
          key={uid.gen()}
          placement="bottom"
          trigger="hover"
          content={<PopoverInfo>{community.title}</PopoverInfo>}
        >
          <div>
            <Logo src={community.logo} />
          </div>
        </Popover>
      ))}
    </Wrapper>
  )
}

CommunityList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      raw: PropTypes.string,
      title: PropTypes.string,
      logo: PropTypes.string,
    })
  ),
  emptyHint: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
}

CommunityList.defaultProps = {
  items: [],
  emptyHint: '',
}

export default CommunityList