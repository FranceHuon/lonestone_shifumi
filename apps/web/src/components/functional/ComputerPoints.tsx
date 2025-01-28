import { Flex } from '@chakra-ui/react'
import BluePoint from '../ui/BluePoint'
import GreenPoint from '../ui/GreenPoint'

interface ComputerPointsProps {
  score: number
}

function ComputerPoints({ score }: ComputerPointsProps) {
  const totalPoints = [0, 0, 0, 0, 0]

  return (
    <Flex>
      {totalPoints.map(index =>
        score > index ? <GreenPoint key={index} /> : <BluePoint key={index} />,
      )}
    </Flex>
  )
}

export default ComputerPoints
