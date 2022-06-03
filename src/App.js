import Header from "./components/header";
import Nav from "./components/nav";
import Footer from "./components/footer";

function App() {
  return (
    <body className="App">
      <section className = "header">
        <Header/>
      </section>
      <section className = "nav">
        <Nav/>
      </section>
      <section className = "footer">
        <Footer/>
      </section>
    </body>
  );
}

export default App;
