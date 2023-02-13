import { useSelector } from "react-redux";
import Tbody from "./Tbody/Tbody";
import Thead from "./Thead/Thead";

function Table  ()  {

   const data = useSelector(state => state.chart.data);

   return <table>
      <Thead />
      <Tbody data={data} />
   </table>
}


export default Table;