import './Stats.css'
const Stats = (props) =>  {
    console.log(props);
    return (
        <div className="stats"  >
           Points: {props.children}
        </div>
    );
}

export default Stats;