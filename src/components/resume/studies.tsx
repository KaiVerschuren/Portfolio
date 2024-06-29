export default function Studies() {
    return (
        <div className="">
            <div className="text-center">
                <h2 className="text-4xl font-bold">Studies</h2>
            </div>
            <div className="mt-8">
                <div className="flex flex-wrap justify-center max-w-screen-xl mx-auto pb-32 gap-4">
                    <div className="flex-1">
                        <div className="flex flex-wrap justify-between items-center gap-4">
                            <h3 className="text-2xl font-semibold indicator">Mbo Software Development <span className="indicator-item indicator-top indicator-start badge badge-secondary">Niveau 4</span></h3>
                           
                            <h3 className="text-lg font-semibold text-base-200">
                                2023 - Present
                            </h3>
                        </div>
                        <h3 className="text-md text-base-200">Roc Ter AA, Helmond </h3>
                        <div className="flex justify-between flex-wrap">
                            <div>
                                <div className="dropdown dropdown-hover">
                                    <div tabIndex={0} role="button" className="btn btn-ghost m-1">Base Subjects</div>
                                    <ul className="dropdown-content menu text-base-100 pl-8">
                                        <li className="whitespace-nowrap">English</li>
                                        <li className="whitespace-nowrap">Dutch</li>
                                        <li className="whitespace-nowrap">European and International Orientation</li>
                                        <li className="whitespace-nowrap">Mathematics</li>
                                    </ul>
                                </div>
                            </div>
                            <div>
                                <div className="dropdown dropdown-hover dropdown-bottom dropdown-end">
                                    <div tabIndex={0} role="button" className="btn btn-ghost m-1">IT Subjects</div>
                                    <ul className="dropdown-content menu text-base-100 pl-8">
                                        <li className="whitespace-nowrap">Webdevelopment</li>
                                        <li className="whitespace-nowrap">Application programming</li>
                                        <li className="whitespace-nowrap">Embedded systems</li>
                                        <li className="whitespace-nowrap">IT Skills en IT Essentials</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="hidden xl:divider xl:divider-secondary xl:divider-horizontal "></div>
                    <div className="flex-1">
                        <div className="flex flex-wrap justify-between items-center gap-4">
                        <h3 className="text-2xl font-semibold indicator">Vmbo Secondary Vocational <span className="indicator-item indicator-top indicator-end badge badge-secondary">Kader</span></h3>
                            <h3 className="text-lg font-semibold text-base-200">
                                2019 - 2023
                            </h3>
                        </div>
                        <h3 className="text-md text-base-200">Metameer, Stevensbeek</h3>
                        <div className="flex justify-between flex-wrap">
                            <div>
                                <div className="dropdown dropdown-hover">
                                    <div tabIndex={0} role="button" className="btn btn-ghost m-1">Base Subjects</div>
                                    <ul className="dropdown-content menu text-base-100 pl-8">
                                        <li className="whitespace-nowrap">Dutch</li>
                                        <li className="whitespace-nowrap">English</li>
                                        <li className="whitespace-nowrap">Physics</li>
                                        <li className="whitespace-nowrap">Mathematics</li>
                                        <li className="whitespace-nowrap">Physical Education</li>
                                    </ul>
                                </div>
                            </div>
                            <div>
                                <div className="dropdown dropdown-hover dropdown-end">
                                    <div tabIndex={0} role="button" className="btn btn-ghost m-1">Base Subjects</div>
                                    <ul className="dropdown-content menu text-base-100 pl-8 ">
                                        <li className="whitespace-nowrap">English</li>
                                        <li className="whitespace-nowrap">Dutch</li>
                                        <li className="whitespace-nowrap">European and International Orientation</li>
                                        <li className="whitespace-nowrap">Maths</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
