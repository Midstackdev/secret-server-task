import axios from 'axios';
import React, { useEffect, useState } from 'react'
import CreateSecretModal from '../components/CreateSecretModal';
import MessageBox from '../components/MessageBox';
import Navbar from '../components/Navbar';
import Secret from '../components/Secret';

export default function Home() {
    const [modal, setModal] = useState(false);
    const [loading, setLoading] = useState(false)
    const [secrets, setSecrets] = useState([])
    const [message, setMessage] = useState('')

    const getData = () => {

        return setModal(true);
    }
    const hadnleCreateSecret = () => {

        return setModal(true);
    }

    const hadnleShareSecret = async(id) => {
        try {
            const { data } = await axios.post(`/secret/share/${id}`)
            setMessage(`This secret is available to view for 15mins here ${document.location.origin}/share/${data.hashes}/`);
        } catch (error) {
            console.log(error)
        }
    }

    const handleDelete = async(id) => {
        try {
            const { data } = await axios.delete(`/secret/${id}`)
            setSecrets((prev) => {
                return prev.filter((item) => item.id !== id)
            })
            alert(data.message);
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        const getSecrets = async () => {
            setLoading(true)
            try {
                const { data } = await axios.get(`/secret`)
                setSecrets(data)
                setLoading(false)
            } catch (error) {
                console.log(error)
            }
        }
        getSecrets()
    }, [])

  return (
    <div className="container">
        <Navbar createSecret={() => hadnleCreateSecret()}/>
        <h4 className="text-center mt-2">My Secrets</h4>
        { message && <MessageBox variant="success">{message}</MessageBox>}
        { loading && 'loading...'}
        { !loading && !secrets.length && <MessageBox variant="warning">{"Crate some secrets"}</MessageBox>}
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 mt-4">
        {
            secrets.length > 0 && secrets?.map((secret, x) => (
                <Secret 
                    key={secret._id} getData={() => getData()} 
                    value={x++} 
                    secret={secret} 
                    remove={() => handleDelete(secret._id)}
                    share={() => hadnleShareSecret(secret._id)}
                />
            ))
        }
    </div>
    {
        modal && <CreateSecretModal hide={() => setModal(false)} setSecrets={setSecrets}/>
    }
    </div>
  )
}
