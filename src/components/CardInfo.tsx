import { Box, Text } from "@chakra-ui/react"

interface ICardInfo {
    mainContent: string,
    content: string
}

const CardInfo = ({ mainContent, content }: ICardInfo) => {
    return (
        <Box backgroundColor='#FFF'
            minHeight='120px'
            padding={8}
            borderRadius='24px'
        >
            <Text fontSize='2xl' fontWeight='bold'>{mainContent}</Text>
            <Text fontSize='xl' fontWeight='bold'>{content}</Text>
        </Box>
    )
}

export default CardInfo