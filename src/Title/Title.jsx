import './Title.css'

function Title(){
    return(
        <div className="container-titles">
            <h1 className="title">Unlimited movies, TV shows, and more</h1>
            <h4>Starts at EUR 6.99. Cancel anytime.</h4>
            <h6>Ready to watch? Enter your email to create or restart your membership.</h6>
            <div className="email">
                <input type="text" className="email-input" value="Email address"/>
                <button className="get-started">Get Started</button>
            </div>
        </div>
    );
}

export default Title