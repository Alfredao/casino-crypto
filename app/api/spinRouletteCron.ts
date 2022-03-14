import { CronJob } from "quirrel/blitz"

export default CronJob(
  "api/spinRouletteCron", // the path of this API route
  "@hourly", // cron schedule (see https://crontab.guru)
  async () => {
    console.log("SPIN ROULETTE FTW")
  }
)
