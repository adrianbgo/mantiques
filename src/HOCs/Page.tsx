import React, { useEffect } from "react";

type IPage = {
  title: string;
  children?: React.ReactNode;
};

const Page = ({ title, children }: IPage) => {
  useEffect(() => {
    document.title = title || "";
  }, [title]);
  return <>{children}</>;
};

export default Page;
