import { CommonProps } from "../../types";

interface SearchProps extends CommonProps {}

const componentName = "Search";

const Search = (props: SearchProps) => {
  useEffect(() => {
    console.log(`${props.message} ${componentName}`);
  }, []);
};

export default Search;
