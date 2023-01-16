import React from "react";
import '../styles/generatorForm.css'


class GeneratorForm extends React.Component {

    render() {

        const { handleChange, handleClickGetNewImage, handleClickApplyTexts, formData } = this.props;

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
                <div class="input--container">
                    <button
                        onClick={handleClickGetNewImage}
                        className="generator-form--btn "> Get a new meme image
                    </button>
                    <button
                        id="apply-texts-button"
                        onClick={handleClickApplyTexts}
                        className="generator-form--btn ">Apply Texts
                    </button>
                </div>
            </form>
        )
    }
}

export default GeneratorForm;