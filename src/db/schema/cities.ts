import { integer, pgTable, serial, varchar } from 'drizzle-orm/pg-core'
import { countries } from './countries'
import { InferModel } from 'drizzle-orm'

export const cities = pgTable('cities', {
  id: serial('id').primaryKey(),
  city_name: varchar('city_name', { length: 255 }),
  population: integer('population'),
  countryId: integer('country_id').references(() => countries.id),
})

export type Cities = InferModel<typeof cities> // normal type
export type NewCities = InferModel<typeof cities, 'insert'> // insert type
