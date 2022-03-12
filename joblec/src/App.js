import Footer from "./compnents/Layout/Footer";
import Header from "./compnents/Layout/Header";
import Main from "./compnents/Layout/Main";
import Row from "./compnents/Lecture/Row";




function App() {
  return (
    <>
    <Header/>
    <Main>
      
      <Row title="Frontend" fetchUrl="https://job-lecture-default-rtdb.firebaseio.com/frontend.json" />
      <Row title="Backend" fetchUrl="https://job-lecture-default-rtdb.firebaseio.com/backend.json" />
      <Row title="Data" fetchUrl="https://job-lecture-default-rtdb.firebaseio.com/data.json" />
      <Row title="AI" fetchUrl="https://job-lecture-default-rtdb.firebaseio.com/ai.json" />
    </Main>
    <Footer/>
    </>
  );
}

export default App;
