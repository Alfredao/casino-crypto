import { BlitzPage, useMutation } from "blitz"
import Layout from "app/core/layouts/Layout"
import { useCurrentUser } from "app/core/hooks/useCurrentUser"
import logout from "app/auth/mutations/logout"
import { useRouter } from "next/router"
import Button from "react-bootstrap/Button"

const UserInfo = () => {
  const router = useRouter()
  const currentUser = useCurrentUser()
  const [logoutMutation] = useMutation(logout)

  if (currentUser) {
    return (
      <>
        <button
          className="button small"
          onClick={async () => {
            await logoutMutation()
          }}
        >
          Logout
        </button>
        <div>
          User id: <code>{currentUser.id}</code>
          <br />
          User role: <code>{currentUser.role}</code>
        </div>
        <Button
          className={"mt-3"}
          onClick={() => {
            router.push({
              pathname: "/roulette",
            })
          }}
        >
          View roulette
        </Button>
      </>
    )
  } else {
    return (
      <>
        <h3>Not connected</h3>
      </>
    )
  }
}

const Home: BlitzPage = () => {
  return (
    <div className="container">
      <p className={"mt-3"}>&nbsp;</p>
      <UserInfo />
    </div>
  )
}

Home.suppressFirstRenderFlicker = true
Home.getLayout = (page) => <Layout title="Home">{page}</Layout>

export default Home
