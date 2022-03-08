import { resolver } from "blitz"
import db from "db"
import { z } from "zod"
import { Role } from "../../../types"

const AuthWallet = z.object({
  wallet: z.string(),
})

export default resolver.pipe(resolver.zod(AuthWallet), async (input, ctx) => {
  if (!input.wallet.startsWith("0x")) {
    return null
  }

  let user = await db.user.findUnique({
    where: {
      wallet: input.wallet,
    },
  })

  if (!user) {
    user = await db.user.create({ data: input })
  }

  await ctx.session.$create({
    userId: user.id,
    role: user.role as Role,
    wallet: input.wallet,
    balance: user.balance,
    energy: user.energy,
  })

  return user
})
