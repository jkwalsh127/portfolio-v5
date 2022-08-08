import TradingProjects from './TradingProjects';
import WebsiteProjects from './WebsiteProjects';
import UtilityProjects from './WebsiteProjects';

export default function MyWork() {



    return (
        <section id='my-work'>
          <h3 id='my-work-header'>My Work</h3>
    
        {/* <!-- Trading section --> */}
    
          <section class='work-section-container'>
    
            <div class='work-group-label-container'>
              <h4 class='work-label'>Asset</h4>
              <h4 class='work-label'>Trading</h4>
              <h4 class='work-label'>Applications</h4>
            </div>
    
            <section class='work-section-work-container'>
    
              <TradingProjects />

            </section>
          </section>
    
        {/* <!-- Website section --> */}
    
          <section class='work-section-container'>
    
            <div class='work-group-label-container'>
              <h4 class='work-label'>Websites</h4>
            </div>
    
          <section class='work-section-work-container'>
    
            <WebsiteProjects />

          </section>
        </section>
    
        {/* <!-- Utility Apps section --> */}
    
        <section class='work-section-container'>
    
          <div class='work-group-label-container'>
            <h4 class='work-label'>Utility Apps</h4>
          </div>
    
          <section class='work-section-work-container'>
    
            <UtilityProjects />

          </section>
        </section>
      </section>
    )
}