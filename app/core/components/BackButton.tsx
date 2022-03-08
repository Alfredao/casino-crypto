import React from "react"
import { Button } from "react-bootstrap"
import { useRouter } from "blitz"

function BackButton() {
  const router = useRouter()

  return (
    <>
      <Button className={"float-end"} onClick={() => router.back()}>
        Back
      </Button>
    </>
  )
}

export default BackButton
