import styles from "../../../styles/home/testimonials.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const RenderTarget = ({ testimonial, name, description }) => {
  return (
    <div className={styles["target-testimonial"]}>
      <div className={styles["content-target"]}>
        <div className={styles["testimonial"]}>
          <p>{testimonial}</p>
        </div>

        <div className={styles["name-testimoni"]}>
          <div className={styles["name-descript"]}>
            <div className={styles["img"]}></div>
            <div className={styles["name"]}>
              <h5>{name}</h5>
              <p>{description}</p>
            </div>
          </div>
          <div className={styles["extra"]}></div>
        </div>
      </div>
    </div>
  );
};


const Responsive = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          dots: true,
          arrows: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
        },
      },
    ],
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
   
      <RenderTarget
          name={"Camilo"}
          description={"Director de diseño"}
          testimonial={
            "Lorem, ipsum sit amet consectetur adipisicing elit. Voluptate soluta labore, nostrum eos maiores consequuntur delectus mollitia tempora explicabo!."
          }
        />
        
        <RenderTarget
          name={"Lorem Motosa P."}
          description={"lorem impsu dolrem rem"}
          testimonial={
            "Lorem, ipsum sit amet consectetur adipisicing elit. Voluptate soluta labore, nostrum eos maiores consequuntur delectus mollitia tempora explicabo!."
          }
        />
        <RenderTarget
          name={"Monole Rotero mo"}
          description={"Lorem impsu dolorem rem"}
          testimonial={
            "Lorem, ipsum sit amet consectetur adipisicing elit. Voluptate soluta labore, nostrum eos maiores consequuntur delectus mollitia tempora explicabo!."
          }
        />
        <RenderTarget
          name={"Lorea Maniro S."}
          description={"Lorem impsu dolorem rem"}
          testimonial={
            "Lorem, ipsum sit amet consectetur adipisicing elit. Voluptate soluta labore, nostrum eos maiores consequuntur delectus mollitia tempora explicabo!."
          }
        />
      </Slider>
    </div>
  );
};

export const Testimonials = () => {
  return (
    <div className={styles["testimonials-section"]}>
      <div className={styles["testimonials-title"]}>
        <h4>Testimonials</h4>
      </div>

      <div className={styles["carousel-testimonials"]}>
        <Responsive />
      </div>

      <div className={styles["btn-call-cover"]}>
        <button>Book a call</button>
      </div>
    </div>
  );
};
