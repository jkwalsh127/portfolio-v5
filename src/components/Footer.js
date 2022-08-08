

export default function Footer() {



    return (
        <footer id='contact-me'>
            <h3 id='contact-me-header'>Contact Me</h3>
            <hr id='footer-hr' />
            <ul id='contact-ul'>
                <li id='contact-ul-resume'><a id='resume' href='./assets/files/Resume III.pdf' download='jake-walsh-resume' target='_blank'>My Resume</a></li>
                <li class='contact-ul-info'>(415) 506-9317</li>
                <li class='contact-link'><a href='mailto:jkwalsh127@gmail.com' target='_blank' id='email-link'>jkwalsh127@gmail.com</a></li>
                <li  class='contact-link'>
                    <a href='https://www.linkedin.com/in/jake--walsh/' target='_blank'>
                        <div class='contact-link-wrap'>
                            <img class='social-logo' src='' />
                            <p class='link-text'>
                                LinkedIn
                            </p>
                        </div>  
                    </a>
                </li>                
                <li  class='contact-link'>
                    <a href='https://github.com/jkwalsh127' target='_blank'>
                        <div class='contact-link-wrap'>
                            <img class='social-logo' src='' />
                            <p class='link-text'>
                                GitHub
                            </p>
                        </div>
                    </a>
                </li>            
            </ul>
      </footer>
    )
}