import Link from "next/link";


const Page = () => {
  return (
    <>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl">Dashboard Users</h1>
        <ul>
          <li>
            <Link href={"/dashboard/users/1"}>User 1</Link>
          </li>
          <li>
            <Link href={"/dashboard/users/2"}>User 2</Link>
          </li>
          <li>
            <Link href={"/dashboard/users/3"}>User 3</Link>
          </li> 
        </ul>
      </div>
    </>
  );
};

export default Page;
