
function SelectBox({ options, defaultVal,onChangeEvent }) {

  const removeDuplicates = () =>{

   return options.filter((item,index) => options.indexOf(item) === index)
  }
  const DataOptions = () => {
    const uniqueOpt = removeDuplicates();
    const parsedOptions = uniqueOpt.map((options) => parseInt(options));
    const sortedOptions = parsedOptions.sort((first, second) => {
      return first > second ? 1 : -1;
    });
    return sortedOptions.map((options, index) => {
      if(options === defaultVal){
        return (
          <option key={index} value={options} selected >
            {options}
          </option>
        );
      }
      return (
        <option key={index} value={options} >
          {options}
        </option>
      );
    });
  };



  return (
    <div>
      <select 
      
      onChange={onChangeEvent}
      >{DataOptions()}</select>
    </div>
  );
}

export default SelectBox;
