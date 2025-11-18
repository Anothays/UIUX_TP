import cars from "../../../../back/data/cars.json";
import DrawerSideBar from "../DrawerSideBar/DrawerSideBar";
import { FilterFormsProvider } from "../DrawerSideBar/Filters/FiltersContext";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

export default function ProductsPage() {
  console.log("CARS --> ", cars);

  return (
    <>
      <FilterFormsProvider>
        <Header />
        <DrawerSideBar />
        <Footer />
      </FilterFormsProvider>
    </>
  );
}
