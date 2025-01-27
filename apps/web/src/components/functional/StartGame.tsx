import BasicButton from '../../components/ui/BasicButton'

interface StartGameProps {
  onClick: () => void
  isStarted: boolean
}
function StartGame({ onClick, isStarted }: StartGameProps) {
  return (
    <div>
      {!isStarted && (
        <BasicButton onClick={onClick} buttonTitle="Commencer la partie" />
      )}
    </div>
  )
}

export default StartGame
