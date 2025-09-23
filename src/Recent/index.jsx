import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Recent({ product }) {
  const [recent, setRecent] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    let data = localStorage.getItem("recent");
    if (data) {
      let parsed = JSON.parse(data);
      setRecent(parsed);
    }
  }, []);

  /* ★ 선생님 풀이 ★
  
    const navigate = useNavigate();
    const [recent, setRecent] = useState([]);

    useEffect(() => {
    // localStorage에서 가져오기, 최신 순으로 정렬하기
    const raw = localStorage.getItem("recent")
    // recent가 비어있으면 그냥 리턴
    if(! raw) return;
    // 스토리지 데이터 -> 배열로 변환 [1, 2]
    const recentDataIds - JSON.parse(raw);
    // 배열에 있는 ID를 하나씩 읽어서, product에서 찾아서
    // 최근 읽은 정보로 저장
    // 없는 제품은 제거
    const recentItems = recentsDataIds
      .map((id)=>product.find(x => x.id === Number(id)))
      .filter(Boolean) // map을 통해서 가져온 데이터 중... null 제외
    setRecentList(recentItems)
  }, [recentItems]); 

  if(! recentList.length){
  return}
  */

  if (recent.length === 0) {
    return (
      <div className="container py-4">최근 본 상품이 없습니다.</div>
    );
  }

  return (
    <div className="container py-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h4 className="mb-0">최근 본 상품</h4>
        <button
          className="btn btn-outline-secondary btn-sm"
          onClick={() => {
            localStorage.setItem("recent", JSON.stringify([]));
            /* localStorage.removeItem("recent") // recent 자체를 삭제 */
            setRecent([]);
          }}
        >
          전체 지우기
        </button>
      </div>

      <div className="row g-3">
        {recent.map((id) => {
          // product 배열에서 id와 같은 상품 찾기
          const item = product.find((p) => p.id === Number(id));
          if (!item) return null; // 못 찾으면 건너뜀

          return (
            <div className="col-6 col-md-4 col-lg-3" key={item.id}>
              <div
                className="card h-100"
                role="button"
                onClick={() => navigate(`/detail/${item.id}`)}
              >
                <img
                  src={`/images/shoes${item.id + 1}.jpg`}
                  className="card-img-top"
                  alt={item.title}
                />
                <div className="card-body">
                  <div className="fw-semibold">{item.title}</div>
                  <div className="text-muted small">{item.content}</div>
                </div>
              </div>
            </div>
            /*
            <div className="row g-3">
            recentList.map((item, index)=>{
              return(
              <div className="col-6 col-md-4 col-lg-3" key={item.id}>
              <div
                className="card h-100"
                role="button"
                onClick={() => navigate(`/detail/${item.id}`)}
              >
                <img
                  src={`/images/shoes${item.id + 1}.jpg`}
                  className="card-img-top"
                  alt={item.title}
                />
                <div className="card-body">
                  <div className="fw-semibold">{item.title}</div>
                  <div className="text-muted small">{item.content}</div>
                </div>
              </div>
            </div>
            </div>
            )
              } */
          );
        })}
      </div>
    </div>
  );
}
