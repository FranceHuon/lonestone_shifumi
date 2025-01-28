import { useState } from 'react'
import BasicButton from '../../components/ui/BasicButton'

interface StartGameProps {
  onClick: () => void
  isStarted: boolean
}

function StartGame({ onClick, isStarted }: StartGameProps) {
  const [gameInfo, setGameInfo] = useState<{ round: number }>({ round: 0 })

  const handleStartGame = async () => {
    try {
      const response = await fetch('/api/game/start', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      })

      if (response.ok) {
        const data = await response.json()
        setGameInfo({ round: data.round })
        onClick()
      }
      else {
        console.error('Erreur lors de la création de la partie')
      }
    }
    catch (error) {
      console.error('Erreur de connexion', error)
    }
  }

  return (
    <div>
      {!isStarted && (
        <div>
          <BasicButton onClick={handleStartGame} buttonTitle="Commencer la partie" />
          {gameInfo.round > 0 && (
            <div>
              Numéro du round:
              {gameInfo.round}
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default StartGame
