import type { PropsWithChildren } from 'react'
import { Flex } from '@chakra-ui/react'
import GameTitle from './GameTitle'

export type LayoutProps = PropsWithChildren
function Layout({ children }: LayoutProps) {
  return (
    <Flex
      gap={8}
      justifyContent="center"
      flexDirection="column"
      alignItems="center"
      width="100%"
      minHeight="100vh"
      backgroundColor="color.darkBlue"
    >
      <GameTitle gameTitle="Shifumi !"></GameTitle>
      {children}
    </Flex>
  )
}

export default Layout
