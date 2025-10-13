export default function AddProjectPage(){
    return(
        <div className="h-full bg-gray-200 p-6">
            <div className="flex justify-end space-x-4 mb-8">
                <button className="px-4 py-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-md transition-colors">Cancel</button>
                <button className="px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-colors shadow-sm hover:shadow-md">Save</button>
            </div>
            <div className="flex flex-col items-center justify-center mt-12 space-y-8">
            <p className="text-2xl font-semibold text-gray-700 mb-6">Enter Basic Project Details</p>
            </div>
            <div className="flex flex-col items-center justify-center mt-12 space-y-8">
            <div className="flex items-center space-x-4 w-2/3">
                <label className="w-1/4 text-right font-medium">Title:</label>
                <input 
                    type="text" 
                    className="w-3/4 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 hover:border-gray-400 transition-colors"
                />
            </div>
            <div className="flex items-center space-x-4 w-2/3">
                <label className="w-1/4 text-right font-medium">Description:</label>
                <input 
                    type="text" 
                    className="w-3/4 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 hover:border-gray-400 transition-colors"
                />
            </div>
            <div className="flex items-center space-x-4 w-2/3">
                <label className="w-1/4 text-right font-medium">Due Date:</label>
                <input 
                    type="date" 
                    className="w-3/4 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 hover:border-gray-400 transition-colors"
                />
            </div>
            </div>
        </div>
    );
}