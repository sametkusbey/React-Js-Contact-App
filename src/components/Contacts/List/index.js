import React from 'react'

function List({ contacts }) {
    console.log(contacts)
    return (
        <div>
            <div>

                <div>
                    {
                        contacts.map((contact) => { //contacts geriye array döndüğü için mapledim ve değerleri ekrana bastım
                            return <div>
                                <label>Name:</label> {contact.fullname} 
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <label>Phone: </label>
                                <span>{contact.phone_number}</span>
                            </div>
                        })

                    }</div>
            </div>
        </div>
    )
}

export default List;
