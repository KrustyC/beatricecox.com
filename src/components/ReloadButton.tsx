import { ReloadIcon } from "@/components/icons/Reload";

interface ReloadButtonProps {
  onReload: VoidFunction;
}

export const ReloadButton: React.FC<ReloadButtonProps> = ({ onReload }) => (
  <button
    className="btn fixed bottom-5 right-5 z-50 btn-primary rounded-full"
    onClick={onReload}
  >
    <ReloadIcon />
  </button>
);
