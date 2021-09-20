import { useEffect, useState } from 'react';
import List from './List'
import Form from './Form'

function Contacts() {
    const [contacts, setContacts] = useState([]);
    useEffect(() => {

    }, [contacts])

    return (
        <div>

            <Form addContact={setContacts} contacts={contacts} />  {/* form componentine ikş tane pros geçtik biri addcontact, diğeri contactta avr olan değerler */}
            <br />
            <List contacts={contacts} />
        </div>
    )
}

export default Contacts;
