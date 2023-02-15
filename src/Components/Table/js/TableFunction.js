import { arrangeDate } from "../../../js/bdDataManage.js";

export const getHeaders = (data) => {
  const headers = [];

  data.forEach((ele, index) => {
    if (index === 0) {
      const keys = Object.keys(ele);
      keys.forEach((ele) => {
        headers.push(ele);
      });
      return;
    }
    Object.keys(ele).forEach((element, index) => {
      if (headers[index] !== element) {
        headers.push(element);
        return;
      }
      return;
    });
    return;
  });

  return headers;
};

export const arrangePagesToDisplay = ({ settings }) => {
  const totalRows = settings.spaceAvaileble / settings.rowHeight - 1;
  let exactTotalRows = totalRows;

  if (totalRows % 2) {
    exactTotalRows = totalRows - (totalRows % 1);
  }

  if (settings.rowNum !== exactTotalRows) {
    return exactTotalRows;
  }
  return settings.rowNum;
};

export const setupDataToDisplay = ({ data, rowNum }) => {
  const changeOrder = data.map((ele) => {
    const arrangedDate = arrangeDate(ele.dateTime);
    return {
      dateTime: arrangedDate,
      maximum: ele.maximum,
      meanAverage: ele.meanAverage,
      minimum: ele.minimum,
    };
  });
  const finalresult = [];
  let totalPage = changeOrder.length / rowNum;
  let exactTotalPage = totalPage;

  if (totalPage % 2 >= 0.1) {
    exactTotalPage = totalPage - (totalPage % 2) + 1;
  }

  let aux1 = 0;
  let aux2 = rowNum;
  for (let i = 0; i < exactTotalPage; i++) {
    finalresult.push(changeOrder.slice(aux1, aux2));
    aux1 = aux2;
    aux2 = aux2 + rowNum;
  }

  return {
    dataToDisplay: finalresult,
    rowNum: rowNum,
  };
};
