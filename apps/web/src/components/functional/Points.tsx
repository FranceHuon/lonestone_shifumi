import { Flex } from '@chakra-ui/react'
import BluePoint from '../ui/BluePoint'
import GreenPoint from '../ui/GreenPoint'

interface PointsProps {
  score: number
}

function Points({ score }: PointsProps) {
  const points = Array.from({ length: 5 }, (_, index) => score > index ? <GreenPoint key={index} /> : <BluePoint key={index} />)

  return (
    <Flex gap={2}>
      {points}
    </Flex>
  )
}

export default Points
