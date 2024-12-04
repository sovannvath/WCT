function Card() {
    return (
      <div className="p-4">
        <div className="w-64 h-32 bg-black text-white rounded-lg shadow-lg flex items-center justify-center">
          Box Content
        </div>
        <div>
          <button className="bg-blue-400 text-white p-2 rounded-lg shadow-lg">
            View Post
          </button>
          <h1 className="font-bold mt-2">Alien has come to our Planet.</h1>
          <p className="text-gray-600">Date: 01.03.2028</p>
          <img
            src="img_Picture.jpg"
            alt="A representation of the alien"
            className="w-64 rounded-lg "
          />
        </div>
      </div>
    );
  }
  export default Card;
  