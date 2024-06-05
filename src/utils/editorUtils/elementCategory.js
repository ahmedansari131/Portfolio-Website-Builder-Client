class Elements {
    constructor({ value = "", isColor = false, isAlignment = false, isCharacterFormat = false, isLink = false, isHover = false, isText = false, data = null }) {
        this.value = value;
        this.isColor = isColor;
        this.isAlignment = isAlignment;
        this.isCharacterFormat = isCharacterFormat;
        this.isLink = isLink;
        this.isHover = isHover;
        this.isText = isText;
    }
}

const heading = new Elements({
    value: "heading",
    isColor: true,
    isCharacterFormat: true,
    isText: true,
});

const paragraph = new Elements({
    value: "paragraph",
    isColor: true,
    isCharacterFormat: true,
    isText: true,
    isAlignment: true,
});

const link = new Elements({
    value: "link",
    isColor: true,
    isCharacterFormat: true,
    isText: true,
});

const button = new Elements({
    value: "button",
    isColor: true,
    isCharacterFormat: true,
    isText: true,
    isHover: true,
});

const container = new Elements({
    value: "container",
    isColor: true,
    isAlignment: true,

});

const elementCategory = {
    HEADING: "heading",
    PARAGRAPH: "paragraph",
    LINK: "link",
    BUTTON: "button",
    CONTAINER: "container"
}

export { elementCategory, Elements, button, heading, link, paragraph, container }