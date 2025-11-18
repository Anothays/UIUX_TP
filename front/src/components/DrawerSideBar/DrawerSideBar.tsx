import FilterForm from "./Filters/FilterForm";

export default function DrawerSideBar() {
  return (
    <div className="drawer drawer-open">
      <input id="my-drawer-1" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* <label htmlFor="my-drawer-1" className="btn drawer-button">
          Filtres
        </label> */}
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-1" aria-label="close sidebar" className="drawer-overlay"></label>
        <FilterForm />
      </div>
    </div>
  );
}
