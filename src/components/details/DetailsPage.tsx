import { useParams } from "react-router-dom";
import { DetailsStyledDiv } from "./detailsPage.styled";

const DetailsPage: React.FC = () => {
  const { countryName } = useParams();

  console.log(countryName);
  return <DetailsStyledDiv></DetailsStyledDiv>;
};

export default DetailsPage;
