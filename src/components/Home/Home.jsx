import { Button, Container, Grid } from "@material-ui/core";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { signOut } from "../../redux/auth/reducer";
import {
  add_item,
  decrease_item,
  get_total,
  remove_item,
  clear_cart,
} from "../../redux/cart/reducer";
import { loadCollection } from "../../redux/collection/reducer";

const Home = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadCollection());
  }, [dispatch]);
  const collections = useSelector(
    (state) => state.collectionReducer.collection.data
  );
  const total = useSelector((state) => state.cartReducer.total);

  const onLogout = () => {
    dispatch(signOut());
    history.push("/");
  };
  const addToCart = (item) => {
    dispatch(add_item(item));
    dispatch(get_total());
  };
  const removeToCart = (item) => {
    dispatch(remove_item(item));
    dispatch(get_total());
  };
  const clearCard = () => {
    dispatch(clear_cart());
    dispatch(get_total());
  };
  const decrement = (item) => {
    dispatch(decrease_item(item));
    dispatch(get_total());
  };
  useEffect(() => {
    dispatch(get_total());
  }, []);

  return (
    <Container maxWidth="sm">
      <Grid>
        <p>Get Total{total}</p>
        <Button variant="contained" color="secondary" onClick={clearCard}>
          Clear Card
        </Button>
        <ul>
          {collections.map((item) => (
            <>
              <li key={item.item_id}>{item.name}</li>
              <Button
                variant="contained"
                color="primary"
                onClick={() => addToCart(item)}
              >
                Add Cart
              </Button>
              <Button
                variant="contained"
                color="secondary"
                onClick={() => removeToCart(item)}
              >
                Remove Cart
              </Button>
              <Button
                variant="contained"
                color="secondary"
                onClick={() => decrement(item)}
              >
                dec
              </Button>
            </>
          ))}
        </ul>
        <Button variant="contained" color="secondary" onClick={onLogout}>
          LogOut
        </Button>
      </Grid>
    </Container>
  );
};

export default Home;
