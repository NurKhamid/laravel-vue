import Home from '../views/Home';
import About from '../views/About';
import Contact from '../views/Contact';
import Create from '../views/notes/Create';
import TableNote from '../views/notes/Table';
import Show from '../views/notes/Show';
import Edit from '../views/notes/Edit';

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
        {
            path : '/notes/table',
            name : 'notes.table',
            component : TableNote
        },
        {
            path : '/notes/:noteSlug',
            name : 'notes.show',
            component : Show
        },
        {
            path : '/notes/:noteSlug/edit',
            name : 'notes.edit',
            component : Edit
        },
    ]
}