import { Flex } from "@chakra-ui/react"
import { PropsWithChildren } from "react"
type LayoutProps = PropsWithChildren

const Layout = ({children}: LayoutProps) => {
    return (
        <Flex width="100%" minHeight="100vh" backgroundColor="color.darkBlue"  alignItems="center" justifyContent="center">{children}</Flex>
    )
}

export default Layout