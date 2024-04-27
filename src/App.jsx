import { Main } from "./Pages/Main/Main"
import { Header } from "./components/Header/Header"

export const App = () => {

  return (
    <>
      <Header />
      <div className="container">
        <Main />
      </div>
    </>
  )
}