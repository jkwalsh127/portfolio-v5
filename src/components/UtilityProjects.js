

export default function Projects() {



    return (
        <article class='work-card-bot'>
            <div class='work-card-head'>
                <a href='https://jkwalsh127.github.io/btc-bot/' target='_blank' rel="noreferrer">
                    <h4 id='project-head'>BTC bot [Workhorse]</h4>
                </a>
                <p class='collaborators'>
                    Creator
                </p>
            </div>
            <a href='https://jkwalsh127.github.io/btc-bot/' target='_blank' rel="noreferrer">
                <img src='' id='bot-img' alt='placeholder for Bitcoin trading bot' />
            </a>
            <p class="text-barlow" id='card-description-no-repo'>
                I built this React.js app to display one of my trading algorithms.{'\n'}
                This strategy opens longs and shorts on Bitcoin.{'\n'}
                It is shown operating from June of 2018 to June of 2022{'\n'}
                During this 4 year period, the algorithm outperforms Bitcoin by over 25x,{'\n'}
                earning a 51x net return on investment.
                <a href='https://github.com/jkwalsh127/btc-bot' target='_blank' rel="noreferrer">
                    <h5 class='repo text-barlow'>GitHub Repository</h5>  
                </a>
                <div class='technologies-div'>
                    <p class='text-barlow' id='technologies-indicator'>
                    React.js, GitHub pages, FontAwesome, Google Fonts, the PineScript language, and the TradingView development platform were used.
                    </p>
                    <img src='' id='pine-script-img' alt='placeholder for pinescript and tradingview' />
                </div>
            </p>
        </article> 
    )
}