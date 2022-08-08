

export default function Header() {



    return (
        <header id='header'>
    
            <div id='my-name-label-border'>
                <div id='my-name-label'>
                    <h1 id='my-name'>
                        <a href='#hero' id="name-tag">Jake Walsh</a>
                    </h1>
                </div>
            </div>
            
            <nav>
                <ul id='nav-ul'>
                    <li id='nav-about'><a href='#about-me'>About Me</a></li>
                    <li id='nav-work'><a href='#my-work'>My Work</a></li>
                    <li id='nav-contact'><a href='#contact-me'>Contact Me</a></li>
                </ul>
            </nav>
    
        </header>
    )
}