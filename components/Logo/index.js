import PropTypes from 'prop-types'

import { Flex, Image, Link } from '../../util/template'
import logotipo from '../../assets/svg/logo-pufi.svg'

import styles from './logo.module.scss'

export const Logo = ({ theme }) => {
  return (
    <Flex width={['auto']} className={styles.containerImg}>
      <Link href='/'>
        <a>
          <Image src={logotipo} alt='Logo Pufi' width={90} height={60} />
        </a>
      </Link>
    </Flex>
  )
}

Logo.propTypes = {
  theme: PropTypes.object,
}

