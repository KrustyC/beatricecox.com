interface ModalProps {
  width?: string;
}

export const Modal: React.FC<React.PropsWithChildren<ModalProps>> = ({
  width = "w-7/12",
  children,
}) => (
  <div
    id="modal-id"
    className="w-screen h-screen animated fadeIn faster fixed left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover"
  >
    <div className="absolute bg-black opacity-80 inset-0 z-0" />
    <div
      className={`${width} p-3 relative mx-auto my-auto rounded-xl shadow-lg  bg-white`}
    >
      {children}
    </div>
  </div>
);
