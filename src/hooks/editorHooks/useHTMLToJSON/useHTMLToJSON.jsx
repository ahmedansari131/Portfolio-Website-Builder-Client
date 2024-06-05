const useHTMLToJSON = () => {
  const getHtmlElements = (html) => {
    const a = htmlToJson(html);
    console.log(a);
  };

  const htmlToJson = (elements) => {
    const domTree = {
      tagName: elements?.tagName,
      children: [],
      attributes: [],
    };

    
    if (elements) {
      for (const { name, value } of elements.attributes) {
        domTree.attributes.push({ [name]: value });
      }
      let childNode = elements.childNodes;

      for (let i = 0; i < childNode.length; i++) {
        if (childNode[i].nodeType === Node.ELEMENT_NODE) {
          domTree.children.push(htmlToJson(childNode[i]));
        } else if (childNode[i].nodeType === Node.TEXT_NODE) {
          domTree.text = childNode[i].textContent;
        }
      }
      return domTree;
    }
  };

  return { getHtmlElements };
};

export default useHTMLToJSON;
