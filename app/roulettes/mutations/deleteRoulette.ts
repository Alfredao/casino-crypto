import { resolver } from "blitz"
import db from "db"
import { z } from "zod"

const DeleteRoulette = z.object({
  id: z.number(),
})

export default resolver.pipe(resolver.zod(DeleteRoulette), resolver.authorize(), async ({ id }) => {
  // TODO: in multi-tenant app, you must add validation to ensure correct tenant
  const roulette = await db.roulette.deleteMany({ where: { id } })

  return roulette
})
