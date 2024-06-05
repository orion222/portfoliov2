
export default function parseArticle(article){

    let out = [];
    let l = 0;
    let r = 0;
    while (r < article.length){
        let c = article.charAt(r);
        if (c === '{'){
            out.push(<div>{article.substring(l, r)}</div>);
            out.push(getList(article, r + 1));
            
            while (c !== '}') {
                r++;
                c = article.charAt(r);
            }
            l = r + 1;

        }
        r++;
    }
    out.push(<div> {article.substring(l, r)} </div>);
    return out;
}

function getList(article, idx){

    let l = idx;
    let r = idx;
    let items = []
    for (r = idx; r < article.length; r++){
        let c = article.charAt(r);
        if (c === ','){
            items.push(<li key = {r}> {article.substring(l, r)} </li>);
            l = r + 1;
        }
        else if (c === '}'){
            items.push(<li key = {r}> {article.substring(l, r)} </li>);
            return <ul style={{listStyleType: "circle"
            }}> {items} </ul>
        }
    }
    console.error("Could not find closing bracket");
    return null;
}