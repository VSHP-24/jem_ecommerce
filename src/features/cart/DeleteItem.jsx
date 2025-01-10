import Button from "../../ui/Button";
import { useDispatch } from "react-redux";
import { deleteItem } from "./cartSlice";

function DeleteItem({ productId }) {
  const dispatch = useDispatch();
  return (
    <Button variation="delete" onClick={() => dispatch(deleteItem(productId))}>
      Delete
    </Button>
  );
}

export default DeleteItem;
