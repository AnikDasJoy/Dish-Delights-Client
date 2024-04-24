const menuItem = ({ item }) => {
    const { name, image, price, recipe } = item;
    return (
        <div className="flex space-x-2">
            <img style={{ borderRadius: '200px 200px 100px 0' }} className="w-[100px] rounded" src={image} alt="" />
            <div >
                <h3 className="uppercase">{name}</h3>
                <p>{recipe}</p>
            </div>
            <p className="text-orange-600">${price}</p>
        </div>
    );
};

export default menuItem;