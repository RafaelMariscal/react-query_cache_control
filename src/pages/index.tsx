import type { NextPage } from 'next'

import { Button, Flex, Stack } from "@chakra-ui/react";
import Input from '../components/Form/Input';
import Link from 'next/link';

const SignIn: NextPage = () => {
  return (
    <Flex
      w="100vw"
      h="100vh"
      align="center"
      justify="center"
    >
      <Flex
        as="form"
        w="100%"
        maxWidth="360px"
        bg={'gray.800'}
        p={8}
        borderRadius={8}
        flexDir='column'
      >
        <Stack spacing={4}>
          <Input type='email' name='email' label='E-mail' />
          <Input type='password' name='password' label='Password' />
        </Stack>

        <Link href={"/dashboard"} passHref>
          <Button
            type='submit'
            mt={6}
            colorScheme='pink'
            size={'lg'}
          >
            Entrar
          </Button>
        </Link>
      </Flex>
    </Flex>
  )
}

export default SignIn