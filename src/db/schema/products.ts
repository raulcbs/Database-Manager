import { InferModel } from 'drizzle-orm'
import { integer, pgTable, serial, varchar, text } from 'drizzle-orm/pg-core'

export const products = pgTable('products', {
  id: serial('id').primaryKey(),
  productName: varchar('product_name', { length: 255 }),
  price: integer('price'),
  description: text('description'),
  category: varchar('category', { length: 255 }),
})

export type Products = InferModel<typeof products> // normal type
export type NewProducts = InferModel<typeof products, 'insert'> // insert type
