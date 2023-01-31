import { useState } from "react";

const Section = ({ title, description, isVisible, setIsVisible }) => {
    return (
        <div className="p-5 m-5 border border-black">
            <h1 className="text-bold text-2xl">{title}</h1>

            {isVisible ?
                (
                    <>
                        <button
                            className="cursor-pointer text-blue-800"
                            onClick={() => { setIsVisible(false) }}
                        >
                            Hide
                        </button>
                        <p className="text-gray-700">{description}</p>
                    </>
                )
                :
                (
                    <button
                        className="cursor-pointer text-blue-800"
                        onClick={() => { setIsVisible(true) }}
                    >
                        Show
                    </button>
                )
            }

        </div>
    )
}

const Instamart = () => {
    const [isVisibleSection, setIsVisibleSection] = useState(null);

    return (
        <div className="container">
            <h1 className="font-bold text-3xl p-5 m-5">Instamart</h1>
            <Section
                title={"About Instamart"}
                description={" Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker in "}
                setIsVisible={() => {
                    setIsVisibleSection(isVisibleSection === "about" ? false : "about")
                }}
                isVisible={isVisibleSection === "about"}
            />


            <Section
                title={"Details of Instamart"}
                description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker in"}
                setIsVisible={() => {
                    setIsVisibleSection(isVisibleSection === "detail" ? false : "detail")
                }}
                isVisible={isVisibleSection === "detail"}
            />






        </div>
    )
}

export default Instamart;