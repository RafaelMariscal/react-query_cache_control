import { createServer, Factory, Model } from "miragejs";
import { faker } from '@faker-js/faker'

type User = {
  name: string
  email: string
  created_at: string
}

export function makeServer() {
  const server = createServer({
    models: {
      user: Model.extend<Partial<User>>({})
    },
    factories: {
      user: Factory.extend({
        name(i: number) {
          return `User ${i + 1}`
        },
        email() {
          return faker.internet.email().toLocaleLowerCase()
        },
        createAt() {
          return faker.date.recent(10)
        },
      })
    }
    ,
    seeds(server) {
      server.createList('user', 200)
    },

    routes() {
      this.namespace = 'api'
      this.timing = 750; // To check the user experience while data  loading

      this.get('/users');
      this.get('/users/:id');
      this.post('/users');
      this.patch('/users/:id');
      this.put('/users/:id');
      this.del('/users/:id');

      this.namespace = ''
      this.passthrough()
    }
  })
  return server
}

/*
Sheet cheat of miragejs routes CRUD shorthands
routes(){
  if USING NEXTJS => this.namespace = 'api'

    Action   |  Shorthand
  ------------------------------
  index    | this.get('/contacts')
  show     | this.get('/contacts/:id')
  create   | this.post('/contacts')
  update   | this.patch('contacts/:id') (or this.put)
  delete   | this.del('/contacts/:id')

  if USING NEXTJS => this.namespace = ''
  this.passthrough()
}
*/