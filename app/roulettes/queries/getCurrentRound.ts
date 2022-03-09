import { NotFoundError, resolver } from "blitz"
import db from "db"

export default resolver.pipe(resolver.authorize(), async () => {
  const roulette = await db.roulette.findFirst({
    where: {
      id: 1,
    },
    include: {
      bets: true,
    },
  })

  if (!roulette) throw new NotFoundError()

  return roulette
})
