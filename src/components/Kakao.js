import React, {useEffect} from "react";

const {kakao} = window;

function Kakao(){
    useEffect(() => {
        const container = document.getElementById("daumRoughmapContainer1664705044311")
        const options = {
            center : new kakao.maps.LatLng(
                35.83908062373212,
                127.0581704807826
            ),
            level: 3
        }
        const map = new kakao.maps.Map(container, options);
        const marker = new kakao.maps.Marker({ 
            // 지도 중심좌표에 마커를 생성합니다 
            position: map.getCenter() 
        }); 
        // 지도에 마커를 표시합니다
        marker.setMap(map);
    }, []);
    
    return (
        <div id = "daumRoughmapContainer1664705044311" style={{width:"800px", height:"600px"}}>

        </div>
    )
};

export default Kakao;