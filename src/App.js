import Header from "./components/header";
import Nav from "./components/nav";
import Footer from "./components/footer";
import "./styles/app.css";

function App() {
  return (
    <main className="App">
      <section className = "header">
        <Header/>
      </section>
      <section className = "nav">
        <Nav/>
      </section>
      <section className = "footer">
        <Footer/>
      </section>
    </main>
  );
}

export default App;
