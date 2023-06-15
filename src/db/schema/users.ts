import { InferModel } from 'drizzle-orm'
import { integer, pgTable, serial, varchar, text, timestamp } from 'drizzle-orm/pg-core'

export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  username: varchar('username', { length: 255 }),
  email: varchar('email', { length: 255 }),
  password: varchar('password', { length: 255 }),
  registrationDate: timestamp('registration_date'),
})

export type Users = InferModel<typeof users> // normal type
export type NewUsers = InferModel<typeof users, 'insert'> // insert type
