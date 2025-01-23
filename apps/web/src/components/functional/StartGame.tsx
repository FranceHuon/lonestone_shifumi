// import axios from 'axios';
import BasicButton from '../../components/ui/BasicButton'

interface StartGameProps {
  onClick: () => void
  isStarted: boolean
}
function StartGame({ isStarted }: StartGameProps) {
  // const handleClick = async () => {
  // try {
  // 	const response = await axios.post('http://localhost:3001/games/start');
  //   console.log('Game started:', response.data);
  // 		onClick();
  // } catch (err) {
  // 	console.error('Error starting game:', err);
  // }
  // }

  return (
    <div>
      {!isStarted && (
        <BasicButton buttonTitle="Commencer la partie" />
      )}
    </div>
  )
}

export default StartGame
