import { Flex } from '@chakra-ui/react'
import Point from '../ui/Point'

interface PointsProps {
  score: number
}

function Points({ score }: PointsProps) {
  const points = Array.from({ length: 5 }, (_, index) => score > index ? <Point key={index} color="color.green" /> : <Point key={index} color="color.nightBlue" />)

  return (
    <Flex gap={2}>
      {points}
    </Flex>
  )
}

export default Points
