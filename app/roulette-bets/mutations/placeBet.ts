import { Ctx, resolver } from "blitz"
import db from "db"
import { z } from "zod"

const CreateRouletteBet = z.object({
  numbers: z.array(z.number()),
  chips: z.string(),
  roulette: z.number(),
})

export default resolver.pipe(
  resolver.zod(CreateRouletteBet),
  resolver.authorize(),
  async ({ numbers: numbers, chips: chips, roulette: roulette }, ctx: Ctx) => {
    if (ctx.session.wallet == null) return false

    const user = await db.user.findUnique({
      where: {
        wallet: ctx.session.wallet,
      },
    })

    if (user === null) throw new Error("User not found")

    numbers.map(async function (number) {
      await db.rouletteBet.create({
        data: {
          userId: user.id,
          rouletteId: roulette,
          chips: parseInt(chips),
          number: number,
        },
      })
    })

    return {
      success: true,
      message: "Bets placed successfully",
    }
  }
)
