import FormContainer from "./components/formContainer/FormContainer";
import "./styles/globals.scss";
import Footer from "./components/footer/Footer";

function App() {

  return (
    <>
      <header>

      </header>
      <main className="main">
        <section className="globalContainer">
          <div className="content">
            <div className="form">
              <FormContainer />
            </div>
          </div>
        </section>
      </main>
      {/* <div className="wrapSvgNav">
        <div className="svgNav">
          <img src={waves5} width={100} height={100} alt='l' />
        </div>
      </div> */}
      <Footer />
    </>

  )
}

export default App
