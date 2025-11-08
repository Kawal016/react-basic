export default function TravelEntry(props){
     console.log(props)
   return(
        <article className="article1">
            <div className="ImagePart1">
                <img className="travel2img" src={props.img.imgUrl} alt={props.img.alt} />
            </div>
            <div className="ImagePart2">
                <img className="travel3img" src="src/assets/marker.png" alt="location icon"/>
                <span className="countrytext">{props.country}</span>
                <a href={props.mapLink}>View on Google Maps</a>
                <h2 className="countryHead">{props.title}</h2>
                <p className="paraDate">{props.date}</p>
                <p className="paraContent">{props.description}</p>
            </div>
        </article>
    )
}