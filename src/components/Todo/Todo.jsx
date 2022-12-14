import { RiDeleteBinLine } from 'react-icons/ri';
import { Text } from 'components';
import { DeleteButton, TodoWrapper } from './Todo.styled';
import { useDispatch } from 'react-redux';
import { deleteTask } from 'redux/taskSlice';

export const Todo = ({ text, counter, id }) => {
  const dispatch = useDispatch();
  const handlerDelete = () => {
    dispatch(deleteTask(id));
  };
  return (
    <>
      <TodoWrapper>
        <Text textAlign="center" marginBottom="20px">
          TODO #{counter}
        </Text>
        <Text>{text}</Text>
        <DeleteButton type="button" onClick={handlerDelete}>
          <RiDeleteBinLine size={24} />
        </DeleteButton>
      </TodoWrapper>
    </>
  );
};
