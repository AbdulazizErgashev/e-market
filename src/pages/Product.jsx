import { productsData } from "../data/db";

export default function Product() {
  return (
    <div>
      {productsData.map((mahsulot) => (
        <div key={mahsulot._id}>
          <img src={mahsulot.img} />
          <h1>{mahsulot.title}</h1>
        </div>
      ))}
    </div>
  );
}
