import WantCook from "../WantCook/WantCook";
import CurrentCook from "../CurrentCook/CurrentCook";

const Sidebar = (props) => {
  const { cook,removeWantToCook,currentCook,addToCurrentCook} = props;
  return (
    <div className="h-2/3 w-full rounded-2xl border border-[#28282833] lg:w-1/2">
      <WantCook
        cookItem={cook}
        removeWantToCook={removeWantToCook}
        addToCurrentCook={addToCurrentCook}
      ></WantCook>
      <CurrentCook currentCook={currentCook}></CurrentCook>
    </div>
  );
};

export default Sidebar;
