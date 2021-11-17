import { Flex, Head } from '../util/template'
import ContainerOfRoute from '../container/ContainerOfRaute'

export default function Home () {
  return (
    <Flex>
      <Head>
        <title>
          Pufi
        </title>
      </Head>

      <ContainerOfRoute />
    </Flex>
  )
}
