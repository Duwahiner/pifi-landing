import { Box } from '../../util/template'

export const WrapperPadding = ({ children, className }) => {
  return (
  <Box
    width={[1]}
    className={className}
    px={['10px', '10px', '40px']}
  >
    {children}
  </Box>)
}

