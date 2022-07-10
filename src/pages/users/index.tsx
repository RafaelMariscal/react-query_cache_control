import { NextPage } from 'next'
import Link from 'next/link'
import { useQuery } from "react-query";

import { Box, Button, Checkbox, Flex, Heading, Icon, Spinner, Table, Tbody, Td, Text, Th, Thead, Tr, useBreakpointValue } from '@chakra-ui/react'

import Header from '../../components/Header'
import Sidebar from '../../components/Sidebar'
import { RiAddLine, RiPencilLine } from 'react-icons/ri'
import Pagination from '../../components/Pagination'

type User = {
  id: string;
  name: string;
  email: string;
  createdAt: string;
}

type Data = {
  users: User[]
}

const UserList: NextPage = () => {

  const { data, isLoading, error } = useQuery('users', async () => {
    const response = await fetch('http://localhost:3000/api/users')
    const data: Data = await response.json()

    const users: User[] = data.users.map(user => {
      return {
        id: user.id,
        name: user.name,
        email: user.email,
        createdAt: new Date(user.createdAt).toLocaleDateString('pt-BR', {
          day: '2-digit',
          month: 'long',
          year: 'numeric'
        })
      }
    })

    return users
  }, {
    staleTime: 1000 * 60 * 15// 15 minutes
  }
  )


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

          {
            isLoading ? (
              <Flex justify={'center'}>
                <Spinner />
              </Flex>
            ) : error ? (
              <Flex justify={'center'}>
                <Text>Falha ao obter dados dos usuários.</Text>
              </Flex>
            ) : (
              <>
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
                    {
                      data && (
                        data.map((user) => {
                          return (
                            <Tr key={user.id}>
                              <Td px={['4', '4', '6']}>
                                <Checkbox colorScheme={'pink'} size={'sm'} />
                              </Td>
                              <Td px='4'>
                                <Box>
                                  <Text fontWeight={'bold'}>{user.name}</Text>
                                  <Text fontSize={['small', 'inherit']} fontWeight={'sm'} color={'gray'}>{user.email}</Text>
                                </Box>
                              </Td>
                              {isWideVersion && <Td>{user.createdAt}</Td>}
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
                          )
                        })
                      )
                    }
                  </Tbody>
                </Table>

                <Pagination />
              </>
            )
          }
        </Box>

      </Flex>
    </Box>
  )
}

export default UserList