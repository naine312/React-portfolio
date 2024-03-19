import { useEffect, useRef, useState } from "react";
import AnimatedLetters from "../AnimatedLetters";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import "./index.scss";
import emailjs from '@emailjs/browser'
import Loader from "react-loaders";

const Contact = ()=>{
    const [letterClass, setLetterClass] = useState("text-animate");
    const refForm = useRef();
    const position = [43.656700,-79.750400]
    const sendEmial = (e)=>{
        e.preventDefault();
        emailjs.sendForm('gmail','template_qfgh9ea',refForm.current,'elMw8wSAyCIPs_5nS')
        .then(()=>{
            alert('Message successfully sent!');
            window.location.reload(false);
        },
        ()=>{
            alert('Failed to send the message, please try again');
        }
        )
        }
    


    
    useEffect(() => {
        setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 4000)}, [])
    return<> 
    <div className="container contact-page">
        <div className="text-zone">
            <h1>
                <AnimatedLetters letterClass={letterClass}
                strArray={['C','o','n','t','a','c','t','','M','e']}
                idx={10}></AnimatedLetters>
            </h1>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis vero rerum quisquam animi eum autem iste ea nihil natus, repellendus eos adipisci quod, alias, aut quas unde ipsam officia est.
            </p>
            <div className="contact-form">
            <form ref={refForm} onSubmit={sendEmial} >
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
            Nehanshu Nai,
            <br/>
            Canada
            <br/>
             Morton Way<br/>
             Brampton<br/>
             <br/>
        <span>nehansucnai321@gmail.com</span>
        </div>
        <div className="map-wrap">
        <MapContainer center={position} zoom={13}>
        <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
        <Popup>
            Come over here for a cup of tea.
        </Popup>
        </Marker>
        </MapContainer>
        </div>
    </div>
    <Loader type="ball-spin-fade-loader"/>
    </>
}
export default Contact;