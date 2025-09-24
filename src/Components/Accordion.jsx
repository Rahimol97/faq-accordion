import { useState } from "react";

const Accordion = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b  border-[hsl(240,13%,97%)] ">
            <div

                className="flex justify-between w-full p-3 text-left font-bold text-xs font-small  text-[hsl(292,52%,25%)] "
            >
                {title}
                <span className="cursor-pointer" onClick={() => setIsOpen(!isOpen)}>{isOpen ? (<img class="w-4  h-auto" src="/assets/images/icon-minus.svg" alt="My Image" />
                ) : (<img class="w-4  h-auto" src="/assets/images/icon-plus.svg" alt="My Image" />
                )}</span>
            </div>

            {isOpen && (
                <div className="p-3  text-xs font-semibold text-[hsl(292,16%,49%)]">{children}</div>
            )}
        </div>
    );
};

export default Accordion;
