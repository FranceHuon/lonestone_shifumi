import type { PropsWithChildren } from 'react'
import { Flex, Heading } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'

export type LayoutProps = PropsWithChildren
function Layout({ children }: LayoutProps) {
  const { t } = useTranslation('common')
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

      <Heading fontWeight={900} fontSize={36} color="color.lightBlue" margin={10}>
        {t('title')}
      </Heading>
      {children}
    </Flex>
  )
}

export default Layout
