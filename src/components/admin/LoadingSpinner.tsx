interface LoadingSpinnerProps {
  color?: string;
}

export const LoadingSpinner: React.FC<
  React.PropsWithChildren<LoadingSpinnerProps>
> = ({ color = "bg-blue-400" }) => (
  <div className="flex items-center justify-center space-x-2 animate-bounce">
    <div className={`w-2 h-2 ${color} rounded-full`} />
    <div className={`w-2 h-2 ${color} rounded-full`} />
    <div className={`w-2 h-2 ${color} rounded-full`} />
  </div>
);
