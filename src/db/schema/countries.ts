import { InferModel } from 'drizzle-orm'
import { pgTable, serial, varchar, integer } from 'drizzle-orm/pg-core'

export const countries = pgTable('countries', {
  id: serial('id').primaryKey(),
  countryName: varchar('country_name', { length: 255 }),
  continent: varchar('continent', { length: 255 }),
  population: integer('population'),
  capitalCity: varchar('capital_city', { length: 255 }),
})

export type Countries = InferModel<typeof countries> // normal type
export type NewCountries = InferModel<typeof countries, 'insert'> // insert type
