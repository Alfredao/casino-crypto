import { resolver } from "blitz"
import db from "db"
import { z } from "zod"

const CreateRouletteBet = z.object({
  number: z.number(),
  chips: z.number(),
  userId: z.number(),
  rouletteId: z.number(),
})

export default resolver.pipe(
  resolver.zod(CreateRouletteBet),
  resolver.authorize(),
  async (input) => {
    // TODO: in multi-tenant app, you must add validation to ensure correct tenant
    const rouletteBet = await db.rouletteBet.create({ data: input })

    return rouletteBet
  }
)
