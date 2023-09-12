import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId, useCdn } from '../env'

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  token: "skb4kCywnphMtL3Ds1HYoB0XTHVxTkSObSfDDISg0qtVpCExCK3HloWYk9ATBCSKDVNQ4UmiFAejBTMKbldmALxPe94HUFzgOqVQT9PDTAnL31g1KQzXBx8j7JwAB0eowojqAAfeFyUsLpzRa5NEOtzuGAaqeGwivMz7QuF4AsXQ18Z69g4j"
})
