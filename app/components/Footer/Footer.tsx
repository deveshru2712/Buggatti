import {
  footerList_four,
  footerList_legal,
  footerList_one,
  footerList_three,
  footerList_two,
} from "../../../constants";

const Footer = () => {
  return (
    <div className="bg-neutral-800/50 px-4 py-24 text-white md:px-8 lg:px-12">
      <div className="font-family-mono grid grid-cols-2 items-start justify-around gap-4 md:grid-cols-4">
        <div className="flex flex-col space-y-2">
          <span className="text-neutral-500">HYPER SPORTS CAR</span>
          <ul className="flex flex-col gap-1">
            {footerList_one.map((elem) => (
              <li key={elem.id} className="text-sm">
                {elem.text.toUpperCase()}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col space-y-2">
          <span className="text-neutral-500">LA MARQUE</span>
          <ul className="flex flex-col gap-1">
            {footerList_two.map((elem) => (
              <li key={elem.id} className="text-sm">
                {elem.text.toUpperCase()}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col space-y-2">
          <span className="text-neutral-500">LIFESTYLE</span>
          <ul className="flex flex-col gap-1">
            {footerList_three.map((elem) => (
              <li key={elem.id} className="text-sm">
                {elem.text.toUpperCase()}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col space-y-2">
          <span className="text-neutral-500">CUSTOMER SERVICE</span>
          <ul className="flex flex-col gap-1">
            {footerList_four.map((elem) => (
              <li key={elem.id} className="text-sm">
                {elem.text.toUpperCase()}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="font-family-mono mt-12 grid grid-cols-3 gap-5 ">
        <div className="flex flex-col gap-2 col-span-2">
          <h2>© 2025 BUGATTI Automobiles S.A.S.</h2>
          <div className="overflow-x-auto">
            <ul className="flex flex-wrap items-center gap-x-4 gap-y-2">
              {footerList_legal.map((legal) => (
                <li key={legal.id} className="text-sm whitespace-nowrap">
                  {legal.text}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col">
          <h2>Language</h2>
          <ul className="mt-2 flex gap-4">
            <li className="text-neutral-500">English</li>
            <li>French</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
