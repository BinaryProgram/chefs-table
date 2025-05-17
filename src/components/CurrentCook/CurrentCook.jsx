import React, { useState } from "react";

const CurrentCook = (props) => {
  const [sumTime, setSumTime] = useState(0);
  const { currentCook } = props;
  const totalTime = currentCook.reduce((accumulator,currentValue) => accumulator + currentValue.preparing_time,0);
  const totalCalorie = currentCook.reduce((accumulator,currentValue) => accumulator + currentValue.calories,0);

  return (
    <div className="mt-8 mb-8">
      <h1 className="lexend mb-4 text-center text-2xl font-semibold text-[#282828]">
        Currently cooking: {currentCook.length}
      </h1>
      <div className="mx-20 border-b border-[#28282826]"></div>
      <div className="rounded-box border-base-content/5 bg-base-100 mt-6 overflow-x-auto border">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="fira font-medium">
              <th></th>
              <th>Name</th>
              <th>Time</th>
              <th>Calories</th>
            </tr>
          </thead>
          <tbody>
            {currentCook.map((item, index) => {
              return (
                <tr key={item.id} className="fira font-medium text-[#878787]">
                  <th>{index + 1}</th>
                  <td>{item.recipe_name}</td>
                  <td>{item.preparing_time} minutes</td>
                  <td>{item.calories} calories</td>
                </tr>
              );
            })}
          </tbody>
          <tfoot>
            <tr className="lexend font-medium text-[#282828cc]">
              <td></td>
              <td></td>
              
              <td>Total Time - {totalTime}  </td>
              <td>Total Calories - {totalCalorie} </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default CurrentCook;
