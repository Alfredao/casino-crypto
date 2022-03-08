import React, { useEffect } from "react"
import { useWeb3React } from "@web3-react/core"
import { useMutation } from "blitz"
import authWallet from "../../auth/mutations/authWallet"
import { injected } from "../../connectors/injected"
import logout from "../../auth/mutations/logout"

function LoginButton() {
  const { active, account, library, connector, activate, deactivate } = useWeb3React()
  const [authWalletMutation] = useMutation(authWallet)
  const [logoutMutation] = useMutation(logout)

  async function connect() {
    try {
      await activate(injected)

      localStorage.setItem("isWalletConnected", "true")
    } catch (ex) {
      console.log(ex)
    }
  }

  async function disconnect() {
    try {
      await deactivate()

      localStorage.setItem("isWalletConnected", "false")
    } catch (ex) {
      console.log(ex)
    }
  }

  useEffect(() => {
    const connectWalletOnPageLoad = async () => {
      if (localStorage?.getItem("isWalletConnected") === "true") {
        await connect()
      }
    }

    connectWalletOnPageLoad().then(() => console.log("ok"))
  }, [])

  useEffect(() => {
    if (account) {
      authWalletMutation({ wallet: `${account}` })
    }
  }, [account])

  return (
    <>
      {active ? (
        <button onClick={disconnect} className="btn btn-danger">
          Connected to {account} | Disconnect
        </button>
      ) : (
        <button onClick={connect} className="btn btn-primary">
          Connect to MetaMask
        </button>
      )}
    </>
  )
}

export default LoginButton
