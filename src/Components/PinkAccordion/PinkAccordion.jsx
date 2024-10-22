import './pinkAccordion.css'

const PinkAccordion = ({ title, content, id, parentId }) => {
    return (
        <div className="accordion pinkAccordion__MainContainer" id={`pinkAccordion${id}`}>
            <div className="accordion-item pink__accordion-item">
                <h2 className="accordion-header">
                    <button
                        className="accordion-button pinkAccordion__accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#pinkCollapse${id}`}
                        aria-expanded="true"
                        aria-controls={`pinkCollapse${id}`}
                    >
                        {title}
                    </button>
                </h2>

                {/* Aquí añadimos el data-bs-parent */}
                <div id={`pinkCollapse${id}`} 
                     className="accordion-collapse collapse" 
                     data-bs-parent={`#${parentId}`}>
                    <div className="accordion-body">
                        <p className="pinkAccordion__Content">
                            {content}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PinkAccordion;
