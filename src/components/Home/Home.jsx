import { Button, Container, Grid } from "@material-ui/core";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { signOut } from "../../redux/auth/reducer";
import { loadCollection } from "../../redux/collection/reducer";

const Home = () => {
  const history = useHistory()
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadCollection());
  }, [dispatch]);
  const collections = useSelector(
    (state) => state.collectionReducer.collection.data
  );

  const onLogout = () => {
    dispatch(signOut());
    history.push('/')
  };

  return (
    <Container maxWidth="sm">
      <Grid>
        <ul>
          {collections.map((item) => (
            <li key={item.item_id}>{item.name}</li>
          ))}
        </ul>
        <Button onClick={onLogout}>LogOut</Button>
      </Grid>
    </Container>
  );
};

export default Home;
