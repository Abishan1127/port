import "./About.css";
import bg1 from '../../assets/bg.png'
const About = () => {
  return (
    <div className="abouter">

      <div><img src={bg1} alt="" className='about-image'/></div>
      <div>
      <h2 className="section-title">About me</h2>
             
              <p className="about-description">
                Passionate Full Stack Developer with expertise in building responsive, user-friendly applications. 
                Skilled in both front-end and back-end technologies, I create solutions that are efficient, 
                scalable, and impactful.
              </p>
           
            <ul className="about-info">
              <li><strong>Name:</strong> Kunananthan Abishan</li>
              <li><strong>Date of Birth:</strong> November 27, 2003</li>
              <li><strong>Address:</strong> No 186, Kili Town, Kilinochchi, Sri Lanka</li>
              <li><strong>Zip Code:</strong> 44000</li>
              <li><strong>Email:</strong> kunananthan19abishan@gmail.com</li>
              <li><strong>Phone:</strong> +94764101633</li>
            </ul>
      </div>
      </div>
  );
};

export default About;
