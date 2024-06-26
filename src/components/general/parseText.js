import "../../styles/Paper.css";
let funcs = [getLink, getList, getRawText, getBoldText];
let triggers = [["<", ">"], ["{", "}"], ["[", "]"], ["*", "*"]];
let l;
let r;
export default function parseText(article) {
  l = 0;
  r = 0;
  let out = [];
  while (r < article.length) {
    let c = article.charAt(r);
    for (let i = 0; i < triggers.length; i++) {
      if (c === triggers[i][0]) {
        out.push(article.substring(l, r));
        r++;
        l = r;
        out.push(funcs[i](article));
      }
      
    }
    
    r++;
  }
  out.push(article.substring(l, r));
  return out;
}

/**
 * Takes a string that consists of 
 * 
 * <https://link.com>
 * 
 * OR 
 * 
 * <https://link.com|shortName>
 * 
 * If shortName is not specified, then the url-text 
 * will just be the url itself. Otherwise the url-text will
 * be shortName
 *  
 * @param {string} article 
 * @returns <a href = "https://link.com"> {shortName} </a>
 */
function getLink(article){
    let link = null;
    for (r; r < article.length; r++){
        let c = article.charAt(r); 
        if (c === '|'){
            link = article.substring(l, r);
            l = r + 1;
        }
        else if (c === '>'){
          let t = article.substring(l, r);
          l = r + 1;
          return (
              <a key = {r} target="_BLANK" rel = "noreferrer" href={(link === null) ? t: link} className="article-link">
                {t}
              </a>
          );
        }
    }

    console.error("Could not find closing bracket >");
    return null;
}

/**
 * Takes a string that consists of {a, b, c, d}
 * 
 * Where each element will be formatted into an unordered list
 * Elements can be text or links specified in the above method
 * 
 * @param {string} article 
 * @returns <ul> <li/> ... <li/> <ul>
 */
function getList(article) {
  let items = [];
  let link = null;
  for (r; r < article.length; r++) {
    let c = article.charAt(r);
    if (c === "<") {
        r++;
        l = r;
        link = getLink(article, r);
    } 
    else if (c === "," || c === '}'){
      if (link == null) items.push(<li key={r}> {article.substring(l, r)} </li>);
      else {
        items.push(
          <li key={r}>
            {link}
          </li>
        );
        link = null;
      }
      l = r + 1;

      if (c === '}') return <ul key = {r} className="article-list"> {items} </ul>;
    }
  }
  console.error("Could not find closing bracket }");
  return null;
}

/**
 * Takes a string that has trigger characters.
 * 
 * Outputs the string as it is, without going through any of the functions
 * that are usually triggered by the trigger characters.
 * 
 * @param {string} article
 * @return <span> text <span>
 */
function getRawText(article){
  for (r; r < article.length; r++){
    if (article.charAt(r) == ']'){
      let ret = article.substring(l, r);
      l = r + 1;
      return <span>{ret}</span>
    }
  }

  console.error("Could not find closing bracket ]");
  return null;
}

/**
 * Takes a string surrounded by *
 * 
 * Bolds the plain text which is surrounded by *
 * 
 * @param {string} article
 * @return <strong> text <strong>
 */
function getBoldText(article){
  for (r; r < article.length; r++){
    if (article.charAt(r) == '*'){
      let ret = article.substring(l, r);
      l = r + 1;
      return <strong> <span>{ret}</span> </strong>
    }
  }
  console.error("Could not find closing character *");
  return null;
}