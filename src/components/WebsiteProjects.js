

export default function Projects() {



    return (
        <article className='work-card-bot'>
            <div className='work-card-head'>
                <a href='https://jkwalsh127.github.io/btc-bot/' target='_blank' rel="noreferrer">
                    <h4 id='tradingview-head'>BTC bot [Workhorse]</h4>
                </a>
                <p className='collaborators'>
                    Creator
                </p>
            </div>
            <a href='https://jkwalsh127.github.io/btc-bot/' target='_blank' rel="noreferrer">
                <img src='' id='bot-img' alt='placeholder for Bitcoin trading bot' />
            </a>
            <p className="text-barlow" id='card-description-no-repo'>
                I built this React.js app to display one of my trading algorithms.{'\n'}
                This strategy opens longs and shorts on Bitcoin.{'\n'}
                It is shown operating from June of 2018 to June of 2022{'\n'}
                During this 4 year period, the algorithm outperforms Bitcoin by over 25x,{'\n'}
                earning a 51x net return on investment.
                <a href='https://github.com/jkwalsh127/btc-bot' target='_blank' rel="noreferrer">
                    <h5 className='repo text-barlow'>GitHub Repository</h5>  
                </a>
                <div className='technologies-div'>
                    <p className='text-barlow' id='technologies-indicator'>
                    React.js, GitHub pages, FontAwesome, Google Fonts, the PineScript language, and the TradingView development platform were used.
                    </p>
                    <img src='' id='pine-script-img' alt='placeholder for pinescript and tradingview' />
                </div>
            </p>
        </article> 
    )
}