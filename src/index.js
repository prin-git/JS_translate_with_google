import "./styles.css";
import translate from "translate";

translate.engine = "google";

const text = async () => {
  let x = await translate("Hello world", "fr");
  console.log(x);
};

text();

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;
/* https://www.npmjs.com/package/translate */

/* https://github.com/franciscop/translate#readme */
