import { useDispatch } from 'react-redux';
import Button from '../../ui/Button';

function DeleteItem() {
    const  dispatch = useDispatch()
  return <Button type="small" onClick={()=>}>Delete</Button>;
}

export default DeleteItem;
