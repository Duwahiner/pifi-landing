
import PropTypes from 'prop-types'

import Main from '../../components/Main'
import { ToSuscribe } from '../../components/ToSuscribe'
import { CurrentInstagram } from '../../components/CurrentInstagram'
import { CurrentProducts } from '../../components/CurrentProducts'

const ContentMain = ({
  theme,
  handleShowAlert,
  handleOnchange,
  inputValue,
  handleOnBlur,
  errorValue,
  isValideEmail,
  handleSubcriptionEmail
}) => {
  return (
    <Main
      theme={theme}
    >
      <CurrentProducts
        type='setion'
        theme={theme}
        position='left'
        title='Pufi PUFF'
        titleButton='SHOP'
        textDescription='Descripción del producto. Este es un texto simulado'
        textLink='VER MAS'
        urlImg='/images/produts/prod-01.jpg'
        urlImgMini='/images/produts/prod-01-01.jpg'
        id='pufi-puff'
        handleShowAlert={handleShowAlert}
      />

      <CurrentProducts
        theme={theme}
        position='right'
        title='Pufi RAIN'
        titleButton='SHOP'
        textDescription='Descripción del producto. Este es un texto simulado'
        textLink='VER MAS'
        urlImg='/images/produts/prod-02.jpg'
        urlImgMini='/images/produts/prod-02-02.jpg'
        id='pufi-rain'
        handleShowAlert={handleShowAlert}
      />

      <CurrentProducts
        theme={theme}
        position='left'
        title='Pufi CART'
        titleButton='SHOP'
        textDescription='Descripción del producto. Este es un texto simulado'
        textLink='VER MAS'
        urlImg='/images/produts/prod-03.jpg'
        urlImgMini='/images/produts/prod-03-03.jpg'
        id='pufi-cart'
        handleShowAlert={handleShowAlert}
      />

      <CurrentProducts
        theme={theme}
        position='right'
        title='Pufi NAP'
        titleButton='SHOP'
        textDescription='Descripción del producto. Este es un texto simulado'
        textLink='VER MAS'
        urlImg='/images/produts/prod-04.jpg'
        urlImgMini='/images/produts/prod-04-04.jpg'
        id='pufi-nap'
        handleShowAlert={handleShowAlert}
      />
      
      <CurrentInstagram theme={theme} />
      <ToSuscribe
        theme={theme}
        handleOnchange={handleOnchange} 
        inputValue={inputValue}
        handleOnBlur={handleOnBlur}
        errorValue={errorValue}
        isValideEmail={isValideEmail}
        handleSubcriptionEmail={handleSubcriptionEmail}
      />
    </Main>
  )
}

export default ContentMain

ContentMain.propTypes = {
  theme: PropTypes.object,
  inputValue: PropTypes.string.isRequired,
  handleOnchange: PropTypes.func.isRequired,
  handleOnBlur: PropTypes.func.isRequired,
  errorValue: PropTypes.object,
  isValideEmail: PropTypes.bool.isRequired,
  handleSubcriptionEmail: PropTypes.func.isRequired
}
