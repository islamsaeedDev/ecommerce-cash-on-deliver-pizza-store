import Button from '../../ui/Button';

function UpdateItemQuantity({ pizzaId }) {
  return (
    <>
      <Button type="round">-</Button>
      <Button type="round"> +</Button>
    </>
  );
}

export default UpdateItemQuantity;
