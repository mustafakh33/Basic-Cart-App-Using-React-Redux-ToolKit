import { Button, Col, Container, Row } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import { clear, deleteFromCart } from "../rtk/slice/cart-slice";

const Cart = () => {
  const { cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch()
  const totalPrice = cart.reduce((total, item) => {total += item.price;return total}, 0);

  return (
    <Container className="cart">
      <Row>
        <Col>
          <h1>welcome to cart</h1>
         <div className="d-flex justify-content-between m-4">
         <h5>Total Price: <span>{totalPrice.toFixed(2)}$</span></h5>
          <Button variant="primary" className="mb-3" onClick={()=>dispatch(clear())}>
            Clear Cart
          </Button>
         </div>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>title</th>
                <th>img</th>
                <th>price</th>
                <th>countity</th>
                <th>actions</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item, index) => (
                <tr key={index}>
                  <td>{item.id}</td>
                  <td>{item.title}</td>
                  <td>
                    <img
                      src={item.image}
                      alt=""
                      style={{ width: "100px", height: "100px" }}
                    />
                  </td>
                  <td>{item.price}</td>
                  <td>{item.quantity}</td>
                  <td>
                    <Button variant="danger" onClick={()=>{dispatch(deleteFromCart(item))}}>Delete</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default Cart;
