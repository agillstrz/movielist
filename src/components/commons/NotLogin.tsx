"use client";
import { useRouter } from "next/navigation";
import Button from "../Button";

export default function NotLogin() {
  const { push } = useRouter();
  return (
    <div className="flex gap-x-1 items-center">
      <Button
        onClick={() => push("auth")}
        label="Login"
        className="py-2 px-7 "
      />
    </div>
  );
}
