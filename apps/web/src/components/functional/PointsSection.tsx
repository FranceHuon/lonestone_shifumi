import type { PropsWithChildren } from 'react'
import { Flex } from '@chakra-ui/react'

type PointsSectionProps = PropsWithChildren

function PointsSection({ children }: PointsSectionProps) {
  return (
    <Flex width="45rem">{children}</Flex>
  )
}

export default PointsSection
