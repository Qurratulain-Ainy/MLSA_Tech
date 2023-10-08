/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/MLSA.jpg";

const imageAltText = "Nature Image";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "Iam a second-year student at the COMSATS University Islamabad, Sahiwal Campus, where I am pursuing a bachelor's degree in computer science. I joined various communities on my campus with the goal of developing my technical and soft skills professionally. I have a passion for learning about technologies and how they are affecting society. I’m a Public Speaker, a community builder, and now a MLSA. Apart from that I have been creating content on Instagram as a side hobby. I'm in learning phase and still exploring about what I want from life and what life expects from me in return.";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "Public Speaking",
  "Leadership",
  "Hosting Events",
  "Community Building",
  "Communication",
  "Content Creator",
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "I'm passionate about learning new skills and using them to solve real-world problems";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
