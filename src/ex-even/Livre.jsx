import LivreImg from "./LivreImg";
import LivreTitle from "./LivreTitle";
import LivrePrice from "./LivrePrice";

export default function Livre({ img, title, price }) {

  const cardStyle = {
    width: "200px",
    padding: "15px",
    borderRadius: "10px",
    textAlign: "center",
    backgroundColor: "white",
    margin: "20px"
  };

  const buttonStyle = {
    backgroundColor: "#f4a2d4ff",
    border: "none",
    padding: "10px",
    width: "100%",
    borderRadius: "6px",
    cursor: "pointer"
  };

  return (
    <div style={cardStyle}>
      <LivreImg img={img} />
      <LivreTitle title={title} />
      <LivrePrice price={price} />
      <button style={buttonStyle}>Read More...</button>
    </div>
  );
}
