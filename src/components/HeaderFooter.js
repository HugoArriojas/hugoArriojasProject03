// Header and footer component with the title of Spacestagram
import "../stylesheets/HeaderFooter.css"

const HeaderFooter = () => {
    return (
      <div className="header footer">
      <div className="titleText">
        <div className="title">
          <h1>Reactive <span>Retail</span></h1>
        </div>
        <p className="subtitle">Brought to you by the FakeStore API</p>
      </div> {/* /titleText */}
      <div className="imageTriangle"></div>
    </div> // /header /footer 
    )
}

export default HeaderFooter;