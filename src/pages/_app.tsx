import type { AppProps } from 'next/app'
import { theme } from "../styles/theme";
import { makeServer } from '../services/mirage';

import { ChakraProvider } from "@chakra-ui/react";
import { SidebarDrawerProvider } from '../context/SidebarDrawerContext';
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";


if (process.env.NODE_ENV === 'development') {
  makeServer()
}

const queryClient = new QueryClient()

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <QueryClientProvider client={queryClient} >
        <SidebarDrawerProvider>
          <Component {...pageProps} />
        </SidebarDrawerProvider>
        <ReactQueryDevtools />
      </QueryClientProvider >
    </ChakraProvider >
  )
}

export default MyApp
