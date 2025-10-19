import { createPortal } from 'react-dom';

export default function DeleteModal({ mainMessage = "Changes Saved", messageDescription = "Your changes have been saved successfully.",handleDeleteProject, handleCloseDeleteModal }) {
    return createPortal(
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center animate-[fade-in_0.3s_ease-out] z-50">
            <dialog open className="relative w-[500px] bg-white rounded-lg p-6 shadow-xl animate-[scale-in_0.3s_ease-out] z-50">
                <h2 className="text-2xl font-semibold text-gray-700 mb-4">{mainMessage}</h2>
                <p className="text-gray-600 mb-8">{messageDescription}</p>
                <form method="dialog" className="flex justify-end space-x-4">
                    <button 
                    className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition-colors shadow-sm hover:shadow-md"
                    onClick={handleCloseDeleteModal}>
                        Cancel
                    </button>
                    <button 
                    className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors shadow-sm hover:shadow-md flex items-center gap-2"
                    onClick={handleDeleteProject}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                        Delete Project
                    </button>
                </form>
            </dialog>
        </div>,
        document.getElementById("modal-root")
    );
}