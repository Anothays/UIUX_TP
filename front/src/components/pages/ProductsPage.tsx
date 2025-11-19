import { CarsProvider } from "@/contexts/CarsContext";
import DrawerSideBar from "../DrawerSideBar/DrawerSideBar";
import { FilterFormsProvider } from "../DrawerSideBar/Filters/FiltersContext";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

export default function ProductsPage() {
  return (
    <FilterFormsProvider>
      <CarsProvider>
        <Header />
        <DrawerSideBar />
        <Footer />
      </CarsProvider>
    </FilterFormsProvider>
  );
}
