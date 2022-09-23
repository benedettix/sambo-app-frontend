import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setLoader } from "../../Redux/features/loaderSlice/loaderSlice";
import blogServices from "../../services/blogServices";
import "./ShowContacts.scss";
function ShowContacts() {
  const dispatch = useDispatch();
  const [contacts, setContacts] = useState("");
  const [msg, setMsg] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      // setLoading(true);
      dispatch(setLoader(true));
      try {
        const { data: response } = await blogServices.getContacts();

        setContacts(response);
      } catch (error) {
        console.error(error.message);
      }
      // setLoading(false);
      dispatch(setLoader(false));
    };
    fetchData();
  }, [msg]);

  function deleteHandle(id) {
    const fetchData = async () => {
      // setLoading(true);
      dispatch(setLoader(true));
      try {
        const { data: response } = await blogServices.deleteContact(id);

        setMsg("Kontakt izbrisan");
      } catch (error) {
        console.error(error.message);
      }
      // setLoading(false);
      dispatch(setLoader(false));
    };
    fetchData();
  }
  return (
    <div className="container">
      <h3 className="mt-3">Ljudi koji su poslali kontakte</h3>
      {contacts.length > 0 ? (
        <table className="table contact-table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Ime</th>
              <th scope="col">Email</th>
              <th scope="col">Opis</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact, index) => (
              <tr key={index}>
                <td>{contact.id}</td>
                <td>{contact.name}</td>
                <td>{contact.email}</td>

                <td>{contact.description}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteHandle(contact.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <h3 className="mb-5 mt-5">Nema kontakata</h3>
      )}
      {msg && <p style={{ color: "red", fontSize: "20px" }}>{msg}</p>}
    </div>
  );
}

export default ShowContacts;
