import contactModel from '../models/contacts.js';

export function DisplayContactsList(req, res, next) {
    contactModel.find(function(err, contactsCollection) {
        if(err) { // error checking
            console.error(err);
            res.end(err);
        }

        res.render('index', {title: 'Contact List', page: '/contacts/list', contacts: contactsCollection});
    })
}

export function DisplayContactsAddPage(req, res, next) {
    res.render('index', {title: 'Add Contact', page: 'contacts/edit', contact: {}});
}