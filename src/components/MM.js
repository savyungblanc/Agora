/** @jsx jsx */
import React, { useCallback } from 'react'
import { css, jsx } from '@emotion/core'
import ContentBlock from './ContentBlock'
import Icon from './Icon'

import one from '../img/MM/MM1.jpg'
import two from '../img/MM/MM2.jpg'
import three from '../img/MM/MM3.jpg'
import four from '../img/MM/MM4.jpg'
import five from '../img/MM/MM5.jpg'
import six from '../img/MM/MM6.jpg'

const content = [one, two, three, four, five, six]

/**
 * @function MMRow
 */
const MMRow = ({ category, setActive }) => {
  const getPos = useCallback(e => {
    const pos = e.target.parentElement.getBoundingClientRect()
    setActive({ category, pos })
  }, [])

  return (
    <div
      className="MMRow"
      css={css`
        padding-left: 60px;
        overflow-x: hidden;

        .ContentBlock {
          flex: 18vw;
          flex-shrink: 0;
          height: 9.5vw;
          margin-right: 4px;
        }
      `}
    >
      <div
        css={css`
          h2 {
            margin: 20px 0 10px;
            color: white;
          }

          .block-wrapper {
            display: flex;
            width: 100%;
            position: relative;
          }
        `}
      >
        <h2>{category}</h2>

        <div className="block-wrapper">
          {content.map(img => (
            <ContentBlock key={img} img={img}>
              <Icon type="play" />
              <Icon type="info-circle" onClick={getPos} />
            </ContentBlock>
          ))}
        </div>
      </div>
    </div>
  )
}

export default MMRow