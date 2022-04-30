import React from 'react';

function AppLink({href, title, subtitle}){

return (

        <a href={href} className='home-app-link'>
                            <div className='app-link-title'>

                            {title}
                            </div>

                            <div className='app-link-subtitle'>
                            {subtitle}
                            </div>                            
                    </a>
)
}

function Home() {
    return (
        <div className='home-page'>

                    <h1>Apps</h1>

                    <div className='app-link-container'>

                    <AppLink href={'/reservoir'} title={"rescal"} subtitle={"Organ reservoir resonance calculator"}/>
                    <AppLink href={'/wrodle'} title={"Wrodle"} subtitle={"Bad Wordle clone"}/>
                    
                    </div>
        </div>
        
    );
}

export default Home;