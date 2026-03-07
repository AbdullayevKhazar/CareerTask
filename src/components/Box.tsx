const Box = ({ image, key, name, price } : {
    image : string ,
    key : number, 
    name :string , 
    price : number | string
}) => {
  return (
    <>
      <div className="max-w-sm rounded overflow-hidden shadow-lg p-4" key={key}>
        <img
          className="w-full h-48 object-cover"
          src={image}
          alt="Product Name"
        />

        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{name}</div>
          <p className="text-gray-700 text-base">
            Short description of the product goes here.
          </p>
        </div>

        <div className="px-6 pt-4 pb-2 flex justify-between items-center">
          <span className="text-lg font-semibold text-gray-900">${price}</span>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
};

export default Box;
