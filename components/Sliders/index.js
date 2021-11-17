import PropTypes from 'prop-types'
import SimpleImageSlider from 'react-simple-image-slider'

import { Container, WrapperContainer } from '../../util/template'

import styles from './sliders.module.scss'

export const Slider = ({
  theme,
  data
}) => {
  return (
    <Container className={styles.container} width={[1]}>
      <WrapperContainer
        width={[1]}
        className={styles.wrapper}
      >
       { data.data.urlImgSlider.length > 0 && (
          <SimpleImageSlider
            width='100%'
            height='100%'
            images={data.data.urlImgSlider}
            showBullets={true}
            showNavs={false}
            loop={true}
            autoPlay={true}
            bgColor='transparent'
          />
       )
       }
      </WrapperContainer>
    </Container>
  )
}

Slider.propTypes = {
  theme: PropTypes.object,
  data: PropTypes.object.isRequired,
}

