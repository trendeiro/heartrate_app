import { useSelector } from "react-redux";
import ButtonGroup from "../ButtonGroup/ButtonGroup";

function Options() {

    const filterOpt = useSelector(state => state.chart.filterOpt);


    return <div>
        
        <ButtonGroup/>
    </div>
}


export default Options