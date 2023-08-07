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
        
        <div className="col-12 flex flex-column bg-blue-300 align-items-center">
            <div className="card w-10 my-6">
            <div className='w-1'><Link to='/dashboard'><div className='card mb-0 flex transition-colors transition-duration-100 bg-pink-500 hover:bg-pink-300 border-round font-bold flex align-items-center justify-content-center hover zoom' style={{ height: '2rem' }}><div className='text-900 font-big text-lg'>Back</div></div></Link></div>
                <h3>Code Bridge Theming with PrimeReact</h3>
                <p className="m-0 font-italic text-pink-500 hover:text-pink-700 text-xl">PrimeReact Access Link :"https://primereact.org/"</p>
                <p className="m-0">1. Under Theming option, select the Visual Editor </p>
                <p><div className="w-12 flex flex-column align-items-center">
                    <img src={VisualEditorSelection} alt="VEselection image" className="h-20rem" role="VisualEditorSelection-image" />
                </div></p>
                <p className="m-0">2. Choose any suitable theme for your website theme.</p>
                <p><div className="w-12 flex flex-column align-items-center">
                    <img src={VEThemeSelection} alt="VEThemeselection image" className="h-25rem" role="VEThemeselection-image" />
                </div></p>
                <p className="m-0">3. Customize the theme on your preferences.</p>
                <p><div className="w-12 flex flex-column align-items-center">
                    <img src={VECustomize} alt="VECustomize image" className="h-25rem" role="VECustomize-image" />
                </div></p>
                <p className="m-0">4. Once done, Click the download button on the top to get the customize theme.</p>
                <p><div className="w-12 flex flex-column align-items-center">
                    <img src={ThemeDownload } alt="ThemeDownload image" className="h-25rem" role="ThemeDownload-image" />
                </div></p>
                <p className="m-0">5. Once download, open the downloaded theme.css in Visual Studio Code</p>
                <p><div className="w-12 flex flex-column align-items-center">
                    <img src={ThemeCompare } alt="ThemeCompare image" className="h-25rem" role="ThemeCompare-image" />
                    <p className="m-0 font-bold font-italic text-pink-400">Note: Before change/replace the theme.css, compare the theme.css with the previous version of the .css </p>
                </div></p>
                <p className="m-0">6. Implementation of Customize Theme on Website</p>
                <p><div className="w-12 flex flex-column align-items-center">
                    <img src={NoCustomTheme1 } alt="NoCustomTheme image" className="h-18rem" role="NoCustomTheme-image" />
                    <p className="underline m-0">Before Apply Customize Theme</p>
                    <img src={YesCustomTheme } alt="YesCustomTheme image" className="h-18rem" role="YesCustomTheme-image" />
                    <p className="underline m-0">After Apply Customize Theme</p>
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
