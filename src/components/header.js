import React, {useEffect, useState} from 'react';
import { classnames } from "../utils/general";
import { Link } from 'react-router-dom';
import $ from "jquery";


const Header = () => {
	const [isActive, setActive] = useState(false);
	useEffect(()=>{
		$("body").toggleClass("fixed");
		$("html").toggleClass("fixed");
		$("#nav-layer").toggle();
	},[isActive]);

    return (
        <div id="header-wrap">
			<h1>
				<a href="/">
					<img src="img/logo.png" alt="렛츠코딩앤플레이"></img>	
				</a>
			</h1>
			<div id="nav-wrap">
				<button 
					className={classnames(
						"bt-nav",
						isActive? "open" : ""
						)}
					onClick={()=>{setActive(!isActive)}}
					>
					<span class="top">메</span>
					<span class="bottom">뉴</span>
				</button>
				
				<div id="nav-layer">
					<div class="top">
						<a href="/" class="logo">
							<img src="img/logo-white.png" alt="렛츠코딩앤플레이"></img>
						</a>
					</div>	
					
						<div class="menu-list">
							
							<Link to={"/coding"}>커리큘럼</Link>
							<Link to={"/contact"}>상담 안내</Link>
							<Link to={"/download"}>자료실</Link>
							<a href="https://letscoding.synology.me/mail">학원 이메일</a>
						</div>
						
						
					
				</div>
				
			</div>
		</div>
    )
};

export default Header;