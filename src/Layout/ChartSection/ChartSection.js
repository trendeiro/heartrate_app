import { useEffect } from "react";
import ButtonGroup from "../ButtonGroup/ButtonGroup";

function ChartSection() {
  useEffect(() => {}, []);

  return (
    <section>
      <div>
        <ButtonGroup />
      </div>
      <canvas />
    </section>
  );
}

export default ChartSection;
