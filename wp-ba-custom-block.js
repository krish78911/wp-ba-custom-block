const { registerBlockType } = wp.blocks;
const { RichText, InnerBlocks } = wp.blockEditor;

// styling for infobox on homepage
var blockStyling = "box-shadow: 1px 1px 4px #9d9d9d; padding: 10px; border: 2px solid white; margin-bottom: 10px; margin-top: 10px;";
// 1. background colors for infobox on homepage
var greenColorBackground = "#f4f9f4";
var redColorBackground = "#f5e0e0";
var blueColorBackground = "#f4f8fb";
var pinkColorBackground = "#fcf5f9";
var yellowColorBackground = "#fff8e2";
// 2. heading colors for infobox on homepage
var greenColor = "#3b953c";
var redColor = "#ff000a";
var blueColor = "#337ab7";
var pinkColor = "#c7438e";
var yellowColor = "#ffc107";

registerBlockType('wp-ba/custom-block',{
    title: 'Infobox',
    icon: 'tag',
    category: 'common',
    attributes: {
        title: {
          type: 'string',
          source: 'html',
          selector: 'label'
        },
        infoboxstyle: { 
          type: 'string',
          default: "background-color: "+greenColorBackground+"; "+blockStyling,
        },
        svgicon: {
          type: "string",
          default: window.location.origin+'/magazin/wp-content/plugins/wp-ba-custom-block/img/plasticfree.svg',
        },
        headingcolor: {
          type: "string",
          default: '#3b953c',
        },
        icontype: {
          type: "string",
          default: 'plasticfree.svg',
        },
        backgroundcolor: {
          type: "string",
          default: greenColorBackground,
        },
    },
    edit({attributes, setAttributes}) {
        // add here allowed block types
        const ALLOWED_BLOCKS = [ 'core/paragraph', 'core/list', 'core/html' ];

        // change icon and styling based on selected icon from dropdown
        function changeIcon(event){
          var dataBackgroundColor = jQuery(event.target).find(':selected').attr('data-backgroundcolor');
          var dataSvgIcon = jQuery(event.target).find(':selected').attr('data-svgicon');
          var dataHeadingColor = jQuery(event.target).find(':selected').attr('data-headingcolor');
          setAttributes({
            infoboxstyle: "background-color: "+dataBackgroundColor+"; "+blockStyling, 
            icontype: event.target.value,
            backgroundcolor: dataBackgroundColor,
            svgicon: window.location.origin+dataSvgIcon, 
            headingcolor: dataHeadingColor
          });
        }

        // change title
        function onChangeTitle(newTitle) {
          setAttributes( { title: newTitle } );
        }

        // show below return html in backend
        return React.createElement(React.Fragment, null, 
          /*#__PURE__*/React.createElement("section", null, 
          /*#__PURE__*/React.createElement("div", {
          class: "cta-container",
          style: {
            'backgroundColor': attributes.backgroundcolor
          }
        }, /*#__PURE__*/React.createElement("div", {
          class: "selectIcon-admin"
        }, /*#__PURE__*/React.createElement("h4", {
          for: "iconType"
        }, "Choose Icon:"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
          src: attributes.svgicon,
          width: "26",
          height: "26",
          class: "showIconInAdmin"
        })), /*#__PURE__*/React.createElement("select", {
          name: "iconType",
          value: attributes.icontype,
          onChange: changeIcon,
          id: "iconType",
          required: true
        }, /*#__PURE__*/React.createElement("option", {
          value: "plasticfree.svg",
          "data-backgroundcolor": greenColorBackground,
          "data-svgicon": "/magazin/wp-content/plugins/wp-ba-custom-block/img/plasticfree.svg",
          "data-headingcolor": greenColor
        }, "Plastic Frei"), /*#__PURE__*/React.createElement("option", {
          value: "info.svg",
          "data-backgroundcolor": blueColorBackground,
          "data-svgicon": "/magazin/wp-content/plugins/wp-ba-custom-block/img/info.svg",
          "data-headingcolor": blueColor
        }, "Info"), /*#__PURE__*/React.createElement("option", {
          value: "scale.svg",
          "data-backgroundcolor": pinkColorBackground,
          "data-svgicon": "/magazin/wp-content/plugins/wp-ba-custom-block/img/scale.svg",
          "data-headingcolor": pinkColor
        }, "Scales"), /*#__PURE__*/React.createElement("option", {
          value: "chicklethead.svg",
          "data-backgroundcolor": pinkColorBackground,
          "data-svgicon": "/magazin/wp-content/plugins/wp-ba-custom-block/img/chicklethead.svg",
          "data-headingcolor": pinkColor
        }, "Chicklet Head"), /*#__PURE__*/React.createElement("option", {
          value: "exclamationmark.svg",
          "data-backgroundcolor": redColorBackground,
          "data-svgicon": "/magazin/wp-content/plugins/wp-ba-custom-block/img/exclamationmark.svg",
          "data-headingcolor": redColor
        }, "Exclamationmark"), /*#__PURE__*/React.createElement("option", {
          value: "cross.svg",
          "data-backgroundcolor": redColorBackground,
          "data-svgicon": "/magazin/wp-content/plugins/wp-ba-custom-block/img/cross.svg",
          "data-headingcolor": redColor
        }, "Cross"), /*#__PURE__*/React.createElement("option", {
          value: "check.svg",
          "data-backgroundcolor": greenColorBackground,
          "data-svgicon": "/magazin/wp-content/plugins/wp-ba-custom-block/img/check.svg",
          "data-headingcolor": greenColor
        }, "Check"), /*#__PURE__*/React.createElement("option", {
          value: "lightbulb.svg",
          "data-backgroundcolor": yellowColorBackground,
          "data-svgicon": "/magazin/wp-content/plugins/wp-ba-custom-block/img/lightbulb.svg",
          "data-headingcolor": yellowColor
        }, "Lightbulb"), /*#__PURE__*/React.createElement("option", {
          value: "minus.svg",
          "data-backgroundcolor": redColorBackground,
          "data-svgicon": "/magazin/wp-content/plugins/wp-ba-custom-block/img/minus.svg",
          "data-headingcolor": redColor
        }, "Minus"), /*#__PURE__*/React.createElement("option", {
          value: "plus.svg",
          "data-backgroundcolor": greenColorBackground,
          "data-svgicon": "/magazin/wp-content/plugins/wp-ba-custom-block/img/plus.svg",
          "data-headingcolor": greenColor
        }, "Plus"))), /*#__PURE__*/React.createElement("div", {
          class: "selectTitle-admin"
        }, /*#__PURE__*/React.createElement("h4", {
          for: "blockstyle"
        }, "Title:"), /*#__PURE__*/React.createElement(RichText, {
          key: "editable",
          tagName: "label",
          placeholder: "Title",
          value: attributes.title,
          onChange: onChangeTitle
        })), /*#__PURE__*/React.createElement("div", {
          class: "selectContent-admin"
        }, /*#__PURE__*/React.createElement("h4", {
          for: "blockstyle"
        }, "Content:"), /*#__PURE__*/React.createElement(InnerBlocks, {
          allowedBlocks: ALLOWED_BLOCKS
        })))));
    },
    save({ attributes }){ // show below return html in front end
        return React.createElement(React.Fragment, null, 
          /*#__PURE__*/React.createElement("section", null, 
          /*#__PURE__*/React.createElement("div", {
          class: "cta-container",
          style: attributes.infoboxstyle
        }, /*#__PURE__*/React.createElement("img", {
          src: attributes.svgicon,
          width: "23",
          height: "23"
        }), /*#__PURE__*/React.createElement(RichText.Content, {
          tagName: "label",
          value: attributes.title,
          style: "color: " + attributes.headingcolor + "; margin: 10px; font-size: 24px; display: initial;",
          class: "labelHomePage"
        }), /*#__PURE__*/React.createElement(InnerBlocks.Content, null))));
    }
})



