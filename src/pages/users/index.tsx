import { NextPage } from 'next'

import { Box, Button, Checkbox, Flex, Heading, Icon, Table, Tbody, Td, Text, Th, Thead, Tr, useBreakpointValue } from '@chakra-ui/react'

import Header from '../../components/Header'
import Sidebar from '../../components/Sidebar'
import { RiAddLine, RiPencilLine } from 'react-icons/ri'
import Pagination from '../../components/Pagination'
import Link from 'next/link'

const UserList: NextPage = () => {

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })

  return (
    <Box>
      <Header />
      <Flex w={'100%'} my={'6'} maxWidth={1480} mx={'auto'} px={['0', '6']}>
        <Sidebar />

        <Box flex={'1'} borderRadius={[0, 8]} bg={'gray.800'} p={'6'} >
          <Flex mb={'8'} justify={'space-between '} align={'center'}>
            <Heading size={'lg'} fontWeight={'normarl'}>Usuários</Heading>

            <Link href={"/users/create"} passHref>
              <Button
                as={'a'}
                size={'sm'}
                fontSize={'sm'}
                colorScheme={'pink'}
                leftIcon={<Icon as={RiAddLine} />}
              >
                Criar novo
              </Button>
            </Link>
          </Flex>

          <Table colorScheme={'whiteAlpha'}>
            <Thead>
              <Tr>
                <Th px={['4', '4', '6']} color={'gray.300'} width={'8'}>
                  <Checkbox colorScheme={'pink'} size={'sm'} />
                </Th>
                <Th px='4'>Usuário</Th>
                {isWideVersion && <Th>Data de cadastro</Th>}
                <Th w={'8'}></Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td px={['4', '4', '6']}>
                  <Checkbox colorScheme={'pink'} size={'sm'} />
                </Td>
                <Td px='4'>
                  <Box>
                    <Text fontWeight={'bold'}>Rafael Mariscal</Text>
                    <Text fontSize={['small', 'inherit']} fontWeight={'sm'} color={'gray'}>rafael_mariscal_@outlook.com</Text>
                  </Box>
                </Td>
                {isWideVersion && <Td>08 de Julho, 2022</Td>}
                <Td>
                  <Button
                    as={'a'}
                    size={'sm'}
                    fontSize={'sm'}
                    colorScheme={'teal'}
                    leftIcon={<Icon as={RiPencilLine} fontSize={16} />}
                  >
                    {isWideVersion ? 'Editar' : 'Edit'}
                  </Button>
                </Td>
              </Tr>

              <Tr>
                <Td px={['4', '4', '6']}>
                  <Checkbox colorScheme={'pink'} size={'sm'} />
                </Td>
                <Td px='4'>
                  <Box>
                    <Text fontWeight={'bold'}>Rafael Mariscal</Text>
                    <Text fontSize={['small', 'inherit']} fontWeight={'sm'} color={'gray'}>rafael_mariscal_@outlook.com</Text>
                  </Box>
                </Td>
                {isWideVersion && <Td>08 de Julho, 2022</Td>}
                <Td>
                  <Button
                    as={'a'}
                    size={'sm'}
                    fontSize={'sm'}
                    colorScheme={'teal'}
                    leftIcon={<Icon as={RiPencilLine} fontSize={16} />}
                  >
                    {isWideVersion ? 'Editar' : 'Edit'}
                  </Button>
                </Td>
              </Tr>

              <Tr>
                <Td px={['4', '4', '6']}>
                  <Checkbox colorScheme={'pink'} size={'sm'} />
                </Td>
                <Td px='4'>
                  <Box>
                    <Text fontWeight={'bold'}>Rafael Mariscal</Text>
                    <Text fontSize={['small', 'inherit']} fontWeight={'sm'} color={'gray'}>rafael_mariscal_@outlook.com</Text>
                  </Box>
                </Td>
                {isWideVersion && <Td>08 de Julho, 2022</Td>}
                <Td>
                  <Button
                    as={'a'}
                    size={'sm'}
                    fontSize={'sm'}
                    colorScheme={'teal'}
                    leftIcon={<Icon as={RiPencilLine} fontSize={16} />}
                  >
                    {isWideVersion ? 'Editar' : 'Edit'}
                  </Button>
                </Td>
              </Tr>
            </Tbody>
          </Table>

          <Pagination />

        </Box>

      </Flex>
    </Box>
  )
}

export default UserList