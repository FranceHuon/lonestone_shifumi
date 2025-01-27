import type { Choice } from '../../utils/enums'
import { Button, Text } from '@chakra-ui/react'

interface BasicButtonProps {
  onClick?: () => void
  choice?: Choice
  icon?: JSX.Element
  buttonTitle: string
  width?: number
}

function BasicButton({
  icon,
  buttonTitle,
  width,
  onClick,
}: BasicButtonProps) {
  return (
    <Button
      bg="color.electricBlue"
      // icon={icon}
      width={width}
      height={90}
      rounded="2xl"
      variant="solid"
      textAlign="left"
      fontWeight={400}
      fontSize={24}
      padding={10}
      margin={3}
      boxShadow="0 4px 0 0"
      color="color.hardBlue"
      _hover={{ boxShadow: '0 14px 0 0', height: '80px' }}
      onClick={onClick}
    >
      <Text color="color.white">{buttonTitle}</Text>
    </Button>
  )
}

export default BasicButton
