import { useParams } from "react-router-dom";
import { DetailsStyledDiv } from "./detailsPage.styled";

const DetailsPage: React.FC = () => {
  const { countryName } = useParams();

  const country = 0;

  return <DetailsStyledDiv></DetailsStyledDiv>;
};

export default DetailsPage;
