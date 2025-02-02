import {
  CompanyLinks,
  Gallery,
  LastNews,
  Supervisor,
  ViewSuggestions,
} from "../../widgets";
import "./homePage.scss";
import { increment, useCount } from "../../app/store/reducers/count";
import { useDispatch } from "react-redux";
export const HomePage = () => {
  const { number } = useCount();
  const dispatch = useDispatch();
  return (
    <div>
      <Supervisor />
      <LastNews />
      <ViewSuggestions />
      <Gallery />
      <CompanyLinks />
      {/* <h1>{number}</h1>
      <button onClick={() => dispatch(increment())}>click</button> */}
    </div>
  );
};
