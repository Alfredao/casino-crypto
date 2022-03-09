import { BlitzLayout, Head, useMutation } from "blitz"
import { useWeb3React } from "@web3-react/core"
import { injected } from "../../connectors/injected"
import { useEffect, Suspense } from "react"
import authWallet from "../../auth/mutations/authWallet"
import LoginButton from "../components/LoginButton"

const Layout: BlitzLayout<{ title?: string }> = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title || "Casino Crypto"}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <div className="navbar navbar-dark bg-dark shadow-sm">
          <div className="container">
            <div className="flex flex-col items-center justify-center">
              <LoginButton />
            </div>
          </div>
        </div>
      </header>

      <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>

      <footer className="text-muted py-5">
        <div className="container">
          <p className="float-end mb-1">
            <a href="#">Back to top</a>
          </p>
          <p className="mb-1">
            Album example is &copy; Bootstrap, but please download and customize it for yourself!
          </p>
          <p className="mb-0">
            New to Bootstrap? <a href="/">Visit the homepage</a> or read our{" "}
            <a href="/docs/5.0/getting-started/introduction/">getting started guide</a>.
          </p>
        </div>
      </footer>
    </>
  )
}

export default Layout
