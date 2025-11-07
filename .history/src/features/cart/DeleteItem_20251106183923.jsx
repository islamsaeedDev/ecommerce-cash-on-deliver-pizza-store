import { useDispatch } from 'react-redux';
import Button from '../../ui/Button';
import { deleteItem } from './cartSlice';

function DeleteItem() {
  const dispatch = useDispatch();
  return (
    <Button type="small" onClick={() => dispatch(deleteItem())}>
      Delete
    </Button>
  );
}

export default DeleteItem;
