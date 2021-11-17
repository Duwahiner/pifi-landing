import PropTypes from 'prop-types'

import { Box, Flex, WrapperContainer as Container } from '../../util/template'
import { ButtonPrimary } from '../ButtonPrimary'
import { Text } from '../Text'

import styles from './description-pages-titles.module.scss'

export const DescriptionPagesTitles = ({ theme, title, handleShowAlert}) => {
  return (
    <Container
      width={[1]}
      alignItems='center'
      justifyContent='center'

    >
      <Flex
        width={[1]}
        height='auto'
        flexDirection='column'
        alignItems='center'
        justifyContent='center'
      >
        <Box
          width={[1, 1, 1 / 12 * 6.5]}
          className={styles.contentTitle}
        >
          <Text
            type='h1'
            fontFamily='RobotoBold'
            title={title}
            fontSize={['30px', '65px', '65px']}
            textAlign='center'
            color={theme.colors.bgInput}
          />
        </Box>

        <Box width={['auto']} mt={['8%']}>
          <ButtonPrimary
            width={'135px'}
            title='SHOP'
            fontFamily='RobotoBold'
            fontSize='14px'
            handleOnClick={() => handleShowAlert(true)}
          />
        </Box>
      </Flex>
    </Container>
  )
}

DescriptionPagesTitles.propTypes = {
  theme: PropTypes.object.isRequired,
  handleShowAlert: PropTypes.func.isRequired
}
