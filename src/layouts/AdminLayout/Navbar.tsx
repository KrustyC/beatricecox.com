interface NavBarProps {
  onLogout: VoidFunction;
}

export const NavBar: React.FC<React.PropsWithChildren<NavBarProps>> = ({
  onLogout,
}) => (
  <nav className="bg-white border-b border-gray-200 fixed z-30 w-full">
    <div className="px-3 py-3 lg:px-5 lg:pl-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-start z-40">
          <div
            className="text-xl flex items-center lg:ml-2.5 z-40"
            style={{ zIndex: "500" }}
          >
            <div className="h-3 w-3 mr-1 rounded-full bg-primary" />
            <span className="self-center font-semibold whitespace-nowrap text-gray-800 ml-1">
              beatricecox.com
            </span>
            <span className="self-center font-semibold text-sm whitespace-nowrap text-gray-500 ml-1">
              / Admin Panel
            </span>
          </div>
        </div>

        <button className="btn-admin btn-dark btn-sm" onClick={onLogout}>
          Logout
        </button>
      </div>
    </div>
  </nav>
);
