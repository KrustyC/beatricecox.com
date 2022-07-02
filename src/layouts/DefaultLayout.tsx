// import { GetInTouch } from "@/components/GetInTouch";

export const DefaultLayout: React.FC<React.PropsWithChildren<unknown>> = ({
  children,
}) => {
  return (
    <>
      <div>
        {children}
        {/* <GetInTouch /> */}
      </div>
    </>
  );
};
