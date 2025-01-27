import { Flex } from "@chakra-ui/react"
import { PropsWithChildren } from "react"
type LayoutProps = PropsWithChildren

const Layout = ({children}: LayoutProps) => {
    return (
        <Flex width="90rem" height="64rem" backgroundColor="#212849">{children}</Flex>
    )
}

export default Layout