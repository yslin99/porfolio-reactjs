import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-12">
                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                <div className="col-md-12">
                    <div className="about-desc">
                    <span className="heading-meta">About Me</span>
                    <h2 className="colorlib-heading">Who Am I?</h2>
                    <p>I am currently an AI apprentice with AI Singapore. I started my coding and data science learning journey since last year. 
                        Having gone through some intensive courseworks and hands-on experience doing real-world AI project, I am now better equipped myself with new skillsets that I wouldn't imagine myself of having a year ago.</p>
                    <p>I code in Python for my apprenticeship project and have little experience in web programming. I am totally new to React.js. Looking at the prerequisite technical tasks for the application to TechLadies Bootcamp, 
                        I keep the TechLadies webpage open and close for few times, hesitating and pondering if I will be able to make it.  
                        I'm not able to create a nice webpage from scratch using React at the moment. But I know how to navigate within the data folder structure and utilize template to modify the content to fit into my own context. Not sure if this is allowable... 
                        On a Saturday night a week before the deadline, after putting my girls to bed, I started to update the React template that I like more seriously with a thought of nothing to lose even if it didn't get through.
                        I find the template is beautifully designed and can be a nice one for me to outline my own work histories.</p>
                    <p>Apparently utilizing a template could be very time-consuming as well. After sorting out the dependencies and put my content in, the deployment to github page took much longer hours than expected. The experience of getting this simple webpage works 
                        has leaded me to appreciate even more on webpages that we visit daily. There are so much works behind the scene to orchestra the entire workflow and ensure the framework works and nothing breaks.
                        The completion of a technical assignment could be scary at the beginning especially when the topic is totally new to me, but the accomplishment of it does bring great joy and satisfaction as well. It's an indication of conquering another learning obstacle. </p>
                    <p>Here it is, my very first React webpage about myself and my application to TechLadies Bootcamp #5</p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        {/* </section>
        <section className="colorlib-about"> */}
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <h2 className="colorlib-heading">Contact Channels</h2>
            </div>
            </div>
            <div className="row row-pt-md">
            <div className="col-md-4 text-center animate-box">
                <div className="services color-1">
                <span className="icon">
                    <i className="icon-linkedin2" />
                </span>
                <div className="desc">
                    <p><a href="https://www.linkedin.com/in/siewlinyap" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-4">
                <span className="icon">
                    <i className="icon-github" />
                </span>
                <div className="desc">
                    <p><a href="https://siewlinyap.github.io" target="_blank" rel="noopener noreferrer">GitHub</a></p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-5">
                <span className="icon">
                    <i className="icon-mail" />
                </span>
                <div className="desc">
                    <p>siewlin2009@gmail.com</p>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
    </div>  
     
    )
  }
}
