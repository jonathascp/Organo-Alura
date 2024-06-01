import Banner from './componentes/Banner/Banner';
import Footer from './componentes/Footer/Footer';
import Time from './componentes/Time/Time';
import Formulario from './componentes/formulario/Formulario';
import {useState} from "react";

function App() {

  const time = [
    {
      nome:"Programação",
      corPrimaria:"#57c278",
      corSecundaria:"#d9f7e9"
    },
    {
      nome:"Front-End",
      corPrimaria:"#82cffa",
      corSecundaria:"#e8f8ff"
    },
    {
      nome:"Data-Science",
      corPrimaria:"#a6d157",
      corSecundaria:"#f0f8e2"
    },
    {
      nome:"Devops",
      corPrimaria:"#e06b69",
      corSecundaria:"#fde7e8"
    },
    {
      nome:" UX e Design",
      corPrimaria:"#db6ebf",
      corSecundaria:"#fae9f5"
    },
    {
      nome:"Mobile",
      corPrimaria:"#ffba05",
      corSecundaria:"#fff5d9"
    },
    {
      nome:"Inovação e Gestão",
      corPrimaria:"#ff8a29",
      corSecundaria:"#ffeedf"
    }
  ]

  const [colaboradores,setColaboradores] = useState([]);
  

  function aoNovoColaboradorAdicionado(colaborador)
  {
    debugger;
    setColaboradores([...colaboradores,colaborador]);
  }

  return (
    <div className="App">
      <Banner />
      <Formulario times={time.map(time => time.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}/>
      
      {time.map(time => 
      <Time key={time.nome} nome={time.nome} corPrimaria={time.corPrimaria} corSecundaria={time.corSecundaria} colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}/>)}
      <Footer/>
    </div>
  );
}

export default App;
