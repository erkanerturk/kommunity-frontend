import React from 'react';
import Slider from 'react-slick';
import { Img, Paragraph } from '@/components/ui';

const testimonials = [{
  company: 'Sel Co.',
  /* eslint-disable-next-line */
  imgSrc: 'data:image/jpeg;base64,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',
  name: 'Selman Kahya',
  /* eslint-disable-next-line */
  text: 'Lorem Ipsum is simply dummy text of the printing typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s',
}, {
  company: 'Vehl inc.',
  /* eslint-disable-next-line */
  imgSrc: 'data:image/jpeg;base64,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',
  name: 'Ali Mike',
  /* eslint-disable-next-line */
  text: 'Lorem Ipsum is simply dummy text of the printing typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s',
}];

const sliderSettings = {
  arrows: false,
  autoplay: true,
  autoplaySpeed: 4000,
  dots: true,
  dotsClass: 'slick-dots text-white',
  draggable: false,
  infinite: true,
};

const Testimonials = () => (
  <div>
    <Slider {...sliderSettings}>
      {testimonials.map((testimonial, index) => (
        <div key={index} className="text-center outline-none">
          <Img
            extraClassName="rounded-full mb-4 mx-auto w-18 h-18"
            src={testimonial.imgSrc}
          />
          <Paragraph extraClassName="font-bold text-white mb-1">
            {testimonial.name}
          </Paragraph>
          <Paragraph extraClassName="text-lightBlueGrey mb-6">
            {testimonial.company}
          </Paragraph>
          <Paragraph extraClassName="apost relative text-white w-8/12 mx-auto mb-10" type="xl">
            {testimonial.text}
          </Paragraph>
        </div>
      ))}
    </Slider>
  </div>
);

Testimonials.propTypes = {};

export default Testimonials;
