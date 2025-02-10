import { Flex } from '@chakra-ui/react'

function Tag() {
  return (
    <Flex
      flexDirection="row"
      margin={2}
      padding={3}
      backgroundColor="color.navyBlue"
      width="100%"
      height={50}
      justifyContent="space-between"
      {...rest}
    >
      {children}
    </Flex>
  )
}
export default Tag
