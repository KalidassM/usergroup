import React from 'react'

const Footer = () => {
  return (
    <footer className="footer">
        <div className="container">
            <div className="footer-logo">
                <a href="/" target="_self"> <img src="https://usergroup.cohesity.com/wp-content/themes/cohesity_new/dist/images/CUG-500px-White.png" alt="footer logo"/></a>
            </div>
            <div className="column-wrapper">
                <div className="col">
                    <ul>
                    <li><a href="https://usergroup.cohesity.com/member-benefits/" target="_self">Member Benefits</a></li>
                    <li><a href="https://usergroup.cohesity.com/attend/" target="_self">Attend</a></li>
                    <li><a href="https://usergroup.cohesity.com/about/" target="_self">About</a></li>
                    </ul>
                </div>
                <div className="col">
                    <ul>
                        <li><a href="https://usergroup.cohesity.com/crew/" target="_self">Find Your Crew</a></li>
                        <li><a href="https://usergroupmembers.cohesity.com/s/request-form" target="_blank">Request a Crew</a></li>
                        <li><a href="https://usergroupmembers.cohesity.com/s/leader-request" target="_blank">Become a Leader</a></li>
                        <li><a href="https://usergroup.cohesity.com/galaxy/" target="_self">Learn About Cohesity Galaxy</a></li>
                    </ul>
                </div>
                <div className="col">
                </div>
                <div className="col">
                </div>
                <div className="col">
                </div>
            </div>
            <div className="social-nav">
                <ul className="text-right">
                    <li>
                    <a href="https://www.linkedin.com/showcase/cohesity-user-group/" target="_blank" aria-label="Linkedin">
                        <span id="Linkedin" className="hidesocialspan">Linkedin</span>
                        <svg id="Group_129" data-name="Group 129" xmlns="http://www.w3.org/2000/svg" width="16.132" height="16.133" viewBox="0 0 16.132 16.133" aria-labelledby="Linkedin">
                            <path id="Path_983" data-name="Path 983" d="M343.309,391.3a1.914,1.914,0,1,1,1.369.576A1.872,1.872,0,0,1,343.309,391.3Zm-.324,12.819V393.349h3.349v10.767Zm12.532,0v-5.257a5.807,5.807,0,0,0-.216-1.873,1.516,1.516,0,0,0-1.548-.972,1.687,1.687,0,0,0-1.62.864,4.023,4.023,0,0,0-.36,1.909v5.33h-3.313V393.349h3.2v1.476h.036a2.877,2.877,0,0,1,1.152-1.188,4.161,4.161,0,0,1,5.294.9,7.289,7.289,0,0,1,.72,3.673v5.906Z" transform="translate(-342.733 -387.984)" fill="#fff"></path>
                        </svg>
                    </a>
                    </li>
                    <li>
                    <a href="mailto:usergroup@cohesity.com" target="_blank" aria-label="Email">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18.915" height="14.544" viewBox="0 0 18.915 14.544">
                            <g id="Group_37422" data-name="Group 37422" transform="translate(-1379.722 -3517)">
                                <g id="_001-email" data-name="001-email" transform="translate(1379.722 3452.734)">
                                <path id="Path_25790" data-name="Path 25790" d="M11.038,176.853a2.761,2.761,0,0,1-3.162,0L.126,171.495c-.043-.03-.085-.061-.126-.093v8.78a1.774,1.774,0,0,0,1.741,1.806H17.174a1.774,1.774,0,0,0,1.741-1.806V171.4c-.041.032-.083.063-.126.093Z" transform="translate(0 -103.178)" fill="#fff"></path>
                                <path id="Path_25791" data-name="Path 25791" d="M.741,67.391l7.751,5.167a1.737,1.737,0,0,0,1.932,0l7.751-5.167a1.66,1.66,0,0,0,.741-1.384,1.743,1.743,0,0,0-1.741-1.741H1.741A1.743,1.743,0,0,0,0,66.008a1.659,1.659,0,0,0,.741,1.384Z" fill="#fff"></path>
                                </g>
                            </g>
                        </svg>
                    </a>
                    </li>
                </ul>
                <div className="company-address">
                    <p>300 Park Avenue Suite 1700 </p>
                    <p>San Jose, CA 95110 </p>
                </div>
            </div>
            <div className="copyright">
                <p className="content-wrap">
                    © 2023 Cohesity, Inc. All Rights Reserved.
                </p>
                <ul>
                    <li><a href="https://www.cohesity.com/agreements-docs/cohesity-website-terms-of-use.pdf" target="_blank">Terms of Use</a></li>
                    <li><a href="https://usergroup.cohesity.com/membership-guidelines/" target="_self">Member Guidelines</a></li>
                    <li><a href="https://www.cohesity.com/legal/privacy/" target="_blank">Privacy Policy</a></li>
                    <li><a target="_blank"><span className="ot-sdk-show-settings">Cookies Settings</span></a></li>
                </ul>
            </div>
        </div>
    </footer>
  )
}

export default Footer