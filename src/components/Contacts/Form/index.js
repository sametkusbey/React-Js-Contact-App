import { useState } from 'react'

function Form({ addContact, contacts }) {
    const [form, setForm] = useState({
        fullname: "",
        phone_number: ""
    })

    const onChangeInput = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value }) // inputların name attributlarına göre atama yaptık.(e.target.name kullanarak)
    };

    const onSubmit = (e) => {
        e.preventDefault(); // form onsubmitte page reload ettiği için o eventi durduruyoruz.
        if (form.fullname === '' || form.phone_number === '') {  //validation işlemi yaptık.
            return false;
        }
        addContact([...contacts, form])  //eski değerleri koruyarak formdan gelen verileri addcontact fonk. atadık.
        console.log(form)

        setForm({  // submitten sonra inputları temizledik
            fullname: "",
            phone_number: "",
        })
    }

    return (
        <form onSubmit={onSubmit}> {/* formun onsubmit özelliğine yazdığımız fonksiyonu verdik. onsubmit özelliğinde sayfa yenileniyor*/}
            <div>
                <input name="fullname" placeholder="Full Name" value={form.fullname} onChange={onChangeInput}></input>
            </div>
            <div>
                <input name="phone_number" placeholder="Phone Number" value={form.phone_number} onChange={onChangeInput}></input>
            </div>

            <div>
                <button>Add</button>
            </div>
        </form>
    )
}

export default Form
