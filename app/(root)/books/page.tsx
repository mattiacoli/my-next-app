// static metadata
export const metadata : Metadata = {
    title : 'Libri',
    description: "Lista di libri"
}


export default async function Page () {
    const response = await fetch("http://localhost:3000/api/books");
    const books = await response.json();


    return (
      <>
        <div>
            <ul>
                {books.map((book) => (
                    <li key={book.id}>{book.title}</li>
                ))}
            </ul>
        </div>
      </>
    )
}