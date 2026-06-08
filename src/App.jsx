import './App.css'
import Card from './components/Card'
import Header from './components/Header'

import portillos from './assets/portillos.webp'
import ginos from './assets/ginos-east.webp'
import stans from './assets/stans-donuts.jpg'
import rainbow from './assets/rainbow-cone.jpg'
import dearborn from './assets/dearborn.jpg'
import girlGoat from './assets/girl-goat.webp'
import sweetMaple from './assets/sweet-maple.jpg'
import menya from './assets/menya-goku.png'
import smallCheval from './assets/small-cheval.webp'
import lula from './assets/lula-cafe.jpg'

const App = () => {
  return (
    <div className="board">
      <Header />
      <div className="places-container">
        <Card restaurantName="Portillo's" restaurantImg={portillos} restaurantType="Fast Casual Chicago-Style" restaurantLink="https://www.portillos.com/index.html"/>
        <Card restaurantName="Gino's East" restaurantImg={ginos} restaurantType="Chicago-Style Pizzeria" restaurantLink="https://www.ginoseast.com/"/>
        <Card restaurantName="Stan's Donuts" restaurantImg={stans} restaurantType="Donut Shop" restaurantLink="https://www.stansdonuts.com/"/>
        <Card restaurantName="Rainbow Cone" restaurantImg={rainbow} restaurantType="Ice Cream" restaurantLink="https://rainbowcone.com/"/>
        <Card restaurantName="The Dearborn" restaurantImg={dearborn} restaurantType="American Tavern" restaurantLink="https://www.thedearborntavern.com/"/>
        <Card restaurantName="Girl & the Goat" restaurantImg={girlGoat} restaurantType="Eclectic Variety Cuisine" restaurantLink="https://www.girlandthegoat.com/"/>
        <Card restaurantName="Sweet Maple Cafe" restaurantImg={sweetMaple} restaurantType="Comfort Food" restaurantLink="https://www.sweetmaplecafechicago.com/"/>
        <Card restaurantName="Menya Goku" restaurantImg={menya} restaurantType="Japanese Cuisine" restaurantLink="https://www.menyagoku.com/"/>
        <Card restaurantName="Small Cheval" restaurantImg={smallCheval} restaurantType="Burgers & Beer" restaurantLink="https://smallcheval.com/"/>
        <Card restaurantName="Lula Cafe" restaurantImg={lula} restaurantType="Casual Brunch" restaurantLink="https://www.lulacafe.com/"/>
      </div>
    </div>
  );
}

export default App;