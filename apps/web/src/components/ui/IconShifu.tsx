import { Box } from '@chakra-ui/react'

interface IconShifuProps {
  icon: JSX.Element
  backgroundColor: string
}

function IconShifu({ icon, backgroundColor }: IconShifuProps) {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      borderRadius={50}
      width={30}
      height={30}
      backgroundColor={backgroundColor}
    >
      {icon}
    </Box>
  )
}

export default IconShifu
