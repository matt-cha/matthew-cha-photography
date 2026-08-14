type PageHeadingProps = {
  children: React.ReactNode;
};

const PageHeading = ({ children }: PageHeadingProps) => {
  return (
    <h1 className="mb-10 flex h-4 items-center text-left font-libre text-xs leading-none whitespace-nowrap uppercase">
      {children}
    </h1>
  );
};

export default PageHeading;
