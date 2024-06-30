import Card from "./skillcard";

export default function Skills() {
    const skills = [
        {
            Name: "Html",
            progress: 80
        },
        {
            Name: "Css",
            progress: 70
        },
        {
            Name: "Php",
            progress: 50
        },
        {
            Name: "Javascript / Typescript",
            progress: 50
        },
        {
            Name: "C# (.Net Framework)",
            progress: 40
        },
        {
            Name: "C# (Unity)",
            progress: 40
        },
        {
            Name: "NextJs",
            progress: 50
        },
        {
            Name: "Tailwind Css",
            progress: 70
        },
        {
            Name: "MySql",
            progress: 80
        },
    ]
    return (
        <div className="max-w-screen-lg mx-auto">
            <div className="text-center">
                <h1 className="text-4xl font-extrabold">Skills</h1>
            </div>
            <div className="flex flex-wrap justify-evenly gap-6 p-4">
                {/* List of skills: Html, Css, php, js, ts, c#(.net framework), c#(unity), nextjs, react, tailwindcss, mysql */}
                {skills.map((content: any, index: any) => (
                    <Card 
                    Title={content.Name}
                    Progress={content.progress}
                    key={index}
                    />
                ))}
            </div>
        </div>
    )
}