/* eslint-disable react/display-name, jsx-a11y/click-events-have-key-events */
import React, { useState } from "react";
import Icon from "awesome-react-icons";

export const SearchBar = ({ doSearch } ) => {

  const BarStyle = {width:"40rem",background:"#F0F0F0", border:"none", padding:"0.5rem" };
  const iconDivStyle = { border:"1" , cursor: "pointer", background:"#bbbb", width:"2rem", height:"2.3rem", margin:"1px 0px -2px 0px" , border:"solid 0.1px"};
  const iconStyle = { padding:"0.1rem", margin:"6px 3px 12px 4px"};
 // const navigate = useNavigate();

  const [searchStr, setSearchStr] = useState('');
 
  const onChange = (val) =>{
    setSearchStr(val);
  }; 

  // const doSearch = () => {
  //   console.log("inside do Search............."+ searchStr);
  //   setIsLoading(true);
  //   productService.getProductBySearchStr( searchStr).then((response) => {
  //     setProducts(response.data);
  //     setIsLoading(false);
  //   });
  //   //setPage(page);
  // };

  return (
   <>
   <div className="flex flex-row ">          
          <input 
          style={BarStyle}
          key="search-bar"
          value={searchStr}
          placeholder={"search Item"}
          onChange={(e) => onChange(e.target.value)}          
          />
          <div className="flex flex-row " style = {iconDivStyle}>     
            <Icon name="search" className="mt-2"  onClick={e=> doSearch(1, searchStr)} style={iconStyle}/> 
          </div>
    </div>
    </>
  );
};
