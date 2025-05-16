import React from "react";
import WantCookItem from "../WantCookItem/WantCookItem";

const WantCook = (props) => {
  const { cookItem, removeWantToCook,addToCurrentCook} = props;
  return (
    <div>
      <h1 className="lexend mt-8 mb-4 text-center text-2xl font-semibold text-[#282828]">
        Want to cook: {cookItem.length}
      </h1>
      <div className="mx-20 border-b border-[#28282826]"></div>
      <div className="rounded-box border-base-content/5 bg-base-100 mt-6 overflow-x-auto border">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Time</th>
              <th>Calories</th>
            </tr>
          </thead>
          <tbody>
            {cookItem.map((wantCook, index) => (
              <WantCookItem
                wantCook={wantCook}
                key={wantCook.id}
                index={index}
                removeWantToCook={removeWantToCook}
                addToCurrentCook={addToCurrentCook}
              ></WantCookItem>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default WantCook;
