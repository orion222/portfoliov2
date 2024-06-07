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
  out.push(<div> {article.substring(l, r)} </div>);
  return out;
}

function getLink(article, idx){
    let l = idx;
    let r = idx;
    for (r = idx; r < article.length; r++){
        let c = article.charAt(r);
        if (c === '>'){
            let link = article.substring(l, r);
            return (
              <span>
                <a target="_blank" href={link} className="article-link">
                {link}
                </a>
              </span>
            );
        }
    }

    console.error("Could not find closing bracket >");
    return null;
}

function getList(article, idx) {
  let l = idx;
  let r = idx;
  let items = [];
  for (r = idx; r < article.length; r++) {
    let c = article.charAt(r);
    if (c === ">" || c === ",") {
      if (c === ">") {
        let link = article.substring(l + 1, r);
        items.push(
          <li key={r}>
            <a target="_blank" href={link} className="article-link">
              {link}
            </a>
          </li>
        );
        r++;
      } else {
        items.push(<li key={r}> {article.substring(l, r)} </li>);
      }
      l = r + 1;
    } else if (c === "}") {
      items.push(<li key={r}> {article.substring(l, r)} </li>);
      return <ul className="article-list"> {items} </ul>;
    }
  }
  console.error("Could not find closing bracket }");
  return null;
}
