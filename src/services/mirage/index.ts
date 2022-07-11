import { createServer, Factory, Model, Response, ActiveModelSerializer } from "miragejs";
import { faker } from '@faker-js/faker'

type User = {
  name: string
  email: string
  created_at: string
}

export function makeServer() {
  const server = createServer({
    serializers: {
      application: ActiveModelSerializer
    },
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
        createdAt() {
          return faker.date.recent(10)
        },
      })
    }
    ,
    seeds(server) {
      server.createList('user', 12)
    },

    routes() {
      this.namespace = 'api'
      this.timing = 750; // To check the user experience while data  loading

      this.get('/users', function (schema, request) {

        const { page = 1, per_page = 10 } = request.queryParams!

        const total = schema.all('user').length
        const pageStart = (Number(page) - 1) * Number(per_page)   // For each page, the first element of the qeue
        const pageEnd = pageStart + Number(per_page)  // The list's limit counter

        const users = this.serialize(schema.all('user'))
          .users.slice(pageStart, pageEnd)

        return new Response(
          200,
          { 'x-total-count': String(total) },
          { users }
        )
      });

      this.get('/users/:id')

      this.post('/users');

      this.patch('contacts/:id')

      this.del('/contacts/:id')

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