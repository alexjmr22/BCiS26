

interface SectionTitleProps {
  title: string;
}

const SectionTitle = ({ title }: SectionTitleProps) => {
  return <h3>{title}</h3>;
};

export default SectionTitle;
