import { paginate, resolver } from "blitz"
import db, { Prisma } from "db"

interface GetRouletteBetsInput
  extends Pick<Prisma.RouletteBetFindManyArgs, "where" | "orderBy" | "skip" | "take"> {}

export default resolver.pipe(
  resolver.authorize(),
  async ({ where, orderBy, skip = 0, take = 100 }: GetRouletteBetsInput) => {
    // TODO: in multi-tenant app, you must add validation to ensure correct tenant
    const {
      items: rouletteBets,
      hasMore,
      nextPage,
      count,
    } = await paginate({
      skip,
      take,
      count: () => db.rouletteBet.count({ where }),
      query: (paginateArgs) => db.rouletteBet.findMany({ ...paginateArgs, where, orderBy }),
    })

    return {
      rouletteBets,
      nextPage,
      hasMore,
      count,
    }
  }
)
