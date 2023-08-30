import { Fragment, useState } from "react";
import { Dialog, Disclosure, Menu, Transition } from "@headlessui/react";
import { useSelector } from "react-redux";
import HotelCard from "../components/HotelCard";
import places from "../data/places";
import { motion } from "framer-motion";
import { useEffect } from "react";

const sortOptions = [
  { id: "1", name: "Price: Low to High", current: false },
  { id: "2", name: "Price: High to Low", current: false },
];
const filters = [
  {
    id: "price",
    name: "Price Per Night",
    options: [
      { value: "₹ 0 - ₹ 2000", label: "₹ 0 - ₹ 2000", checked: false },
      { value: "₹ 2000 - ₹ 3500", label: "₹ 2000 - ₹ 3500", checked: false },
      { value: "₹ 3500 - ₹ 7500", label: "₹ 3500 - ₹ 7500", checked: false },
      { value: "₹ 7500 - ₹ 11500", label: "₹ 7500 - ₹ 11500", checked: false },
      {
        value: "₹ 11500 - ₹ 15000",
        label: "₹ 11500 - ₹ 15000",
        checked: false,
      },
      {
        value: "₹ 15000 - ₹ 30000",
        label: "₹ 15000 - ₹ 30000",
        checked: false,
      },
    ],
  },
  {
    id: "star",
    name: "Star Category",
    options: [
      { value: "5 Star", label: "5 Star", checked: false },
      { value: "4 Star", label: "4 Star", checked: false },
      { value: "3 Star", label: "3 Star", checked: false },
    ],
  },
  {
    id: "PropertyType",
    name: "Property Type",
    options: [
      { value: "hotel", label: "Hotel", checked: false },
      { value: "Apartment", label: "Apartment", checked: false },
      { value: "Villa", label: "Villa", checked: false },
      { value: "HomeStay", label: "Home Stay", checked: false },
      { value: "Hostel", label: "Hostel", checked: false },
      { value: "GuestHouse", label: "Guest House", checked: false },
    ],
  },
];
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const HotelsList = () => {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const search = useSelector((state) => state.search);
  const [hotels, setHotels] = useState(places);

  const handleSortFilter = (id) => {
    var hotels = places;
    if (id === "1") {
      hotels = hotels.filter((place) => search.location === place.placeName);
      hotels[0].hotels.sort(
        (a, b) => parseFloat(a.amount) - parseFloat(b.amount)
      );
    }
    if (id === "2") {
      hotels = hotels.filter((place) => search.location === place.placeName);
      hotels[0].hotels.sort(
        (a, b) => parseFloat(b.amount) - parseFloat(a.amount)
      );
    }
    sortOptions.forEach((option) => {
      if (option.id === id) option.current = true;
      else option.current = false;
    });
    setHotels(hotels);
  };
  useEffect(() => {
    handleSortFilter("0");
  }, [search]);
  return (
    <>
      <div className="bg-white">
        <div>
          <Transition.Root show={mobileFiltersOpen} as={Fragment}>
            <Dialog
              as="div"
              className="relative z-40 lg:hidden"
              onClose={setMobileFiltersOpen}
            >
              <Transition.Child
                as={Fragment}
                enter="transition-opacity ease-linear duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity ease-linear duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="fixed inset-0 bg-black bg-opacity-25" />
              </Transition.Child>

              <div className="fixed inset-0 z-40 flex">
                <Transition.Child
                  as={Fragment}
                  enter="transition ease-in-out duration-300 transform"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transition ease-in-out duration-300 transform"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
                    <div className="flex items-center justify-between px-4">
                      <h2 className="text-lg font-medium text-gray-900">
                        Filters
                      </h2>
                      <button
                        type="button"
                        className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                        onClick={() => setMobileFiltersOpen(false)}
                      >
                        <span className="sr-only">Close menu</span>
                        <span
                          className="material-symbols-outlined block h-6 w-6"
                          aria-hidden="true"
                        >
                          close
                        </span>
                      </button>
                    </div>

                    {/* Filters */}
                    <form className="mt-10 border-t border-gray-200">
                      <h3 className="sr-only">Categories</h3>
                      {filters.map((section) => (
                        <Disclosure
                          as="div"
                          key={section.id}
                          className="border-t border-gray-200 px-4 py-6"
                        >
                          {({ open }) => (
                            <>
                              <h3 className="-mx-2 -my-3 flow-root">
                                <Disclosure.Button className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                                  <span className="font-medium text-gray-900">
                                    {section.name}
                                  </span>
                                  <span className="ml-6 flex items-center">
                                    {open ? (
                                      <span className="material-symbols-outlined h-5 w-5">
                                        remove
                                      </span>
                                    ) : (
                                      <span className="material-symbols-outlined h-5 w-5">
                                        add
                                      </span>
                                    )}
                                  </span>
                                </Disclosure.Button>
                              </h3>
                              <Disclosure.Panel className="pt-6">
                                <div className="space-y-6">
                                  {section.options.map((option, optionIdx) => (
                                    <div
                                      key={option.value}
                                      className="flex items-center"
                                    >
                                      <input
                                        id={`filter-mobile-${section.id}-${optionIdx}`}
                                        name={`${section.id}[]`}
                                        defaultValue={option.value}
                                        type="checkbox"
                                        defaultChecked={option.checked}
                                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                      />
                                      <label
                                        htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                                        className="ml-3 min-w-0 flex-1 text-gray-500"
                                      >
                                        {option.label}
                                      </label>
                                    </div>
                                  ))}
                                </div>
                              </Disclosure.Panel>
                            </>
                          )}
                        </Disclosure>
                      ))}
                    </form>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </Dialog>
          </Transition.Root>
          {search.location &&
          search.checkIn &&
          search.checkOut &&
          search.guests ? (
            <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-72 sm:mt-0">
              <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-24">
                <h1 className="text-xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Showing Properties in {search.location}
                </h1>

                <div className="flex items-center">
                  <Menu as="div" className="relative inline-block text-left">
                    <div>
                      <Menu.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                        Sort
                        <span className="material-symbols-outlined -mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500">
                          expand_more
                        </span>
                      </Menu.Button>
                    </div>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="py-1">
                          {sortOptions.map((option) => (
                            <Menu.Item key={option.id}>
                              {({ active }) => (
                                <p
                                  onClick={() => handleSortFilter(option.id)}
                                  className={classNames(
                                    option.current
                                      ? "font-medium text-gray-900"
                                      : "text-gray-500",
                                    active ? "bg-gray-100" : "",
                                    "block px-4 py-2 text-sm cursor-pointer"
                                  )}
                                >
                                  {option.name}
                                </p>
                              )}
                            </Menu.Item>
                          ))}
                        </div>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                  <button
                    type="button"
                    className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
                    onClick={() => setMobileFiltersOpen(true)}
                  >
                    <span className="sr-only">Filters</span>
                    <span className="material-symbols-outlined h-5 w-5">
                      filter_alt
                    </span>
                  </button>
                </div>
              </div>

              <section
                aria-labelledby="products-heading"
                className="pb-24 pt-6"
              >
                <h2 id="products-heading" className="sr-only">
                  Products
                </h2>
                <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
                  {/* Filters */}
                  <form className="hidden lg:block">
                    <h3 className="text-lg font-bold">Select Filters</h3>
                    {filters.map((section) => (
                      <Disclosure
                        as="div"
                        defaultOpen="true"
                        key={section.id}
                        className="border-b border-gray-200 py-6"
                      >
                        {({ open }) => (
                          <>
                            <h3 className="-my-3 flow-root">
                              <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                                <span className="font-medium text-gray-900">
                                  {section.name}
                                </span>
                                <span className="ml-6 flex items-center">
                                  {open ? (
                                    <span className="material-symbols-outlined h-5 w-5">
                                      remove
                                    </span>
                                  ) : (
                                    <span className="material-symbols-outlined h-5 w-5">
                                      add
                                    </span>
                                  )}
                                </span>
                              </Disclosure.Button>
                            </h3>
                            <Disclosure.Panel className="pt-6">
                              <div className="space-y-4">
                                {section.options.map((option, optionIdx) => (
                                  <div
                                    key={option.value}
                                    className="flex items-center"
                                  >
                                    <input
                                      id={`filter-${section.id}-${optionIdx}`}
                                      name={`${section.id}[]`}
                                      defaultValue={option.value}
                                      type="checkbox"
                                      defaultChecked={option.checked}
                                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                    />
                                    <label
                                      htmlFor={`filter-${section.id}-${optionIdx}`}
                                      className="ml-3 text-sm text-gray-600"
                                    >
                                      {option.label}
                                    </label>
                                  </div>
                                ))}
                              </div>
                            </Disclosure.Panel>
                          </>
                        )}
                      </Disclosure>
                    ))}
                  </form>
                  <motion.div layout className="lg:col-span-3">
                    {hotels
                      .filter((place) => search.location === place.placeName)
                      .map((place) =>
                        place.hotels.map((hotel) => {
                          return <HotelCard hotel={hotel} key={hotel.id} />;
                        })
                      )}
                  </motion.div>
                </div>
              </section>
            </main>
          ) : (
            <h1 className="text-center mt-10 text-lg font-bold text-stone-300">
              No Properties Found
            </h1>
          )}
        </div>
      </div>
    </>
  );
};
export default HotelsList;
