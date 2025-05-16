import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import Banner from "./components/Banner/Banner";
import Cards from "./components/Cards/Cards";
import Header from "./components/Header/Header";
import Recipes from "./components/Recipes/Recipes";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  const [cook,setCook] = useState([]);
  const  [currentCook,setCurrentCook] = useState([]);

  const wantToCook = (orderRecipe) => {
    const isExist = cook.find(cookItem => cookItem === orderRecipe );
    if(!isExist){
      setCook([...cook,orderRecipe]);
    }
    else{
      toast("Already Added!");
    }
  }
  const removeWantToCook = (confirmOrder) => {
    const currentOrder = cook.filter(checkItem => checkItem.id !== confirmOrder.id);
    setCook(currentOrder);
    // console.log(currentOrder);
  }
  const addToCurrentCook = (finalCook => {
    setCurrentCook([...currentCook,finalCook]);
  })
  return (
    <>
      <Header></Header>
      <Banner></Banner>
      <Recipes></Recipes>
      <section className="mt-12 flex flex-col gap-6 lg:flex-row">
        <Cards wantToCook={wantToCook}></Cards>
        <Sidebar cook={cook} currentCook={currentCook} removeWantToCook={removeWantToCook} addToCurrentCook={addToCurrentCook}></Sidebar>
      </section>
      <ToastContainer />
    </>
  );
}

export default App;
