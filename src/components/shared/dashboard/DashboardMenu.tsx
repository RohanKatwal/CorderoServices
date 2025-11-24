import { getMenus } from "@/lib/actions/firebaseMenu";
import MenuModal from "../modal/MenuModal";
import { formattedDate } from "@/lib/utils";
import MenuActionButton from "./MenuActionButton";

const DashboardMenu = async () => {
  const { menus } = await getMenus();
  return (
    <section className="dashboard-content-wrapper">
      <div className="dashboard-heading">
        <h2>Menu</h2>
        <MenuModal />
      </div>
      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <td>Name</td>
              <td>CreatedAt</td>
              <td></td>
            </tr>
          </thead>
          <tbody>
            {menus && menus?.length > 0 ? (
              menus?.map((menu) => (
                <tr key={menu.id}>
                  <td>{menu.title}</td>
                  <td>{formattedDate(menu?.createdAt!)}</td>
                  <td>
                    <MenuActionButton id={menu.id!} />
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={3}>No Menu found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default DashboardMenu;
