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
import IconArrowsBottom from '../../assets/svg/icon-arrows-bottom.svg'

export const ContentMenu = styled(Flex)``
export const ContentItemsMenu = styled(Flex)``
export const ContentTitle = styled(Flex)``
export const ContentIcons = styled(Flex)``
export const RouterLink = styled.a``

import styles from './mini-menu.module.scss'

export const MiniMenu = ({
  theme,
  handleShowAlert
}) => {
  return (
    <Container className={styles.container} bg=''>
      <WrapperContainer className={styles.wrapperContainer}>
        <ContentMenu width={1} alignItems='center'>
          <ContentItemsMenu
            pr={['15px']}
            pb={['0px']}
            sx={{
              borderRight:
                `solid 1px ${theme.colors.bgInput}`,
              cursor: 'pointer'
            }}
          >
           <ContentTitle mr={['6px']} onClick={handleShowAlert}>
              <Link href='#'>
                <a className={styles.linkA}>
                  <Text
                    type='span'
                    fontFamily='RobotoBold'
                    title='MI CUENTA'
                    fontSize='11px'
                    textAlign='center'
                    color={theme.colors.bgInput}
                  />
                </a>
              </Link>
            </ContentTitle>

            <ContentIcons justifyContent='center'>
              <Flex width={['auto']} bg=''>
                <Image src={IconArrowsBottom} alt='Icono arrows' width={14} height={14} />
              </Flex>
            </ContentIcons>
          </ContentItemsMenu>

          <ContentItemsMenu
            pl={['15px']}
            pb={['0px']}
          >
           <ContentTitle onClick={handleShowAlert} >
              <Link href='#' >
                <a className={styles.linkA}>
                  <Text
                    type='span'
                    fontFamily='RobotoBold'
                    title='MI COMPRA'
                    fontSize='11px'
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

MiniMenu.propTypes = {
  theme: PropTypes.object.isRequired,
  handleShowAlert: PropTypes.func.isRequired,
}
