import { Grid, GridItem, Todo } from 'components';
import { useSelector } from 'react-redux';

export const TodoList = () => {
  const todos = useSelector(state => state.todos);

  return (
    <>
      <Grid>
        {todos.length > 0 &&
          todos.map((todo, index) => (
            <GridItem key={todo.id}>
              <Todo id={todo.id} text={todo.text} counter={index + 1} />
            </GridItem>
          ))}
      </Grid>
      {todos.length === 0 && <p>sorry your not have any todos</p>}
    </>
  );
};
