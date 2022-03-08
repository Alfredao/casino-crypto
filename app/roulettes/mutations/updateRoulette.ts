import { resolver } from "blitz"
import db from "db"
import { z } from "zod"

const UpdateRoulette = z.object({
  id: z.number(),
  date: z.string(),
})

export default resolver.pipe(
  resolver.zod(UpdateRoulette),
  resolver.authorize(),
  async ({ id, ...data }) => {
    // TODO: in multi-tenant app, you must add validation to ensure correct tenant
    const roulette = await db.roulette.update({ where: { id }, data })

    return roulette
  }
)
