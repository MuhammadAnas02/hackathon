import createImageUrlBuilder from '@sanity/image-url'


import {client} from '@/sanity/lib/client'

import { SanityImageSource } from '@sanity/image-url/lib/types/types';

// https://www.sanity.io/docs/image-url
const builder = createImageUrlBuilder(client)

export const urlFor = (source: SanityImageSource) => {
  return builder.image(source)
}
