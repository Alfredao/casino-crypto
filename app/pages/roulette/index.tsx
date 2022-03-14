import { BlitzPage, useMutation, useParam, useQuery, useRouterQuery } from "blitz"
import Layout from "app/core/layouts/Layout"
import React, { useEffect, useState } from "react"
import { Wheel } from "react-custom-roulette"
import { Field, Form } from "react-final-form"
import { convertIdtoOption, ROULETTE_DATA } from "./rouletteData"
import { useTimer } from "react-timer-hook"
import placeBet from "../../roulette-bets/mutations/placeBet"
import getRouletteByHash from "../../roulettes/queries/getRouletteByHash"

function TimerCountdown({ expiryTimestamp }) {
  const { seconds, minutes, hours, days, isRunning } = useTimer({
    expiryTimestamp,
    onExpire: () => console.warn("onExpire called"),
  })

  return (
    <>
      {isRunning ? (
        <>
          {hours}:{minutes}:{seconds}
        </>
      ) : (
        "Ended"
      )}
    </>
  )
}

const RoulettePage: BlitzPage = () => {
  const query = useRouterQuery()
  const [roulette] = useQuery(getRouletteByHash, { hash: query.hash?.toString() })
  const [mustSpin, setMustSpin] = useState(false)
  const [hasSpinned, setSpinned] = useState(false)
  const [prizeNumber, setPrizeNumber] = useState(0)
  const [placeBetMutation] = useMutation(placeBet)

  const handleSpinClick = async () => {
    const newPrizeNumber = Math.floor(Math.random() * ROULETTE_DATA.length)

    setPrizeNumber(newPrizeNumber)
    setMustSpin(true)
  }

  const onSubmit = async function (data) {
    await placeBetMutation({
      roulette: roulette.id,
      ...data,
    })
      .then((result: any) => {
        alert(result.message)
      })
      .catch((e) => alert(e))
  }

  useEffect(() => {
    if (roulette.number) {
      setPrizeNumber(roulette.number)

      if (!hasSpinned) {
        setMustSpin(true)
        setSpinned(true)
      }
    }
  }, [roulette])

  return (
    <>
      <main>
        <div className="container mt-5">
          <div className="row">
            <div className="col-lg-6">
              <h1>Roulette Game</h1>
              <hr />
              <Wheel
                mustStartSpinning={mustSpin}
                prizeNumber={prizeNumber}
                data={ROULETTE_DATA}
                outerBorderColor={"#666"}
                outerBorderWidth={10}
                innerRadius={50}
                radiusLineColor={"#fff"}
                radiusLineWidth={1}
                textDistance={85}
                fontSize={14}
                perpendicularText={true}
                onStopSpinning={() => {
                  setMustSpin(false)
                }}
              />
              <table className={"table table-borderless mt-3"}>
                <tr>
                  <th>Hash</th>
                  <td>{roulette.hash}</td>
                </tr>
                <tr>
                  <th>Spinning in</th>
                  <td>
                    <TimerCountdown expiryTimestamp={roulette.date} />
                  </td>
                </tr>
              </table>
            </div>
            <div className="col-lg-6">
              <h1>Place bet</h1>
              <hr />
              <Form
                onSubmit={onSubmit}
                render={({ handleSubmit }) => (
                  <form onSubmit={handleSubmit}>
                    {ROULETTE_DATA.map((number) => (
                      <React.Fragment key={number.id}>
                        {number.id === 0 ? (
                          ""
                        ) : (
                          <>
                            <Field
                              className={"btn-check"}
                              name={"numbers"}
                              id={`luckyNumber-${number.option}`}
                              component="input"
                              type={"checkbox"}
                              value={number.id}
                            />
                            <label
                              style={{ width: 50 }}
                              className={
                                "m-2 btn " +
                                (number.style.backgroundColor === "#000"
                                  ? "btn-outline-secondary"
                                  : "btn-outline-danger")
                              }
                              htmlFor={`luckyNumber-${number.option}`}
                            >
                              {number.option}
                            </label>
                          </>
                        )}
                      </React.Fragment>
                    ))}
                    <hr />
                    <>
                      <span className={"me-3"}>Chips:</span>

                      <label style={{ width: 100 }} className={"btn btn-outline-primary me-3"}>
                        <Field
                          className={"btn-check"}
                          name={"chips"}
                          component="input"
                          type={"radio"}
                          value={10}
                          onClick={(e) => console.log(e)}
                        />
                        10
                      </label>

                      <label style={{ width: 100 }} className={"btn btn-outline-primary me-3"}>
                        <Field
                          className={"btn-check"}
                          name={"chips"}
                          component="input"
                          type={"radio"}
                          value={100}
                        />
                        100
                      </label>

                      <label style={{ width: 100 }} className={"btn btn-outline-primary me-3"}>
                        <Field
                          className={"btn-check"}
                          name={"chips"}
                          component="input"
                          type={"radio"}
                          value={1000}
                        />
                        1000
                      </label>
                    </>

                    <button className={"btn btn-primary"} type="submit">
                      Place bet
                    </button>
                  </form>
                )}
              />
              <hr />
              <h1>Bets</h1>
              <table className={"table"}>
                <thead>
                  <tr>
                    <th>Number</th>
                    <th>Chips</th>
                  </tr>
                </thead>
                <tbody>
                  {roulette.bets.map((bet) => (
                    <tr key={bet.id}>
                      <td>{convertIdtoOption(bet.number)}</td>
                      <td>{bet.chips}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="container mt-5">
          <button onClick={handleSpinClick}>Spin</button>
        </div>
      </main>
    </>
  )
}

RoulettePage.authenticate = true
RoulettePage.getLayout = (page) => <Layout title={"Roulette"}>{page}</Layout>

export default RoulettePage
