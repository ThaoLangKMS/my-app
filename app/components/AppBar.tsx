import Link from "next/link";
import React from "react";
import SignInButton from "./SignInButton";

const AppBar = () => {
  return (
    <header className="flex gap-4 p-4 bg-gradient-to-b from-white to-gray-200 shadow">
      <Link className="transition-colors hover:text-blue-500" href={"/"}>
        Todo task
      </Link>
      <Link
        className="transition-colors hover:text-blue-500"
        href={"/completed"}
      >
        Completed task
      </Link>

      <SignInButton />
    </header>
  );
};

export default AppBar;
