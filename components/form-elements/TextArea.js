// import React from "react";

// const TextArea = ({ className, label, ...props }) => {
//   return (
//     <div className=" relative">
//       <textarea
//         {...props}
//         className={` peer w-full min-h-12 rounded-xl border border-[#2E3228] bg-[#111111] outline-none transition-all text-[#C5C8BA] focus:border-primary p-4 ${className}`}
//         row={25}
//       ></textarea>
//       <label style={{ letterSpacing: "0.5px" }} className=" mb-2 text-xs font-medium text-[#2E3228] capitalize transition-all peer-focus:!text-[#C5C8BA] -translate-y-[70px] block absolute top-12">
//         {label}
//       </label>
//     </div>
//   );
// };

// export default TextArea;
import React from "react";

const TextArea = ({ className, label, ...props }) => {
  return (
    <div className=" relative ">
      <textarea
        {...props}
        className={` peer w-full min-h-10 rounded-xl border border-[#eaebe8] bg-[white] outline-none transition-all text-[#C5C8BA] focus:border-primary p-4 ${className}`}
        row={25}
      ></textarea>
      <label style={{ letterSpacing: "0.5px" }} className="  text-xs font-medium text-[black] capitalize transition-all peer-focus:!text-[green] -translate-y-[70px] block absolute top-12">
        {label}
      </label>
    </div>
  );
};

export default TextArea;
