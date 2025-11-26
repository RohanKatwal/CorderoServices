import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
} from "firebase/firestore";
import { db } from "../firebase";
import { MenuType } from "@/components/shared/modal/MenuModal";

interface MenuReturnType {
  menus?: MenuType[] | null;
  menu?: MenuType | null;
  message?: string | null;
  error?: string | null;
}

export const addMenu = async (data: MenuType): Promise<MenuReturnType> => {
  try {
    const { title } = data;
    if (!title.trim()) {
      return { menu: null, error: "Title not found" };
    }

    const menu = await addDoc(collection(db, "menus"), {
      title,
      createdAt: Date.now(),
    });

    if (!menu) {
      return { menu: null, error: "Failed to add menu" };
    }

    return { menu: { title, ...menu }, error: null };
  } catch (error) {
    console.log("Failed adding menu:", error);
    return { menu: null, error: "Failed to add menu" };
  }
};

export const getMenus = async (): Promise<MenuReturnType> => {
  try {
    const snap = await getDocs(collection(db, "menus"));

    const menus: MenuType[] = snap.docs.map((doc) => {
      const data = doc.data() as Omit<MenuType, "id">;
      return {
        id: doc.id,
        ...data,
      };
    });

    if (!menus) {
      return { error: "Failed to get menus" };
    }

    return { menus };
  } catch (error) {
    console.error("Error fetching videos:", error);
    return { menus: [], error: "Failed to get menus" };
  }
};

export const deleteMenu = async (id: string): Promise<MenuReturnType> => {
  try {
    if (!id) {
      return { message: null, error: "Video ID not provided" };
    }
    await deleteDoc(doc(db, "menus", id));
    return { message: "Successfully deleted menu" };
  } catch (error) {
    console.log("Error deleting menu", error);
    return { error: "Failed to delete menu" };
  }
};
