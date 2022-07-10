import { NextPage } from 'next'

import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

import { Box, Button, Divider, Flex, Heading, HStack, SimpleGrid, VStack } from '@chakra-ui/react'

import Header from '../../components/Header'
import Sidebar from '../../components/Sidebar'
import { Input } from '../../components/Form/Input'
import Link from 'next/link'

type CreateUserFormData = {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
}

const createUserFormSchema = yup.object({
  name: yup.string().required('Nome Obrigatório'),
  email: yup.string().required('E-mail obrigatório!').email('E-mail inválido'),
  password: yup.string().required('Password obrigatório').min(6, 'Mínimo 6 caracteres'),
  password_confirmation: yup.string().oneOf([
    null, yup.ref('password')
  ], 'As senhas precisam ser iguais')
})

const CreateUser: NextPage = () => {

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(createUserFormSchema)
  })
  const errors = formState.errors

  const hendleCreateUser: SubmitHandler<CreateUserFormData> = async (values) => {
    await new Promise(resolve => setTimeout(resolve, 1500))
    console.log(values)
  }

  return (
    <Box>
      <Header />
      <Flex w={'100%'} my={'6'} maxWidth={1480} mx={'auto'} px={'6'}>
        <Sidebar />

        <Box
          as={'form'}
          flex={'1'}
          borderRadius={8}
          bg={'gray.800'}
          p={['6', '8']}
          onSubmit={handleSubmit(hendleCreateUser)}
        >
          <Heading size={'lg'} fontWeight={'normal '}>Criar Usuário</Heading>

          <Divider my={'6'} borderColor={'gray.700'} />

          <VStack spacing={['4', '8']}>
            <SimpleGrid minChildWidth={'240px'} spacing={['4', '8']} w={'100%'}>
              <Input
                type={'text'}
                label={'Nome completo'}
                error={errors.name}
                {...register('name')}
              />
              <Input
                type={'email'}
                label={'Email'}
                error={errors.email}
                {...register('email')}
              />
            </SimpleGrid>

            <SimpleGrid minChildWidth={'240px'} spacing={['4', '8']} w={'100%'}>
              <Input
                type={'password'}
                label={'Password'}
                error={errors.password}
                {...register('password')}

              />
              <Input
                type={'password'}
                label={'Password Confirmation'}
                error={errors.password_confirmation}
                {...register('password_confirmation')}
              />
            </SimpleGrid>
          </VStack>
          <Flex mt={'8'} justify={'flex-end'}>
            <HStack spacing={'4'}>
              <Link href={"/users"} passHref>
                <Button colorScheme={'whiteAlpha'}>Cancelar</Button>
              </Link>
              <Button
                type='submit'
                colorScheme={'pink'}
                isLoading={formState.isSubmitting}
              >Salvar</Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  )
}

export default CreateUser