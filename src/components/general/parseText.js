import "../../styles/Paper.css";
let funcs = [getLink, getList];
let triggers = [["<", ">"], ["{", "}"]];


export default function parseArticle(article) {
  let out = [];
  let l = 0;
  let r = 0;
  while (r < article.length) {
    let c = article.charAt(r);
    for (let i = 0; i < triggers.length; i++) {
      if (c === triggers[i][0]) {
        out.push(article.substring(l, r));
        out.push(funcs[i](article, r + 1));

        while (c !== triggers[i][1]) {
          r++;
          c = article.charAt(r);
        }
        l = r + 1;
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
 * @param {int} idx 
 * @returns <a href = "https://link.com"> {shortName} </a>
 */
function getLink(article, idx){
    let l = idx;
    let r = idx;
    let link = null;
    for (r = idx; r < article.length; r++){
        let c = article.charAt(r);
        if (c === '|'){
            link = article.substring(l, r);
            l = r + 1;
        }
        else if (c === '>'){
          let t = article.substring(l, r);
          return (
              <a target="_blank" href={(link === null) ? t: link} className="article-link">
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
 * @param {int} idx 
 * @returns <ul> <li/> ... <li/> <ul>
 */
function getList(article, idx) {
  let l = idx;
  let r = idx;
  let items = [];
  for (r = idx; r < article.length; r++) {
    let c = article.charAt(r);
    if (c === "<") {
        items.push(
          <li key={r}>
            {getLink(article, r + 1)}
          </li>
        );
        while (c != ","){
          r++;
          c = article.charAt(r);
        }
        r++;
        l = r;
    } 
    else if (c === ","){
      items.push(<li key={r}> {article.substring(l, r)} </li>);
      l = r + 1;
    }
    else if (c === "}") {
      items.push(<li key={r}> {article.substring(l, r)} </li>);
      return <ul className="article-list"> {items} </ul>;
    }
  }
  console.error("Could not find closing bracket }");
  return null;
}