/*
BELOW HTML IS CONVERTED TO REACT AND PASTED ABOVE IN EDIT AND SAVE FUNCTIONS

EDIT:
<>
<section>
<div class="cta-container" style={{'backgroundColor': attributes.backgroundcolor}}>
  <div class="selectIcon-admin">
    <h4 for="iconType">Choose Icon:</h4>
    <div>
      <img src={ attributes.svgicon } width="26" height="26" class="showIconInAdmin" />
    </div>
    <select name="iconType" value={attributes.icontype} onChange={ changeIcon } id="iconType" required
      >
      <option value="plasticfree.svg" 
        data-backgroundcolor={ greenColorBackground }
        data-svgicon='/magazin/wp-content/plugins/wp-ba-custom-block/img/plasticfree.svg'
        data-headingcolor={ greenColor }>Plastic Frei</option>
      <option value="info.svg" 
        data-backgroundcolor={ blueColorBackground }
        data-svgicon='/magazin/wp-content/plugins/wp-ba-custom-block/img/info.svg'
        data-headingcolor={ blueColor }>Info</option>
      <option value="scale.svg" 
        data-backgroundcolor={ pinkColorBackground }
        data-svgicon='/magazin/wp-content/plugins/wp-ba-custom-block/img/scale.svg'
        data-headingcolor={ pinkColor }>Scales</option>
      <option value="chicklethead.svg" 
        data-backgroundcolor={ pinkColorBackground }
        data-svgicon='/magazin/wp-content/plugins/wp-ba-custom-block/img/chicklethead.svg'
        data-headingcolor={ pinkColor }>Chicklet Head</option>
      <option value="exclamationmark.svg" 
        data-backgroundcolor={ redColorBackground }
        data-svgicon='/magazin/wp-content/plugins/wp-ba-custom-block/img/exclamationmark.svg'
        data-headingcolor={ redColor }>Exclamationmark</option>
      <option value="cross.svg" 
        data-backgroundcolor={ redColorBackground }
        data-svgicon='/magazin/wp-content/plugins/wp-ba-custom-block/img/cross.svg'
        data-headingcolor={ redColor }>Cross</option>
      <option value="check.svg" 
        data-backgroundcolor={ greenColorBackground }
        data-svgicon='/magazin/wp-content/plugins/wp-ba-custom-block/img/check.svg'
        data-headingcolor={ greenColor }>Check</option>
      <option value="lightbulb.svg" 
        data-backgroundcolor={ yellowColorBackground }
        data-svgicon='/magazin/wp-content/plugins/wp-ba-custom-block/img/lightbulb.svg'
        data-headingcolor={ yellowColor }>Lightbulb</option>
      <option value="minus.svg" 
        data-backgroundcolor={ redColorBackground }
        data-svgicon='/magazin/wp-content/plugins/wp-ba-custom-block/img/minus.svg'
        data-headingcolor={ redColor }>Minus</option>
      <option value="plus.svg" 
        data-backgroundcolor={ greenColorBackground }
        data-svgicon='/magazin/wp-content/plugins/wp-ba-custom-block/img/plus.svg'
        data-headingcolor={ greenColor }>Plus</option>
    </select>
  </div>
  <div class="selectTitle-admin">
    <h4 for="blockstyle">Title:</h4>
    <RichText key="editable" 
              tagName="label" 
              placeholder="Title"
              value={ attributes.title }
              onChange={ onChangeTitle } />
  </div>
  <div class="selectContent-admin">
    <h4 for="blockstyle">Content:</h4>
    <InnerBlocks
      allowedBlocks={ ALLOWED_BLOCKS }
    />
  </div>
</div>
</section>
</>

SAVE:
<>
<section>
<div class="cta-container" style={attributes.infoboxstyle}>
    <img src={ attributes.svgicon } width="23" height="23" />
    <RichText.Content tagName="label" 
                      value={ attributes.title }
                      style={ "color: "+ attributes.headingcolor + "; margin: 10px; font-size: 24px; display: initial;" }
                      class="labelHomePage"/>
    <InnerBlocks.Content />
</div>
</section>
</>
*/