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

export const arrangePagesToDisplay = ({ data, settings }) => {
  const totalRows = settings.spaceAvaileble / settings.rowHeight - 1;
  let exactTotalRows = totalRows;

  if (totalRows % 1) {
    exactTotalRows = totalRows - (totalRows % 1);
  }

  if (settings.rowNum !== exactTotalRows) {
    return exactTotalRows;
  }
};

export const setupDataToDisplay = (data) => {
  const changeOrder = data.map((ele) => {
    const arrangedDate = arrangeDate(ele.dateTime);
    return {
      dateTime: arrangedDate,
      maximum: ele.maximum,
      meanAverage: ele.meanAverage,
      minimum: ele.minimum,
    };
  });
  return changeOrder;
};
