export default function Download() {
    return (
        <div className="max-w-full md:max-w-screen-md mx-auto px-8 flex flex-col gap-8">
            <div className="text-center">
                <h1 className="text-2xl font-bold">
                    Download My Resume
                </h1>
            </div>  
            <div className="flex justify-between sm:justify-center sm:gap-8">
                <a href="/assets/resume/dutch.png" download="dutch.png" className="btn btn-primary btn-shadow">Dutch</a>
                <a href="/assets/resume/english.png" download="english.png" className="btn btn-primary btn-shadow">English</a>
            </div>
        </div>
    )
}
