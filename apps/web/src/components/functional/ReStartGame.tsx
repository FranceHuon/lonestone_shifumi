import BasicButton from '../ui/BasicButton'

interface RestartGameProps {
  onClick: () => void
}
function RestartGame({ onClick }: RestartGameProps) {
  return (
    <div>
      <BasicButton onClick={onClick} buttonTitle="Recommencer la partie" />
    </div>
  )
}

export default RestartGame
