import initials from "../assets/initials.png"

function CreditSocials() {

    return (
        <section className="creditSocials">
        <p>
          Made at <a href="https://junocollege.com/">Juno College</a>
        </p>
        <div className="socials">

          <a href="http://www.hugoa.dev">
            <img src={initials} alt="Website creator's initials, HA" className="initials" />
          </a>

          <a href="https://github.com/HugoArriojas/hugoArriojasProject03">
            <i className="fab fa-github"></i>
          </a>

          <a href="https://www.linkedin.com/in/hugo-arriojas-53613120a">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </section>
    )
}

export default CreditSocials;


