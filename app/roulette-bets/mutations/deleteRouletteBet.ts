import { resolver } from "blitz"
import db from "db"
import { z } from "zod"

const DeleteRouletteBet = z.object({
  id: z.number(),
})

export default resolver.pipe(
  resolver.zod(DeleteRouletteBet),
  resolver.authorize(),
  async ({ id }) => {
    // TODO: in multi-tenant app, you must add validation to ensure correct tenant
    const rouletteBet = await db.rouletteBet.deleteMany({ where: { id } })

    return rouletteBet
  }
)
