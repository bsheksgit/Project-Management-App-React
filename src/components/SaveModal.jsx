import { createPortal } from 'react-dom';

export default function SaveModal({ mainMessage = "Changes Saved", messageDescription = "Your changes have been saved successfully.",handleCloseModal }) {
    return createPortal(
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center animate-[fade-in_0.3s_ease-out] z-50">
            <dialog open className="relative w-[500px] bg-white rounded-lg p-6 shadow-xl animate-[scale-in_0.3s_ease-out] z-50">
                <h2 className="text-2xl font-semibold text-gray-700 mb-4">{mainMessage}</h2>
                <p className="text-gray-600 mb-8">{messageDescription}</p>
                <form methood="dialog" className="flex justify-end">
                    <button 
                    className="px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-colors shadow-sm hover:shadow-md"
                    onClick={handleCloseModal}>
                        Close
                    </button>
                </form>
            </dialog>
        </div>,
        document.getElementById("modal-root")
    );

}