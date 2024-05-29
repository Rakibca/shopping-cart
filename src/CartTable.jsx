function CartTable({ items }) {
  // TODO: Map through “items”, creating 1 row
  // per item.

  return (
    <table className="shopping-cart">
      <thead>
        <tr>
          <th></th>
          <th>Title</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <tr className="cart-row" key={item.id}>
            <td>
              <img
                className="product-thumb"
                src={item.imageSrc}
                alt={item.imageAlt}
              />
            </td>
            <td>{item.title}</td>
            <td>${item.price}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default CartTable;
