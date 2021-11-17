import PropTypes from 'prop-types'
import styled from '@emotion/styled'

import { Button } from '../../util/template'
import { Text } from '../Text'

import styles from './button-primary.module.scss'

export const ButtonPrimary = ({
  theme,
  color,
  title,
  fontFamily,
  fontSize,
  width,
  height,
  handleOnClick
}) => {
  return (
    <Button
      width={width}
      height={height}
      className={styles.buttonPrimary}
      onClick={handleOnClick}
      fontFamily={fontFamily}
      fontSize={fontSize}
      color={color}
    >
      {title}
    </Button>
  )
}


ButtonPrimary.defaultProps = {
  type: 'span',
  fontFamily: 'Roboto',
  color: '#FFF',
  fontSize: '16px'
}

ButtonPrimary.propTypes = {
  theme: PropTypes.object,
  handleOnClick: PropTypes.func.isRequired,
  title: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.elementType
  ]).isRequired,
  fontFamily: PropTypes.string,
  fontSize: PropTypes.string,
  color: PropTypes.string,
  width: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  height: PropTypes.string,
}
