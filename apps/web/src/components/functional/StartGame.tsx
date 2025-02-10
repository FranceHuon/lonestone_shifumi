import BasicButton from '../ui/Button'

interface StartGameProps {
  onClick: () => void

  buttonTitle: string
}
function StartGame({ onClick, buttonTitle }: StartGameProps) {
  return (
    <BasicButton onClick={onClick} buttonTitle={buttonTitle} />
  )
}

export default StartGame
