import { type SchemaTypeDefinition } from 'sanity'
// import { Products } from './products'
import { Order } from './order'
import { Products } from './products'
import { categoryType } from './category'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [  Order , Products , categoryType]
}
