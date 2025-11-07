import { formatCurrency } from '../../utils/helpers';

function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  return (
    <li className="flex gap-4 py-2" key={id}>
      <img className="h-24 p-2" src={imageUrl} alt={name} />
      <div className="flex flex-col">
        <p className="text-lg font-semibold">{name}</p>
        <p>{ingredients.join(', ')}</p>
        <div className="mt-auto">
          {!soldOut ? (
            <p className="text-sm">{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="text-sm font-medium uppercase text-stone-500">
              Sold out
            </p>
          )}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
