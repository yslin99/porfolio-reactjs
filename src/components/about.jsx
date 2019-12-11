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
                    <p>I am currently an AI apprentice with AI Singapore. I started my coding and data science learning journey two years ago. 
                        Having gone through some intensive courseworks and hands-on experience doing real-world AI project, 
                        I am now better equipped myself with new skillsets that I wouldn't imagine myself of having a year ago.</p>

                    <p>I code in Python for my apprenticeship project and have little experience in web programming. I am totally new to React.js. 
                        This app was originally created using template as part of the attempt to apply for a Bootcamp with TechLadies. I didn't manage to get in eventually. 
                        I was disappointed initally as the attempt was actually quite painful to figure out the navigation and dependencies within data folder structure of a new framework
                        and to get it deployed successfully without any proper trainings. Though this little app doesn't win me an entry to a bootcamp, I find this template is beautifully designed 
                        and proper modification with right content can outline my work histories in a new way. The application outcome wouldn't stop anyone from working more tech works.
                        I shall have then made full use of this little app that I spent times earlier on and continue to make progress.</p>

                    <p>The most valuable lesson from this attempt is realization on how to conquer a learning obstacle and fear of picking up a new topic in short period of time. 
                        Having the right interest and persistent to work through the problems piece by piece, it can be achieved and completed. 
                        The learning journey on the subject doesn't stop when the application ends, it continues with clearer mind on what to strengthen and to improve further. 
                        This app is not perfect, yet it marks a signification personal milestone to explore and kick-start the learning journey of a new web programming framework.</p>

                    <p>Here it is, my very first template-based application using React.js. Any feedbacks are appreciated and welcomed!~</p>
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
