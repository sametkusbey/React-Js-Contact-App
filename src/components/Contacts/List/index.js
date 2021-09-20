import { useState } from 'react'

function List({ contacts }) {


    //filter method
    const [filterText, setfilterText] = useState("")
    const filtered = contacts.filter((item) => {  // filtreleme işlemini yaptım.
        return Object.keys(item).some((key) => {
            return item[key]
                .toString()
                .toLowerCase().includes(filterText.toLowerCase())
        })
    })
    console.log(contacts)
    return (
        <div>
            <div>
                <input placeholder="Filter Contact" value={filterText} onChange={(e) => setfilterText(e.target.value)} />
                <div>
                    {
                        filtered.map((contact, index) => { //filterelenen veriyi map ile döndüm ve ekranda kullanıcıya gösterdim.
                            return <ul>
                                <li>
                                    <label>Name:</label>
                                    <span key={index}> {contact.fullname} </span>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <label>Phone: </label>
                                    <span key={index}>{contact.phone_number}</span>
                                </li>
                            </ul>
                        })

                    }</div>
            </div>
        </div>
    )
}

export default List;
