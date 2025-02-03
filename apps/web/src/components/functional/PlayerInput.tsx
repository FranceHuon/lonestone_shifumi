import { Input } from '@chakra-ui/react'
import usePlayer from '../../hooks/usePlayer'

interface PlayerInputProps {
  playerName: string
  setPlayerName: React.Dispatch<React.SetStateAction<string>>
}
function PlayerInput({ playerName, setPlayerName }: PlayerInputProps) {
  const { createOrFetchPlayer } = usePlayer({ playerName, setPlayerName })

  const handleKeyPress: React.KeyboardEventHandler = async (e) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      const player = await createOrFetchPlayer()
      console.warn('Player created or fetched:', player)
    }
  }

  return (
    <Input value={playerName} onChange={e => setPlayerName(e.target.value)} onKeyDown={handleKeyPress} backgroundColor="color.lightBlue" placeholder="Enter your name" width="20rem" />
  )
}

export default PlayerInput
