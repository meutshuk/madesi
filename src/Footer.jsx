export default function Footer() {
  return (
    <footer className="bg-gray-200 text-black py-5">
      <div className="container mx-auto text-sm md:text-xl  flex justify-center md:justify-between px-10">
        <div className="mb-4 ">
          <h4 className=" font-bold mb-4 text-center">Contact</h4>
          <div className="flex items-center mb-2">
            <span>
              Email:
              <a
                href="mailto:mngofederation@gmail.com"
                className="text-red-700 hover:underline mx-2"
              >
                mngofederation@gmail.com
              </a>
            </span>
          </div>
          <div className="flex items-center">
            <span>
              Phone:
              <a
                href="tel:+977 9840383815"
                className="text-red-700 hover:underline mx-2"
              >
                +977 9840383815
              </a>
            </span>
          </div>
        </div>

        {/* <div className="mb-4">
          <h4 className="text-xl font-bold mb-2">Follow Us</h4>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-blue-400"></a>
            <a href="#" className="hover:text-blue-400"></a>
            <a href="#" className="hover:text-blue-400"></a>
          </div>
        </div> */}
      </div>
    </footer>
  );
}
