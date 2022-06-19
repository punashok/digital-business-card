export default function Info() {
    return (
        <div className="info">
            <h2 className="info--name">Ashok Pun</h2>
            <h4 className="info--role">Full Stack Web Developer</h4>
            <a href="http://ashokpun.com" target="_blank" rel="noreferrer" className="info--website">ashokpun.com</a>
            <div className="info--buttons">
                <a className="email-btn" href="mailto:ashokpun007@gmail.com" target="_blank"  rel="noreferrer">
                <i className="fa-solid fa-envelope"></i> Email
                </a>
                <a className="linkedin-btn" href="https://www.linkedin.com/in/ashok-pun-a7a93489/" target="_blank" rel="noreferrer">
                <i className="fa-brands fa-linkedin"></i> Linkedin
                </a>
            </div>
        </div>
    )
}