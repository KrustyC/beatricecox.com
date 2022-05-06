interface IndexLayoutProps {
  title: string;
  subtitle: string;
  createItemPath: string;
  itemName: string;
}

export const IndexLayout: React.FC<
  React.PropsWithChildren<IndexLayoutProps>
> = ({ title, subtitle, createItemPath, itemName, children }) => {
  return (
    <div className="p-4">
      <div className="flex justify-between items-center">
        <h2 className="text-gray-600 font-bold">{title}</h2>

        <a
          href={createItemPath}
          className="btn-admin btn-primary btn-sm text-base"
        >
          Add New {itemName}
        </a>
      </div>
      <p className="text-gray-600">{subtitle}</p>
      <div>{children}</div>
    </div>
  );
};
