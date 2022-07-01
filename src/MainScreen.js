import List from "./List";
import useFetch from "./useFetch";

const MainScreen = () =>{
    const {error, isPending, data: items} = useFetch('http://localhost:8000/items')

    return(
        <div className='main-screen'>
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {items && <List items={items}/>}
        </div>
    );
}
export default MainScreen;