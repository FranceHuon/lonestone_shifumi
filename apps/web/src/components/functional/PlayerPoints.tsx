import { Flex } from '@chakra-ui/react'
import BluePoint from '../ui/BluePoint'
import GreenPoint from '../ui/GreenPoint'

interface PlayerPointsProps {
  score: number
}

function PlayerPoints({ score }: PlayerPointsProps) {
  const totalPoints = [0, 0, 0, 0, 0]

  return (
    <Flex>
      {totalPoints.map((point, index) =>
        score > index ? <GreenPoint key={index} /> : <BluePoint key={index} />,
      )}
    </Flex>
  )
}

export default PlayerPoints
