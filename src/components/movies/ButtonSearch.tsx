"use client";
import {
  useRouter,
  useParams,
  usePathname,
  useSearchParams,
} from "next/navigation";

export default function ButtonSearch({ search }: { search: string }) {
  const router = useRouter();
  const params = useParams();
  const pathname = usePathname();

  return (
    <button
      type="button"
      onClick={() => {
        router.push(`movies/?search=${search}`);
      }}
    >
      Click here to read more
    </button>
  );
}
