import styled from '@emotion/styled'
import PropTypes from 'prop-types'

import {
  Box,
  Flex,
  Container,
  WrapperContainer,
  Link,
  Image
} from '../../util/template'
import { Text } from '../Text'
import iconPufiPuff from '../../assets/svg/icon-pufi-puff.svg'
import iconPufiRain from '../../assets/svg/icon-pufi-rain.svg'
import iconPufiCart from '../../assets/svg/icon-pufi-cart.svg'
import iconPufiNap from '../../assets/svg/icon-pufi-nap.svg'

export const ContentMenu = styled(Flex)``
export const ContentItemsMenu = styled(Flex)``
export const ContentTitle = styled(Flex)``
export const ContentIcons = styled(Flex)``
export const RouterLink = styled.a``

import styles from './menu.module.scss'

export const Menu = ({
  theme
}) => {
  return (
    <Container className={styles.container} bg=''>
      <WrapperContainer className={styles.wrapperContainer}>
        <ContentMenu width={1} alignItems='center'>
          <ContentItemsMenu
            flexDirection={['column']}
            px={['20px']}
            pb={['5px']}
            sx={{
              borderRight:
                `solid 1px ${theme.colors.bgInput}`
            }}
          >
            <ContentIcons mb='5px' justifyContent='center'>
              <Flex width={['auto']} bg=''>
                <Image src={iconPufiPuff} alt='Icono pufi puff' width={40} height={30} />
              </Flex>
            </ContentIcons>
    
            <ContentTitle>
              <Link href='#pufi-puff'>
                <a className={styles.linkA}>
                  <Text
                    type='span'
                    fontFamily='RobotoBold'
                    title='PUFI PUFF'
                    fontSize='14px'
                    textAlign='center'
                    color={theme.colors.bgInput}
                  />
                </a>
              </Link>
            </ContentTitle>
          </ContentItemsMenu>
          
          <ContentItemsMenu
            flexDirection={['column']}
            px={['20px']}
            pb={['5px']}
            sx={{
              borderRight:
                `solid 1px ${theme.colors.bgInput}`
            }}
          >
            <ContentIcons mb={['5px']} justifyContent='center'>
              <Flex width={['auto']} bg=''>
                <Image src={iconPufiRain} alt='Icono pufi rain' width={40} height={30} />
              </Flex>
            </ContentIcons>
    
            <ContentTitle>
              <Link href='#pufi-rain'>
                <a className={styles.linkA}>
                  <Text
                    type='span'
                    fontFamily='RobotoBold'
                    title='PUFI RAIN'
                    fontSize='14px'
                    textAlign='center'
                    color={theme.colors.bgInput}
                  />
                </a>
              </Link>
            </ContentTitle>
          </ContentItemsMenu>

          <ContentItemsMenu
            flexDirection={['column']}
            px={['20px']}
            pb={['5px']}
            sx={{
              borderRight:
                `solid 1px ${theme.colors.bgInput}`
            }}
          >
            <ContentIcons mb={['5px']} justifyContent='center'>
              <Flex width={['auto']} bg=''>
                <Image src={iconPufiCart} alt='icono pufi cart' width={40} height={30} />
              </Flex>
            </ContentIcons>
    
            <ContentTitle>
              <Link href='#pufi-cart'>
                <a className={styles.linkA}>
                  <Text
                    type='span'
                    fontFamily='RobotoBold'
                    title='PUFI CART'
                    fontSize='14px'
                    textAlign='center'
                    color={theme.colors.bgInput}
                  />
                </a>
              </Link>
            </ContentTitle>
          </ContentItemsMenu>

          <ContentItemsMenu
            flexDirection={['column']}
            pl={['20px']}
            pb={['5px']}
          >
            <ContentIcons mb={['5px']}justifyContent='center'>
              <Flex width={['auto']} bg=''>
                <Image src={iconPufiNap} alt='icono pufi nap' width={40} height={30} />
              </Flex>
            </ContentIcons>
    
            <ContentTitle>
              <Link href='#pufi-nap'>
                <a className={styles.linkA}>
                  <Text
                    type='span'
                    fontFamily='RobotoBold'
                    title='PUFI NAP'
                    fontSize='14px'
                    textAlign='center'
                    color={theme.colors.bgInput}
                  />
                </a>
              </Link>
            </ContentTitle>
          </ContentItemsMenu>
        </ContentMenu>
      </WrapperContainer>
    </Container>
  )
}

Menu.propTypes = {
  theme: PropTypes.object.isRequired,
}
