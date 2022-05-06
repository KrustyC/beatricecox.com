// import { Navbar } from "@/components/Navbar";

export const DefaultLayout: React.FC<React.PropsWithChildren<unknown>> = ({
  children,
}) => {
  return (
    <>
      <div>
        {/* <Navbar /> */}
        {children}
      </div>
    </>
  );
};
