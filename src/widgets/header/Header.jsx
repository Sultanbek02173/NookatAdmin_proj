import "./header.scss";
import HeaderTop from "./components/HeaderTop";
import HeaderBottom from "./components/HeaderBottom";
import { VisuallyImpaired } from "../../entities/VisuallyImpaired/VisuallyImpaired";
import { useVisually } from "../../app/store/reducers/visually";

export const Header = () => {
  const { active } = useVisually();
  // console.log(1);

  return (
    <header className="header">
      <div className="container">
        <HeaderTop />
        {active && <VisuallyImpaired />}
        <HeaderBottom />
      </div>
    </header>
  );
};
