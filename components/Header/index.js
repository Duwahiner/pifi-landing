import styled from '@emotion/styled'
import PropTypes from 'prop-types'

import {
  Box,
  Flex,
  Container,
  WrapperContainer
} from '../../util/template'
import { DescriptionPagesTitles } from '../DescriptionPagesTitles'
import { Logo } from '../Logo'
import { Menu } from '../Menu'
import { MiniMenu } from '../MiniMenu'
import { Slider } from '../Sliders'
import { WrapperPadding } from '../WrapperPadding'


export const ContentSlider = styled(Flex)``
export const ContentHeader = styled(Flex)``

import styles from './header.module.scss'

export const Header = ({ theme, data, handleShowAlert }) => {
  return (
    <Container className={styles.container} width={1}>
      <WrapperContainer
        className={styles.wrapperContainer}
        width={1}
        justifyContent='center'
      >
        <ContentSlider className={styles.contentSlider}>
          <Slider theme={theme} data={data} />
        </ContentSlider>

          <ContentHeader className={styles.contentHeader}> 
            <WrapperPadding className={styles.contentPadding}>
              <Flex
                className={styles.wrapperFlexMenu}
                width={[1 / 12 * 12]}
                height={['auto', '130px']}
                justifyContent='space-between'
                flex='none'
                flexDirection={['column', 'row']}
              >
                <Box
                  width={[1, 'auto']}
                  mr={['0px']}
                  mb={['10px', '0px' ]}
                >
                  <Flex height={['100%']} justifyContent='center' alignItems='center'>
                    <Logo theme={theme} />
                  </Flex>
                </Box>

                <Box
                  as='nav' 
                  width={[1, 'auto']}
                  mb={['20px', '0px' ]}
                >
                  <Flex height={['100%']} justifyContent='center' alignItems='center'>
                    <Menu  theme={theme} />
                  </Flex>
                </Box>

                <Box
                  width={[1, 'auto']}
                  bg=''
                >
                  <Flex
                    height={['100%']}
                    justifyContent={['center', 'center', 'flex-end']}
                    mt={['0px', '20px']}
                  >
                    <MiniMenu theme={theme} handleShowAlert={handleShowAlert} />
                  </Flex>
                </Box>
              </Flex>

              <Flex
                className={styles.wrapperFlexTitle}
                width={[1 / 12 * 12]}
                height={['auto', '100%']}
                justifyContent=''
                flex='auto'
              >
                <DescriptionPagesTitles
                  theme={theme}
                  title='ESTÁR CÓMODO, NUNCA FUE TAN FÁCIL'
                  handleShowAlert={handleShowAlert}
                />
              </Flex>
            </WrapperPadding>
          </ContentHeader>
      </WrapperContainer>
    </Container>
  )
}

Header.propTypes = {
  theme: PropTypes.object.isRequired,
  handleShowAlert: PropTypes.func.isRequired
}
