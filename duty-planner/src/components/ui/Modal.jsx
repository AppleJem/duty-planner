import { useEffect, useState } from "react"

import LoadingSpinner from "./LoadingSpinner";

function Modal(props) {
    const [loading, setLoading] = useState(true);
    const messageLink = "https://t.me/LegionManpowerApp/5";
    const shortMessageLink = messageLink.slice(13);
    useEffect(() => {
        const script = document.createElement("script");

        document.getElementById('telegram-embed-container').appendChild(script);
        script.onload = function () {
            setLoading(false);
        }
        script.src = "https://telegram.org/js/telegram-widget.js?22";
        script.async = true;
        //simply copy the message link and put in this attribute
        script.setAttribute("data-telegram-post", shortMessageLink);
        script.setAttribute("data-dark", "1")


    }, [])


    return <div id="defaultModal" tabIndex="-1" aria-hidden="true" className="fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] md:h-full backdrop-blur-sm backdrop-brightness-50">
        <div className="relative w-full h-full max-w-2xl md:h-auto">
            {/* Modal content */}
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                {/* Modal header */}
                <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                        Release Notes
                    </h3>
                    <button onClick={props.onClose} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="defaultModal">
                        <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        <span className="sr-only">Close modal</span>
                    </button>
                </div>
                {/* Modal body */}
                <div className="p-6 space-y-6" id="telegram-embed-container">
                    {loading ? <LoadingSpinner className="flex justify-center" /> : null}
                </div>
                {/* Modal footer */}
                <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                    <button data-modal-hide="defaultModal" type="button" onClick={props.onClose}
                        className="text-gray-500 bg-white hover:bg-gray-100 hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-blue-300 
                        rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5  focus:z-10 
                        dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">
                        Close
                    </button>
                    <button data-modal-hide="defaultModal" type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        <a href="https://t.me/LegionManpowerApp/4" target="_blank">Ask Questions</a>
                    </button>

                </div>
            </div>
        </div>
    </div >
}

export default Modal