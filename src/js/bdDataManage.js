/**
 *
 * Function to fix the visual appearance date param
 *
 */

export const arrangeDate = (date) => {
  const oriDate = new Date(date);
  const month = (oriDate.getMonth() + 1).toString().padStart(2, "0");
  const day = oriDate.getDate().toString().padStart(2, "0");
  const year = oriDate.getFullYear().toString();
  const hours = oriDate.getHours().toString().padStart(2, "0");
  const min = oriDate.getMinutes().toString().padStart(2, "0");
  const fullDate = [day, month, year].join("/");
  const time = [hours, min].join(":");
  return [fullDate, time].join(" ");
};

/**
 *
 *   Function to find and return an object with each maximum and minimum values
 *
 */

export const findIniFilters = (data) => {
  const dataMin = data.map((min) => min.minimum);
  const dataMax = data.map((max) => max.maximum);
  const dataAve = data.map((dataAve) => dataAve.meanAverage);
  const dataDate = data.map((date) => new Date(date.dateTime));
  const formatDateEnd = arrangeDate(new Date(Math.max.apply(null, dataDate)));
  const formatDateBegin = arrangeDate(new Date(Math.min.apply(null, dataDate)));

  return {
    min: {
      min: Math.min(...dataMin),
      max: Math.max(...dataMin),
      show:false,

    },
    max: {
      min: Math.min(...dataMax),
      max: Math.max(...dataMax),
      show:false,

    },
    ave: {
      min: Math.min(...dataAve),
      max: Math.max(...dataAve),
      show:false,

    },
    date: {
      begin: formatDateBegin,
      end: formatDateEnd,
      show:false,

    },
  };
};
