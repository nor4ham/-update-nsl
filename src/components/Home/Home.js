import {React,useState, useEffect} from 'react'
import {Container} from 'react-bootstrap';
import headerImg from "../../assets/img/logo.png";
import TrackVisibility from 'react-on-screen';
import { color, useColorModeValue } from '@chakra-ui/react';

import './Home.css'
export default  function Home() {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["سفرت وأنورت، حياك بموقع نسل"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
        <Container>


            <TrackVisibility>
              {({ isVisible }) =>  
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>

                <h1>أ {` `} <span className="wrap">{text}</span></h1>
                  <p>هنا تقدر تلقى الجمل المناسب  لناقتك لسلاله اقوى ، وبرضو تقدر تنضم لنا وتبيع للمهتمين مثلك!</p>
                 
              </div>}
            </TrackVisibility>

            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img"/>

                </div>}
            </TrackVisibility>
            </Container>
    </section>

  )
}
