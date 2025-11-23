// import TravelHeader from "./components/travelHeader";
// import TravelEntry from "./components/travelEntry";
// import travelData from "./components/travelData";
import ChefHeader from "./components/chefHeader";
import ChefContent from "./components/chefContent";
export default function App()
{ 
  // const travel=travelData.map((data)=>{
  //   return <TravelEntry key={data.id} {...data} />
  // })

    return(
        <>
        {/* <TravelHeader />
        <div>
        {travel}
        </div> */}
        <ChefHeader />
        <ChefContent />
        </>
    )
}