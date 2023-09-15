
const Contact= () => {
    return (
        <section>
            <div class="pd-0-20-30-20">
                <div class="toptitle">
                    <strong>상담 안내</strong>
                </div>
				<div class="subtitle mt-0">
					<strong>상담 가능한 시간</strong>
				</div>
                <div class="tbl-wrap mt-10">
					<table>
						<thead>
							<tr>
								<th>월</th>
								<th>화</th>
								<th>수</th>
								<th>목</th>
								<th>금</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>-</td>
								<td>1:00-5:00</td>
								<td>4:00-5:30</td>
								<td>1:00-5:00</td>
								<td>1:00-6:00</td>
							</tr>
						</tbody>
					</table>
				</div>
                <div class="text-wrap mt-20">
                    <ul class="list-dot">
                        <li>전화 예약 후 방문 부탁드립니다.</li>
                        <li>대면상담은 최대 20분까지 진행됩니다.</li>
                        <li>이외의 시간은 수업 또는 외부일정으로 상담이 어려울 수 있습니다.</li>
                        <li>예약시간 5분 경과시 별도의 연락이 없으시면 상담은 취소됩니다.</li>
                        <li>카카오톡 상담은 언제든지 가능합니다.</li>
                    </ul>
                </div>
                <div class="tbl-wrap mt-20">
					<table>
						<thead>
							<tr>
								<th>전화 예약</th>
								<th>카카오톡 채널</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>
                                    <a href="tel:0637142536" class="bt-tel">063-714-2536</a>
                                </td>
								<td>
                                    <a href="http://pf.kakao.com/_HxfJxks" target="_blank" class="bt-kakao" rel="noreferrer">
                                        <img src="img/icon-kakao.png" alt="kakaotalk"></img>
                                    </a>
                                    <br/>
                                    @렛츠코딩앤플레이
                                </td>
							</tr>
						</tbody>
					</table>
				</div>
            </div>
        </section>
    )
};
export default Contact;