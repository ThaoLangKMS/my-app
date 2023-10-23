// "use client";
// import Link from "next/link";
// import React, { useRef } from "react";
// import { Backend_URL } from "../lib/Constant";

// type FormInputs = {
//   email: string;
//   password: string;
// };

// const SignupPage = () => {
//   const register = async () => {
//     const res = await fetch(Backend_URL + "/auth/register", {
//       method: "POST",
//       body: JSON.stringify({
//         email: data.current.email,
//         password: data.current.password,
//       }),
//     });
//     if (!res.ok) {
//       alert(res.statusText);
//       return;
//     }
//     const response = await res.json();
//     alert("User Registered!");
//     console.log({ response });
//   };
//   const data = useRef<FormInputs>({
//     email: "",
//     password: "",
//   });
//   return (
//     <div className=" resize-x m-14 border rounded overflow-auto w-96 shadow justify-center place-self-center">
//       <div className="p-2 bg-gradient-to-b from-white to-slate-200 text-slate-600 place-content-center">
//         Sign up
//       </div>
//       <div className="p-2 flex flex-col gap-6 justify-center">
//         <input
//           onChange={(e) => (data.current.email = e.target.value)}
//           type="text"
//           placeholder="Email"
//           className="input input-bordered w-full max-w-xs"
//         />
//         <input
//           onChange={(e) => (data.current.password = e.target.value)}
//           type="password"
//           placeholder="Password"
//           className="input input-bordered w-full max-w-xs"
//         />

//         <div className="flex justify-center items-center gap-2">
//           <button
//             className="ml-auto bg-blue-600 btn-primary p-2 rounded"
//             onClick={register}
//           >
//             Sign up
//           </button>
//           <Link className="" href={"/"}>
//             Cancel
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SignupPage;
"use client";

import Link from "next/link";
import React, { useRef } from "react";
import { Backend_URL } from "../lib/Constant";

type FormInputs = {
  email: string;
  password: string;
};

const SignupPage = () => {
  const register = async () => {
    const res = await fetch(Backend_URL + "/auth/register", {
      method: "POST",
      body: JSON.stringify({
        email: data.current.email,
        password: data.current.password,
      }),
    });
    if (!res.ok) {
      alert(res.statusText);
      return;
    }
    const response = await res.json();
    alert("User Registered!");
    console.log({ response });
  };
  const data = useRef<FormInputs>({
    email: "",
    password: "",
  });
  return (
    <div className="flex items-center justify-center p-10">
      <div className="resize-x border rounded overflow-auto w-96 shadow p-4 mx-auto">
        <div className="p-2 bg-gradient-to-b from-white to-slate-200 text-slate-600 place-content-center text-center">
          Sign up
        </div>
        <div className="p-2 flex flex-col gap-6 justify-center">
          <input
            onChange={(e) => (data.current.email = e.target.value)}
            type="text"
            placeholder="Email"
            className="input input-bordered w-full max-w-xs"
          />
          <input
            onChange={(e) => (data.current.password = e.target.value)}
            type="password"
            placeholder="Password"
            className="input input-bordered w-full max-w-xs"
          />

          <div className="flex justify-center items-center gap-2 mt-4">
            <button
              className="ml-auto bg-blue-600 btn-primary p-2 rounded"
              onClick={register}
            >
              Sign up
            </button>
            <Link className="" href={"/"}>
              Cancel
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
