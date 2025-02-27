import { Box } from '@chakra-ui/react'

export interface PointProps {
  color: string
}
function Point({ color }: PointProps) {
  return (
    <Box
      width={7}
      height={7}
      backgroundColor={color}
      borderRadius={50}
      margin={1}
    >
    </Box>
  )
}

export default Point
