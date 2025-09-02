import { createClient } from 'contentful';
import {createClient as createManagementClient} from 'contentful-management'

//API to receive data
export const deliveryClient = createClient({
  space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN,
  environment: import.meta.env.VITE_CONTENTFUL_ENVIRONMENT || 'master',
});

//API to send data
export const managementClient = createManagementClient({
  accessToken: import.meta.env.VITE_CONTENTFUL_MANAGMENT_ACCESS_TOKEN,
  space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
})
