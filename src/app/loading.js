import { Spinner } from "@heroui/react";
import React from "react";

const LoadingPage = () => {
  return (
    <div className="flex justify-center items-center h-[80vh]">
      <Spinner color="success" />
    </div>
  );
};

export default LoadingPage;
