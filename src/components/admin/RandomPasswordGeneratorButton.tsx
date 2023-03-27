interface RandomPasswordGeneratorButtonProps {
  onPasswordGenerated: (password: string) => void;
}

function geneateRandonString(length: number) {
  const chars =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@$%&*";
  const charLength = chars.length;

  let result = "";
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * charLength));
  }

  return result;
}

export const RandomPasswordGeneratorButton: React.FC<
  React.PropsWithChildren<RandomPasswordGeneratorButtonProps>
> = ({ onPasswordGenerated }) => {
  const onGeneratePassword = () => {
    const randomPassword = geneateRandonString(16);
    onPasswordGenerated(randomPassword);
  };

  return (
    <button
      className="btn-admin btn-primary ml-4 h-[38px] w-[400px]"
      type="button"
      onClick={onGeneratePassword}
    >
      Generate for me
    </button>
  );
};
