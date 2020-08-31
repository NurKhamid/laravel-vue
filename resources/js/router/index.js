import Home from '../views/Home';
import About from '../views/About';
import Contact from '../views/Contact';
import Create from '../views/notes/Create';

export default{
    mode : 'history',

    linkActiveClass : 'active',

    routes : [
        {
            path : '/',
            name : 'home',
            component : Home
        },
        {
            path : '/about',
            name : 'about',
            component : About
        },
        {
            path : '/contact',
            name : 'contact',
            component : Contact
        },
        {
            path : '/notes/create',
            name : 'notes.create',
            component : Create
        },
    ]
}