import { useEffect, useState } from "react";
import AnimatedLetters from "../AnimatedLetters";
import Loader from 'react-loaders';
import "./index.scss";

const About = ()=>{
    const [letterClass, setLetterClass] = useState("text-animate");
    const headElement =  ['A','b','o','u','t','','M','e'];
    useEffect(() => {
        setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 4000)}, [])
return<>
 <div className="container about-page">
    <div className="text-zone">
        <h1>
            < AnimatedLetters letterClass={letterClass}
            idx={15} strArray={headElement}/>
        </h1>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem sint temporibus aspernatur possimus necessitatibus ex quasi ad omnis, consequatur labore. Corporis velit sit neque facere aliquid quibusdam explicabo voluptatibus ipsa.
        </p>
        <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti, nostrum omnis maxime maiores quidem expedita tempore et molestiae, unde ipsam culpa adipisci blanditiis. Delectus dolore aut alias. Sit, dolore corrupti!
        </p>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam nostrum corporis impedit, voluptates quasi atque, ex illo facere consequatur ad a necessitatibus similique aliquid. Porro, hic. Assumenda modi porro impedit?
        </p>
    </div>
</div>
<Loader type="ball-spin-fade-loader"/>
</>
}
export default About;