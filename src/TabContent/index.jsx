import {useEffect, useState} from "react"

function TabContent({tabState}){
  // fade 값으로 css를 지정하도록
  let [fade, setFade] = useState('')
  // useEffect로 타이머를 실행
  // 0.2초 후에 fade = ani_end로 바꿔 줌
  useEffect(()=>{
    let timer = setTimeout(() => {
      setFade('ani_end')
    }, 100);
    return(() => {
      clearTimeout(timer);
      setFade('')
    })
  }, [tabState]
)
  return(
    <div className={`ani_start ${fade}`}>
      {/* 처음에 버튼을 누르면 보이지 않다가 0.5초가 지나야 
      ani_end가 붙어서 내용이 보이게 함 */}
    {[
      <div>내용 1</div>,
      <div>내용 2</div>,
      <div>내용 3</div>,
    ][tabState]}
    </div>
  )
}
export default TabContent;