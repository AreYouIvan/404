import './App.css';
import { Text } from "./components/Text"
import { Button } from "./components/Button"
import { Title } from "./components/Title"
import { Image } from "./components/Image"
import logo from "./assets/Scarecrow.png"

function App() {
  return (
    <div className="App">
      <Title className="title">I have bad news for you</Title>
      <Text className="text" >The page you are looking for might be removed or is temporarily unavailable.</Text>
      <Button className="button" type="button">BACK TO HOMEPAGE</Button>
      <div className="image">
      <Image src={logo} />
      </div>

    </div>
  );
}

export default App;
