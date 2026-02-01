

interface InfoCardProps {
  title: string;
  description: string;
}

const InfoCard = ({ title, description }: InfoCardProps) => {
  return (
    <div className="info-card">
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  );
};

export default InfoCard;
