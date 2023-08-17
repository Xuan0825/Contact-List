import { useState } from "react"
import { useEffect } from "react"

export default function SelectedContact({setSelectedContactId,selectedContactId}){
  const [contact, setContact]=useState({})
    //console.log("selectedContactComponents",selectedContactId)
    useEffect(() => {
        async function fetchContact() {
          try {
            const response = await fetch(
              `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`
            );
            const result = await response.json();
            console.log("what",result);
            setContact(result);
            
          
          } catch (error) {
            console.error(error);
          }
        }
        fetchContact();
      }, []);
    return (
      <table>
            <thead>
                <tr>
                    <th>Name : {contact.name}</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Email : {contact.email}</td>
                </tr>
                <tr>
                    <td>Phone : {contact.phone}</td>
                </tr>
                <tr>
                    <td>Website :{contact.website}</td>
                </tr>
                <tr>
                  <td> ID :{contact.id}</td>
                </tr>
            </tbody>
        </table>
    )
}