import Card from "./card";

export default function Studies() {
    return (
        <div className="">
            <div className="text-center">
                <h2 className="text-4xl font-bold">Studies</h2>
            </div>
            <div className="mt-8">
                <div className="flex flex-wrap justify-center max-w-screen-xl mx-auto pb-32 gap-4">
                    <div className="mb-24 lg:mb-0 flex-1">
                        <Card
                            Title="Mbo Software Development"
                            Niveau="Niveau 4"
                            NiveauOrientation="end"
                            School="Roc Ter AA, Helmond"
                            Time="2023 - Present"
                            Dropdown1="Base Subjects"
                            Dropdown2="IT Subjects"
                            Dropdown1Content={["English", "Dutch", "European and International Orientation", "Mathematics"]}
                            Dropdown2Content={["Webdevelopment", "Application programming", "Embedded systems", "IT Skills and IT Essentials"]}
                        />
                    </div>
                    <div className="hidden xl:divider xl:divider-secondary xl:divider-horizontal "></div>
                    <Card
                        Title="Vmbo Secondary Vocational"
                        Niveau="Kader"
                        NiveauOrientation="end"
                        School="Metameer, Stevensbeek"
                        Time="2019 - 2023"
                        Dropdown1="Base Subjects"
                        Dropdown2="Practical Subjects"
                        // Dutch English Physics Mathematics Physical Education
                        Dropdown1Content={["Dutch", "English", "Physics", "Mathematics", "Physical Education"]}
                        Dropdown2Content={["Metalworking", "Electrical Engineering", "EPlumbing", "3D drawing in Solidworks"]}
                    />
                </div>
            </div>
        </div>
    );
}
