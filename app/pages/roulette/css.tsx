import { BlitzPage } from "blitz"
import Layout from "app/core/layouts/Layout"
import { useRouter } from "next/router"
import { useState } from "react"

const RouletteCssPage: BlitzPage = () => {
  const router = useRouter()

  const [number, setNumber] = useState<any>(null)

  async function spinRoulette() {
    setNumber(10)
  }

  async function createNewRound() {}

  function LastRounds() {
    return (
      <>
        <table className={"table"}>
          <thead>
            <tr>
              <th>Hash</th>
              <th>Number</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>c8837b23ff8aaa8a2dde915473ce0991</td>
              <td>21</td>
            </tr>
            <tr>
              <td>2e2de7dd00440bc773977e27407f11ca</td>
              <td>32</td>
            </tr>
            <tr>
              <td>c8837b23ff8aaa8a2dde915473ce0991</td>
              <td>0</td>
            </tr>
            <tr>
              <td>a5e73728d2f553526c47bbba5b84ef55</td>
              <td>10</td>
            </tr>
          </tbody>
        </table>
      </>
    )
  }

  function Buildings() {
    return (
      <>
        <button
          type="button"
          className="btn btn-primary"
          onClick={async () => {
            await spinRoulette()
          }}
        >
          Spin
        </button>

        <div className="main">
          <div className="plate" id="plate">
            <ul className={number ? "inner inner-" + number : "inner rest"}>
              <li className="number">
                <label>
                  <input type="radio" name="pit" value="32" />
                  <span className="pit">32</span>
                </label>
              </li>
              <li className="number">
                <label>
                  <input type="radio" name="pit" value="15" />
                  <span className="pit">15</span>
                </label>
              </li>
              <li className="number">
                <label>
                  <input type="radio" name="pit" value="19" />
                  <span className="pit">19</span>
                </label>
              </li>
              <li className="number">
                <label>
                  <input type="radio" name="pit" value="4" />
                  <span className="pit">4</span>
                </label>
              </li>
              <li className="number">
                <label>
                  <input type="radio" name="pit" value="21" />
                  <span className="pit">21</span>
                </label>
              </li>
              <li className="number">
                <label>
                  <input type="radio" name="pit" value="2" />
                  <span className="pit">2</span>
                </label>
              </li>
              <li className="number">
                <label>
                  <input type="radio" name="pit" value="25" />
                  <span className="pit">25</span>
                </label>
              </li>
              <li className="number">
                <label>
                  <input type="radio" name="pit" value="17" />
                  <span className="pit">17</span>
                </label>
              </li>
              <li className="number">
                <label>
                  <input type="radio" name="pit" value="34" />
                  <span className="pit">34</span>
                </label>
              </li>
              <li className="number">
                <label>
                  <input type="radio" name="pit" value="6" />
                  <span className="pit">6</span>
                </label>
              </li>
              <li className="number">
                <label>
                  <input type="radio" name="pit" value="27" />
                  <span className="pit">27</span>
                </label>
              </li>
              <li className="number">
                <label>
                  <input type="radio" name="pit" value="13" />
                  <span className="pit">13</span>
                </label>
              </li>
              <li className="number">
                <label>
                  <input type="radio" name="pit" value="36" />
                  <span className="pit">36</span>
                </label>
              </li>
              <li className="number">
                <label>
                  <input type="radio" name="pit" value="11" />
                  <span className="pit">11</span>
                </label>
              </li>
              <li className="number">
                <label>
                  <input type="radio" name="pit" value="30" />
                  <span className="pit">30</span>
                </label>
              </li>
              <li className="number">
                <label>
                  <input type="radio" name="pit" value="8" />
                  <span className="pit">8</span>
                </label>
              </li>
              <li className="number">
                <label>
                  <input type="radio" name="pit" value="23" />
                  <span className="pit">23</span>
                </label>
              </li>
              <li className="number">
                <label>
                  <input type="radio" name="pit" value="10" />
                  <span className="pit">10</span>
                </label>
              </li>
              <li className="number">
                <label>
                  <input type="radio" name="pit" value="5" />
                  <span className="pit">5</span>
                </label>
              </li>
              <li className="number">
                <label>
                  <input type="radio" name="pit" value="24" />
                  <span className="pit">24</span>
                </label>
              </li>
              <li className="number">
                <label>
                  <input type="radio" name="pit" value="16" />
                  <span className="pit">16</span>
                </label>
              </li>
              <li className="number">
                <label>
                  <input type="radio" name="pit" value="33" />
                  <span className="pit">33</span>
                </label>
              </li>
              <li className="number">
                <label>
                  <input type="radio" name="pit" value="1" />
                  <span className="pit">1</span>
                </label>
              </li>
              <li className="number">
                <label>
                  <input type="radio" name="pit" value="20" />
                  <span className="pit">20</span>
                </label>
              </li>
              <li className="number">
                <label>
                  <input type="radio" name="pit" value="14" />
                  <span className="pit">14</span>
                </label>
              </li>
              <li className="number">
                <label>
                  <input type="radio" name="pit" value="31" />
                  <span className="pit">31</span>
                </label>
              </li>
              <li className="number">
                <label>
                  <input type="radio" name="pit" value="9" />
                  <span className="pit">9</span>
                </label>
              </li>
              <li className="number">
                <label>
                  <input type="radio" name="pit" value="22" />
                  <span className="pit">22</span>
                </label>
              </li>
              <li className="number">
                <label>
                  <input type="radio" name="pit" value="18" />
                  <span className="pit">18</span>
                </label>
              </li>
              <li className="number">
                <label>
                  <input type="radio" name="pit" value="29" />
                  <span className="pit">29</span>
                </label>
              </li>
              <li className="number">
                <label>
                  <input type="radio" name="pit" value="7" />
                  <span className="pit">7</span>
                </label>
              </li>
              <li className="number">
                <label>
                  <input type="radio" name="pit" value="28" />
                  <span className="pit">28</span>
                </label>
              </li>
              <li className="number">
                <label>
                  <input type="radio" name="pit" value="12" />
                  <span className="pit">12</span>
                </label>
              </li>
              <li className="number">
                <label>
                  <input type="radio" name="pit" value="35" />
                  <span className="pit">35</span>
                </label>
              </li>
              <li className="number">
                <label>
                  <input type="radio" name="pit" value="3" />
                  <span className="pit">3</span>
                </label>
              </li>
              <li className="number">
                <label>
                  <input type="radio" name="pit" value="26" />
                  <span className="pit">26</span>
                </label>
              </li>
              <li className="number">
                <label>
                  <input type="radio" name="pit" value="0" />
                  <span className="pit">0</span>
                </label>
              </li>
            </ul>
            <div className="data">
              <div className="data-inner">
                <div className="mask" />
                <div className="result">
                  <div className="result-number">00</div>
                  <div className="result-color">red</div>
                </div>
              </div>
            </div>
          </div>
          <div className="previous-results">
            <ol className="previous-list">
              <li className="visually-hidden placeholder">No results yet</li>
            </ol>
          </div>
        </div>
      </>
    )
  }

  return (
    <>
      <main>
        <div className="album pt-1 pb-5 bg-light">
          <div className="container mt-5">
            <Buildings />
          </div>
          <div className="container mt-5">
            <LastRounds />
          </div>
        </div>
      </main>
    </>
  )
}

RouletteCssPage.authenticate = true
RouletteCssPage.getLayout = (page) => <Layout>{page}</Layout>

export default RouletteCssPage
