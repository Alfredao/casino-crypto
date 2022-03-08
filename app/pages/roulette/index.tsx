import { BlitzPage, useQuery } from "blitz"
import Layout from "app/core/layouts/Layout"
import { useState } from "react"
import { Wheel } from "react-custom-roulette"
import { Form, Field } from "react-final-form"
import getRoulettes from "../../roulettes/queries/getRoulettes"
import { ROULETTE_DATA } from "./rouletteData"
import React from "react"

const RoulettePage: BlitzPage = () => {
  const [roundItems] = useQuery(getRoulettes, {})
  const [mustSpin, setMustSpin] = useState(false)
  const [prizeNumber, setPrizeNumber] = useState(0)

  const handleSpinClick = async () => {
    const newPrizeNumber = Math.floor(Math.random() * ROULETTE_DATA.length)

    setPrizeNumber(18)
    setMustSpin(true)
  }

  const onSubmit = function (data) {
    console.log(data)
  }

  function LastRounds() {
    return (
      <>
        <button onClick={handleSpinClick}>Spin</button>
        <table className={"table"}>
          <thead>
            <tr>
              <th>Hash</th>
              <th>Date</th>
              <th>Number</th>
            </tr>
          </thead>
          <tbody>
            {roundItems.roulettes.map((round) => (
              <tr key={round.id}>
                <td>{round.hash}</td>
                <td>{round.date.toDateString()}</td>
                <td>{round.number}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    )
  }

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
                              name={"number"}
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
                    <button className={"btn btn-primary mt-3"} type="submit">
                      Place bet
                    </button>
                  </form>
                )}
              />
              <h1>Bets</h1>
              <hr />
            </div>
          </div>
        </div>
        <div className="container mt-5">
          <LastRounds />
        </div>
      </main>
    </>
  )
}

RoulettePage.authenticate = true
RoulettePage.getLayout = (page) => <Layout>{page}</Layout>

export default RoulettePage
