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
  const totalRows = settings.spaceAvaileble / settings.rowHeight - 2;
  let exactTotalRows = totalRows;

  if (totalRows % 2) {
    exactTotalRows = totalRows - (totalRows % 1);
  }

  if (settings.rowNum !== exactTotalRows) {
    return exactTotalRows;
  }
  return settings.rowNum;
};

const filterData = (data, filters) => {
  const dataMinFiltered = [];
  data.forEach((ele) => {
    if (
      parseInt(filters.min.min) <= parseInt(ele.minimum) &&
      parseInt(filters.min.max) >= parseInt(ele.minimum)
    ) {
      dataMinFiltered.push(ele);
      return;
    }
    return;
  });
  const dataMaxFiltered = [];
  dataMinFiltered.forEach((ele) => {
    if (
      parseInt(filters.max.min) <= parseInt(ele.maximum) &&
      parseInt(filters.max.max) >= parseInt(ele.maximum)
    ) {
      dataMaxFiltered.push(ele);
      return;
    }
    return;
  });
  const dataAveFiltered = [];

  dataMaxFiltered.forEach((ele) => {
    if (
      parseInt(filters.ave.min) <= parseInt(ele.meanAverage) &&
      parseInt(filters.ave.max) >= parseInt(ele.meanAverage)
    ) {
      dataAveFiltered.push(ele);
      return;
    }
    return;
  });
  return dataAveFiltered;
};

const sortData = (orderData, convertData) => {
  if (orderData.type === "Date") {
    const sortedData = convertData.sort((first, second) => {
      if (orderData.order === "Desc") {
        return first.dateTime > second.dateTime ? 1 : -1;
      }
      return first.dateTime < second.dateTime ? 1 : -1;
    });
    return sortedData;
  }
  if (orderData.type === "Min") {
    const sortedData = convertData.sort((first, second) => {
      if (orderData.order === "Desc") {
        return first.minimum > second.minimum ? 1 : -1;
      }
      return first.minimum < second.minimum ? 1 : -1;
    });
    return sortedData;
  }
  if (orderData.type === "Max") {
    const sortedData = convertData.sort((first, second) => {
      if (orderData.order === "Desc") {
        return first.maximum > second.maximum ? 1 : -1;
      }
      return first.maximum < second.maximum ? 1 : -1;
    });
    return sortedData;
  }
  if (orderData.type === "Average") {
    const sortedData = convertData.sort((first, second) => {
      if (orderData.order === "Desc") {
        return first.meanAverage > second.meanAverage ? 1 : -1;
      }
      return first.meanAverage < second.meanAverage ? 1 : -1;
    });
    return sortedData;
  }
};

export const orderData = (data, orderData) => {
  const convertData = data.map((ele) => {
    return {
      dateTime: new Date(ele.dateTime),
      maximum: parseInt(ele.maximum),
      meanAverage: parseInt(ele.meanAverage),
      minimum: parseInt(ele.minimum),
    };
  });

  const sortedData = sortData(orderData, convertData);

  return sortedData;
};

export const setupDataToDisplay = ({ data, rowNum, filters,order }) => {
  const dataFilter = filterData(data, filters);
  const dataSorted = orderData(dataFilter,order);

  const changeOrder = dataSorted.map((ele) => {
    const arrangedDate = arrangeDate(ele.dateTime);
    return {
      dateTime: arrangedDate,
      maximum: ele.maximum,
      meanAverage: ele.meanAverage,
      minimum: ele.minimum,
    };
  });


  const finalresult = [];
  

  let totalPage = changeOrder.length / parseInt(rowNum);
  let exactTotalPage = totalPage;
  
  if (totalPage % 1 >= 0.1) {
    exactTotalPage = totalPage - (totalPage % 1) + 1;
  }
  let aux1 = 0;
  let aux2 = parseInt(rowNum);
  
  for (let i = 0; i < exactTotalPage; i++) {
    finalresult.push(changeOrder.slice(aux1, aux2));
    aux1 = aux2;
    aux2 = aux2 + parseInt(rowNum);
    
  }

  return {
    dataToDisplay: finalresult,
    rowNum: rowNum,
  };
};
