import React from "react";

const Search = (props) => {
  const [text, setText] = React.useState("");
  const onChange = (data)=>{
setText(data);
props.getQuery(data);
  }
  return (
    <section className="search">
      <form>
        <input
          type="text"
          className="form-control"
          value={text}
          placeholder="search characters"
          
          onChange={(e)=>onChange(e.target.value)}
          autoFocus
        ></input>
      </form>
    </section>
  );
};

export default Search;
