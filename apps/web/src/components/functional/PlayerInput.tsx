import { Input } from '@chakra-ui/react'

interface PlayerInputProps {
  playerName: string
  setPlayerName: React.Dispatch<React.SetStateAction<string>>
}
function PlayerInput({ playerName, setPlayerName }: PlayerInputProps) {
  return (
    <Input value={playerName} onChange={e => setPlayerName(e.target.value)} backgroundColor="color.lightBlue" placeholder="Enter your name" width="20rem" />
  )
}
export default PlayerInput

// import { useState, useEffect } from 'react'
// import { Input, Button } from '@chakra-ui/react'
// import { api } from '../../services/api'

// function PlayerInput() {
//   const [playerName, setPlayerName] = useState<string>(() => {
//     return localStorage.getItem('playerName') || ''
//   })

//   // Charger le joueur depuis l'API s'il n'est pas en local storage
//   useEffect(() => {
//     if (!playerName) {
//       api.get('players/me') // Remplace par l'endpoint qui récupère le joueur actuel
//         .json<{ name: string }>()
//         .then((data) => {
//           setPlayerName(data.name)
//           localStorage.setItem('playerName', data.name) // Met à jour le cache local
//         })
//         .catch(console.error)
//     }
//   }, [])

//   // Enregistrer le joueur en base de données
//   const handleSavePlayer = async () => {
//     try {
//       const response = await api.post('players', { json: { name: playerName } }).json()
//       console.log('Joueur enregistré en base :', response)
//       localStorage.setItem('playerName', playerName) // Sauvegarde en local pour éviter une nouvelle requête
//     } catch (error) {
//       console.error('Erreur lors de l\'enregistrement du joueur', error)
//     }
//   }

//   return (
//     <div>
//       <Input
//         value={playerName}
//         onChange={(e) => setPlayerName(e.target.value)}
//         backgroundColor="color.lightBlue"
//         placeholder="Enter your name"
//         width="20rem"
//       />
//       <Button onClick={handleSavePlayer} colorScheme="blue" mt={2}>
//         Sauvegarder
//       </Button>
//     </div>
//   )
// }

// export default PlayerInput
