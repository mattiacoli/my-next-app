import Link from "next/link";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <h1 className="text-3xl flex gap-4">
        <Link href={"/about"}>About Page</Link>
        <Link href={"/dashboard/users"}>Users</Link>
      </h1>
      <hr />
      {children}
    </>
  );
}
