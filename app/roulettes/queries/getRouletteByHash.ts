import { resolver, NotFoundError } from "blitz"
import db from "db"
import { z } from "zod"

const GetRoulette = z.object({
  // This accepts type of undefined, but is required at runtime
  hash: z.string().optional().refine(Boolean, "Required"),
})

export default resolver.pipe(
  resolver.zod(GetRoulette),
  resolver.authorize(),
  async ({ hash: hash }) => {
    // TODO: in multi-tenant app, you must add validation to ensure correct tenant
    const roulette = await db.roulette.findFirst({
      where: {
        hash: hash,
      },
      include: {
        bets: true,
      },
    })

    if (!roulette) throw new NotFoundError()

    return roulette
  }
)
