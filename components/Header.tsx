import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <header className="we-header btn-open block">
        <div className="utility-nav">
            <div className="container">
                <ul>
                    <li><Link href="https://www.cohesity.com/">Cohesity</Link></li>
                    <li><Link href="https://galaxy.cohesity.com/users/sign_in">Cohesity Galaxy</Link></li>
                    <li><Link href="https://www.cohesity.com/academy/">Cohesity Academy</Link></li>
                    <li><Link href="https://my.cohesity.com/s/login/SelfRegister?target=group" className="btn-green">Join</Link></li>
                    <li><Link href="https://my.cohesity.com/s?target=group" className="btn-blue">Log In</Link></li>
                </ul>
            </div>
            <div className="primary-nav">
                <div className="container">
                <div className="logo careers-logo">
                    <Link href="https://usergroup.cohesity.com">
                        <img src="https://usergroup.cohesity.com/wp-content/themes/cohesity_new/dist/images/header/cug-logo.png" alt="Cohesity User Group Logo" className="main-logo"/>
                    </Link>
                </div>
                <ul className="secondary-nav">
                    <li className="search-nav ">
                        <span><img src="https://usergroup.cohesity.com/wp-content/themes/cohesity_new/dist/images/header/Icon_search.svg" alt="Search"/></span>
                    </li>
                    <li className="toggle">
                        <div className="hamburger">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </li>
                </ul>
                <div className="main-menu we-desktop en-menu">
                    <ul>
                        <li className="hover-menu  member-benefits  none ">
                        <a href="https://usergroup.cohesity.com/member-benefits/" target="_self">Member Benefits<span className="line-animate"></span></a>
                        </li>
                        <li className="hover-menu  attend  none ">
                        <a href="https://usergroup.cohesity.com/attend/" target="_self">Attend<span className="line-animate"></span></a>
                        </li>
                        <li className="hover-menu  crew  get-involved ">
                        <a href="https://usergroup.cohesity.com/crew/" target="_self">Get Involved<span className="line-animate"></span></a>
                        <div className="sub-menu">
                            <ul className="left-part">
                            <li className="inner-link  active">
                                <a href="https://usergroup.cohesity.com/crew/" target="_self">Find Your Crew</a>
                            </li>
                            <li className="inner-link">
                                <a href="https://usergroupmembers.cohesity.com/s/leader-request" target="_blank">Become a Leader</a>
                            </li>
                            <li className="inner-link">
                                <a href="https://usergroup.cohesity.com/galaxy/" target="_self">Learn About Cohesity Galaxy</a>
                            </li>
                            </ul>
                        </div>
                        </li>
                        <li className="hover-menu  about  none ">
                        <a href="https://usergroup.cohesity.com/about/" target="_self">About<span className="line-animate"></span></a>
                        </li>
                        <li data-name="cohesity" className="desktop  top-sub-menu">
                        <a href="https://www.cohesity.com" target="_blank">Cohesity</a>
                        </li>
                        <li data-name="cohesity-galaxy" className="desktop  top-sub-menu">
                        <a href="https://galaxy.cohesity.com/users/sign_in" target="_blank">Cohesity Galaxy</a>
                        </li>
                        <li data-name="cohesity-academy" className="desktop  top-sub-menu">
                        <a href="https://www.cohesity.com/academy/" target="_blank">Cohesity Academy</a>
                        </li>
                        <li data-name="join" className="desktop  top-sub-menu">
                        <a href="https://my.cohesity.com/s/login/SelfRegister?target=group" target="_blank">Join</a>
                        </li>
                        <li data-name="log-in" className="desktop  top-sub-menu">
                        <a href="https://my.cohesity.com/s?target=group" target="_blank">Log In</a>
                        </li>
                        <li data-name="profile" className="desktop  top-sub-menu">
                        <a href="https://usergroupmembers.cohesity.com/s/my-profile" target="_blank">Profile</a>
                        </li>
                        <li data-name="logout" className="desktop  top-sub-menu">
                        <a href="https://my.cohesity.com/secur/logout.jsp" target="_blank">Logout</a>
                        </li>
                    </ul>
                </div>
                <div className="main-menu we-mobile en-menu">
                    <ul id="0">
                        <li className="hover-menu none rotate-arrow">
                        <a href="https://usergroup.cohesity.com/member-benefits/" target="_self">Member Benefits<span className="line-animate"></span></a>
                        </li>
                    </ul>
                    <ul id="1">
                        <li className="hover-menu none rotate-arrow">
                        <a href="https://usergroup.cohesity.com/attend/" target="_self">Attend<span className="line-animate"></span></a>
                        </li>
                    </ul>
                    <ul id="2">
                        <li className="hover-menu get-involved rotate-arrow">
                        <a href="https://usergroup.cohesity.com/crew/" target="_self">Get Involved<span className="line-animate"></span></a>
                            <div className="sub-menu">
                            <ul className="left-part">
                                <li className="we-link active">
                                    <a href="https://usergroup.cohesity.com/crew/" target="_self">Find Your Crew</a>
                                </li>
                                <li className="we-link ">
                                    <a href="https://usergroupmembers.cohesity.com/s/leader-request" target="_blank">Become a Leader</a>
                                </li>
                                <li className="we-link ">
                                    <a href="https://usergroup.cohesity.com/galaxy/" target="_self">Learn About Cohesity Galaxy</a>
                                </li>
                            </ul>
                            </div>
                        </li>
                    </ul>
                    <ul id="3">
                        <li className="hover-menu none rotate-arrow">
                        <a href="https://usergroup.cohesity.com/about/" target="_self">About<span className="line-animate"></span></a>
                        </li>
                    </ul>
                </div>
                </div>
            </div>
        </div>
    </header>

  )
}

export default Header