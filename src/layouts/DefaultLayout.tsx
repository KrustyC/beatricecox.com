export const DefaultLayout: React.FC<React.PropsWithChildren<unknown>> = ({
  children,
}) => {
  return (
    <>
      <div>{children}</div>
    </>
  );
};
