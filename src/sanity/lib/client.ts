import { createClient } from 'next-sanity'

import {  dataset, projectId  } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion: 'v2024-12-30',
  useCdn: false, // Set to false if statically generating pages, using ISR or tag-based revalidation
  token: process.env.SANITY_ACCESS_TOKEN,  
})
