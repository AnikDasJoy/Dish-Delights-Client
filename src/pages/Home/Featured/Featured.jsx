import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg"
import './Featured.css';
const Featured = () => {
    return (
        <div className="featured-item bg-fixed text-white pt-8 my-20">
            <SectionTitle subHeading='check it out' heading='Featured Item'></SectionTitle>
            <div className="md:flex justify-center items-center pb-20 pt-12 px-36 bg-slate-500 bg-opacity-70">
                <div >
                    <img src={featuredImg} alt="" />
                </div>
                <div className="md:ml-10">
                    <p>April 20, 2024</p>
                    <p className="uppercase">Where can I get some?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore amet explicabo perspiciatis, debitis vel iure harum similique officia, beatae quas quae est tempore eius distinctio suscipit, aperiam iste architecto qui.</p>
                    <button className="btn btn-outline mt-2 border-0 border-b-4 uppercase">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;