import portrait from "../images/portrait.jpeg";

export default function AboutMe() {



    return (
        <section id='about-me-wrap'>
            <article id='about-me'>
                <h3 id='about-me-header' className='text-crimson'>About me</h3>
                <hr id="aboutme-hr" />
                <p className='text-barlow'>As a programming hobbyist, I have spent several years building scripts for algorithmic stock trading, as well as chart indicators to assist in interpreting market fluctuations. Knowing that I wanted to work in tech, I began taking online courses for more applicable skills like HTML/CSS, JavaScript, and React.js. I eventually decided to take my skills to the next level by enrolling at the UC Berkeley Extension to earn my full-stack web development certificate. I am currently aspiring and working towards getting hired at a company, small or large, to help build their platform.</p>
                <p className='text-barlow'>Outside of programming, I received a B.S. in biochemistry from UC Davis and have spent 4+ years as an aircraft structural mechanic for the California National Guard. I am confident that my wide array of technical skills equip me to easily adapt and quickly become a productive asset and trusted colleague.</p>
                <p className='text-barlow'> On my free-time, I enjoy activities like camping, backpacking, fishing, vegetable gardening, woodworking, and of course, spending time with family and friends.</p>
            </article>
            <img id='self-portrait' src={portrait} alt='My self-portrait' />
      </section>
    )
}