import { Avatar, Box, Flex, Text } from '@chakra-ui/react'

interface ProfileProps {
  showProfileData?: boolean
}

const Profile = ({ showProfileData = true }: ProfileProps) => {
  return (
    <Flex align={'center'}>
      {showProfileData && (
        <Box mr={'4'} textAlign={'right'}>
          <Text>Rafael Mariscal</Text>
          <Text color={'gray.300'} fontSize={'small'}>rafael_mariscal_@outlook.com</Text>
        </Box>
      )}

      <Avatar size={'md'} name={'Rafael Mariscal'} src={'https://github.com/RafaelMariscal.png'} />
    </Flex>
  )
}

export default Profile