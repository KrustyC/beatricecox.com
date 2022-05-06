interface AuthenticatedViewProps {
  onLogin: VoidFunction;
}

export const UnauthenticatedView: React.FC<React.PropsWithChildren<AuthenticatedViewProps>> = ({
  onLogin,
}) => (
  <div className="h-screen flex flex-col items-center justify-center bg-admin-grey text-gray-700">
    <h1 className="text-gray-400 font-bold">beatricecox.com</h1>

    <button
      className="px-4 py-3 rounded-md mt-8 font-bold bg-gray-800 text-white"
      onClick={onLogin}
    >
      Log In with Netlify Identity
    </button>
    <p className="mt-4">This is a private area. please log in to view.</p>
  </div>
);
