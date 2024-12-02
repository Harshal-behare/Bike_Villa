import React from "react";

const Testimonial = () => {
  return (
    <div id="testimonial">
      <h2>Customer Testimonials</h2>

      <section>
        <TestimonialCard
          name={"John Doe"}
          feedback={"The bikes here are top-notch! Smooth ride and excellent build quality."}
        />

        <TestimonialCard
          name={"Sarah Connor"}
          feedback={
            "Amazing service! They helped me pick the perfect bike for my long commutes."
          }
        />

        <TestimonialCard
          name={"James Smith"}
          feedback={"I love my new bike! Lightweight, stylish, and performs like a dream."}
        />

       
      </section>
    </div>
  );
};

const TestimonialCard = ({ name, feedback }) => (
  <article>
    <img
      src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
      alt="Customer"
    />
    <h4>{name}</h4>
    <p>{feedback}</p>
  </article>
);

export default Testimonial;
