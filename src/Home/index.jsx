import { Container, Row, Col, Button } from 'react-bootstrap';
import Product from '../Product';
import axios from 'axios';

function Home({ product, setProduct }) {

  return (
    <div>
      <Container>
        <Row xs={3}>
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
      {/* 상품진열영역의 끝 */}
      <div className='d-flex justify-content-center
        align-items-center'>
        <Button variant="primary" size="lg"
          onClick={async () => {
            try {
              const result1 = await axios('https://zzzmini.github.io/js/react_data_01.json')
              let temp = [...product, ...result1.data];
              const result2 = await axios('https://zzzmini.github.io/js/react_data_02.json')
              temp = [...temp, ...result2.data];
              setProduct(temp);
              /* const는 한번 정의되면 값을 바꿀 수 없으므로 
              let을 사용해서 값을 변경할 수 있도록 했음 
              굳이 const를 사용하려면 temp2를 정의해
              const temp2 = [...temp, ...result2.data]
              setProduct(temp2);
              를 사용하면 한번에 데이터가 가져와진다. */

            } catch (error){
              console.log("가져오기 실패", error)
            }

            /* 주문번호 -> 자바스크립트에선 promiss라고 함
            주문번호를 받으면 -> await 
            커피를 만듦 -> 
            sync(동기, 무조건 순서대로), 
            async(비동기, 빠른 순서대로)
            비동기적으로 하되 await를 걸어놓음 영수증을 받아놓음
            실물 아메리카노를 던져줘야 아래의 것들이 실행됨
            보통 axios를 처리할때는 비동기로 하되, await를 걸어놓음
            await를 안걸어 놓으면 기다리지 않고 바로 출력되어버림 
            -> 오류남

            여러개를 순차적으로 처리해야하면 이 코드를 사용해야함
            */

            // 데이터를 3개 가져오는 함수
            /* axios
            .get('https://zzzmini.github.io/js/react_data_01.json')
            .then((result)=>{
              let temp = [... product]
              for(let x of result.data){
                temp.push(x)
            }
            setProduct(temp)
              // console.log(result)
            })
            .catch(()=>{
              console.log("가져오기 실패")
            }) 
              -> 얘 자체는 asnyc와 await가 붙어있음 */
          }}>
          데이터 가져오기</Button>
      </div>
    </div>
  )
}
export default Home;
