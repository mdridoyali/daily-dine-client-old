

// eslint-disable-next-line react/prop-types
const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="text-center mx-auto mb-10  space-y-2 w-[350px] md:w-[500px]">
            <p className="text-orange-400 border-b-2"> ---{subHeading}--- </p>
            <h2 className="text-4xl uppercase font-semibold border-b-2"> {heading} </h2>
        </div>
    );
};

export default SectionTitle;


