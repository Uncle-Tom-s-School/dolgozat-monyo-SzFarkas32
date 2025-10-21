

  export type BeerCardType = {
    image: string;
    name: string;
    abv: string;
    volume: string;
    price: number;
    available: boolean;
  }

const BeerCard = (props: BeerCardType) => {

  return (
    <div className="beerCard">
      <img src={props.image}/>
      <p><strong>{props.name + " " + props.abv + " " + props.volume}</strong></p>
      <p>{props.price} Ft</p>
      <p className={props.available ? "available" : "notavailable"}>{props.available ? "Raktáron" : "Nincs raktáron"}</p>
    </div>
  )
}

export default BeerCard