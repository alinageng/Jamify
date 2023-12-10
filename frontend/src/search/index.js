import {submitNewPost} from "../home/client";
import {useNavigate} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import DisplaySearchResults from "./displaySearchResults";
import {clearDescription, clearResults, clearSearchTerm, clearTaggedItem, setDescription} from "./taggedItemReducer";

function Search() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { taggedItem, description } = useSelector((state) => state.taggedItem);
  const { currentUser } = useSelector((state) => state.user);

  const runSubmitNewPost = async () => {
    console.log("currentUser");
    console.log(currentUser);
    try {
      const response = await submitNewPost({description: description, author: currentUser._id, tagged: taggedItem});
      if (response === 200) {
        dispatch(clearDescription())
        dispatch(clearResults())
        dispatch(clearTaggedItem())
        dispatch(clearSearchTerm())
        navigate("/home");
      }
    } catch (error) {
      console.error("Error Posting", error); //TODO display this error like we do in signin
    }
  };

  const handleDescriptionChange = (event) => {
    const { value } = event.target;
    dispatch(setDescription(value));
  };

  return (
    <div className="container">
      <h1>New Post</h1>
      <div className="form-group">
        <label htmlFor="Description">Write Description</label>
        <textarea className="form-control" id="Description" rows="3" value={description} onChange={handleDescriptionChange}></textarea>
      </div>
      <DisplaySearchResults/>
      <button className="btn btn-primary float-end" type="submit" onClick={runSubmitNewPost}>Post</button>
    </div>
    )
}

export default Search;