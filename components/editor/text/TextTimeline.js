import { MdOutlineTextFields } from 'react-icons/md'
import { Box, Container, Flex, Icon, Text, Spacer, HStack } from '@chakra-ui/react'
import { useState, useEffect } from 'react'


const TextTimeline = () => {
  const [ subtranscript, setSubtranscript ] = useState("")

  useEffect(()=> {
    setSubtranscript("this is a new text")
  },[])


  return (
    <HStack position="absolute" spacing = "20px" alignItems="center" h="33%">
      <Box>
        <Icon as={MdOutlineTextFields} />
      </Box>
      <Flex flex="1">
        <Box>
          <Text fontWeight="bold"> [ </Text>
        </Box>
        <Spacer />
        <Box> { subtranscript } </Box>
        <Spacer />
        <Box>
          <Text fontWeight="bold"> ] </Text>
        </Box>
      </Flex>
    </HStack>
  )
}

export default TextTimeline