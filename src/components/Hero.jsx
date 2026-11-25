import { useState } from "react";
import heroimage from "../assets/images/hero.jpg";
import { FiPlay } from "react-icons/fi";
import "./Hero.css";
import Modal from "./Modal";

const Hero = () => {
  const [showProcess, setShowProcess] = useState(false);

  const showProcessHandler = () => {
    setShowProcess(!showProcess);
  };

  return (
    <section id="home" className="hero">
      <div className="container hero-inner">
        <div className="hero-content">
          {/* badge */}
          <span className="hero-badge">More than Faster <span aria-hidden="true">🍓</span> </span>

          {/* h1 with "Food" in a span */}
          <h1>
            Be The Fastest In Delivering Your <span>Food</span>
          </h1>
          {/* paragraph */}
          <p className="hero-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
            tempore error officia, mollitia debitis doloremque architecto quod
            aliquid eveniet facere!
          </p>
          {/* the two buttons, inside a div */}
          <div className="hero-buttons">
            <a href="#menu" className="btn btn-primary">
              Order Now
            </a>
            <button
              className="btn btn-outline"
              aria-haspopup="dialog"
              onClick={() => setShowProcess(true)}>
              <span
                className={`btn-icon ${showProcess ? "is-open" : ""}`}
                aria-hidden="true">
                <FiPlay />
              </span>
              Order Process
            </button>
          </div>

          {showProcess && (
            <Modal title="Order Process" onClose={() => setShowProcess(false)}>
              <ol>
                <li>Choose your favorite meal from our menu.</li>
                <li>Add the meal to your cart and proceed to checkout.</li>
                <li>Fill in your delivery details and make the payment.</li>
                <li>
                  Wait for your order to be prepared and delivered to your
                  doorstep.
                </li>
                <li>Enjoy your delicious meal!</li>
              </ol>
            </Modal>
          )}
        </div>

        <div className="hero-image">
          <img src={heroimage} alt="HeroImage" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
