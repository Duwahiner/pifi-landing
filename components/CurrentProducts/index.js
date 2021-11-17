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
import { ButtonPrimary } from '../ButtonPrimary'
import iconArrowsBottom from '../../assets/svg/icon-arrows-bottom-end.svg'
import iconArrowsRight from '../../assets/svg/icon-arrows-rigth-end.svg'

import { Text } from '../Text'

const ContentItems = styled(Flex)`
  position: relative;
`
const ContentDescribeProduct = styled(Flex)``

const ContentImage = styled(Flex)`
  background-color: transparent;
  background: ${({urlImg}) => (
    `url(${urlImg}) center center no-repeat`
  )
  };
  background-size: cover;
`

import styles from './current-products.module.scss'

export const CurrentProducts = ({
  theme,
  position,
  title,
  titleButton,
  textDescription,
  textLink,
  urlImg,
  urlImgMini,
  id,
  handleShowAlert
}) => {

  return (
    <Container width={[1]} id={id}>
      <WrapperContainer width={[1]} justifyContent='center'>
        <ContentItems
          width={[1]}
         flexDirection={['column', 'row']} 
        >
          {
            position === 'left' && (
              <Flex className={styles.directionImgLeft}>
                <Box className={styles.img} display={['none', '']}>
                  <Image src={iconArrowsRight} alt='Icono arrows' width={15} />
                </Box>
              </Flex>
            )
          }

          {
            position === 'left' && (
              <ContentImage 
                width={[1, 1 / 12 * 6]}
                className={styles.contentImag}
                urlImg={urlImg}
              >

                <Flex
                  width={[1]}
                  height={['100%']}
                  className={styles.contentFlexImage} 
                  justifyContent='center'
                  alignItems='center'
                >
                  <Box width={['auto']} mt={['']}>
                    <ButtonPrimary
                      width={'135px'}
                      title={titleButton}
                      fontFamily='RobotoBold'
                      fontSize='14px'
                      handleOnClick={() => handleShowAlert(true)}
                    />
                  </Box>
                </Flex>
              </ContentImage>
            )
          }

          <ContentDescribeProduct
            width={[1, 1 / 12 * 6]}
            className={styles.contentProduct}
            justifyContent='center'
            alignItems='center'
            order={['2', 1]}
          >

            <Flex width={['auto']} 
              flexDirection='column'
              alignItems='center'
            >
              <Box
                width={['200px']}
                mb={['20px']}
                >
                <Image src={urlImgMini} alt={urlImgMini} width={200} height={150} />
              </Box>

              <Box width={['auto']} mb={['30px']}>
                <Text
                  type='span'
                  fontFamily='Roboto'
                  title={title}
                  fontSize='24px'
                  textAlign='center'
                  color={theme.colors.title}
                />
              </Box>

              <Box
                width={['40px']}
                height={['2px']}
                mb={['20px']}
                bg={theme.colors.bgAlerts}
              />

              <Flex width={[1, 1 / 12 * 8]} mb={['20px']} justifyContent='center'>
                <Text
                  type='span'
                  fontFamily='Roboto'
                  title={textDescription}
                  fontSize='14px'
                  textAlign='center'
                  color={theme.colors.colorText}
                  lineHeight='20px'
                />
              </Flex>

              <Flex alignItems='center'>
                <Box
                  mt='2px'
                  mr='5px'
                  display={['none', '']}
                  sx={{
                    transform: 'rotate(-90deg)'
                  }}
                >  
                  <Image src={iconArrowsBottom} alt='Icono arrows' width={10} />
                </Box>

                <Box>
                  <Link href={`#${id}`}>
                    <a className={styles.linkA}>
                      <Text
                        type='span'
                        fontFamily='RobotoBold'
                        title={textLink}
                        fontSize='12px'
                        textAlign='center'
                        color={theme.colors.colorText}
                      />
                    </a>
                  </Link>
                </Box>
              </Flex>
            </Flex>
          </ContentDescribeProduct>

          {
            position === 'right' && (
              <Flex
                className={styles.directionImgRight}
                order={[
                  position === 'right' ? '1' : '2'
                ]}
              >
                <Box className={styles.img}>
                  <Image src={iconArrowsRight} alt='Icono arrows' width={15} />
                </Box>
              </Flex>
            )
          }

          {
            position === 'right' && (
              <ContentImage 
                width={[1, 1 / 12 * 6]}
                className={styles.contentImag}
                urlImg={urlImg}
                order={[
                  position === 'right' ? '1' : '2'
                ]}
              >

                <Flex
                  width={[1]}
                  height={['100%']}
                  className={styles.contentFlexImage} 
                  justifyContent='center'
                  alignItems='center'
                >
                  <Box width={['auto']} mt={['']}>
                    <ButtonPrimary
                      width={'135px'}
                      title={titleButton}
                      fontFamily='RobotoBold'
                      fontSize='14px'
                      handleOnClick={() => handleShowAlert(true)}
                    />
                  </Box>
                </Flex>
              </ContentImage>
            )
          }
        </ContentItems>
      </WrapperContainer>
    </Container>
  )
}

CurrentProducts.propTypes = {
  theme: PropTypes.object,
  handleShowAlert: PropTypes.func.isRequired,
  urlImgMini: PropTypes.string.isRequired
}
