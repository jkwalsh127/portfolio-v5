import TradingProjects1 from './TradingComponents/TradingProjects1';
import WebsiteProjects from './WebsiteProjects';
import UtilityProjects from './WebsiteProjects';
import workhorse from '../images/workhorse.png';
import pinescript from '../images/pine-script.png';

export default function MyWork() {

  const tradingHead = ["BTC bot [Workhorse]"];
  const collaborators = ["Creater"];
  const image = [workhorse];
  const description = ["I built this React.js app to display one of my trading algorithms.{'\n'}This strategy opens longs and shorts on Bitcoin.{'\n'}It is shown operating from June of 2018 to June of 2022{'\n'}During this 4 year period, the algorithm outperforms Bitcoin by over 25x,{'\n'}earning a 51x net return on investment."];
  const technologies = ["React.js, GitHub pages, FontAwesome, Google Fonts, the PineScript language, and the TradingView development platform were used."];
  const pinescriptImage = [pinescript];



    return (
        <section id='my-work'>
          <h3 id='my-work-header'>My Work</h3>
    
        {/* <!-- Trading section --> */}
    
          <section className='work-section-container'>
    
            <div className='work-group-label-container'>
              <h4 className='work-label'>Asset</h4>
              <h4 className='work-label'>Trading</h4>
              <h4 className='work-label'>Applications</h4>
            </div>
    
            <section className='work-section-work-container'>
    
              <TradingProjects1 tradingHead={tradingHead} collaborators={collaborators} image={image} description={description} technologies={technologies} pinescriptImage={pinescriptImage} />

            </section>
          </section>
    
        {/* <!-- Website section --> */}
    
          {/* <section className='work-section-container'>
    
            <div className='work-group-label-container'>
              <h4 className='work-label'>Websites</h4>
            </div>
    
          <section className='work-section-work-container'>
    
            <WebsiteProjects />

          </section>
        </section> */}
    
        {/* <!-- Utility Apps section --> */}
    
        {/* <section className='work-section-container'>
    
          <div className='work-group-label-container'>
            <h4 className='work-label'>Utility Apps</h4>
          </div>
    
          <section className='work-section-work-container'>
    
            <UtilityProjects />

          </section>
        </section> */}
      </section>
    )
}