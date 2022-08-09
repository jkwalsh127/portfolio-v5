

export default function Footer() {



    return (
        <footer id='contact-me'>
            <h3 id='contact-me-header'>Contact Me</h3>
            <hr id='footer-hr' />
            <ul id='contact-ul'>
                <li id='contact-ul-resume'><a id='resume' href='./assets/files/Resume III.pdf' download='jake-walsh-resume' target='_blank' rel="noreferrer">My Resume</a></li>
                <li className='contact-ul-info'>(415) 506-9317</li>
                <li className='contact-link'><a href='mailto:jkwalsh127@gmail.com' target='_blank' id='email-link' rel="noreferrer">jkwalsh127@gmail.com</a></li>
                <li  className='contact-link'>
                    <a href='https://www.linkedin.com/in/jake--walsh/' target='_blank' rel="noreferrer">
                        <div className='contact-link-wrap'>
                            <img className='social-logo' src='' alt='linkedin'/>
                            <p className='link-text'>
                                LinkedIn
                            </p>
                        </div>  
                    </a>
                </li>                
                <li  className='contact-link'>
                    <a href='https://github.com/jkwalsh127' target='_blank' rel="noreferrer">
                        <div className='contact-link-wrap'>
                            <img className='social-logo' src='' alt='github'/>
                            <p className='link-text'>
                                GitHub
                            </p>
                        </div>
                    </a>
                </li>            
            </ul>
      </footer>
    )
}