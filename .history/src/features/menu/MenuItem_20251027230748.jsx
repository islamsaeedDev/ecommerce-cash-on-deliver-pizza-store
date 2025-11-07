import { formatCurrency } from '../../utils/helpers';

function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  return (
    <li className="flex gap-4 py-2" key={id}>
      <img className="h-24 p-2" src={imageUrl} alt={name} />
      <div className="flex flex-col">
        <p>{name}</p>
        <p>{ingredients.join(', ')}</p>
        <div className="mt-auto">
          {!soldOut ? <p>{formatCurrency(unitPrice)}</p> : <p>Sold out</p>}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
