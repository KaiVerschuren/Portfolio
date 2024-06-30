import Image from "next/image";
import Placeholder from "@/assets/img/maurits.jpg";

import Link from "next/link";

import {
  PhoneIcon,
  AtSymbolIcon,
  GlobeEuropeAfricaIcon,
} from "@heroicons/react/24/outline";

export default function Hero() {
  return (
    <div className="pt-28 mb-16">
      <div className="grid place-items-center">
        <div className="flex flex-col-reverse md:flex-row gap-8 md:gap-32 items-center">
          <div>
            <h1 className="text-2xl lg:text-4xl font-black">Kai Verschuren</h1>
            <ul className="text-base-100 text-base lg:text-lg">
              <li className="flex items-center gap-4">
                <PhoneIcon className="size-4 md:size-6 text-base-content"></PhoneIcon><Link className="hover:underline" href={"tel:+31 06 17003624"}>+31 06 17003624</Link>
              </li>
              <li className="flex items-center gap-4">
                <AtSymbolIcon className="size-4 md:size-6 text-base-content"></AtSymbolIcon><Link className="hover:underline" href={"mailto:verschurenkai@gmail.com"}>(Personal)
                  verschurenkai@gmail.com</Link>
              </li>
              <li className="flex items-center gap-4">
                <AtSymbolIcon className="size-4 md:size-6 text-base-content"></AtSymbolIcon><Link className="hover:underline" href={"mailto:91733@roc-teraa.nl"}>(School)
                  91733@roc-teraa.nl</Link>
              </li>
              <li className="flex items-center gap-4">
                <GlobeEuropeAfricaIcon className="size-4 md:size-6 text-base-content"></GlobeEuropeAfricaIcon>
                <Link className="hover:underline" target="_blank" href={"http://maps.google.com/?q=derips"}>De Rips</Link>
              </li>
            </ul>
          </div>
          <Image
            src={Placeholder}
            alt="Placeholder"
            className="max-w-48 xs:max-w-64 lg:max-w-xs rounded-lg shadow-xl"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}
