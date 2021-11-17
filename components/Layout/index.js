import PropTypes from 'prop-types'

import { Container, WrapperContainer } from '../../util/template'

import { Footer } from '../Footer'
import { Header } from '../header'

const Layout = ({
  children,
  theme,
  data,
  handleShowAlert
}) => {
  return (
    <Container width={1}>
      <WrapperContainer width={1} flexDirection='column'>
        <header>
          <Header
            theme={theme}
            data={data}
            handleShowAlert={handleShowAlert}
          />
        </header>

        <main>
          {children}
        </main>

        <footer>
          <Footer theme={theme} />
        </footer>

      </WrapperContainer>
    </Container>
  )
}

export default Layout

Layout.propTypes = {
  theme: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
  children: PropTypes.object.isRequired,
  handleShowAlert: PropTypes.func.isRequired
}
