import styled from '@emotion/styled'
import PropTypes from 'prop-types'

import {
  Box,
  Flex,
  Container, 
  WrapperContainer,
  Image,
} from '../../util/template'
import imag1 from '../../assets/images/instg/instg-01.png'
import imag2 from '../../assets/images/instg/instg-02.png'
import imag3 from '../../assets/images/instg/instg-03.png'
import imag4 from '../../assets/images/instg/instg-04.png'
import imag5 from '../../assets/images/instg/instg-05.png'
import imag6 from '../../assets/images/instg/instg-06.png'
import { Text } from '../Text'

const ContentItems = styled(Flex)``

import styles from './current-instagram.module.scss'

const ruta = [
  imag1,
  imag2,
  imag3,
  imag4,
  imag5,
  imag6,
]

export const CurrentInstagram = ({ theme }) => {
  return (
    <Container width={[1]}>
      <WrapperContainer width={[1]} justifyContent='center'>
        <ContentItems width={[1, 1 / 12 * 5]} mt={['90px']} bg=''>
          <Flex
            flexDirection='column'
            width={[1]}
          >
            <Flex width={[1]} justifyContent='center'>
              <Box width={['auto']} mb={[1]}>
                <Text
                  type='span'
                  fontFamily='RobotoMedium'
                  title='INSTAGRAM'
                  fontSize='13px'
                  textAlign='center'
                  color={theme.colors.bgExtent}
                />
              </Box>
            </Flex>
            
            <Flex width={[1]} justifyContent='center'>
              <Box width={['auto']} mb={['60px']}>
                <Text
                  type='span'
                  fontFamily='Roboto'
                  title='#ESPUFI'
                  fontSize='40px'
                  textAlign='center'
                  color={theme.colors.title}
                />
              </Box>
            </Flex>

            <Flex
              width={[1]}
              flexWrap={['wrap']}
              justifyContent='center'
            >
              {
                ruta.map((item, index) => {
                  return (
                    <Flex 
                      width={[1 / 12 * 3.8]}
                      m={['1px']}
                      className={styles.contentImag}
                      key={index}
                    >
                      <Image src={item} alt={item} />
                    </Flex>
                  )
                }) 
              }
            </Flex>
          </Flex>
        </ContentItems>
      </WrapperContainer>
    </Container>
  )
}

CurrentInstagram.propTypes = {
  theme: PropTypes.object,
}
