import { NextPage } from 'next'
import dynamic from "next/dynamic";

import { ApexOptions } from "apexcharts";

import { Box, Flex, SimpleGrid, Text, theme } from '@chakra-ui/react'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'

const Chart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
})

const options: ApexOptions = {
  chart: {
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false
    },
    foreColor: theme.colors.gray[500]
  },
  grid: {
    show: false
  },
  dataLabels: {
    enabled: false
  },
  tooltip: {
    enabled: false
  },
  xaxis: {
    type: 'datetime',
    axisBorder: {
      color: theme.colors.gray[600]
    },
    axisTicks: {
      color: theme.colors.gray[600]
    },
    categories: [
      '2022-03-18T00:00:00.000Z',
      '2022-03-19T00:00:00.000Z',
      '2022-03-20T00:00:00.000Z',
      '2022-03-21T00:00:00.000Z',
      '2022-03-22T00:00:00.000Z',
      '2022-03-23T00:00:00.000Z',
      '2022-03-24T00:00:00.000Z',
    ],
  },
  fill: {
    opacity: 0.3,
    type: 'gradient',
    gradient: {
      shade: 'dark',
      opacityFrom: 0.7,
      opacityTo: 0.3,
    }
  }
}
const series = [
  { name: 'series1', data: [21, 23, 41, 32, 51, 63, 22] }
]

const Dashboard: NextPage = () => {
  return (
    <Flex direction={'column'} h={'100vh'}>
      <Header />

      <Flex
        w={'100%'}
        my={'6'}
        maxWidth={1480}
        mx='auto'
        px={'6'}
      >
        <Sidebar />

        <SimpleGrid flex={'1'} gap={'4'} minChildWidth={'320px'}  >
          <Box
            p={['6', '8']}
            bg={'gray.800'}
            borderRadius={8}
            pb={'4'}
          >
            <Text fontSize={'lg'} mb={'4'}>Inscritos da Semana</Text>
            <Chart
              type='area'
              height={160}
              series={series}
              options={options}
            />
          </Box>
          <Box
            p={['6', '8']}
            bg={'gray.800'}
            borderRadius={8}
            pb={'4'}
          >
            <Text fontSize={'lg'} mb={'4'}>Taxa de abertura</Text>
            <Chart
              type='area'
              height={160}
              series={series}
              options={options}
            />
          </Box>
        </SimpleGrid>
      </Flex>
    </Flex>
  )
}

export default Dashboard