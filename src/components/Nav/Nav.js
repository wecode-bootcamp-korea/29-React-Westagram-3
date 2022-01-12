import React from "react";
import "./Nav.scss";


const Nav = () => {
    return (
        <div className="Nav">
            <nav>
                <div className="nav-wrapper">
                    <h1 className="logo">westagram</h1>
                    <div className="search">
                        <input type="text" placeholder="검색" />
                        <i className="fas fa-search"></i>
                    </div>
                    <div className="menu-wrapper">
                        <Button className="menu" alt="explore button" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png" />
                        <Button className="menu" alt="heart button" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png" />
                        <Button className="menu" alt="profile button" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png" />
                    </div>
                </div>
            </nav>
        </div>
    );
}
​

export default Nav;