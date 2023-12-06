import React from 'react'

const Hero = () => {
  return (
    <section className="banner-fourth-level   no-padding bg-white text-white">
        <div className="bg-img ">
            <img width="1600" height="550" src="https://usergroup.cohesity.com/wp-content/new_media/2022/08/Home-banner-image.png"/>                  
        </div>
        <div className="container outer-wrap">
            <div className="content-outer text-">
                <div className="text-wrap  ">
                    <h1>Discover the Power of <span>Connecting</span> With Fellow Cohesity Users</h1>
                    <div className="btn-wrap">
                    <a href="https://my.cohesity.com/s/login/SelfRegister?target=group" className="btn-default" target="_blank">Join</a>
                    <a href="https://my.cohesity.com/s?target=group" className="btn-default" target="_blank">Log in</a>            
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero