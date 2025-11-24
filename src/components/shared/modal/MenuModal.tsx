"use client";

import { useState } from "react";
import Modal from "./Modal";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Input from "../Input";
import { toast } from "react-toastify";
import { addMenu } from "@/lib/actions/firebaseMenu";
import { useRouter } from "next/navigation";

export const menuSchema = z.object({
  id: z.string().optional(),
  title: z.string().min(1, { message: "title is required" }),
  createdAt: z.date().optional(),
});

export type MenuType = z.infer<typeof menuSchema>;

interface MenuModalProps {
  onSuccess?: () => void;
}

const MenuModal = ({ onSuccess }: MenuModalProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<MenuType>({
    resolver: zodResolver(menuSchema),
    defaultValues: {
      title: "",
    },
  });

  const onSubmit = async (data: MenuType) => {
    if (loading) return;
    setLoading(true);
    try {
      const { menu, error } = await addMenu(data);
      if (error) {
        toast.error(error);
        return;
      }
      toast.success("Menu added Successfully");
      reset();
      setIsOpen(false);
      if (onSuccess) onSuccess();
    } catch (error) {
      toast.error("Failed to add menu");
      return;
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <button onClick={() => setIsOpen(true)} className="btn-primary">
        Add Menu
      </button>
      <Modal title="Add Menu" isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <form onSubmit={handleSubmit(onSubmit)} className="modal-form">
          <Input
            type="text"
            label="Title"
            name="title"
            error={errors.title?.message}
            register={register("title")}
          />
          <button disabled={loading} className="btn-primary">
            {loading ? "Adding..." : "Add Menu"}
          </button>
        </form>
      </Modal>
    </div>
  );
};

export default MenuModal;
