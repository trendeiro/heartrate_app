import { useSelector } from "react-redux";
import ButtonGroup from "../ButtonGroup/ButtonGroup";
import Filters from "../Filters/Filters";
import classes from "./Options.module.css"
function Options() {

    const filterOpt = useSelector(state => state.chart.filterOpt);


    return <div className={classes.optionsSection}>
        <Filters/>
        <ButtonGroup/>
    </div>
}


export default Options