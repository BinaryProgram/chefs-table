import { CiClock2 } from "react-icons/ci";
import { RiFireLine } from "react-icons/ri";
const Card = (props) => {
  const { foodItem,wantToCook} = props;
  return (
    <div className="card bg-base-100 p-6 shadow-sm">
      <figure className="rounded-2xl">
        <img src={foodItem.recipe_image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title lexend text-lg font-semibold text-[#282828]">
          {foodItem.recipe_name}
        </h2>
        <p className="fira text-[#878787]">{foodItem.short_description}</p>
        <div className="my-4 border-b-2 border-gray-200"></div>
        <div>
          <h2 className="lexend text-lg font-medium text-[#282828]">
            Ingredients: {foodItem.ingredients.length}
          </h2>
          <ul className="fira mt-4 ml-8 list-disc text-lg text-[#878787]">
            {foodItem.ingredients.map((ingredient,idx) => (
              <li key={idx}>{ingredient}</li>
            ))}
          </ul>
        </div>
        <div className="my-4 border-b-2 border-gray-200"></div>
        <div className="flex gap-4">
          <span className="fira flex items-center gap-2">
            <span className="text-xl">
              <CiClock2 />
            </span>
            <span className="fira text-[#282828cc] flex gap-1">
              {foodItem.preparing_time}<span>minutes</span>
            </span>
          </span>
          <span className="flex items-center gap-2">
            <span className="text-xl">
              <RiFireLine />
            </span>
            <span className="fira text-[#282828cc] flex gap-1">{foodItem.calories} <span>calories</span></span>
          </span>
        </div>
        <div className="card-actions mt-4">
          <button onClick={() => wantToCook(foodItem)} className="btn btn-primary lexend bg-[#0be58a] font-medium text-[#15082b]">
            Want to Cook
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
