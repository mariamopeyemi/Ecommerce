// import React from "react";

// const Input = ({ className, label, ...props }) => {
//   return (
//     <div className="">
//       <input {...props} className={` peer w-full h-12 text-[12px] rounded-xl border border-[#2E3228] bg-white outline-none transition-all delay-100 text-black focus:bg-[#edf1ff] focus:border-[#7531D7] p-4 ${className}`} />
//       <label style={{ letterSpacing: "0.5px" }} className=" mb-2 text-xs font-medium text-[#2E3228] capitalize  transition-all peer-focus:!text-[#C5C8BA] -translate-y-[70px] block">
//         {label}
//       </label>
//     </div>
//   );
// };

// export default Input;

import React from "react";

const Input = ({ className, label, ...props }) => {
  return (
    <div>
      <input {...props} className={`text-[12px] peer w-full h-10 rounded-xl border border-[#eaebe8] bg-[white] outline-none transition-all  text-[black] focus:border-primary p-4 ${className}`} />
      <label style={{ letterSpacing: "0.5px" }} className="  text-xs font-medium text-[black] capitalize  transition-all peer-focus:!text-[green] -translate-y-[70px] block">
        {label}
      </label>
    </div>
  );
};

export default Input;