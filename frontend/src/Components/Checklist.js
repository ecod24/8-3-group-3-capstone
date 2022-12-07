import "./Checklist.css"

export default function Checklist (){
    function showHide() {
        var x = document.getElementById("filterbox");
        if (x.style.display === "none") {
          x.style.display = "block";
        } else {
          x.style.display = "none";
        }
      }

    return (
        <div id="filterdiv">
            <button onClick={showHide} className="filterbtn">Filter</button>
            <div id="filterbox" display="none">
            <label for="c1"> <input type="checkbox" name="filter" value="Male" id="c1" />Male</label>
            <label for="c2"> <input type="checkbox" name="filter" value="Female" id="c2" />Female</label>
            <label for="c3"><input type="checkbox" name="filter" value="Halal" id="c3" />Halal</label>
            <label for="c4"><input type="checkbox" name="filter" value="Kocher" id="c4" />Kosher</label>
            <label for="c4"><input type="checkbox" name="filter" value="Kocher" id="c4" />Vegan</label>
            </div>
        </div>
    )
}