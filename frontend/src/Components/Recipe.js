export default function Recipe () {
    return (
        <div className="recipe">
            <h1>Recipe Search</h1>
            <form>
                <input id="search" type="text" class="input" placeholder="search recipe..."/>
                <button id="clear" class="clear-results">clear</button>
            </form>
        </div>
    );
};