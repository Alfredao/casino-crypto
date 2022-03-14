import { NotFoundError, resolver } from "blitz"
import db from "db"

export default resolver.pipe(resolver.authorize(), async () => {
  const roulette = await db.roulette.findFirst({
    where: {
      number: null,
      date: {
        gt: new Date(),
      },
    },
    orderBy: [
      {
        date: "asc",
      },
    ],
    include: {
      bets: true,
    },
  })

  if (!roulette) throw new NotFoundError()

  return roulette
})
