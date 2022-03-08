import { resolver, NotFoundError } from "blitz"
import db from "db"
import { z } from "zod"

const GetRouletteBet = z.object({
  // This accepts type of undefined, but is required at runtime
  id: z.number().optional().refine(Boolean, "Required"),
})

export default resolver.pipe(resolver.zod(GetRouletteBet), resolver.authorize(), async ({ id }) => {
  // TODO: in multi-tenant app, you must add validation to ensure correct tenant
  const rouletteBet = await db.rouletteBet.findFirst({ where: { id } })

  if (!rouletteBet) throw new NotFoundError()

  return rouletteBet
})
