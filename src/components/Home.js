import {useLocation} from 'react-router-dom'
function Home(){
    const location = useLocation();

    return(   
        <div>
            <br /><br />
            <h1>Hello {location.state.id} and Welcome to the home page</h1>
        </div>
    )
}

export default Home;