import './App.css';
import Navbar from './Components/Navbar/Navbar.js'
import Header from './Components/Header/Header.js'
import Boxes from './Components/Boxes/Boxes.js'

function App() {
  const datas = [{
    name: 'Bikal1',
    desc: `Hi! I'm Bikal Siwakoti, and I currently reside in Itahari, Nepal's easternmost district. At Itahar i International College,
     I am pursuing a Bachelor's degree in Information Technology (IIC). Well, I've always been interested in programming and it turned 
     out that I was quite enthusiastic about it since I was always eager to learn new things like how to construct websites and other projects.`
  }, {
    name: 'Bikal2',
    desc: `Hi! I'm Bikal Siwakoti, and I currently reside in Itahari, Nepal's easternmost district. At Itahar i International College,
   I am pursuing a Bachelor's degree in Information Technology (IIC). Well, I've always been interested in programming and it turned 
   out that I was quite enthusiastic about it since I was always eager to learn new things like how to construct websites and other projects.`
  }, {
    name: 'Bikal3',
    desc: `Hi! I'm Bikal Siwakoti, and I currently reside in Itahari, Nepal's easternmost dist   rict. At Itahar i International College,
   I am pursuing a Bachelor's degree in Information Technology (IIC). Well, I've always been interested in programming and it turned 
   out that I was quite enthusiastic about it since I was always eager to learn new things like how to construct websites and other projects.`
  }, {
    name: 'Bikal4',
    desc: `Hi! I'm Bikal Siwakoti, and I currently reside in Itahari, Nepal's easternmost district. At Itahar i International College,
   I am pursuing a Bachelor's degree in Information Technology (IIC). Well, I've always been interested in programming and it turned 
   out that I was quite enthusiastic about it since I was always eager to learn new things like how to construct websites and other projects.`
  }]
  return (

    <div className="App">
      <Navbar />
      <Header />
      <Boxes data={datas} />

    </div>
  );
}

export default App;
