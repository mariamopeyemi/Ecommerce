import Pagination from "@mui/material/Pagination";
import * as React from "react";

const MyPagination = ({ count, onClick, page, onBack, onNext}) => {
  // const [pageNo, setPageNo] = React.useState(1);
  const style = {
    "&.MuiPagination-root ul button.MuiButtonBase-root.MuiPaginationItem-page": {
      border: "1px solid #DFE4E8",
      color: "#818FA3",
      height: "32px",
      width: "32px",
      fontSize: "14px",
      fontFamily: "'SF Pro Display', sans-serif !important",
    },
    "&.MuiPagination-root ul button.MuiButtonBase-root.MuiPaginationItem-page.Mui-selected": {
      bgcolor: "#E1F7FF",
      borderColor: "#B4EBFF",
      color: "#110066",
    },
  };

  return <div className="flex flex-row flex-wrap">
        <button
            onClick={onBack}
            className={`h-[0.5rem] grid place-items-center place-content-center rounded-[5px] p-[1rem] border border-[#827F7F] bg-[#F0F0F0]`}
          >
            <svg
              className=' rotate-180'
              width='6'
              height='10'
              viewBox='0 0 6 10'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M3.88047 5.00005L0.167969 1.28755L1.22847 0.227051L6.00147 5.00005L1.22847 9.77305L0.167969 8.71255L3.88047 5.00005Z'
                fill='black'
              />
            </svg>
          </button>

          <Pagination 
              onClick={onClick}
              sx={style} 
              hideNextButton
              hidePrevButton
              count={count} 
              page={page} 
              variant="outlined" 
              shape="rounded" />

              <button
            onClick={onNext}
            className={`h-[0.5rem] grid place-items-center place-content-center rounded-[5px] p-[1rem] border border-[#827F7F] bg-[#F0F0F0]`}
          >
            <svg
              width='6'
              height='10'
              viewBox='0 0 6 10'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M3.88047 5.00005L0.167969 1.28755L1.22847 0.227051L6.00147 5.00005L1.22847 9.77305L0.167969 8.71255L3.88047 5.00005Z'
                fill='black'
              />
            </svg>
          </button>
  </div>

};

export default MyPagination;

