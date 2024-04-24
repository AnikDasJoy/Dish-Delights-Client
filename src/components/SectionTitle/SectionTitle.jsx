const SectionTitle = ({ heading, subHeading }) => {
    return (
        <div className=" mt-4 mb-6 md:w-3/12 text-center mx-auto">
            <p className="text-orange-600 mb-2">-- {subHeading} --</p>
            <h3 className="font-semibold uppercase text-3xl border-y-4 py-4">{heading}</h3>
        </div>
    );
};

export default SectionTitle;