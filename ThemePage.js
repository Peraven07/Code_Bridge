import React, { useEffect } from "react";
import { connect } from "react-redux";
import {Link, useHistory } from "react-router-dom";
import VisualEditorSelection from "../../assets/media/Visual_editor_PR.png";
import VEThemeSelection from "../../assets/media/VE_baseTheme_select.png";
import VECustomize from "../../assets/media/Customize_Theme.png";
import ThemeDownload from "../../assets/media/ThemeDownload.png";
import ThemeCompare from "../../assets/media/ThemeCompare.png";
import NoCustomTheme1 from "../../assets/media/NoCustomTheme1.png";
import YesCustomTheme from "../../assets/media/YesCustomTheme.png";

const ThemePage = (props) => {
    const history = useHistory();
    useEffect(() => {}, []);

    return (
        
        <div className="col-12 flex flex-column align-items-center">
            <div className="card w-10 md-6">
                <h3 className="text-center">Code Bridge Theming with PrimeReact</h3>
                <h3 className="m-0 font-italic">Go to PrimeReact : <a href="https://primereact.org/" class="m-0 font-italic text-pink-400 hover:text-pink-200">https://primereact.org/</a></h3>
                <h3>1. Under Theming option, select the Visual Editor</h3>
                <p><div className="w-12 flex flex-column align-items-center p-3">
                    <img src={VisualEditorSelection} alt="VEselection image" className="h-20rem" role="VisualEditorSelection-image" />
                </div></p>
                <h3>2. Choose any suitable theme for your website theme.</h3>
                <p><div className="w-12 flex flex-column align-items-center p-3">
                    <img src={VEThemeSelection} alt="VEThemeselection image" className="h-25rem" role="VEThemeselection-image" />
                </div></p>
                <h3>3. Customize the theme on your preferences.</h3>
                <p><div className="w-auto flex flex-column align-items-center p-3">
                    <img src={VECustomize} alt="VECustomize image" className="h-25rem" role="VECustomize-image" />
                </div></p>
                <h3>4. Once done, click the download button on the top to get the customize theme.</h3>
                <p><div className="w-auto flex flex-column align-items-center p-3">
                    <img src={ThemeDownload } alt="ThemeDownload image" className="h-25rem" role="ThemeDownload-image" />
                </div></p>
                <h3>5. Once download, open the downloaded theme.css in Visual Studio Code</h3>
                <p><div className="w-auto flex flex-column align-items-center p-3">
                    <img src={ThemeCompare } alt="ThemeCompare image" className="h-25rem" role="ThemeCompare-image" />
                    <p className="m-0 font-bold font-italic text-pink-400 ">Note: Before change/replace the theme.css, compare the theme.css with the previous version of the .css </p>
                </div></p>
                <h3>6. Implementation of Customize Theme on Website</h3>
                <p><div className="w-auto flex flex-column align-items-center p-3">
                    <img src={NoCustomTheme1 } alt="NoCustomTheme image" className="h-20rem" role="NoCustomTheme-image" />
                    <p className="m-0 p-2">Before Apply Customize Theme</p>
                    <img src={YesCustomTheme } alt="YesCustomTheme image" className="h-18rem" role="YesCustomTheme-image" />
                    <p className="m-0 p-2">After Apply Customize Theme</p>
                </div></p>
            </div>
        </div>
    );
};
const mapState = (state) => {
    //
    return {};
};
const mapDispatch = (dispatch) => ({
    //
});

export default connect(mapState, mapDispatch)(ThemePage);
