import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./HomePage.style.css";
import Select from "react-select";
import stateList from "../../data/states";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale } from "react-datepicker";
import fr from "date-fns/locale/fr";
import { defineEmployeesAction } from "../../store/employees/employees.actions";
import { Modal } from "behar_modal-component";
registerLocale("fr", fr);

export const HomePage = ({ defineEmployee }) => {
  const [states, setStates] = useState([]);
  const [birthDate, setBirthDate] = useState(
    new Date(Date.now()).setFullYear(new Date(Date.now()).getFullYear() - 18)
  );
  const [startDate, setStartDate] = useState(
    new Date(Date.now()).setFullYear(new Date(Date.now()).getFullYear() - 18)
  );

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [department, setDepartment] = useState("");

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setStates(stateList);
  }, []);

  /**
   * If the form is filled out, then create a new employee, reset the form, and show the modal.
   * Si le formulaire est rempli, créez un nouvel employé, réinitialisez le formulaire et affichez la modale.
   * @returns The newEmployee object is being returned.
   */
  //  // Empêche le comportement par défaut du formulaire lorsque l'événement "submit" est déclenché
  const handleSubmit = async (event) => {
    event.preventDefault();

    // const employeeData = {
    //     firstName: firstName,
    //     lastName: lastName,
    //     birthDate: birthDate,
    //     startDate: startDate,
    //     street: street,
    //     city: city,
    //     state: state,
    //     zipCode: zipCode,
    //     department: department
    // }

    // console.log(employeeData);
    // // Vérifie que tous les champs du formulaire ont été remplis
    if (
      firstName &&
      lastName &&
      street &&
      city &&
      state &&
      zipCode &&
      department &&
      startDate &&
      birthDate
    ) {
      // // Appelle une fonction asynchrone qui crée un nouvel employé avec les données du formulaire
      let newEmployee = await defineEmployee({
        firstName: firstName,
        lastName: lastName,
        dateOfBirth: birthDate.toLocaleDateString(),
        startDate: startDate.toLocaleDateString(),
        street: street,
        city: city,
        state: state,
        zipCode: zipCode,
        department: department,
      });
      // // Si la fonction renvoie un employé nouvellement créé
      if (newEmployee) {
        // // Affiche un modal de succès
        setShowModal(true);
        // // Réinitialise les champs du formulaire
        await resetForm();
        return (newEmployee = undefined);
        // // Mets la valeur "undefined" dans la variable "newEmployee" avant de la retourner
      }
    }
  };

  /* C'est une fonction qui s'exécute lorsqu'elle est appelée. Elle a pour but de réinitialiser un formulaire en mettant toutes les valeurs des champs de saisie à leur valeur par défaut. 
    Ces fonctions sont appelées dans l'ordre dans lequel elles sont énumérées et mettent à jour les variables associées en conséquence. La fonction "resetForm" elle-même ne renvoie aucune valeur.
    */
  const resetForm = () => {
    return (
      setBirthDate(
        new Date(Date.now()).setFullYear(
          new Date(Date.now()).getFullYear() - 18
        )
      ),
      setStartDate(
        new Date(Date.now()).setFullYear(
          new Date(Date.now()).getFullYear() - 18
        )
      ),
      setFirstName(""),
      setLastName(""),
      setStreet(""),
      setCity(""),
      setState(""),
      setZipCode(""),
      setDepartment("")
    );
  };

  return (
    <>
      <Modal
        onClose={() => setShowModal(!showModal)}
        visible={showModal}
        title={"Succès"}
        content={"Le nouvel employé a été ajouté à la liste."}
      />
      <header className="title">
        <h1>HRnet</h1>
      </header>
      <div className="container">
        <h2>Create Employee</h2>
        <Link className="link" to={"/employees"}>
          View Current Employees
        </Link>
        <form onSubmit={(event) => handleSubmit(event)} id={"create-employee"}>
          <label htmlFor="first-name">First Name</label>
          <input
            value={firstName}
            onChange={(event) => setFirstName(event.currentTarget.value)}
            type="text"
            id="first-name"
          />

          <label htmlFor="last-name">Last Name</label>
          <input
            value={lastName}
            onChange={(event) => setLastName(event.currentTarget.value)}
            type="text"
            id="last-name"
          />

          <label htmlFor="date-of-birth">Date of Birth</label>
          <DatePicker
            selected={birthDate}
            onChange={(date) => setBirthDate(date)}
            className={"select"}
            locale={"fr"}
            dateFormat={"dd/MM/yyyy"}
          />

          <label htmlFor="start-date">Start Date</label>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            className={"select"}
            locale={"fr"}
            dateFormat={"dd/MM/yyyy"}
          />

          <fieldset className="address">
            <legend>Address</legend>

            <label htmlFor="street">Street</label>
            <input
              value={street}
              onChange={(event) => setStreet(event.currentTarget.value)}
              id="street"
              type="text"
            />

            <label htmlFor="city">City</label>
            <input
              value={city}
              onChange={(event) => setCity(event.currentTarget.value)}
              id="city"
              type="text"
            />

            <label htmlFor="state">State</label>
            <Select
              className="select"
              defaultValue={states[0]}
              isDisabled={false}
              isLoading={!Boolean(states[0])}
              isClearable={false}
              isRtl={false}
              isSearchable={true}
              name="state"
              options={states}
              onChange={(option) => setState(option.label)}
            />

            <label htmlFor="zip-code">Zip Code</label>
            <input
              value={zipCode}
              onChange={(event) => setZipCode(event.currentTarget.value)}
              id="zip-code"
              type="number"
            />
          </fieldset>

          <label htmlFor="department">Department</label>

          <Select
            className="select"
            isDisabled={false}
            isLoading={false}
            isClearable={false}
            isRtl={false}
            isSearchable={true}
            name="state"
            options={[
              { label: "Sales", value: "sales" },
              { label: "Marketing", value: "marketing" },
              { label: "Engineering", value: "engineering" },
              { label: "Human Resources", value: "humanResources" },
              { label: "Legal", value: "legal" },
            ]}
            onChange={(option) => setDepartment(option.label)}
          />
          <button type="submit">Save</button>
        </form>
      </div>
    </>
  );
};

/**
 * This function takes in a dispatch function and returns an object with a function that takes in an
 * employee and dispatches the defineEmployeesAction function with the employee as an argument.
 */

/** Cette fonction prend en paramètre une fonction de dispatch et renvoie un objet avec une fonction qui prend en paramètre un employé et dispatch la fonction defineEmployeesAction avec l'employé en tant qu'argument. */

/** En fiate, cette fonction crée un objet qui a une fonction appelée defineEmployee qui prend en paramètre un employé et utilise la fonction de dispatch pour envoyer l'action defineEmployeesAction au store Redux avec l'employé en tant qu'argument. Cela permet au composant de dispatcher une action qui modifie l'état du store Redux en ajoutant un employé. */
const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => {
  return {
    defineEmployee: (employee) => dispatch(defineEmployeesAction(employee)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
