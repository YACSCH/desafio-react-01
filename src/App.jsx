import Footer from "./components/Footer";
import Header from "./components/Header";
import MyCard from "./components/MyCard";

import Container from "react-bootstrap/Container";
import "./App.css";


function App() {
  return (
    <>
      <Container>
     
          <Header titulo="Adopta un perrito" />
          <main>
            <MyCard img="https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313_1280.jpg" name="Lobito" description="Un canino bastante amable y querendon que se deja acariciar por la gente" color = "primary" title="Poodle" />
            <MyCard img="https://cdn.pixabay.com/photo/2017/09/25/13/12/puppy-2785074_1280.jpg" name="Pepito" description="un perro mu jugueton que se dedica el dia a alegrar la vida de la humanidad" color = "secondary" title="Beagle"  />
            <MyCard img="https://cdn.pixabay.com/photo/2018/03/18/18/06/australian-shepherd-3237735_1280.jpg" name="Dino" description="Perro guardian nacido de una casta de perros policias"  color = "success" title="Labrador" />
            <MyCard img="https://cdn.pixabay.com/photo/2019/11/18/00/38/dog-4633734_1280.jpg" name="Lauchita" description="Perro con car ade roedor, bueno para la comida casera"  color = "danger" title="Terrier" />
          </main>
          <Footer />
             
      </Container>
    </>
  );
}

export default App;
