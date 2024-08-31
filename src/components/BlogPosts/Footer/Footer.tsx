const Footer = () => {
  return (
    <footer className="mb-6">
      <div className="flex items-center gap-10 bg-lime-100 pt-6 pb-6 mb-6">
        <div className="flex-shrink-0">
          <img
            src="./src/assets/images/greenshop-logo.png"
            alt="GreenShop Logo"
            className="w-auto h-12 w-[150px] h-[34px] ps-8"
          />
        </div>

        <div className="flex gap-10">
          <div className="flex items-center space-x-2">
            <img
              src="./src/assets/images/location.png"
              alt="Location Icon"
              className="w-[20px] h-[20px]"
            />
            <p>70 West Buckingham Ave. Farmingdale, NY 11735</p>
          </div>

          <div className="flex items-center space-x-2">
            <img
              src="./src/assets/images/Message.png"
              alt="Message Icon"
              className="w-[20px] h-[20px]"
            />
            <p>contact@greenshop.com</p>
          </div>

          <div className="flex items-center space-x-2">
            <img
              src="./src/assets/images/calling.png"
              alt="Calling Icon"
              className="w-[20px] h-[20px]"
            />
            <p>+88 01911 717 490</p>
          </div>
        </div>
      </div>

      <div className="flex gap-[100px]">
        <div className="ps-10">
          <h3 className="font-bold">Categories</h3>
          <div>
            <a className="text-gray-600 hover:text-green-600" href="">
              House Plants
            </a>
          </div>
          <div>
            <a className="text-gray-600 hover:text-green-600" href="">
              Potter Plants
            </a>
          </div>
          <div>
            <a className="text-gray-600 hover:text-green-600" href="">
              Rare Plants
            </a>
          </div>
        </div>

        <div>
          <div className="mb-6">
            <h3 className="font-bold mb-2">Social Media</h3>
            <div className="flex gap-5">
              <a href="">
                <img src="./src/assets/images/Facebook.png" alt="Facebook" />
              </a>
              <a href="">
                <img src="./src/assets/images/Instagram.png" alt="Instagram" />
              </a>
              <a href="">
                <img src="./src/assets/images/Twitter.png" alt="Twitter" />
              </a>
              <a href="">
                <img src="./src/assets/images/Linkedin.png" alt="LinkedIn" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="font-bold">We accept</h3>
            <div className="flex gap-5 items-center">
              <a href="">
                <img
                  className="w-[60px] h-auto"
                  src="./src/assets/images/Paypal.png"
                  alt="Paypal"
                />
              </a>
              <a href="">
                <img
                  className="w-[40px] h-auto"
                  src="./src/assets/images/Mastercard.png"
                  alt="Mastercard"
                />
              </a>
              <a href="">
                <img
                  className="w-[60px] h-auto"
                  src="./src/assets/images/Visa.png"
                  alt="Visa"
                />
              </a>
            </div>
          </div>
        </div>

        <div>
          <img
            className="w-[500px] h-[140px]"
            src="./src/assets/images/vine.jpg"
            alt="Vine"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
