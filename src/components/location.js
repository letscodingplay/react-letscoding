import Kakao from "./Kakao.js"

const Location = () => {
    return (
        <div id="section-location">
            <div class="title">
                <strong>오시는 길</strong>
            </div>
            <p>
                렛츠코딩앤플레이 컴퓨터학원은<br/>
                전북혁신도시 대방디엠시티 아파트에서<br/>
                서쪽으로 건너편에 위치하고 있습니다.
            </p>
            <div class="map-wrap">
                
                <Kakao />
            </div>
        </div>
    )
};
    
export default Location;