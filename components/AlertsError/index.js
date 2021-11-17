import PropTypes from 'prop-types'

import { Box, Flex, Container, WrapperContainer, Image } from '../../util/template'
import { ButtonSecondary } from '../ButtonSecondary'
import { Text } from '../Text'
import iconClose from '../../assets/svg/icon-error.svg'

import styles from './alerts.module.scss'

export const AlertsError = ({
  theme,
  handleClose,
}) => {
  return (
    <Container className={styles.container}>
      <WrapperContainer className={styles.wrapperContainer}>
        <Flex width={1} flexDirection='column' alignItems='center'>
          <Flex width={1} flexDirection='column' alignItems='center'>
            <Box mb='16px'>
              <Image src={iconClose} alt='Icono error' width={70} height={70} />
            </Box>
          </Flex>

          <Box mb='32px'>
            <Text
              type='span'
              fontFamily='Roboto'
              title='Error inesperado, intentalo nuevamente'
              fontSize='16px'
              color={theme.colors.colorText}
            />
          </Box>

          <Flex width={1} justifyContent='center'>
            <Box width={1 / 12 * 5}>
              <ButtonSecondary
                width={1}
                title='Cerrar'
                fontFamily='RobotoBold'
                fontSize='18px'
                color={theme.colors.title}
                handleOnClick={() => handleClose()}
              />
            </Box>
          </Flex>
        </Flex>
      </WrapperContainer>
    </Container>
  )
}

AlertsError.propTypes = {
  theme: PropTypes.object.isRequired,
  handleClose: PropTypes.func.isRequired,
}
