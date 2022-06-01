  // part标题
  type PartProps = {
    title: string;
  };

  const PartTitle = ({ title }: PartProps) => {
    return <h1 className="part-title">{title}</h1>;
  };

  export default PartTitle