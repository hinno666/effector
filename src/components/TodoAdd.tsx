import * as React from "react";
import { Button, Input, Grid } from "@chakra-ui/react";
import $store, { setNewTodo, addTodo } from '../store'
import { useUnit } from "effector-react";

function TodoAdd() {
  const store = useUnit($store)
  const handler = useUnit({ setNewTodo, addTodo })

  return (
    <Grid pt={2} templateColumns="5fr 1fr" columnGap="3">
      <Input placeholder="New todo" value={store.newTodo} onChange={(e) => setNewTodo(e.target.value)} />
      <Button onClick={() => addTodo()}>Add Todo</Button>
    </Grid>
  );
}

export default TodoAdd;
