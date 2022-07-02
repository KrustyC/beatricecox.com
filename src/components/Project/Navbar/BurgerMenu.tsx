interface BurgerMenuProps {
  color: string;
  isOpen: boolean;
  onClick: VoidFunction;
}

export const BurgerMenu: React.FC<React.PropsWithChildren<BurgerMenuProps>> = ({
  color,
  isOpen,
  onClick,
}) => (
  <div id="burger-menu" onClick={onClick}>
    <div className={`${isOpen ? "open" : ""} ${color}`} />
    <div className={`${isOpen ? "open" : ""} ${color}`} />
    <div className={`${isOpen ? "open" : ""} ${color}`} />
  </div>
);
