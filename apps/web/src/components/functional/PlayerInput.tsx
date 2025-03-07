import { Input } from '@chakra-ui/react'

interface PlayerInputProps {
  playerName: string
  setPlayerName: React.Dispatch<React.SetStateAction<string>>
}
function PlayerInput({ playerName, setPlayerName }: PlayerInputProps) {
  const handleKeyPress: React.KeyboardEventHandler = async (e) => {
    if (e.key === 'Enter') {
      e.preventDefault()
    }
  }

  return (
    <Input value={playerName} onChange={e => setPlayerName(e.target.value)} onKeyDown={handleKeyPress} backgroundColor="color.lightBlue" placeholder="Enter your name" width="20rem" />
  )
}

export default PlayerInput
