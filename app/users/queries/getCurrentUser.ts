import { Ctx } from "blitz"
import db from "db"

export default async function getCurrentUser(_ = null, { session }: Ctx) {
  if (!session.wallet) return null

  return await db.user.findFirst({
    where: {
      wallet: session.wallet,
    },
    //include: {
    //items: true,
    //},
  })
}
