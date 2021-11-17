import styled from '@emotion/styled'
import PropTypes from 'prop-types'

import { Box, WrapperContainer as Container } from '../../util/template'

import styles from './input.module.scss'

const FormControl = styled.form``

export const Input = ({
  type,
  id,
  value,
  disabled,
  placeholder,
  handleOnchange,
  handleOnBlur
}) => {
  return (
    <Container width={1} height='48px'>
      <FormControl className={styles.formControl}>
        <Box flex='auto' width={[1, 1]}>
          <input
            type={type}
            id={id}
            disabled={disabled}
            value={value}
            placeholder={placeholder}
            onChange={handleOnchange}
            onBlur={handleOnBlur}
            className={styles.inputText}
          />
        </Box>
      </FormControl>
    </Container>
  )
}

Input.defaultProps = {
  type: 'text',
  id: '',
  placeholder: 'Escribe algo que se te ocurra',
  disabled: false
}

Input.propTypes = {
  type: PropTypes.string,
  id: PropTypes.string,
  value: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  placeholder: PropTypes.string.isRequired,
  handleOnchange: PropTypes.func.isRequired,
  handleOnBlur: PropTypes.func.isRequired,
}
