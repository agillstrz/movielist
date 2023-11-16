import { useRouter } from "next/router";

export default function ButtonRouter() {
  const router = useRouter();
  return (
    <button
      onClick={() => {
        router.push({
          pathname: "/",
          query: { pid: 1 },
        });
      }}
    >
      ButtonRouter
    </button>
  );
}
