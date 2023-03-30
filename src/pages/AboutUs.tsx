import React from "react";
import CTAButton from "../atoms/CTAButton";
import CardItem from "../atoms/CardItem";
import Page from "../HOCs/Page";

const AboutUs = () => {
  return (
    <Page title="About Us">
      <div className="about-us">
        <section id="introduction">
          <h1>About Us</h1>
          <p>
            Welcome to Mantiques Sandusky, where we specialize in transforming
            old, discarded items into unique and beautiful pieces that will add
            character to any space.
          </p>
          <p>
            Our mission is to provide sustainable and eco-friendly products that
            will delight our customers and support our local community.
          </p>
          <p>
            We are passionate creators, operating in a space where vintage and
            modern intersect. This partnership that we have formed through our
            unique backgrounds and passionat energy. Mantiques Studio and
            Gallery is our retirement pursuit
          </p>
        </section>
        <section id="history">
          <div className="container">
            <h2>Our Story</h2>
            <p>Creators Mark and Kim bring a unique profile</p>
            <p>
              For several years, they have been using vintage buses, automotive,
              and farm equipment, as well as other found and reclaimed items to
              create unique artwork.
            </p>
            <p>
              Mark and Kim have an eye for finding beauty in the rustiest of
              items.
            </p>
            <p>
              Their flame was reignited when the two met and undertook their
              first joint project, the restoration of a 1968 Scotty Camper. They
              took this diamond in a rough dilapidated camper that Mark
              extracted from a field to a show-stopper. By the end of its
              restoration, the gem regained an original vintage exterior while
              it included a modern interior: granit countertops, acacia wood
              floors, and cherry cabinets, all repurposed. It captured attention
              nationally as the couple travelled for 30 days cross-country with
              it, pulled by a 1967 VW Double Cab that Mark painstakingly
              restored. It was on that trip that the two began to plan for the
              creation and execution of a business venture in their upcoming
              joint retirement. Within 6 months, that dream became Mantiques
              Studio and Gallery
            </p>
          </div>
        </section>
        <section id="team">
          <h2>Our Team</h2>
          <div className="container">
            <CardItem
              name="Kim Go"
              title="Founder"
              imgurl="../mantiques/assets/Antique_Door.png"
              key="Kim-Go"
              description={
                'Kim has a unique professional journey that began when she studied Fine Arts at Bowling Green State University. She spent the next 30 years working in healthcare and education, as both a Clinical and School Counselor. The ongoing joke between Kim\'s two grown sons for hears has been "Mom was an Art Major, you know." Kimberly has always been a visionary and driving force throughout her career. She always found ways to use her creativity, knowing that one day she would be free to create again.'
              }
            />
            <CardItem
              name="Mark Bowman"
              title="Founder"
              imgurl="../mantiques/assets/Antique_Door.png"
              key="Mark-Bowman"
              description={
                'Mark brings a passion for making old new with over 10 years of restoration of vintage vehicles of all makes and models, producing over 100 vehicles sold at Mecum and Barnett-Jackson Auctions around the United States. He specializes in vintage Volkswagens and is known by many in that circle as "The Volkswagen Guy." Prior to that, he owned and operated several businesses over the past thirty years, all of which thrived in his capable hands.'
              }
            />
          </div>
        </section>
        <section id="process">
          <h2>Our Process</h2>
          <div className="container">
            <CardItem
              imgurl="../mantiques/assets/Antique_Door.png"
              name="Step 1"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae tortor."
              key="step-1"
            />
            <CardItem
              imgurl="../mantiques/assets/Antique_Door.png"
              name="Step 2"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae tortor."
              key="step-2"
            />
            <CardItem
              imgurl="../mantiques/assets/Antique_Door.png"
              name="Step 3"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae tortor."
              key="step-3"
            />
          </div>
        </section>
        <section id="customers">
          <h2>Our Customers</h2>
          <div className="container">
            <CardItem
              imgurl="../mantiques/assets/Antique_Door.png"
              name="Pelican Steve"
              description="Mantiques did an amazing job at my home and I could not have asked for
              better results. Their craftsmanship is one of a kind."
              key="pelican-steve-review"
            />
            <CardItem
              imgurl="../mantiques/assets/Antique_Door.png"
              name="Max Conversion"
              description="Mantiques made it easy for me to find phenomenal art without having to
              compromise on price or beauty. Truly an excellent business."
              key="max-conversion-review"
            />
          </div>
        </section>
        <section id="conclusion">
          <h2>Join the Mantiques Movement Today!</h2>
          <div className="container">
            <p></p>
            <CTAButton text="Shop Now" url="products" />
          </div>
        </section>
      </div>
    </Page>
  );
};

export default AboutUs;
