import { Text } from '@chakra-ui/react'
import Link from 'next/link'

function Logo() {
  return (
    <Link href={"/"} passHref>
      <Text
        as={'a'}
        fontSize={'3xl'}
        fontWeight={'bold'}
        letterSpacing={'tight'}
        w={'64'}
      >dashgo
        <Text as={'span'} color={'pink.500'} ml={'1'}>.</Text>
      </Text>
    </Link>

  )
}

export default Logo