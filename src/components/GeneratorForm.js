import React from "react";
import '../styles/generatorForm.css'


class GeneratorForm extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {

        const { handleChange, handleClick, formData } = this.props;

        return (
            <form>
                <div className="input--container">
                    <input onChange={(e) => handleChange(e)}
                        name="upperText"
                        value={formData.upperText}
                        id="upper"
                        className="generator-form--input"
                        type="text"
                        placeholder="UPPER TEXT">
                    </input>
                    <input
                        name="lowerText"
                        value={formData.lowerText}
                        id="lower"
                        onChange={(e) => handleChange(e)}
                        className="generator-form--input"
                        type="text"
                        placeholder="LOWER TEXT">
                    </input>
                </div>
                <button
                    onClick={handleClick}
                    className="generator-form--btn "> Get a new meme image
                </button>
            </form>
        )
    }
}

export default GeneratorForm;