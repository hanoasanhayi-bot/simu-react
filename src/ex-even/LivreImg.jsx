export default function LivreImg({ img }) {
  return (
    <img 
      src={img} 
      alt="Livre"
      style={{ width: "150px", borderRadius: "5px" }}
    />
  );
}