import "./Aboutme.css";
import cvPdf from "./oluwaseyi_cv.pdf";


const Aboutme = () => {
    return (<div className="hero1">
    <div className="profile-Img">
    </div>
    <div className="content1">
        <span className="bit-more">
            A bit more about me
        </span>
        <span className="more">
            I’m a Frontend Developer with 3 years of experience creating responsive 
            and user-friendly web applications. I enjoy turning ideas into interactive, 
            visually engaging products that provide seamless user experiences. With a 
            strong focus on clean code and attention to detail, I’m passionate about 
            building interfaces that are not only functional but also enjoyable to use.
        </span>
        <div className="btn-contain">
            <a href={cvPdf} download className="btn">Download cv</a> 
        </div>
    </div>
    </div>
    )
}
export default Aboutme;
