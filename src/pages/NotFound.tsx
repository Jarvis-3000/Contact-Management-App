import React from "react";
import { Link } from "react-router-dom";
import ArrowLeft from "../assets/arrow-left.svg";
import Button from "../components/Button";

const NotFound: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-[100%] bg-gray-100">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-blue-500">404</h1>
        <p className="text-2xl font-semibold mt-4">Page Not Found</p>
        <p className="mt-2 mb-10 text-gray-600">
          Sorry, the page you are looking for doesn't exist or has been moved.
        </p>
        <Link to="/">
          <Button className="m-auto">
            <img src={ArrowLeft} alt="arrow left" />
            Go Back Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
