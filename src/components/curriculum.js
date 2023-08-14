
const Curriculum = () => {
    return (
        <div id="section-curriculum">
            <div class="item item1">
                <div class="title">
                    <span>파이썬을 쉽게 배우는 혁신적인 방법</span>
                    <strong>코드얼라이브 도입</strong>
                </div>
                <img src="img/section-curriculum-logo1.png" alt="codealive" class="logo"></img>
                <p>
                    codeAlive는 코딩 초보자도 쉽고 재미있게<br/>
                    파이썬 프로그래밍을 배울 수 있는<br/>
                    실시간 인터랙티브 코딩교육 플랫폼입니다.<br/>
                    유니티 엔진 기반의 혁신적인 비주얼 프로그래밍은<br/>
                    미래를 준비하는 가장 빠른 방법을 안내합니다.
                </p>
                <p>
                    <a href="https://www.codealive.co.kr/setup" class="bt1" target="_blank" rel="noreferrer">코드얼라이브 다운로드하러가기</a>
                </p>
                <div class="video-wrap">
                    <iframe src="https://www.youtube.com/embed/IeGj7s_KuFg" title="codeAlive I 실시간 인터랙티브 코딩교육 플랫폼" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
            <div class="item item2">
                <div class="title">
                    <span>코딩교육 시작부터 제대로</span>
                    <strong>코딩앤플레이</strong>
                </div>
                <img src="img/section-curriculum-logo2.png" alt="codealive" class="logo"></img>
                <p>
                    코딩앤플레이는 국내 최초로 어린이 코딩교육<br/>
                    커리큘럼을 개발한 1세대 코딩교육 전문 기업입니다. <br/>
                    자체 개발한 교재를 통해 체계적으로<br/>
                    아이들의 문제해결능력과 컴퓨팅사고력을 길러줍니다.
                </p>
                <div class="icons">
                    <div class="icon">
                        <img src="img/section-curriculum-icon1.png" alt="icon"></img>
                        <span>논리적 사고력</span>
                    </div>
                    <div class="icon">
                        <img src="img/section-curriculum-icon2.png" alt="icon"></img>
                        <span>창의적 사고력</span>
                    </div>
                    <div class="icon">
                        <img src="img/section-curriculum-icon3.png" alt="icon"></img>
                        <span>커뮤니케이션</span>
                    </div>
                    <div class="icon">
                        <img src="img/section-curriculum-icon4.png" alt="icon"></img>
                        <span>문제해결능력</span>
                    </div>
                </div>
                <div class="video-wrap">
                    <iframe src="https://www.youtube.com/embed/hbhwST0C9po" title="코딩교육 코딩앤플레이" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
        </div>
        )
};

export default Curriculum;