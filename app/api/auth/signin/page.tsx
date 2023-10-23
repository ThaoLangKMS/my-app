"use client";

import { useRouter } from "next/navigation";
import { Backend_URL } from "@/app/lib/Constant";
import { useState } from "react";
import Modal from "@/app/components/Modal";

export default function SignIn() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [openModalEdit, setOpenModalEdit] = useState<boolean>(false);

  async function handleSubmit() {
    const res = await fetch(`${Backend_URL}/auth/signin`, {
      method: "POST",
      body: JSON.stringify({ email, password }),
    });
    if (res.ok) {
      const json = await res.json();
      localStorage.setItem("token", json.token);
      router.push("/user");
    } else {
      alert("Bad credentials");
    }
  }

  return (
    <div>
      <Modal modalOpen={openModalEdit} setModalOpen={setOpenModalEdit}>
        <form onSubmit={handleSubmit}>
          <h3 className="font-bold text-lg text-center">Sign in</h3>
          <div className="modal-action">
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              placeholder="Enter your email"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="text"
              placeholder="Enter your password"
              className="input input-bordered w-full max-w-xs"
            />
            <button type="submit" className="btn">
              Sign in
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
