import { arrangeDate } from "../../../js/bdDataManage.js";

/**
 *
 * Function to filter data
 *
 */

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

/**
 *
 * Function to sort data
 *
 */

const sortData = (orderData, convertData) => {
  if (orderData.type === "Date") {
    const sortedData = convertData.sort((first, second) => {
      if (orderData.desc) {
        return first.dateTime > second.dateTime ? 1 : -1;
      }
      return first.dateTime < second.dateTime ? 1 : -1;
    });
    return sortedData;
  }
  if (orderData.type === "Minimum") {
    const sortedData = convertData.sort((first, second) => {
      if (orderData.desc) {
        return first.minimum > second.minimum ? 1 : -1;
      }
      return first.minimum < second.minimum ? 1 : -1;
    });
    return sortedData;
  }
  if (orderData.type === "Maximum") {
    const sortedData = convertData.sort((first, second) => {
      if (orderData.desc) {
        return first.maximum > second.maximum ? 1 : -1;
      }
      return first.maximum < second.maximum ? 1 : -1;
    });
    return sortedData;
  }
  if (orderData.type === "Average") {
    const sortedData = convertData.sort((first, second) => {
      if (orderData.desc) {
        return first.meanAverage > second.meanAverage ? 1 : -1;
      }
      return first.meanAverage < second.meanAverage ? 1 : -1;
    });
    return sortedData;
  }
};

/**
 *
 * Function to order data
 *
 */

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

/**
 *
 * Function to create the data format to be displayed in table
 *
 */

export const setupDataToDisplay = ({ data, rowNum, filters, order }) => {
  const dataFilter = filterData(data, filters);
  const dataSorted = orderData(dataFilter, order);

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

/**
 * Function to find each header is sorted and the order
 */

export const findSortedHeader = ({ sortData }) => {
  const headersDefault = ["Date", "Minimum", "Maximum", "Average"];
  const header = [];
  headersDefault.forEach((ele) => {
    if (sortData.type === ele) {
      return header.push({
        headerText: ele,
        sorted: true,
        type: ele,
      });
    }
        return header.push({ headerText: ele, sorted: false, type: ele, });
  });
  return header;
};
