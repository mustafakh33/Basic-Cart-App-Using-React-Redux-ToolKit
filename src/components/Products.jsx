import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../rtk/slice/products-slice";
import { addToCart } from "../rtk/slice/cart-slice";
import Spinner from "react-bootstrap/Spinner";

const Products = () => {
  const { products, loading } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <Container className="products">
      {loading ? (
        <Spinner animation="border" variant="primary" />
      ) : (
        <Row className="g-4">
          {products.map((product, index) => (
            <Col key={index} className="d-flex justify-content-center">
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  style={{ height: "300px" }}
                  variant="top"
                  src={product.image}
                />
                <Card.Body>
                  <Card.Title>{product.price}</Card.Title>
                  <Card.Text>{product.description.substring(0, 80)}</Card.Text>
                  <Button
                    variant="primary"
                    onClick={() => {
                      dispatch(addToCart(product));
                    }}
                  >
                    Add to cart
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
};

export default Products;
