import React from "react"
import ButtonGradient from "./assets/svg/ButtonGradient"
import Header from "./components/Header"

const App=()=>{
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[6.25rem] overflow-hidden">
        {/* <Button className="mt-10" href="#login"> */}
        {/* Something
        </Button> */}
        <Header/>
      </div>
      <ButtonGradient />
    </>
  )
}

export default App
