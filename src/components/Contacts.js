import React, {
    Component
} from 'react'
import Contact from './Contact'
class Contacts extends Component {
    state = { // values of key of contacts
        contacts: [{
                id: 1,
                name: 'John Doe',
                email: 'jdon@gmail.com',
                phone: '555-555-5555'
            },
            {
                id: 2,
                name: 'Henry Doe',
                email: 'hdon@gmail.com',
                phone: '333-333-3333'
            },
            {
                id: 3,
                name: 'Jesse Doe',
                email: 'jessdon@gmail.com',
                phone: '222-222-2222'
            }

        ]
    };




    render() {
        const {
            contacts
        } = this.state;
        return ( <
            div > {
                contacts.map(contact => ( <
                    Contact key = {
                        contact.id
                    }
                    name = {
                        contact.name
                    }
                    email = {
                        contact.email
                    }
                    phone = {
                        contact.phone
                    }
                    />
                ))
            } <
            /div>

        )
    }


}

export default Contacts;