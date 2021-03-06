import React from 'react'
import { useQuery } from 'react-query'
import { api } from '../api'

type User = {
  id: string;
  name: string;
  email: string;
  createdAt: string;
}

type Data = { users: User[] }

export async function getUsers(page: number) {
  const { data, headers } = await api.get<Data>('users', {
    params: {
      page
    }
  })

  const totalCount = Number(headers['x-total-count'])

  const users = data.users.map(user => {
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
  return {
    users,
    totalCount
  }
}

const useUsers = (page: number) => {
  return (
    useQuery(['users', page], () => getUsers(page), {
      staleTime: 1000 * 60 * 15// 15 minutes
    }
    )
  )
}

export default useUsers