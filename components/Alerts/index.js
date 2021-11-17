import PropTypes from 'prop-types'

import { Box, Flex, Container, WrapperContainer } from '../../util/template'
import { ButtonSecondary } from '../ButtonSecondary'
import { Text } from '../Text'

import styles from './alerts.module.scss'

export const Alerts = ({
  theme,
  handleClose,
}) => {
  return (
    <Container className={styles.container}>
      <WrapperContainer className={styles.wrapperContainer}>
        <Flex width={1} flexDirection='column' alignItems='center'>
          <Box mb='16px'>
            <Text
              type='span'
              fontFamily='RobotoBlack'
              title='MODAL DE PRUEBA'
              fontSize='25px'
              textAlign='center'
              color={theme.colors.title}
            />
          </Box>

          <Box mb='32px'>
            <Text
              type='span'
              fontFamily='Roboto'
              title='Esto puede cambiar con el paso de los días'
              fontSize='13px'
              color={theme.colors.colorText}
            />
          </Box>

          <Flex width={1} justifyContent='center'>
            <Box width={1 / 12 * 5}>
              <ButtonSecondary
                width={1}
                title='CERRAR'
                fontFamily='RobotoBold'
                fontSize='15px'
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

Alerts.propTypes = {
  theme: PropTypes.object.isRequired,
  handleClose: PropTypes.func.isRequired,
}
