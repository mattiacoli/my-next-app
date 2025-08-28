export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <h1 className="text-3xl">NavBAR</h1>
      <hr />
      {children}
    </>
  );
}
