export default function Dice(props){
    
    const styles={
        backgroundColor:props.held ? "green": "grey",
    }
     
     return(
      <button style={styles} onClick={()=>props.hold(props.id)}>{props.value}</button>
    )
}