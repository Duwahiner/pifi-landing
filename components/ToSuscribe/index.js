import styled from '@emotion/styled'
import PropTypes from 'prop-types'

import {
  Box,
  Flex,
  Container, 
  WrapperContainer,
  Image,
  Link
} from '../../util/template'
import logotipo from '../../assets/svg/icon-arrows-rigth.svg'
import { Text } from '../Text'

const ContentItems = styled(Flex)``
const ContentButton = styled(Flex)``

import styles from './to-suscribe.module.scss'
import { Input } from '../Input'

export const ToSuscribe = ({
    theme,
    handleOnchange,
    inputValue,
    handleOnBlur,
    errorValue,
    isValideEmail,
    handleSubcriptionEmail
  }) => {
  return (
    <Container width={[1]}> 
      <WrapperContainer width={[1]} justifyContent='center'>
        <ContentItems width={[1, 1 / 12 * 5]} my={['90px']} bg=''>
          <Flex
            flexDirection='column'
            width={[1]}
          >
            <Flex width={[1]} justifyContent='center'>
              <Box width={['auto']} mb={[1]}>
                <Text
                  type='span'
                  fontFamily='RobotoMedium'
                  title='NEWSLETTER'
                  fontSize='13px'
                  textAlign='center'
                  color={theme.colors.bgExtent}
                />
              </Box>
            </Flex>
            
            <Flex width={[1]} justifyContent='center'>
              <Box width={['auto']} mb={[1]}>
                <Text
                  type='span'
                  fontFamily='Roboto'
                  title='SUSCRIBITE'
                  fontSize='40px'
                  textAlign='center'
                  color={theme.colors.title}
                />
              </Box>
            </Flex>

            <Flex width={[1]} justifyContent='center'>
              <Box width={['auto']} mb={['20px']}>
                <Text
                  type='span'
                  fontFamily='RobotoMedium'
                  title='Y enterate de todas las novedades'
                  fontSize='13px'
                  textAlign='center'
                  color={theme.colors.title}
                />
              </Box>
            </Flex>

            <Flex width={[1]} justifyContent='center' px={['10px', 0]}>
              <Flex 
                width={[1]}
                mb={[1]}
                height={['50px']}
                sx={{
                  border:
                    errorValue.state === 'error'
                      ? `solid 1px red`
                      : `solid 1px ${theme.colors.title}`
                }}
              >
                <Box width={[1]}>
                  <Input
                    id=''
                    type='email'
                    disabled={false}
                    placeholder='Ingresa tu email'
                    value={inputValue}
                    handleOnchange={handleOnchange}
                    handleOnBlur={handleOnBlur}
                  />
                </Box>
    
                <ContentButton
                  width={['auto']}
                  px={['20px']}
                  className={styles.contentButton} 
                  onClick={(event) => {
                      if (errorValue.state !== 'error') handleSubcriptionEmail(event)
                  }}
                  sx={{
                    cursor: !isValideEmail ? 'not-allowed' : 'pointer'
                  }}
                >
                  <Image src={logotipo} alt='Logo Pufi' width={25} />
                </ContentButton>
              </Flex>
            </Flex>
            
            {
              errorValue.state === 'error'
                ? (
                    <Flex width={[1]}>
                      <Box width={['auto']} mb={['20px']}>
                        <Text
                          type='span'
                          fontFamily='RobotoMedium'
                          title={errorValue.message}
                          fontSize='13px'
                          textAlign='center'
                          color={
                            errorValue.state === 'error'
                              ? 'red'
                              : ''
                          }
                        />
                      </Box>
                    </Flex>
                  )
                : <Box width={['15px']} height={['18px']} mb={['20px']} />
            }
          </Flex>
        </ContentItems>
      </WrapperContainer>
    </Container>
  )
}

ToSuscribe.propTypes = {
  theme: PropTypes.object,
  inputValue: PropTypes.string.isRequired,
  handleOnchange: PropTypes.func.isRequired,
  handleOnBlur: PropTypes.func.isRequired,
  errorValue: PropTypes.object,
  isValideEmail: PropTypes.bool.isRequired,
  handleSubcriptionEmail: PropTypes.func.isRequired
}
