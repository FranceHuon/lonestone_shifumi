import BasicButton from '../ui/BasicButton'

interface StartGameProps {
  onClick: () => void
  isStarted?: boolean
  buttonTitle: string
}
function StartGame({ onClick, isStarted, buttonTitle }: StartGameProps) {
  return (
    <div>
      {!isStarted && (
        <BasicButton onClick={onClick} buttonTitle={buttonTitle} />
      )}
    </div>
  )
}

export default StartGame
