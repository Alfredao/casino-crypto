import { paginate, resolver } from "blitz"
import db, { Prisma } from "db"

interface GetRoulettesInput
  extends Pick<Prisma.RouletteFindManyArgs, "where" | "orderBy" | "skip" | "take"> {}

export default resolver.pipe(
  resolver.authorize(),
  async ({ where, orderBy, skip = 0, take = 100 }: GetRoulettesInput) => {
    // TODO: in multi-tenant app, you must add validation to ensure correct tenant
    const {
      items: roulettes,
      hasMore,
      nextPage,
      count,
    } = await paginate({
      skip,
      take,
      count: () => db.roulette.count({ where }),
      query: (paginateArgs) => db.roulette.findMany({ ...paginateArgs, where, orderBy }),
    })

    return {
      roulettes,
      nextPage,
      hasMore,
      count,
    }
  }
)
