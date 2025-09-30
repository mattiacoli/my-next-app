async function Page () {
 const response = await fetch('https://jsonplaceholder.typicode.com/albums');
 const albums = await response.json();

 return (
   <div className="p-4">
     <h1>Albums</h1>
     <ol className="list-decimal list-inside">
       {albums.map((album: { id: number; title: string }) => (
         <li key={album.id}>{album.title}</li>
       ))}
     </ol>
   </div>
 );
}
export default Page;