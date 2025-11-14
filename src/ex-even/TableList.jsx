export default function TableList() {
  const Livres = [
    {"title": "1984","author": "George Orwell","publicationYear": 1949,"genre": "Dystopian","rating": 4.8}, 
    {"title": "To Kill a Mockingbird","author": "Harper Lee","publicationYear": 1960,"genre": "Classic","rating": 4.9}, 
    {"title": "The Great Gatsby","author": "F. Scott Fitzgerald","publicationYear": 1925,"genre": "Classic","rating": 4.4}, 
    {"title": "Pride and Prejudice","author": "Jane Austen","publicationYear": 1813,"genre": "Romance","rating": 4.7}, 
    {"title": "Moby-Dick","author": "Herman Melville","publicationYear": 1851,"genre": "Adventure","rating": 4.1}, 
    {"title": "War and Peace","author": "Leo Tolstoy","publicationYear": 1869,"genre": "Historical Fiction","rating": 4.5}, 
    {"title": "The Alchemist","author": "Paulo Coelho","publicationYear": 1988,"genre": "Philosophical Fiction","rating": 4.7} 
  ];
  const tableStyle = {
  width: "100%",
  borderCollapse: "collapse",
  margin: "20px 0",
  fontSize: "16px",
  border: "1px solid #ccc",
  borderRadius: "8px",
  overflow: "hidden"
};
const tdStyle = {
  padding: "12px 15px",
  textAlign: "left"
};
const thStyle = {
   padding: "12px 15px",
  textAlign: "left",
  backgroundColor: "#f94dc2ff",
  color: "white",
  fontWeight: "bold"
};

  return (
    <>
      <center><table style={tableStyle}>
       
          <tr>
            <th style={thStyle}>Titre</th>
            <th style={thStyle}>Auteur</th>
            <th style={thStyle}>Année</th>
            <th style={thStyle}>Genre</th>
            <th style={thStyle}>Rating</th>
          </tr>

        
          {Livres.map((livre) => (
            <tr key={livre.title}>
              <td style={tdStyle}>{livre.title}</td>
              <td style={tdStyle}>{livre.author}</td>
              <td style={tdStyle}>{livre.publicationYear}</td>
              <td style={tdStyle}>{livre.genre}</td>
              <td style={tdStyle}>{livre.rating}</td>
            </tr>
          ))}
      </table></center>
    </>
  );
}