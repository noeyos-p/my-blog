import { Container, Row, Col, Button } from 'react-bootstrap';
import Product from '../Product';
import axios from 'axios';
import { useState } from "react"
import bg_png from "../assets/images/bg.png"

function Home({ product, setProduct }) {
  /* const [counter, setConter] = useState(0);
  const click = async () => {
    const newClick = counter + 1;
    setConter(newClick);
  

  if (newClick === 1) {
    const result1 = await axios('https://zzzmini.github.io/js/react_data_01.json')
    const temp = [...product, ...result1.data];
    setProduct(temp);
  } else if (newClick === 2) {
    const result2 = await axios('https://zzzmini.github.io/js/react_data_02.json')
    const temp = [...product, ...result2.data]
    setProduct(temp);
  } else {
    alert("더 이상 상품이 없습니다.")
  return;
  }
}; */
let [dataLoadingCount, setDataLoadingCount] = useState(0)
let [loadingState, setLoadingState] = useState(false)
  return (
    <div>
      {/* 메인 대문사진 영역 시작 */}
      <div className="main-bg" 
        style={{backgroundImage: `url('${bg_png}')`}}  
      />
      {/* 메인 대문사진 영역 끝 */}
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
      {/* 로딩 메세지 */}
      <div className='text-center my-3'>
        {loadingState && <div>Loading .... Please wait!</div>}

      </div>
      <div className='d-flex justify-content-center
          align-items-center'>
          <Button variant="primary" size="lg"
            onClick={async()=>{
              let getUrl = ''
              if(dataLoadingCount == 0){
                getUrl = 'https://zzzmini.github.io/js/react_data_01.json';
                setDataLoadingCount(dataLoadingCount + 1);
                setLoadingState(true)
              } else if(dataLoadingCount == 1){
                getUrl = 'https://zzzmini.github.io/js/react_data_02.json';
                setDataLoadingCount(dataLoadingCount + 1);
                setLoadingState(true)
              } else {
                alert('데이터가 존재하지 않아요!')
                return;
              }

              try{
                const result = await axios(getUrl)
                let temp = [... product, ... result.data];
                setProduct(temp);
              } catch (error){
                console.log("가져오기 실패", error)
              } finally {
                setLoadingState(false)
              }              
            }}>데이터 가져오기</Button>              
              
              {/* const는 한번 정의되면 값을 바꿀 수 없으므로 
              let을 사용해서 값을 변경할 수 있도록 했음 
              굳이 const를 사용하려면 temp2를 정의해
              const temp2 = [...temp, ...result2.data]
              setProduct(temp2);
              를 사용하면 한번에 데이터가 가져와진다. */}

            {/*}} catch (error){
              console.log("가져오기 실패", error)
            }*/}

            {/* 주문번호 -> 자바스크립트에선 promiss라고 함
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
            */}

            {// 데이터를 3개 가져오는 함수
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
              -> 얘 자체는 asnyc와 await가 붙어있음 */}
          
          
      </div>
    </div>
  )
}
export default Home;
