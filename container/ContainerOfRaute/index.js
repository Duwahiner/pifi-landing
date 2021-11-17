import { useEffect, useContext, useState } from 'react'
import {  useRouter } from 'next/router'

import { ContextView } from '../../contexts'
import { useTheme } from '../../hooks/useTheme'
import { Box } from '../../util/template'
import Layout from '../../components/Layout'
import { Alerts } from '../../components/Alerts'
import { Spinner } from '../../components/Spinner'
import { AlertsError } from '../../components/AlertsError'
import ContentMain from '../../components/ContentMain'

import { postSubscriptions } from '../../services'

import {
  getUrlImgSlider,
  getShowAlert,
  getErrorRequest,
  getValueInput,
  getShowSpinner,
  getNotifications,
  getUser
} from '../../reducers'
import { Notifications } from '../../components/Notifications'

const ContainerOfRoute = (props) => {
  const [state, dispatch] = useContext(ContextView)
  const [isValideEmail, setIsValideEmail] = useState(false)
  const [errorValue, setErrorValue] = useState({
    state: 'none',
    message: ''
  })

  const theme = useTheme()
  const router = useRouter()

  const handleOnchange = (event) => {
    const value = event.target.value
    dispatch(getValueInput(value))
    runValideEmail(value)
  }

  const handleOnBlur = (event) => {
    const value = event.target.value

    if (value) runValideEmail(value)
  }

  const handleSubcriptionEmail = (event) => {
    event.preventDefault()
  
    if (state.valueInput !== '') {
      dispatch(getShowSpinner(true))

      postSubscriptions(state.valueInput)
        .then((res) => {
          dispatch(getNotifications(true))

          dispatch(getUser({
            data: res.data.user
          }))
        })
        .catch((err) => {
          dispatch(getErrorRequest(true))
        })

        .finally(() => {
          dispatch(getShowSpinner(false))
        })
    }
  }

  const runValideEmail = (valueEmail) => {
    const reg = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/

    if (valueEmail) {
      if(reg.test(valueEmail)) {
        setErrorValue((state) => {
          return Object.assign({}, state, {
            state: 'none',
            message: ''
          })
        })

        setIsValideEmail(true)
      } else {
        setErrorValue((state) => {
          return Object.assign({}, state, {
            state: 'error',
            message: 'El correo que intentas ingresar es invalido'
          })
        })
      }
    } else {
      setErrorValue((state) => {
        return Object.assign({}, state, {
          state: 'none',
          message: ''
        })
      })

      setIsValideEmail(false)
    }
  }

  const handleNotifications = (show) => {
    dispatch(getNotifications(show))
  }

  const handleShowAlert = (show) => {
    dispatch(getShowAlert(show))
  }

  const handleErrorRequest = (show) => {
    dispatch(getErrorRequest(show))
  }

  useEffect(() => {
    dispatch(getUrlImgSlider([
      {
        url: '/images/bg-slider/bg-slider-01.jpg'
      }, 
      {
        url: '/images/bg-slider/bg-slider-02.jpg'
      }, 
      {
        url: '/images/bg-slider/bg-slider-03.jpg'
      } 
    ]))
  }, [dispatch])

  return (
    <Box width={1}>

      {state.showNotications && (
        <Notifications
          theme={theme}
          handleClose={() => handleNotifications(false)}
        />
      )}
    
      {state.showAlert && (
        <Alerts
          theme={theme}
          handleClose={() => handleShowAlert(false)}
        />
      )}

      {state.errorRequets && (
        <AlertsError
          theme={theme}
          handleClose={() => handleErrorRequest(false)}
        />
      )}

      {state.showSpinner && (
        <Spinner theme={theme} />
      )}
  
      <Layout
        data={state}
        theme={theme}
        handleShowAlert={handleShowAlert}
      >
        <ContentMain
          theme={theme}
          data={state}
          handleShowAlert={handleShowAlert}
          handleOnchange={handleOnchange}
          inputValue={state.valueInput}
          handleOnBlur={handleOnBlur}
          errorValue={errorValue}
          isValideEmail={isValideEmail}
          handleSubcriptionEmail={handleSubcriptionEmail}
        />
      </Layout>
    </Box>
  )
}

export default ContainerOfRoute
