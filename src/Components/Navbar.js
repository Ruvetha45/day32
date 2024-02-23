import React, { useEffect } from "react";
import { MDBContainer, MDBNavbar, MDBNavbarBrand, MDBBtn } from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { getCartTotal } from "../features/cartSlice";

export default function App() {
  const { cart, totalQuantity } = useSelector((state) => state.allCart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartTotal());
  }, [dispatch, cart]); // Include dispatch in the dependency array

  return (
    <MDBNavbar light bgColor="light">
      <MDBContainer fluid>
        <MDBNavbarBrand>Mobiles</MDBNavbarBrand>
        <span>
          <Link to="/">All Product </Link>
        </span>
        <MDBBtn color="light">
          <Link to="/cart">Cart({totalQuantity})</Link>
        </MDBBtn>
      </MDBContainer>
    </MDBNavbar>
  );
}
