

export default function TradingProjects1({tradingHead, collaborators, image, description, technologies, pinescriptImage}) {

    return (
        <article className='work-card-bot'>
            <div className='work-card-head'>
                <a href='https://jkwalsh127.github.io/btc-bot/' target='_blank' rel="noreferrer">
                    <h4 id='tradingview-head'>{tradingHead[0]}</h4>
                </a>
                <p className='collaborators'>
                {collaborators[0]}
                </p>
            </div>
            <a href='https://jkwalsh127.github.io/btc-bot/' target='_blank' rel="noreferrer">
                <img src={image[0]} id='bot-img' alt='placeholder for Bitcoin trading bot' />
            </a>
            <p className="text-barlow" id='card-description-no-repo'>
                {description[0]}
                <a href='https://github.com/jkwalsh127/btc-bot' target='_blank' rel="noreferrer">
                    <h5 className='repo text-barlow'>GitHub Repository</h5>  
                </a>
                <div className='technologies-div'>
                    <p className='text-barlow' id='technologies-indicator'>
                    {technologies[0]}
                    </p>
                    <img src={pinescriptImage[0]} id='pine-script-img' alt='placeholder for pinescript and tradingview' />
                </div>
            </p>
        </article> 
    )
}