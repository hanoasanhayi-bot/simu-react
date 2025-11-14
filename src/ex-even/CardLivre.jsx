import Livre from "./Livre";
import { livres } from "./Data";

export default function CardLivre() {
  return (
    <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
      {livres.map((l, i) => (
        <Livre
          key={i}
          img={l.img}
          title={l.title}
          price={l.price}
        />
      ))}
    </div>
  );
}
