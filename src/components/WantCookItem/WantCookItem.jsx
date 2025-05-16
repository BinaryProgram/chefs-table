import React from "react";

const WantCookItem = (props) => {
  const { wantCook, index, removeWantToCook, addToCurrentCook } = props;
  return (
    <tr className="fira font-medium text-[#878787]">
      <th>{index + 1}</th>
      <td>{wantCook.recipe_name}</td>
      <td>{wantCook.preparing_time} minutes</td>
      <td>{wantCook.calories} calories</td>
      <td>
        <button
          onClick={() => {
            removeWantToCook(wantCook);
            addToCurrentCook(wantCook);
          }}
          className="btn btn-secondary lexend border-none bg-[#0be58a] font-medium text-[#150b2b]"
        >
          Preparing
        </button>
      </td>
    </tr>
  );
};

export default WantCookItem;
