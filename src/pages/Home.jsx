import { Heading } from "../components";
import { Link } from "react-router-dom";

const navButtonBase = "rounded-md w-full h-[46px] mb-[10px] font-medium flex items-center justify-center text-center";

export function Home() {
  return (
    <div className="min-h-screen bg-body flex items-end p-5 md:items-center">
      <div className="w-full">
        <Heading content="Welcome to PopX" />
        <p className="mt-2 mb-7 text-[18px] leading-6.5 text-primary/60 pr-6">Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit.</p>
        <Link to="/signup" className={`${navButtonBase} bg-blue text-white`}>
          Create Account
        </Link>
        <Link to="/login" className={`${navButtonBase} bg-purple text-primary`}>
          Already Registered? Login
        </Link>
      </div>
    </div>
  );
}