export default function Page({ params }: { params: { id: string } }) {
  const { id } = params;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl">User {id} Details </h1>
      <p>This is the user details page.</p>
    </div>
  );
}
