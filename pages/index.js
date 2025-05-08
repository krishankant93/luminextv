import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";
import { data } from '../data/constant'
import { benefitOne, benefitTwo } from "../components/data";
import Video from "../components/video";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Testimonials from "../components/testimonials";
import Cta from "../components/cta";
import Faq from "../components/faq";
import Products from "../components/products";
import PopupWidget from "../components/popupWidget";
const Home = () => {
  return (
    <>
      <Head>
           
        <title>LuminexTV -  Empowering Visions, Transforming Reality. </title>
        <meta
          name="description"
          content="Best LED TV in India - The future of TV is here with LuminexTV. Get smart led tv 32 inch and have a look at our innovative range of OLED & Nanocell 4K LG TV to experience stunning images and colours."
        />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <Navbar />
      <Hero />
      <div id="features"/>
      <SectionTitle
        pretitle="LuminexTV Benefits"
        title=" Why should you choose us">
          LuminexTV are the best LED TV in India. The future of TV is here with LuminexTV. Here are some of the benefits of LuminexTV.
      </SectionTitle>
      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />
      <div id="products"/>
      <SectionTitle
        pretitle="Products"
        title="Best versions of LuminexTV">
          Our Products are the best LED TV in India. we have a range of versions to choose from.
      </SectionTitle>
<div className=" w-full  flex flex-wrap justify-center scroll-m-24 gap-8 max-w-5xl px-5 md:px-10 mx-auto mt-8 " >
      {
        Object.keys(data).map((key, index) => {
          return <Products key={index} data={data[key]} />
        }
        )
      }
      </div>
      <SectionTitle
        pretitle="Watch a video"
        title=" Watch to experience  LuminexTV">
     Discover the Power of Video: Elevate Conversions, Engage Audiences, and Unleash the Potential of Your Product with LuminexTV
      </SectionTitle>
      <Video />
      <div id="testtimonial"/>
      <SectionTitle
        pretitle="Testimonials"
        title="Here's what our customers said">
       Building Trust, Inspiring Confidence: Hear from Our Valued Customers and Experience LuminexTV's Impactful Brilliance.
      </SectionTitle>
      <Testimonials />
      <div id="faq"/>
      <SectionTitle pretitle="FAQ" title="Frequently Asked Questions">
        Have a question? We've got answers.
      </SectionTitle>

      <Faq />
      {/* <Cta /> */}
      <Footer />
      <PopupWidget />
    </>
  );
}

export default Home;