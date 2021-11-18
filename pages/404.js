import { useRouter } from 'next/router'
import { Box, Container, WrapperContainer } from '../util/template'
import { Text } from '../components/Text'
import { ButtonSecondary } from '../components/ButtonSecondary'

import styles from '../assets/styles/404.module.scss'

import { useTheme } from '../hooks/useTheme'

const NotFound = (props) => {
  const router = useRouter()
  const theme = useTheme()

  return (
    <Container width={1}>
      <WrapperContainer
        className={styles.wrapperContainer}
        width={1}
      >
        <Box>
          <Text
            type='span'
            fontFamily='RobotoBold'
            title='Erros 404 | La la pagina no existe'
            fontSize='18px'
            color={theme.colors.title}
          />
        </Box>

        <Box mt='32px' width={[1 / 12 * 10, 1 / 12 * 2]}>
          <ButtonSecondary
            width={1}
            title='REGRESAR'
            fontFamily='RobotoBold'
            fontSize='18px'
            color={theme.colors.title}
            handleOnClick={() => router.back()}
          />
        </Box>
      </WrapperContainer>
    </Container>
  )
}

export default NotFound
