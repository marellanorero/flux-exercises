import { useContext } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa'
import { Context } from '../store/appContext';
import { ThemeContext } from '../store/DarkModeContext';


const Home = () => {

    const { theme, setTheme } = useContext(ThemeContext); // ThemeContext.Consumer
    const { store, actions } = useContext(Context) //Context.Consumer

    return (
        <section id="home" className={theme}>
            <nav className={"navbar navbar-expand-lg " + ( theme === 'light' ? "navbar-dark bg-dark" : "navbar-light bg-light")}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Link</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    { store.name } { store.lastname }
                                </a>
                                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><hr className="dropdown-divider"/></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>                           
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="text-center">
                            Usando Context
                        </div>
                        <div className="col-md-12 text-center">
                            <button className={"btn btn-" + (theme === 'light' ? 'dark' : 'light')} onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
                                {theme === 'light' ? <FaMoon /> : <FaSun />}

                            </button>
                        </div>
                        <div className='col-md-12 py-3'>
                            <ul className='list-group'>
                                {
                                    !!store.task &&
                                    store.task.map((task, index) => {
                                        return(
                                            <li key={index} className='list-group-item'>
                                                {task}
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                            <button className='btn btn-primary' onClick={actions?.saludo}>
                                Saludo
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home;