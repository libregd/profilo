
import PartTitle from "../components/PartTitle/PartTitle";
import MarkdownPreview from "./MarkdownPreview/MarkdownPreview";
import RadomQuote from "./RadomQuote/RadomQuote";

const Practices = () => {
    return (
      <>
        <main className="container">
          <div className="part">
            <PartTitle title="Radom Quote" />
            <RadomQuote />
          </div>
          <div className="part">
          <PartTitle title="Markdown Preview" />
          <MarkdownPreview />
          </div>
        </main>
      </>
    );
  };
  
  export default Practices;