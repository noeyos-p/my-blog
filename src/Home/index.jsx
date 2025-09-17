import { Container, Row, Col } from 'react-bootstrap';
import Product from '../Product';

function Home({product}){

  return(
    <div>
      <Container>
        <Row>
          {
            product.map((shoes, _) => {
              return (
                <Col key={shoes.id} className="text-center">
                  {/* Product 콤포넌트 자리 */}
                  <Product shoes={shoes} />
                </Col>
              )
            })
          }
        </Row>
      </Container>
    </div>
  )
}
export default Home;
