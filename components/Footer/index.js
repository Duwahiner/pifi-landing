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
import logotipo from '../../assets/svg/logo-pufi-black.svg'
import facebook from '../../assets/svg/icon-facebook.svg'
import instagram from '../../assets/svg/icon-instagram.svg'
import twitter from '../../assets/svg/icon-twittes.svg'
import logoSegurity from '../../assets/images/logos-security.jpg'
import logoBrandLive from '../../assets/images/logos-brandlive.jpg'
import { Text } from '../Text'
import { WrapperPadding } from '../WrapperPadding'

const ContentFooter = styled(Flex)``
const ContentItems = styled(Flex)``
const ContetCopyright = styled(Flex)``

import styles from './footer.module.scss'

export const Footer = ({ theme }) => {
  return (
    <Container width={[1]} className={styles.container}>
      <WrapperContainer width={[1]}>
        <ContentFooter
          width={[1]}
          className={styles.wrapperFlexFooter}
          flexDirection='column'
        >
          <WrapperPadding>
            <ContentItems
              width={[1]}
              my={['10px', '40px']}
              flexDirection={['column', 'row']}
            >
              <Flex
                width={[1, 1 / 12 * 2.2]}
                justifyContent={['center', 'flex-start']}
                pb={['20px', '0px']} 
              >
                <Image src={logotipo} alt='Logo Pufi' width={60} />
              </Flex>

              <Flex
                flexDirection={['row', 'column']}
                flexWrap='wrap'
                justifyContent={['space-between', 'flex-start']}
                width={[1, 1 / 12 * 2.2]}
                pb={['20px', '0px']} 
              >
                <Box mb={[1]}>
                  <Link href='#pufi-puff'>
                    <a className={styles.linkA}>
                      <Text
                        type='span'
                        fontFamily='RobotoBold'
                        title='PUFI PUFF'
                        fontSize='11px'
                        textAlign='center'
                        color={theme.colors.colorTex}
                      />
                    </a>
                  </Link>
                </Box>

                <Box  mb={[1]}>
                  <Link href='#pufi-rain'>
                    <a className={styles.linkA}>
                      <Text
                        type='span'
                        fontFamily='RobotoBold'
                        title='PUFI RAIN'
                        fontSize='11px'
                        textAlign='center'
                        color={theme.colors.colorTex}
                      />
                    </a>
                  </Link>
                </Box>
                
                <Box mb={[1]}>
                  <Link href='/'>
                    <a className={styles.linkA}>
                      <Text
                        type='span'
                        fontFamily='RobotoBold'
                        title='PUFI CART'
                        fontSize='11px'
                        textAlign='center'
                        color={theme.colors.colorTex}
                      />
                    </a>
                  </Link>
                </Box>

                <Box>
                  <Link href='#pufi-cart'>
                    <a className={styles.linkA}>
                      <Text
                        type='span'
                        fontFamily='RobotoBold'
                        title='PUFI NAP'
                        fontSize='11px'
                        textAlign='center'
                        color={theme.colors.colorTex}
                      />
                    </a>
                  </Link>
                </Box>
              </Flex>

              <Flex
                flexDirection={['row', 'column']}
                flexWrap='wrap'
                justifyContent={['center', 'flex-start']}
                width={[1 / 12 * 12, 1 / 12 * 2.2]}
                pl={['0px','20px', '40px']}
                py={['20px','0px']}
                sx={{
                  borderLeft: [
                    `solid 0px ${theme.colors.bgAlerts}`,, 
                    `solid 1px ${theme.colors.bgAlerts}`],
                  borderTop: [
                    `solid 1px ${theme.colors.bgAlerts}`,
                    `solid 0px ${theme.colors.bgAlerts}`,
                  ]
                }}
              >
                <Box mb={[1]} mx={['20px', '0px']}>
                  <Link href='#pufi-nap'>
                    <a className={styles.linkA}>
                      <Text
                        type='span'
                        fontFamily='RobotoBold'
                        title='CONTACTO'
                        fontSize='11px'
                        textAlign='center'
                        color={theme.colors.colorTex}
                      />
                    </a>
                  </Link>
                </Box>

                <Box mb={[1]} mx={['20px', '0px']}>
                  <Link href='#'>
                    <a className={styles.linkA}>
                      <Text
                        type='span'
                        fontFamily='RobotoBold'
                        title='AYUDA'
                        fontSize='11px'
                        textAlign='center'
                        color={theme.colors.colorTex}
                      />
                    </a>
                  </Link>
                </Box>

                <Box mb={[1]} mx={['20px', '0px']}>
                  <Link href='#'>
                    <a className={styles.linkA}>
                      <Text
                        type='span'
                        fontFamily='RobotoBold'
                        title='CÓMO COMPRAR'
                        fontSize='11px'
                        textAlign='center'
                        color={theme.colors.colorTex}
                      />
                    </a>
                  </Link>
                </Box>

                <Box mb={[1]} mx={['20px', '0px']}>
                  <Link href='#'>
                    <a className={styles.linkA}>
                      <Text
                        type='span'
                        fontFamily='RobotoBold'
                        title='TÉRMINOS Y CONDICIONES'
                        fontSize='11px'
                        textAlign='center'
                        color={theme.colors.colorTex}
                      />
                    </a>
                  </Link>
                </Box>
              </Flex>

              <Flex
                width={[1, 1 / 12 * 2.7]}
                flexDirection='column'
                justifyContent={['space-between']}
                alignItems={['center', '']}
                pl={['0px','20px', '40px']}
                py={['20px','0px']}
                sx={{
                  borderLeft: [
                    `solid 0px ${theme.colors.bgAlerts}`,, 
                    `solid 1px ${theme.colors.bgAlerts}`],
                  borderTop: [
                    `solid 1px ${theme.colors.bgAlerts}`,
                    `solid 0px ${theme.colors.bgAlerts}`,
                  ]
                }}
              >
                <Box mb={[1]} mx={['20px', '0px']}>
                  <Text
                    type='span'
                    fontFamily='RobotoBold'
                    title='COMPRA 100% SEGURA'
                    fontSize='11px'
                    textAlign='center'
                    color={theme.colors.colorTex}
                  />
                </Box>

                <Box mb={[1]}>
                  <Image src={logoSegurity} alt='Logo Segurity' width={140} height={38} />
                </Box>
              </Flex>

              <Flex
                width={[1, 1 / 12 * 2.7]}
                flexDirection={['row', 'column']}
                justifyContent={['center', '']}
                alignItems={['center', '']}
                py={['20px','0px']}
                pl={['0px','20px', '40px']}
                sx={{
                  borderLeft: [
                    `solid 0px ${theme.colors.bgAlerts}`,, 
                    `solid 1px ${theme.colors.bgAlerts}`],
                  borderTop: [
                    `solid 1px ${theme.colors.bgAlerts}`,
                    `solid 0px ${theme.colors.bgAlerts}`,
                  ]
                }}
              >
                <Box mb={[1]} mx={['20px', '0px']}>
                  <Text
                    type='span'
                    fontFamily='RobotoBold'
                    title='SIGUENOS EN'
                    fontSize='11px'
                    textAlign='center'
                    color={theme.colors.colorTex}
                  />
                </Box>

               <Flex py={['10px']}>
                <Box mb={[1]} mr={['20px']}>
                  <Link href='#'>
                    <a>
                      <Image src={facebook} alt='facebook' width={22} height={22} />
                    </a>
                  </Link>
                </Box>

                <Box mb={[1]} mr={['20px']}>
                  <Link href='#'>
                    <a>
                      <Image src={twitter} alt='twitter' width={22} height={22} />
                    </a>
                  </Link>
                </Box>

                <Box mb={[1]} mr={['']}>
                  <Link href='#'>
                    <a>
                      <Image src={instagram} alt='instagram' width={22} height={22} />
                    </a>
                  </Link>
                </Box>
               </Flex>
              </Flex>
            </ContentItems>
          </WrapperPadding>

          <WrapperPadding>
            <ContetCopyright
              py={['0px', '15px']}
              justifyContent={['space-between']}
              sx={{
                borderTop:
                  `solid 1px ${theme.colors.bgAlerts}`
              }}
            >
              <Box>
                <Text
                  type='span'
                  fontFamily='RobotoLight'
                  title='PUFI Copyright 2021 - Todos los derechos reservados'
                  fontSize='11px'
                  textAlign='center'
                  color={theme.colors.colorText}
                />
              </Box>

              <Box>
                <Image src={logoBrandLive} alt='Logo brandlive' width={90} height={14} />
              </Box>
            </ContetCopyright>
          </WrapperPadding>
        </ContentFooter>
      </WrapperContainer>
    </Container>
  )
}

Footer.propTypes = {
  theme: PropTypes.object,
}
