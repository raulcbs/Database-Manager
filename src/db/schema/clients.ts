import { integer, pgTable, serial, varchar } from 'drizzle-orm/pg-core'
import { cities } from './cities'
import { InferModel } from 'drizzle-orm'

export const clients = pgTable('clients', {
  id: serial('id').primaryKey(),
  clientName: varchar('client_name', { length: 255 }),
  email: varchar('email', { length: 255 }),
  phoneNumber: varchar('phone_number', { length: 255 }),
  cityId: integer('city_id').references(() => cities.id),
})

export type clients = InferModel<typeof clients> // normal type
export type NewClients = InferModel<typeof clients, 'insert'> // insert type
