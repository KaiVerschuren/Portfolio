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
    <div className="min-h-screen pt-28 ">
      <div className="grid place-items-center">
        <div className="flex flex-col-reverse md:flex-row gap-32 items-center">
          <div className="">
            <h1 className="text-4xl font-black">Kai Verschuren</h1>
            <div className="divider divider-primary text-xl">Contact</div>
            <ul>
              <li className="flex items-center gap-4 text-lg">
                <PhoneIcon className="size-6"></PhoneIcon><Link className="hover:underline" href={"tel:+31 06 17003624"}>+31 06 17003624</Link>
              </li>
              <li className="flex items-center gap-4 text-lg">
                <AtSymbolIcon className="size-6"></AtSymbolIcon><Link className="hover:underline" href={"mailto:verschurenkai@gmail.com"}>(Personal)
                verschurenkai@gmail.com</Link>
              </li>
              <li className="flex items-center gap-4 text-lg">
                <AtSymbolIcon className="size-6"></AtSymbolIcon><Link className="hover:underline" href={"mailto:91733@roc-teraa.nl"}>(School)
                91733@roc-teraa.nl</Link>
              </li>
              <li className="flex items-center gap-4 text-lg">
                <GlobeEuropeAfricaIcon className="size-6"></GlobeEuropeAfricaIcon>
                <Link className="hover:underline" target="_blank" href={"http://maps.google.com/?q=derips"}>De Rips</Link>
              </li>
            </ul>
          </div>
          <Image
            className="max-w-xs rounded-lg shadow-xl"
            src={Placeholder}
            alt="Placeholder"
          />
        </div>
      </div>
    </div>
  );
}
