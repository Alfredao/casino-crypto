import { resolver } from "blitz"
import db from "db"
import { z } from "zod"

const UpdateRouletteBet = z.object({
  id: z.number(),
  number: z.number(),
})

export default resolver.pipe(
  resolver.zod(UpdateRouletteBet),
  resolver.authorize(),
  async ({ id, ...data }) => {
    // TODO: in multi-tenant app, you must add validation to ensure correct tenant
    const rouletteBet = await db.rouletteBet.update({ where: { id }, data })

    return rouletteBet
  }
)
