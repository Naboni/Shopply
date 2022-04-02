import React, { useState } from "react";

function Order() {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [addressLine1, setAddressLine1] = useState("");
  const [addressLine2, setAddressLine2] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [postal, setPostal] = useState("");
  return (
    <div className="pt-10">
      <div className="h-screen bg-gray-100 pt-10">
        <div className="px-24 pt-10">
          <div className="grid grid-cols-2 gap-4 mx-auto">
            <div className="place-self-start">
              <form className="p-10 bg-white border border-gray-100 rounded-3xl shadow-sm">
                <label className="block mb-2" htmlFor="Emial">
                  Contact Information
                </label>
                <div className="px-1">
                  <input
                    className="my-3 rounded-lg p-2 px-4 border text-gray-800 border-gray-200 bg-white focus:outline-none"
                    placeholder="Email or Phone Number"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <label className="block mb-2" htmlFor="">
                  Shipping Address
                </label>
                <div className="px-1 mb-2">
                  <div>
                    <input
                      className="my-3 rounded-lg p-2 px-4 border text-gray-800 border-gray-200 bg-white focus:outline-none"
                      type="text"
                      placeholder="Fist Name"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                    <input
                      className="my-3 rounded-lg p-2 px-4 border text-gray-800 border-gray-200 bg-white focus:outline-none"
                      type="text"
                      placeholder="Last Name"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </div>
                  <input
                    className="w-full my-3 block rounded-lg p-2 px-4 border text-gray-800 border-gray-200 bg-white focus:outline-none"
                    type="text"
                    placeholder="Address Line 1"
                    value={addressLine1}
                    onChange={(e) => setAddressLine1(e.target.value)}
                  />
                  <input
                    className="w-full my-3 block rounded-lg p-2 px-4 border text-gray-800 border-gray-200 bg-white focus:outline-none"
                    type="text"
                    placeholder="Address Line 2"
                    value={addressLine2}
                    onChange={(e) => setAddressLine2(e.target.value)}
                  />
                  <input
                    className="w-full my-3 block rounded-lg p-2 px-4 border text-gray-800 border-gray-200 bg-white focus:outline-none"
                    type="text"
                    placeholder="City/Town"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                  />
                  <div className="flex items-center">
                    <div className="w-full pr-2">
                      <div className="w-full inline-block relative">
                        <svg
                          className="w-2 h-2 absolute top-0 right-0 m-4 pointer-events-none"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 412 232"
                        >
                          <path
                            d="M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z"
                            fill="#648299"
                            fillRule="nonzero"
                          />
                        </svg>
                        <select className="w-full border border-gray-300 rounded-lg text-gray-300 h-10 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none">
                          <option selected value="">
                            Country
                          </option>
                          <option value="usa">USA</option>
                          <option value="ethiopia">Ethiopia</option>
                          <option value="uk">UK</option>
                        </select>
                      </div>
                    </div>
                    <input
                      className="my-3 rounded-lg p-2 px-4 border text-gray-800 border-gray-200 bg-white focus:outline-none"
                      type="text"
                      placeholder="Postal/Zip"
                      value={postal}
                      onChange={(e) => setPostal(e.target.value)}
                    />
                  </div>
                </div>
                <div className="block">
                  <input type="checkbox" name="save" id="save" />
                  <span>Save this information for next time</span>
                </div>
              </form>
            </div>
            <div>
              <div className="p-10 bg-white border border-gray-100 rounded-3xl shadow-sm">
                <div className="flex">
                  <div className="relative aspect-square w-36">
                    <span className="absolute -right-2 -top-2 bg-red-300 rounded-full h-6 w-6 text-center text-white bg-gradient-to-r from-blue-600">
                      2
                    </span>
                    <img
                      className="rounded-lg w-full h-full object-cover"
                      src="https://cdn.pixabay.com/photo/2017/08/02/01/01/living-room-2569325_960_720.jpg"
                      alt="chair"
                    />
                  </div>
                  <div className="ml-8">
                    <h6 className="text-black mb-2">ONYX WOOD CHAIR</h6>
                    <p className="text-sm">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Aliquam gravida tortor quis libero luctus.
                    </p>
                  </div>
                  <div className="ml-8">$4,699.00</div>
                </div>
                <div className="w-full border-b border-gray-300 my-8"></div>
                <div className="flex">
                  <div className="relative aspect-square w-36">
                    <span className="absolute -right-2 -top-2 bg-red-300 rounded-full h-6 w-6 text-center text-white bg-gradient-to-r from-blue-600">
                      2
                    </span>
                    <img
                      className="rounded-lg w-full h-full object-cover"
                      src="https://cdn.pixabay.com/photo/2016/11/19/15/50/chair-1840011_960_720.jpg"
                      alt="chair"
                    />
                  </div>
                  <div className="ml-8">
                    <h6 className="text-black mb-2">ONYX WOOD CHAIR</h6>
                    <p className="text-sm">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Aliquam gravida tortor quis libero luctus.
                    </p>
                  </div>
                  <div className="ml-8">$4,699.00</div>
                </div>
                <div className="w-full border-b border-gray-300 my-8"></div>
                <div>
                  <div className="flex justify-between items-center">
                    <h4 className="uppercase text-gray-400">subtotal</h4>
                    <p>$9,398.00</p>
                  </div>
                  <div className="flex justify-between items-center">
                    <h4 className="uppercase text-gray-400">Shipping</h4>
                    <p>$50.00</p>
                  </div>
                </div>
                <div className="w-full border-b border-gray-300 my-8"></div>
                <div>
                  <div className="flex justify-between items-center">
                    <h4 className="uppercase text-gray-400">Totoal</h4>
                    <p>
                      <span className="text-gray-300">USD</span> $9,448.00
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <div className="uppercase text-gray-300">Return To Cart</div>
          </div>
          <div className="mt-5">
            <button className="px-6 py-2 uppercase rounded-full bg-black text-white">
              Complete Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Order;
