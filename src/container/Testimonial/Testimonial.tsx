import { useState, useEffect } from "react";

import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

import { AppWrap, MotionWrap } from "@app/wrapper";
import TestimonialItem from "./TestimonialItem";
import { testimonialsData } from "./data";
import { TestimonialDataType } from "@app/types";

import style from "./Testimonial.module.scss";

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [testimonials, setTestimonials] = useState<TestimonialDataType[]>([]);
  // const [brands, setBrands] = useState([]);

  const handleClick = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    setTestimonials(testimonialsData);
    // setBrands(brandsData);
  }, []);

  const [animate, setAnimate] = useState({ x: 0, opacity: 1 });

  return (
    <>
      {testimonials.length && (
        <>
          <h2 className="mb-12 head-text">Testimonial</h2>
          {/* <Image src={urlFor(testimonials[currentIndex].imgurl)} alt={testimonials[currentIndex].name} /> */}
          {/* <Image src={testimonials[currentIndex].imgurl} alt={testimonials[currentIndex].name} /> */}
          {testimonials.map(
            (testimonial, index) =>
              index === currentIndex && (
                <TestimonialItem key={testimonial.name} {...testimonial} animate={animate} />
              ),
          )}
          <div className={`${style["app__testimonial-btns"]} app__flex`}>
            <div
              className="cursor-pointer app__flex"
              onClick={() => {
                setAnimate({ x: -300, opacity: 0 });
                setTimeout(() => {
                  setAnimate({ x: 0, opacity: 1 });
                  handleClick(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1);
                }, 700);
              }}
            >
              <HiChevronLeft />
            </div>

            <div
              className="cursor-pointer app__flex"
              onClick={() => {
                setAnimate({ x: 300, opacity: 0 });
                setTimeout(() => {
                  setAnimate({ x: 0, opacity: 1 });
                  handleClick(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1);
                }, 700);
              }}
            >
              <HiChevronRight />
            </div>
          </div>
        </>
      )}

      {/* <div className={`${style["app__testimonial-brands"]} app__flex`}>
        {brands.map((brand) => (
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, type: 'tween' }}
            key={brand._id}
          >
            <Image src={brand.imgUrl} alt={brand.name} />
          </motion.div>
        ))}
      </div> */}
    </>
  );
};

export default AppWrap(
  MotionWrap(Testimonial, style["app__testimonial"]),
  "testimonial",
  "bg-secondary",
);
