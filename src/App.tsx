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
      <Footer />
    </>

  )
}

export default App
