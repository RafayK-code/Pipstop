
const Home = (props) => {
    const media = process.env.PUBLIC_URL + '/media/';
    const welcomeStyle = {
        color: 'faf0fb'
    };

    return (
        <>
            <img src={media + "computer_display.svg"} alt="Computer" class="computer-image" />
            <div class="content">
                <div class="welcome-message" style={welcomeStyle}>welcome:</div>
                <div class="welcome-message">&lt;{props.user.fname}&gt;</div>
                <div class="event-name">hackwestern10</div>
            </div>

            <div class="icon-container">
                <a href="health.html" class="icon-link">
                    <div class="icon health-icon">
                        <img src = {media + "heart_icon.svg"} alt="heart icon" />
                        <p>health</p>
                    </div>
                </a>

                <a href="social.html" class="icon-link">
                    <div class="icon social-icon">
                        <img src = {media + "social_icon.svg"} alt="social icon" />
                        <p>social</p>
                    </div>
                </a>

                <a href="fun.html" class="icon-link">
                    <div class="icon fun-icon">
                    <img src = {media + "games_icon.svg"} alt="game icon" />
                    <p>fun</p>
                    </div>
                </a>
            </div>

            <div class="bottom-logo">
                <img src= {media + "pipstop_logo_white.svg"} alt="white_logo" />
            </div>
        </>
    );
}

export default Home;