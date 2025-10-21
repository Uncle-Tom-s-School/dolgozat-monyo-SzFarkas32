import BeerCard, {type BeerCardType} from "./components/BeerCard"
import { useEffect, useState } from "react";



const App = () => {

  const [beers, setBeer] = useState<BeerCardType[]>([]);

    useEffect(() => {
    fetch('/data.json')
      .then(response => response.json())
      .then(data => setBeer(data));
  }, []);

  return (
    <div className="beerCardWrapper">
      {beers.map(beer => <BeerCard {...beer}/>)}
    </div>
  )
}

export default App