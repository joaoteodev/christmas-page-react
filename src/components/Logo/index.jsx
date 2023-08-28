import imageLogo from "../../assets/images/santa-claus.svg";
import { Link } from "../Link";

export const Logo = () => {
  return (
    <Link href="#" size={2} fontWeight={600}>
      <img src={imageLogo} alt="Santa Claus" />
      Marry Christmas
    </Link>
  );
};
