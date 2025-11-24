"use client";

import { useEffect, useState } from "react";
import { getMenus } from "@/lib/actions/firebaseMenu";
import MenuModal, { MenuType } from "../modal/MenuModal";
import MenuActionButton from "./MenuActionButton";
import { formattedDate } from "@/lib/utils";

const DashboardMenu = () => {
  const [menus, setMenus] = useState<MenuType[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchMenus = async () => {
    setLoading(true);
    try {
      const { menus } = await getMenus();
      setMenus(menus ?? []);
    } catch (err) {
      console.error("Failed to fetch menus", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMenus();
  }, []);

  return (
    <section className="dashboard-content-wrapper">
      <div className="dashboard-heading">
        <h2>Menu</h2>
        <MenuModal onSuccess={fetchMenus} />
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
            {loading ? (
              <tr>
                <td colSpan={3}>Loading...</td>
              </tr>
            ) : menus.length > 0 ? (
              menus.map((menu) => (
                <tr key={menu.id}>
                  <td>{menu.title}</td>
                  <td>{formattedDate(menu.createdAt!)}</td>
                  <td>
                    <MenuActionButton id={menu.id!} onSuccess={fetchMenus} />
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
