import createImageUrlBuilder from '@sanity/image-url'


import {client} from '@/sanity/lib/client'
import { Image } from 'sanity';

// https://www.sanity.io/docs/image-url
const builder = createImageUrlBuilder(client)

export const urlFor = (source: Image) => {
  return builder.image(source)
}
