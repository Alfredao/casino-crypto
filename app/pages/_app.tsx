import {
  AppProps,
  ErrorBoundary,
  ErrorComponent,
  AuthenticationError,
  AuthorizationError,
  ErrorFallbackProps,
  useQueryErrorResetBoundary,
} from "blitz"

import "bootstrap/dist/css/bootstrap.min.css"
import { Web3ReactProvider } from "@web3-react/core"
import Web3 from "web3"
import "./style.css"

function getLibrary(provider) {
  return new Web3(provider)
}

export default function App({ Component, pageProps }: AppProps) {
  const getLayout = Component.getLayout || ((page) => page)

  return (
    <ErrorBoundary
      FallbackComponent={RootErrorFallback}
      onReset={useQueryErrorResetBoundary().reset}
    >
      <Web3ReactProvider getLibrary={getLibrary}>
        {getLayout(<Component {...pageProps} />)}
      </Web3ReactProvider>
    </ErrorBoundary>
  )
}

function RootErrorFallback({ error, resetErrorBoundary }: ErrorFallbackProps) {
  if (error instanceof AuthenticationError) {
    // return <LoginForm onSuccess={resetErrorBoundary} />
    console.log("authentication error")
    return <ErrorComponent statusCode={error.statusCode} title="not authenticated" />
  } else if (error instanceof AuthorizationError) {
    return (
      <ErrorComponent
        statusCode={error.statusCode}
        title="Sorry, you are not authorized to access this"
      />
    )
  } else {
    return (
      <ErrorComponent statusCode={error.statusCode || 400} title={error.message || error.name} />
    )
  }
}
