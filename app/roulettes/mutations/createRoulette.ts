import { resolver } from "blitz"
import db from "db"
import { z } from "zod"

const CreateRoulette = z.object({
  hash: z.string(),
  date: z.date(),
})

export default resolver.pipe(resolver.zod(CreateRoulette), resolver.authorize(), async (input) => {
  // TODO: in multi-tenant app, you must add validation to ensure correct tenant
  const roulette = await db.roulette.create({ data: input })

  return roulette
})
