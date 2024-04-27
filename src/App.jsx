import React from "react"
import Button from "./components/Button"
import ButtonGradient from "./assets/svg/ButtonGradient"

  const App=()=>{
  return (
    <>
     <h1 className="text-3xl font-bold underline">
     Hello World</h1>
      <div className="pt-[4.75rem] lg:pt-[6.25rem] overflow-hidden">
        <Button className="mt-10" href="#login">
        Something
        </Button>

      </div>
      <ButtonGradient />
    </>
  )
}

export default App
