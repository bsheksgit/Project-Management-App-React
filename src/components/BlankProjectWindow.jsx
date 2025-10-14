export default function BlankProjectWindow(){
    return(
        <div className="flex flex-col items-center justify-center h-full bg-gray-200">
            <div className="flex flex-col items-center space-y-6 p-8 rounded-lg bg-white shadow-sm">
                <p className="text-2xl font-semibold text-gray-700">No project selected!</p>
                <p className="text-gray-500">Select a project or get started with a new one</p>
                <button className="mt-4 px-6 py-3 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-colors shadow-sm hover:shadow-md">
                    + Create a new project
                </button>
            </div>
        </div>
    );
}